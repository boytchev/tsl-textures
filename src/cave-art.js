
//	TSL-Textures: Cave Art



import { Color } from "three";
import { float, Fn, If, mix, or, positionGeometry } from 'three/tsl';
import { noise } from './tsl-utils.js';



var defaults = {
	$name: 'Cave art',

	position: positionGeometry,
	scale: 2,

	thinness: 2,
	noise: 0.3,

	color: new Color( 0xD34545 ),
	background: new Color( 0xFFF8F0 ),

	seed: 0,
};



var caveArtRaw = Fn( ([ position, scale, thinness, xnoise, color, background, seed ]) => {

	var pos = position.mul( scale.exp( ) ).add( seed ).toVar( 'pos' );

	thinness = float( 3 ).sub( thinness ).exp( );

	var k1 = noise( pos, 4 ).sin().toVar( 'k1' ),
		k2 = noise( pos.mul( 1.5 ), 4 ).cos().toVar( 'k2' ),
		k = thinness.sub( k1.add( k2 ).abs( ).pow2( ).mul( 20 ) ).toVar( 'k' );

	If( or( k1.greaterThan( k2 ), k.lessThan( 0 ) ), ()=>{

		k.assign( 0 );

	} );

	If( k.lessThanEqual( 0 ), ()=>{

		k.assign( xnoise.mul( noise( pos.mul( 30 ) ).pow2( ) ) );

	} );

	return mix( background, color, k );

} ).setLayout( {
	name: 'caveArtRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'thinness', type: 'float' },
		{ name: 'xnoise', type: 'float' },
		{ name: 'color', type: 'vec3' },
		{ name: 'background', type: 'vec3' },
		{ name: 'seed', type: 'float' },
	] }
);



function caveArt( params={} ) {

	var { position, scale, thinness, noise, color, background, seed } = { ...defaults, ...params };

	return caveArtRaw( position, scale, thinness, noise, color, background, seed );

}



caveArt.defaults = defaults;



export { caveArt };
