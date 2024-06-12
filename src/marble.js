
//	TSL-Textures: Marble



import { Color } from "three";
import { tslFn, vec3, sin, mul, exp, positionLocal } from 'three/nodes';
import { noise, hsl } from 'tsl-textures/tsl-utils.js';


var fordite = tslFn( ( params ) => {

	var pos = positionLocal.mul( exp( params.scale ) ).add( params.seed ).toVar( );

	var k = add(
			noise( pos),
			noise( pos.mul(2) ).mul(0.5), 
			noise( pos.mul(6) ).mul(0.1)
		);

	k = oneMinus(pow(abs(k),2.5)).toVar();

	var	maxSmooth = oneMinus(pow(0.5,params.thickness)).toVar(),
		minSmooth = oneMinus(pow(0.5,params.thickness.mul(0.8))).mul( noise(pos.mul(2)).mul(0.05).add(0.95) ).toVar();

	k = smoothstep( minSmooth, maxSmooth, k ).pow(20);

	k = k.add( mul(params.noise, hash(k) ));

	return mix( params.background, params.color, k );

} );



var defaults = {
	$name: 'Marble',

	scale: 2,
	thickness: 0.5,
	noise: 0.3,

	color: new Color( 0x4545D3),
	background: new Color( 0xF0F8FF),
};



export { marble };
