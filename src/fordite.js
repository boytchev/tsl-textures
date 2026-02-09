
//	TSL-Textures: Fordite



import { Color } from 'three';
import { exp, Fn, mul, positionGeometry, sin, vec3 } from 'three/tsl';
import { hsl, noise } from './tsl-utils.js';



var defaults = {
	$name: 'Fordite',

	position: positionGeometry,
	scale: 2,
	color: new Color( 0, 0, 0 ),

	seed: 0,
};



var forditeRaw = Fn( ([ position, scale, color, seed ]) => {

	var pos = position.mul( exp( scale ) ).add( seed ).toVar( );

	var k = noise(
		vec3(
			noise( pos, 1 ),
			noise( pos, 2 ),
			noise( pos, 3 ),
		)
	).toVar( );

	return hsl( vec3(
		k,
		1,
		sin( mul( k, Math.PI, 4 ) ).mul( 0.5 ).add( 0.5 )
	) ).add( color );

} ).setLayout( {
	name: 'forditeRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'color', type: 'vec3' },
		{ name: 'seed', type: 'float' },
	] }
);



function fordite( params={} ) {

	var { position, scale, color, seed } = { ...defaults, ...params };

	return forditeRaw( position, scale, color, seed );

}



fordite.defaults = defaults;



export { fordite };
