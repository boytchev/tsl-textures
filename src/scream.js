
//	TSL-Textures: Scream 



import { Color } from "three";
import { sin,cos,add, div, exp, If, mix, mul, oneMinus, clamp,positionLocal, pow, tslFn } from 'three/nodes';
import { noise, hsl,toHsl } from 'tsl-textures/tsl-utils.js';



var scream = tslFn( ( params ) => {

	var pos = positionLocal.mul( exp( params.scale ) ).add( params.seed ).toVar( );

	var k = noise( add( sin(pos.xyz), cos(pos.yzx) ) );

	pos.assign( positionLocal.mul( exp( params.scale ).mul(k) ).add( params.seed ) );

	var k = noise( add( sin(pos.xyz), cos(pos.yzx) ).mul(2));

	var col = mix( params.background, params.color, k ).toVar();

	var HSL = toHsl( col ).toVar();
	
	return hsl( add(HSL.x, params.variety.mul(sin(k.mul(Math.PI))).mul(0.5)), HSL.y.mul(0.8), HSL.z.add(0.1) );

});



scream.defaults = {
	$name: 'Scream',

	scale: 2,
	variety: 1,

	color: new Color( 0xF0F060),
	background: new Color( 0xD09090),
	
	seed: 0,
};



export { scream };
