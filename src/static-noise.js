
//	TSL-Textures: Noise Pattern



import { Color } from "three";
import { clamp, exp, mix, time, vec3,screenCoordinate } from 'three/tsl';
import { noise, vnoise, prepare, TSLFn } from './tsl-utils.js';



var defaults = {
	$name: 'Static noise',

	scale: 2,
	balance: 0,
	contrast: 0,
	
	delay: 0,

	seed: 0,
};



var staticNoise = TSLFn( ( params ) => {

	params = prepare( params, defaults );

	var pos = screenCoordinate.div( exp( params.scale ) ).add( params.seed );
	
	var speed = params.delay.sub(1).mul(5).exp(),	
		t = time.div(speed).round().mul(speed);
	
	var offset = vnoise( t.sin() ).mul(1000);

	var k = clamp( 0, 1, noise( pos.add(offset) ));
	
	k = k.mul( 0.5, exp( params.contrast ) ).add( 0.5, params.balance );

	return vec3(k);

}, defaults );



export { staticNoise };
