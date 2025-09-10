﻿
//	TSL-Textures: Neon Lights



import { Color } from "three";
import { abs, exp, oneMinus, positionGeometry, select, sqrt, vec3 } from 'three/tsl';
import { hsl, noise, prepare, toHsl, TSLFn } from './tsl-utils.js';



var defaults = {
	$name: 'Neon Lights',

	scale: 1.5,
	thinness: 0.8,
	mode: 0, // 0=additive, 1=subtractive

	colorA: new Color( 0xFF0000 ),
	colorB: new Color( 0x00FF00 ),
	colorC: new Color( 0x0000FF ),
	background: new Color( 0x000000 ),

	seed: 0,
};



var neonLights = TSLFn( ( params ) => {

	params = prepare( params, defaults );

	var pos = positionGeometry;//.mul( exp( params.scale ) ).add( params.seed ).toVar( );

	var scale = exp( params.scale.remap( 0, 4, 2, -2 ) ).toVar();
	var thinness = exp( params.thinness.remap( 0, 1, 1.5, 0 ) ).toVar();

	var color = params.background.toVar();
	var neon = vec3( 0 ).toVar();

	var x = noise( pos.xyz ).toVar();
	var y = noise( pos.yzx ).toVar();
	var z = noise( pos.zxy ).toVar();

	var k = noise( vec3( x, y, z ).mul( scale ).add( params.seed ) ).toVar();
	k.assign( oneMinus( sqrt( abs( k ) ) ).pow( 3 ) );

	neon.assign( params.colorA );
	var HSL = toHsl( neon );
	neon.assign( hsl( HSL.x, HSL.y, HSL.z.mul( k ) ) );

	color.addAssign( select( params.mode.equal( 0 ), neon, neon.negate() ).mul( thinness ) );

	k.assign( noise( vec3( y, z, x ).mul( scale ).sub( params.seed ) ) );
	k.assign( oneMinus( sqrt( abs( k ) ) ).pow( 3 ) );

	neon.assign( params.colorB );
	var HSL = toHsl( neon );
	neon.assign( hsl( HSL.x, HSL.y, HSL.z.mul( k ) ) );

	color.addAssign( select( params.mode.equal( 0 ), neon, neon.negate() ).mul( thinness ) );


	k.assign( noise( vec3( z, x, y.negate() ).mul( scale ).add( params.seed ) ) );
	k.assign( oneMinus( sqrt( abs( k ) ) ).pow( 3 ) );

	neon.assign( params.colorC );
	var HSL = toHsl( neon );
	neon.assign( hsl( HSL.x, HSL.y, HSL.z.mul( k ) ) );

	color.addAssign( select( params.mode.equal( 0 ), neon, neon.negate() ).mul( thinness ) );

	return color;

}, defaults );



export { neonLights };
