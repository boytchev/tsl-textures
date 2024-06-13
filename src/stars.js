
//	TSL-Textures: Stars



import { Color } from "three";
import { abs, add, cond, exp, mix, positionLocal, tslFn } from 'three/nodes';
import { hsl, noise, toHsl } from 'tsl-textures/tsl-utils.js';



var stars = tslFn( ( params ) => {

	var pos = positionLocal.mul( exp( params.scale.div( 2 ).add( 3 ) ) ).add( params.seed ).toVar( );

	var k = abs( noise( pos ) ).pow( 10 ).mul( 10 );

	k = k.mul( exp( params.density.sub( 2 ) ) );

	var dS = cond( k.greaterThan( 0.1 ), params.variation.mul( noise( pos ) ), 0 );

	var col = toHsl( mix( params.background, params.color, k ) );

	return hsl( add( col.x, dS ), col.y, col.z );

} );



stars.defaults = {
	$name: 'Stars',

	scale: 2,
	density: 2,
	variation: 0,

	color: new Color( 0xfff5f0 ),
	background: new Color( 0x000060 ),

	seed: 0,
};


export { stars };
