
//	TSL-Textures: Satin



import { Color } from "three";
import { abs, exp, mix, positionGeometry, pow, vec3 } from 'three/tsl';
import { convertToNodes, noise, TSLFn } from './tsl-utils.js';



var defaults = {
	$name: 'Satin',

	scale: 2,

	color: new Color( 0x7080FF ),
	background: new Color( 0x000050 ),

	seed: 0,
};



var satin = TSLFn( ( params ) => {

	params = convertToNodes( params, defaults );

	var pos = positionGeometry.toVar( );

	var scale = exp( params.scale.div( 3 ) ).toVar();

	var k = noise(
		vec3(
			noise( vec3( pos.x.mul( 2 ), pos.y, pos.z ).mul( scale ) ),
			noise( vec3( pos.x, pos.y.mul( 2 ), pos.z ).mul( scale ) ),
			noise( vec3( pos.x, pos.y, pos.z.mul( 2 ) ).mul( scale ) ),
		).mul( scale ).add( params.seed )
	);

	k = pow( abs( k ), 3 ).mul( 20 );

	return mix( params.background, params.color, k );

}, defaults );



satin.defaults = {
	$name: 'Satin',

	scale: 2,

	color: new Color( 0x7080FF ),
	background: new Color( 0x000050 ),

	seed: 0,
};



export { satin };
