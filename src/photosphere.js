
//	TSL-Textures: Photosphere



import { Color } from "three";
import { exp, Loop, mix, positionGeometry, vec3 } from 'three/tsl';
import { applyEuler, convertToNodes, noise, TSLFn } from './tsl-utils.js';



var defaults = {
	$name: 'Photosphere',

	scale: 2,

	color: new Color( 0xFFFF00 ),
	background: new Color( 0xFF0000 ),

	seed: 0,
};



var photosphere = TSLFn( ( params ) => {

	params = convertToNodes( params, defaults );

	var scale = exp( params.scale.add( 1 ) ).toVar( );
	var pos = positionGeometry.toVar( );

	var vec = vec3( pos ).toVar();

	Loop( 6, () => {

		vec.assign( applyEuler( vec, pos.mul( scale ) ) );
		scale.mulAssign( params.seed.mul( scale ).sin().mul( 0.05 ).add( 1.1 ) );

	} );


	var k = noise( vec ).add( 1 ).div( 2 );

	return mix( params.background, params.color, k );

}, defaults );



export { photosphere };
