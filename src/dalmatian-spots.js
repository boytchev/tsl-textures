﻿
//	TSL-Textures: Dalmatian coat



import { Color } from "three";
import { exp, float, Loop, mix, positionGeometry } from 'three/tsl';
import { noise, prepare, TSLFn } from './tsl-utils.js';



var defaults = {
	$name: 'Dalmatian spots',
	$width: 260,

	scale: 2,
	density: 0.6,

	color: new Color( 0xFFFFFF ),
	background: new Color( 0x000000 ),

	seed: 0,
};



var dalmatianSpots = TSLFn( ( params )=>{

	params = prepare( params, defaults );

	var pos = positionGeometry.mul( exp( params.scale ) ).add( params.seed ).sub( 1000 ).toVar( );

	var k = float( 1 ).toVar();

	var d = float( 1.5 ).sub( params.density ).mul( 2 ).toVar();
	var count = params.density.mul( 5 ).add( 5 ).toVar();

	Loop( count, ()=> {

		k.mulAssign( noise( pos ).abs().pow( d ).mul( 100 ).sub( 50 ).clamp( 0, 1 ).oneMinus() );
		pos.assign( pos.mul( 1.01 ) );
		k.mulAssign( noise( pos.yzx ).abs().pow( d ).mul( 100 ).sub( 50 ).clamp( 0, 1 ).oneMinus() );
		pos.assign( pos.mul( 1.01 ) );
		k.mulAssign( noise( pos.zxy ).abs().pow( d ).mul( 100 ).sub( 50 ).clamp( 0, 1 ).oneMinus() );
		pos.assign( pos.mul( 1.01 ) );

	} );

	return mix( params.background, params.color, k.clamp( 0, 1 ) );

}, defaults );



export { dalmatianSpots };
