
//	TSL-Textures: Stars



import { Color } from "three";
import { abs, add, exp, Fn, mix, positionGeometry, select, vec3 } from 'three/tsl';
import { hsl, noise, toHsl } from './tsl-utils.js';



var defaults = {
	$name: 'Stars',

	position: positionGeometry,
	scale: 2,
	density: 2,
	variation: 0,

	color: new Color( 0xfff5f0 ),
	background: new Color( 0x000060 ),

	seed: 0,
};



var starsRaw = Fn( ([ position, scale, density, variation, color, background, seed ]) => {

	var pos = position.mul( exp( scale.div( 2 ).add( 3 ) ) ).add( seed ).toVar( );

	var k = abs( noise( pos ) ).pow( 10 ).mul( 10 );

	k = k.mul( exp( density.sub( 2 ) ) );

	var dS = select( k.greaterThan( 0.1 ), variation.mul( noise( pos ) ), 0 );

	var col = toHsl( mix( background, color, k ) );

	return hsl( vec3( add( col.x, dS ), col.yz ) );

} ).setLayout( {
	name: 'starsRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'density', type: 'float' },
		{ name: 'variation', type: 'float' },
		{ name: 'color', type: 'vec3' },
		{ name: 'background', type: 'vec3' },
		{ name: 'seed', type: 'float' },
	] }
);



function stars( params={} ) {

	var { position, scale, density, variation, color, background, seed } = { ...defaults, ...params };

	return starsRaw( position, scale, density, variation, color, background, seed );

}



stars.defaults = defaults;



export { stars };
