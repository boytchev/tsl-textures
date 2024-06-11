
//	Procedural Equirectangular Textures
//	Fordite Pattern
//



import { Color } from 'three';
import { tslFn, vec3, sin, mul, exp, positionLocal } from 'three/nodes';
import { noise, hsl } from 'tsl-textures/tsl-utils.js';





var fordite = tslFn( ( params ) => {

	var pos = positionLocal.mul( exp( params.scale ) ).add( params.seed );

	var k = noise(
		vec3(
			noise( pos ),
			noise( pos ).mul( 2 ),
			noise( pos ).mul( 3 ),
		)
	);

	return hsl(
		k,
		1,
		sin( mul( k, Math.PI, 4 ) ).mul( 0.5 ).add( 0.5 )
	).add( params.color );

} );



fordite.defaults = {
	$name: 'fordite',
	scale: 2,
	color: new Color( 0, 0, 0 ),
	seed: 0,
};



export { fordite };
