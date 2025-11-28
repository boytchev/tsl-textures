
//	TSL-Textures: Voronoi Cells



import { Color } from 'three';
import { exp, mx_worley_noise_float, mx_worley_noise_vec3, positionGeometry, time, vec3 } from 'three/tsl';
import { convertToNodes, TSLFn } from './tsl-utils.js';



var defaults = {
	$name: 'Caustics',

	scale: 2,
	speed: 0,

	color: new Color( 0x50A8C0 ),

	seed: 0,
};



var caustics = TSLFn( ( params )=>{

	params = convertToNodes( params, defaults );

	var pos = positionGeometry.mul( exp( params.scale.sub( 1 ) ) ).add( params.seed ).toVar( );

	var t = time.mul( params.speed.sub( 1 ).exp() )
		.add( vec3( 0, 2*Math.PI/3, 4*Math.PI/3 ) )
		.sin();

	var p = mx_worley_noise_vec3(
		pos.add( vec3(
			mx_worley_noise_float( pos.add( t.xyz ) ),
			mx_worley_noise_float( pos.add( t.yzx ) ),
			mx_worley_noise_float( pos.add( t.zxy ) ),
		) ) );

	var k = p.length().div( Math.sqrt( 3 ) );

	return k.add( params.color.sub( 0.5 ).mul( 2 ) );

}, defaults );



export { caustics };
