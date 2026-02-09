
//	TSL-Textures: Crumpled fabric



import { Color } from 'three';
import { exp, Fn, Loop, positionGeometry, vec3 } from 'three/tsl';
import { noise } from './tsl-utils.js';



var defaults = {
	$name: 'Crumpled fabric',
	$width: 260,

	position: positionGeometry,
	scale: 2,
	pinch: 0.5,

	color: new Color( 0xB0F0FF ),
	subcolor: new Color( 0x4040F0 ),
	background: new Color( 0x003000 ),

	seed: 0,
};



var crumpledFabricRaw = Fn( ([ position, scale, pinch, color, subcolor, background, seed ])=>{

	var pos = position.mul( exp( scale.sub( 0.5 ) ) ).add( seed ).toVar( );

	Loop( 4, ()=>{

		var x = noise( pos.xyz );
		var y = noise( pos.yzx );
		var z = noise( pos.zxy );

		pos.addAssign( vec3( x, y, z ).mul( pinch ) );

	} );

	var k = noise( pos ).add( 1 ).div( 2 ).clamp( 0, 1 );

	var color1 = color.mul( k.mul( 2 ).sub( 1 ).abs().oneMinus() );
	var color2 = subcolor.mul( k ).pow( 2 );
	var color3 = background.mul( k.oneMinus().pow( 2 ) );

	return color1.add( color2 ).add( color3 );

} ).setLayout( {
	name: 'crumpledFabricRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'pinch', type: 'float' },
		{ name: 'color', type: 'vec3' },
		{ name: 'subcolor', type: 'vec3' },
		{ name: 'background', type: 'vec3' },
		{ name: 'seed', type: 'float' },
	] }
);



function crumpledFabric( params={} ) {

	var { position, scale, pinch, color, subcolor, background, seed } = { ...defaults, ...params };

	return crumpledFabricRaw( position, scale, pinch, color, subcolor, background, seed );

}



crumpledFabric.defaults = defaults;



export { crumpledFabric };
