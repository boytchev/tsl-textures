
//	TSL-Textures: Isolayers



import { Color } from 'three';
import { exp, float, mix, positionGeometry } from 'three/tsl';
import { convertToNodes, hsl, noise, toHsl, TSLFn } from './tsl-utils.js';



var defaults = {
	$name: 'Isolayers',

	scale: 2,
	layers: 10,
	edge: 0.5,
	darkness: 0,

	color: new Color( 0xFFFFF0 ),
	background: new Color( 0xFF4040 ),

	seed: 0,
};



var isolayers = TSLFn( ( params )=>{

	params = convertToNodes( params, defaults );

	var pos = positionGeometry.mul( exp( params.scale.sub( 1 ) ) ).add( params.seed ).toVar( );

	var depth = params.edge.remap( 0, 1, 40, 10 );

	var k = noise( pos ).mul( 1.2 ).add( 1 ).div( 2 );

	var i = k.mul( params.layers ).round().div( params.layers ).clamp( 0, 1 );
	var f = k.sub( float( 0.5+0.03 ).div( params.layers ) )
		.mul( params.layers ).fract()
		.mul( float( 2 ).pow( depth.reciprocal() ) )
		.pow( depth ).sub( 1 ).abs().oneMinus();

	var hslColor = mix( toHsl( params.background ), toHsl( params.color ), i ).toVar();
	hslColor.z.mulAssign( mix( 1, i.mul( 1.5 ), params.darkness ).clamp( 0, 1 ) );

	return hsl( hslColor.x, hslColor.y, hslColor.z ).sub( f );

}, defaults );



export { isolayers };
