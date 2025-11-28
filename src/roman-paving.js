
//	TSL-Textures: Roman paving



import { exp, mx_worley_noise_vec2, positionGeometry } from 'three/tsl';
import { convertToNodes, TSLFn } from './tsl-utils.js';



var defaults = {
	$name: 'Roman paving',

	scale: 2,
	depth: 0.5,

	seed: 0,
};



var romanPaving = TSLFn( ( params )=>{

	params = convertToNodes( params, defaults );

	var pos = positionGeometry.mul( exp( params.scale ) ).add( params.seed ).toVar( );

	var k = mx_worley_noise_vec2( pos ).toVar();

	return k.y.sub( k.x ).pow( params.depth.mul( 3 ).sub( 3 ).exp() ).smoothstep( 0, 1 );

}, defaults );



export { romanPaving };
