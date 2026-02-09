
//	TSL-Textures: Isolayers



import { Color } from 'three';
import { exp, float, Fn, mix, positionGeometry } from 'three/tsl';
import { hsl, noise, toHsl } from './tsl-utils.js';



var defaults = {
	$name: 'Isolayers',

	position: positionGeometry,
	scale: 2,
	layers: 10,
	edge: 0.5,
	darkness: 0,

	color: new Color( 0xFFFFF0 ),
	background: new Color( 0xFF4040 ),

	seed: 0,
};



var isolayersRaw = Fn( ([ position, scale, layers, edge, darkness, color, background, seed ])=>{

	var pos = position.mul( exp( scale.sub( 1 ) ) ).add( seed ).toVar( );

	var depth = edge.remap( 0, 1, 40, 10 );

	var k = noise( pos, 1.2, 1 ).div( 2 );

	var i = k.mul( layers ).round().div( layers ).clamp( 0, 1 );
	var f = k.sub( float( 0.5+0.03 ).div( layers ) )
		.mul( layers ).fract()
		.mul( float( 2 ).pow( depth.reciprocal() ) )
		.pow( depth ).sub( 1 ).abs().oneMinus();

	var hslColor = mix( toHsl( background ), toHsl( color ), i ).toVar();
	hslColor.z.mulAssign( mix( 1, i.mul( 1.5 ), darkness ).clamp( 0, 1 ) );

	return hsl( hslColor ).sub( f );

} ).setLayout( {
	name: 'isolayersRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'layers', type: 'int' },
		{ name: 'edge', type: 'float' },
		{ name: 'darkness', type: 'float' },
		{ name: 'color', type: 'vec3' },
		{ name: 'background', type: 'vec3' },
		{ name: 'seed', type: 'float' },
	] }
);



function isolayers( params={} ) {

	var { position, scale, layers, edge, darkness, color, background, seed } = { ...defaults, ...params };

	return isolayersRaw( position, scale, layers, edge, darkness, color, background, seed );

}



isolayers.defaults = defaults;



export { isolayers };
