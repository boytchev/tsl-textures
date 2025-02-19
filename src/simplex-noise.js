
//	TSL-Textures: Noise Pattern



import { Color } from "three";
import { clamp, exp, Fn, mix, positionGeometry } from 'three/tsl';
import { noise, prepare } from 'tsl-textures/tsl-utils.js';



var simplexNoise = Fn( ( params ) => {

	params = prepare( { ...simplexNoise.defaults, ...params } );

	var pos = positionGeometry.mul( exp( params.scale ) ).add( params.seed );

	var k = clamp( 0, 1, noise( pos ).mul( 0.5, exp( params.contrast ) ).add( 0.5, params.balance ) );

	return mix( params.background, params.color, k );

} );



simplexNoise.defaults = {
	$name: 'Simplex noise',

	scale: 2,
	balance: 0,
	contrast: 0,

	color: new Color( 0xFFFFFF ),
	background: new Color( 0x000000 ),

	seed: 0,
};



export { simplexNoise };
