
//	TSL-Textures: Perlin Noise



import { Color } from "three";
import { clamp, exp, Fn, mix, positionGeometry } from 'three/tsl';
import { noise } from './tsl-utils.js';



var defaults = {
	$name: 'Perlin noise',

	position: positionGeometry,
	scale: 2,
	balance: 0,
	contrast: 0,

	color: new Color( 0xFFFFFF ),
	background: new Color( 0x000000 ),

	seed: 0,
};



var perlinNoiseRaw = Fn( ([ position, scale, balance, contrast, color, background, seed ]) => {

	var pos = position.mul( exp( scale ) ).add( seed );

	var k = clamp( 0, 1, noise( pos ).mul( 0.5, exp( contrast ) ).add( 0.5, balance ) );

	return mix( background, color, k );

} ).setLayout( {
	name: 'perlinNoiseRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'balance', type: 'float' },
		{ name: 'contrast', type: 'float' },
		{ name: 'color', type: 'vec3' },
		{ name: 'background', type: 'vec3' },
		{ name: 'seed', type: 'float' },
	] }
);



function perlinNoise( params={} ) {

	var { position, scale, balance, contrast, color, background, seed } = { ...defaults, ...params };

	return perlinNoiseRaw( position, scale, balance, contrast, color, background, seed );

}



perlinNoise.defaults = defaults;



export { perlinNoise };
