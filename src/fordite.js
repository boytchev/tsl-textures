
//	TSL-Textures: Fordite



import { Color } from 'three';
import { exp, mul, positionGeometry, sin, vec3 } from 'three/tsl';
import { hsl, noise, prepare, TSLFn } from './tsl-utils.js';



var defaults = {
	$name: 'Fordite',
	scale: 2,
	color: new Color( 0, 0, 0 ),
	seed: 0,
};



var fordite = TSLFn( ( params ) => {

	params = prepare( params, defaults );

	var pos = positionGeometry.mul( exp( params.scale ) ).add( params.seed ).toVar( );

	var k = noise(
		vec3(
			noise( pos ),
			noise( pos ).mul( 2 ),
			noise( pos ).mul( 3 ),
		)
	).toVar( );

	return hsl(
		k,
		1,
		sin( mul( k, Math.PI, 4 ) ).mul( 0.5 ).add( 0.5 )
	).add( params.color );

}, defaults );



export { fordite };
