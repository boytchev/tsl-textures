
//	TSL-Textures: Clouds



import { Color } from "three";
import { add, clamp, exp, Fn, mix, mul, positionGeometry, vec4 } from 'three/tsl';
import { noised, prepare, TSLFn } from './tsl-utils.js';



var defaults = {
	$name: 'Clouds',

	scale: 2,
	density: 0.5,
	opacity: 1,

	color: new Color( 0xFFFFFF ),
	subcolor: new Color( 0xA0A0B0 ),

	seed: 0,
};



var _clouds = Fn( ( params ) => {

	const pos = positionGeometry;
	const scale = exp( params.scale.div( 1.5 ).sub( 0.5 ) );

	// color blending
	const k = add(
		noised( pos, scale, 1, params.seed ),
		noised( pos, scale, 2, params.seed ).mul( 0.80 ),
		noised( pos, scale, 6, params.seed ).mul( 0.10 ),
		noised( pos, scale, 8, params.seed ).mul( 0.07, params.opacity ),
		params.density.remap( 0, 1, -0.5, 1.5 )
	);

	// opacity
	const a = clamp( 0, 1, mul( k, 2 ).pow( 1.5 ).sub( 1 ).mul( params.opacity ) );

	// final color+opacity
	return vec4( mix( params.subcolor, params.color, k.clamp( 0, 1 ) ), a );

} );



var clouds = TSLFn( ( params ) => {

	// prepare parameters
	params = prepare( params, defaults );

	return _clouds( params ).rgb;

}, defaults );



clouds.opacity = TSLFn( ( params ) => {

	// prepare parameters
	params = prepare( params, defaults );

	return _clouds( params ).a;

}, defaults );



export { clouds };
