
//	TSL-Textures: Photosphere



import { Color } from "three";
import { exp, Fn, Loop, mix, positionGeometry, rotate, vec3 } from 'three/tsl';
import { noise } from './tsl-utils.js';



var defaults = {
	$name: 'Photosphere',

	position: positionGeometry,
	scale: 2,

	color: new Color( 0xFFFF00 ),
	background: new Color( 0xFF0000 ),

	seed: 0,
};



var photosphereRaw = Fn( ([ position, scale, color, background, seed ]) => {

	var xscale = exp( scale.add( 1 ) ).toVar( );
	var pos = position.toVar( );

	var vec = vec3( pos ).toVar();

	Loop( 6, () => {

		vec.assign( rotate( vec, pos.mul( xscale ) ) );
		xscale.mulAssign( seed.mul( xscale ).sin().mul( 0.05 ).add( 1.1 ) );

	} );


	var k = noise( vec ).add( 1 ).div( 2 );

	return mix( background, color, k );

} ).setLayout( {
	name: 'photosphereRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'color', type: 'vec3' },
		{ name: 'background', type: 'vec3' },
		{ name: 'seed', type: 'float' },
	] }
);



function photosphere( params={} ) {

	var { position, scale, color, background, seed } = { ...defaults, ...params };

	return photosphereRaw( position, scale, color, background, seed );

}



photosphere.defaults = defaults;



export { photosphere };
