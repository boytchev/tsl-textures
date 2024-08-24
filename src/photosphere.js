
//	TSL-Textures: Photosphere



import { Color } from "three";
import { exp, loop, mix, positionLocal, tslFn, vec3 } from 'three';
import { applyEuler, noise } from 'tsl-textures/tsl-utils.js';



var photosphere = tslFn( ( params ) => {

	var scale = exp( params.scale.add( 1 ) ).toVar( );
	var pos = positionLocal.toVar( );

	var vec = vec3( pos ).toVar();

	loop( 6, () => {

		vec.assign( applyEuler( vec, pos.mul( scale ) ) );
		scale.mulAssign( params.seed.mul( scale ).sin().mul( 0.05 ).add( 1.1 ) );

	} );


	var k = noise( vec ).add( 1 ).div( 2 );

	return mix( params.background, params.color, k );

} );



photosphere.defaults = {
	$name: 'Photosphere',

	scale: 2,

	color: new Color( 0xFFFF00 ),
	background: new Color( 0xFF0000 ),

	seed: 0,
};



export { photosphere };
