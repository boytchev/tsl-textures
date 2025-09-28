
//	TSL-Textures: Brain



import { Color } from "three";
import { exp, mix, mx_fractal_noise_float, positionGeometry, time, vec3 } from 'three/tsl';
import { noise, prepare, TSLFn } from './tsl-utils.js';



var defaults = {
	$name: 'Brain',

	scale: 2,
	smooth: 0.5,

	wave: 0.5,
	speed: 2.5,

	color: new Color( 0xFFD0D0 ),
	background: new Color( 0x500000 ),

	seed: 0,
};



var brain = TSLFn( ( params )=>{

	params = prepare( params, defaults );

	var pos = positionGeometry.mul( exp( params.scale.div( 3 ) ) ).add( params.seed ).toVar( );

	var octaves = exp( params.smooth.oneMinus().mul( 2 ) );

	var n = mx_fractal_noise_float( pos.mul( 5 ), octaves ).add( 1 ).div( 2 ).clamp( 0, 1 ).pow( 2 );

	return mix( params.color, params.background, n );

}, defaults );



brain.normal = TSLFn( ( params )=>{

	params = prepare( params, defaults );

	var pos = positionGeometry.mul( exp( params.scale.div( 3 ) ) ).add( params.seed ).toVar( );

	var octaves = exp( params.smooth.oneMinus().mul( 2 ) );

	var eps = 0.01;
	var n = mx_fractal_noise_float( pos.mul( 5 ), octaves );
	var dx = mx_fractal_noise_float( pos.add( vec3( eps, 0, 0 ) ).mul( 5 ), octaves ).sub( n ).div( eps );
	var dy = mx_fractal_noise_float( pos.add( vec3( 0, eps, 0 ) ).mul( 5 ), octaves ).sub( n ).div( eps );

	var dTime = noise( pos.mul( params.wave.mul( 5 ) ) ).add( 1 ).div( 2 ).mul( 6.28 );
	return vec3( dx, dy, time.mul( params.speed ).add( dTime ).sin().add( n, 1 ) ).normalize();

}, defaults );



export { brain };
