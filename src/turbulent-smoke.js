
//	TSL-Textures: Turbulent smoke



import { exp, mx_fractal_noise_float, mx_fractal_noise_vec3, mx_worley_noise_float, positionGeometry, time, vec3 } from 'three/tsl';
import { prepare, TSLFn } from './tsl-utils.js';



var defaults = {
	$name: 'Turbulent smoke',
	$width: 260,

	scale: 2,
	speed: 0,
	details: 5,

	seed: 0,
};



var turbulentSmoke = TSLFn( ( params )=>{

	params = prepare( params, defaults );

	var pos = positionGeometry.mul( exp( params.scale.sub( 1 ) ) ).add( params.seed ).toVar( );

	var t = time.mul( params.speed.sub( 1 ).exp() );

	var q = pos.add( vec3(
		mx_fractal_noise_float( pos.add( vec3( 1, t.sin(), -1 ) ) ),
		mx_fractal_noise_float( pos.add( vec3( t.add( 2*Math.PI/3 ).sin(), 1, -1 ) ) ),
		mx_fractal_noise_float( pos.add( vec3( 1, -1, t.add( 4*Math.PI/3 ).sin() ) ) ),
	) );

	var p = mx_fractal_noise_vec3( q, params.details );

	var k = mx_worley_noise_float( pos.add( p.div( 2 ) ) ).pow( 4 ).mul( 4 ).oneMinus();

	return k;

}, defaults );



export { turbulentSmoke };
