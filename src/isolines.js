
//	TSL-Textures: Isolines



import { Color } from "three";
import { add, exp, Fn, mix, oneMinus, positionGeometry, sin, smoothstep, sub } from 'three/tsl';
import { noise } from 'tsl-textures/tsl-utils.js';



var isolines = Fn( ( params )=>{

	var pos = positionGeometry.mul( exp( params.scale ) ).add( params.seed ).toVar( );

	var k = noise( pos ).mul( params.density );

	k = oneMinus( sin( k ) ).div( 2 );

	k = smoothstep( sub( params.thinness, params.blur ), add( params.thinness, params.blur ), k );

	return mix( params.color, params.background, k );

} );


isolines.defaults = {
	$name: 'Isolines',

	scale: 2,
	density: 40,
	blur: 0.3,
	thinness: 0.6,

	color: new Color( 0xFFFFFF ),
	background: new Color( 0x000000 ),

	seed: 0,
};



export { isolines };
