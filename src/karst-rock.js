﻿
//	TSL-Textures: Karst rock



import { Color } from "three";
import { exp, mix, positionGeometry } from 'three/tsl';
import { noise, prepare, TSLFn } from './tsl-utils.js';



var defaults = {
	$name: 'Karst rock',

	scale: 2,

	color: new Color( 0xFFF4F0 ),
	background: new Color( 0xD0D0D0 ),

	seed: 0,
};



var karstRock = TSLFn( ( params )=>{

	params = prepare( params, defaults );

	var pos = positionGeometry.mul( exp( params.scale ) ).add( params.seed.sin().mul( 5 ) ).toVar( );

	var pos2 = pos.add( noise( pos.mul( 2 ) ) ).toVar();

	var k = noise( pos2 ).div( noise( pos2.mul( 1.01 ) ) ).clamp( 0, 2 ).toVar();

	k.addAssign( noise( pos.mul( 100 ) ).div( 3 ) );
	k.addAssign( noise( pos.mul( 2 ) ).div( 2 ) );

	return mix( params.background, params.color, k ).mul( k.pow( 0.1 ) );

}, defaults );



export { karstRock };
