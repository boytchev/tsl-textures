
//	TSL-Textures: Isolines



import { Color } from "three";
import { add, exp, mix, oneMinus, positionGeometry, sin, smoothstep, sub } from 'three/tsl';
import { convertToNodes, noise, TSLFn } from './tsl-utils.js';



var defaults = {
	$name: 'Isolines',

	scale: 2,
	density: 40,
	blur: 0.3,
	thinness: 0.6,

	color: new Color( 0xFFFFFF ),
	background: new Color( 0x000000 ),

	seed: 0,
};



var isolines = TSLFn( ( params )=>{

	params = convertToNodes( params, defaults );

	var pos = positionGeometry.mul( exp( params.scale ) ).add( params.seed ).toVar( );

	var k = noise( pos ).mul( params.density );

	k = oneMinus( sin( k ) ).div( 2 );

	k = smoothstep( sub( params.thinness, params.blur ), add( params.thinness, params.blur ), k );

	return mix( params.color, params.background, k );

}, defaults );



export { isolines };
