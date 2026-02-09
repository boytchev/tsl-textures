
//	TSL-Textures: Noise Pattern



import { clamp, exp, Fn, screenCoordinate, time, vec3 } from 'three/tsl';
import { noise, vnoise } from './tsl-utils.js';



var defaults = {
	$name: 'Static noise',

	position: screenCoordinate,
	time: time,

	scale: 2,
	balance: 0,
	contrast: 0,

	delay: 0,

	seed: 0,
};



var staticNoiseRaw = Fn( ([ position, time, scale, balance, contrast, delay, seed ]) => {

	var pos = position.div( exp( scale ) ).add( seed );

	var speed = delay.sub( 1 ).mul( 5 ).exp(),
		t = time.div( speed ).round().mul( speed );

	var offset = vnoise( t.sin() ).mul( 1000 );

	var k = clamp( 0, 1, noise( pos.add( offset ) ) );

	k = k.mul( 0.5, exp( contrast ) ).add( 0.5, balance );

	return vec3( k );

} ).setLayout( {
	name: 'staticNoiseRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec2' },
		{ name: 'time', type: 'float' },
		{ name: 'scale', type: 'float' },
		{ name: 'balance', type: 'float' },
		{ name: 'contrast', type: 'float' },
		{ name: 'delay', type: 'float' },
		{ name: 'seed', type: 'float' },
	] }
);



function staticNoise( params={} ) {

	var { position, time, scale, balance, contrast, delay, seed } = { ...defaults, ...params };

	return staticNoiseRaw( position, time, scale, balance, contrast, delay, seed );

}



staticNoise.defaults = defaults;



export { staticNoise };
