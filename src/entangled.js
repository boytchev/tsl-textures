
//	TSL-Textures: Entangled



import { Color } from "three";
import { abs, exp, float, floor, loop, max, mix, mul, oneMinus, positionLocal, pow, sin, tslFn } from 'three';
import { noise } from 'tsl-textures/tsl-utils.js';



var entangled = tslFn( ( params ) => {

	var scale = exp( params.scale.div( 2 ) ).toVar( );
	var pos = positionLocal.add( params.seed ).toVar( );
	var k = float( -10000 ).toVar( );
	var k1 = float( 0 ).toVar( );

	loop( floor( float( params.density ) ), ()=> {

		k1.assign( sin( noise( mul( pos, scale ) ).mul( 3*Math.PI ) ) );
		k.assign( max( k, k1 ) );
		scale.mulAssign( 1.2 );

	} );

	k.assign( oneMinus( pow( abs( k ), 5 ) ).mul( 6 ) );

	return mix( params.color, params.background, k );

} );



entangled.defaults = {
	$name: 'Entangled',

	scale: 2,
	density: 10,

	color: new Color( 0x002040 ),
	background: new Color( 0xFFFFFF ),

	seed: 0,
};



export { entangled };
