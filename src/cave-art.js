
//	TSL-Textures: Cave Art



import { Color } from "three";
import { abs, add, exp, float, If, mix, or, positionGeometry, pow2, sub } from 'three/tsl';
import { convertToNodes, noise, TSLFn } from './tsl-utils.js';



var defaults = {
	$name: 'Cave art',

	scale: 2,
	thinness: 2,
	noise: 0.3,

	color: new Color( 0xD34545 ),
	background: new Color( 0xFFF8F0 ),

	seed: 0,
};



var caveArt = TSLFn( ( params ) => {

	params = convertToNodes( params, defaults );

	var pos = positionGeometry.mul( exp( params.scale ) ).add( params.seed ).toVar( );

	var k1 = noise( pos, 4 ).sin().toVar();
	var k2 = noise( pos.mul( 1.5 ), 4 ).cos().toVar();

	var thinness = exp( sub( float( 3 ), params.thinness ) );
	var k = sub( thinness, pow2( abs( add( k1, k2 ) ) ).mul( 20 ) ).toVar();

	If( or( k1.greaterThan( k2 ), k.lessThan( 0 ) ), ()=>{

		k.assign( 0 );

	} );

	If( k.lessThanEqual( 0 ), ()=>{

		k.assign( params.noise.mul( pow2( noise( pos.mul( 30 ) ) ) ) );

	} );

	return mix( params.background, params.color, k );

}, defaults );



export { caveArt };
