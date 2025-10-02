
//	TSL-Textures: Crumpled fabric



import { Color } from 'three';
import { exp, Loop, positionGeometry, vec3 } from 'three/tsl';
import { noise, prepare, TSLFn } from './tsl-utils.js';



var defaults = {
	$name: 'Crumpled fabric',
	$width: 260,

	scale: 2,
	pinch: 0.5,

	color: new Color( 0xB0F0FF ),
	subcolor: new Color( 0x4040F0 ),
	background: new Color( 0x003000 ),

	seed: 0,
};



var crumpledFabric = TSLFn( ( params )=>{

	params = prepare( params, defaults );

	var pos = positionGeometry.mul( exp( params.scale.sub( 0.5 ) ) ).add( params.seed ).toVar( );

	Loop( 4, ()=>{

		var x = noise( pos.xyz ).mul( params.pinch );
		var y = noise( pos.yzx ).mul( params.pinch );
		var z = noise( pos.zxy ).mul( params.pinch );

		pos.addAssign( vec3( x, y, z ) );

	} );

	var k = noise( pos ).add( 1 ).div( 2 ).clamp( 0, 1 );

	var color1 = params.color.mul( k.mul( 2 ).sub( 1 ).abs().oneMinus() );
	var color2 = params.subcolor.mul( k ).pow( 2 );
	var color3 = params.background.mul( k.oneMinus().pow( 2 ) );

	return color1.add( color2 ).add( color3 );

}, defaults );



export { crumpledFabric };
