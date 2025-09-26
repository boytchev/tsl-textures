﻿
//	TSL-Textures: Processed wood



import { Color } from "three";
import { add, cos, exp, mix, positionGeometry, radians, sin, sub, vec3 } from 'three/tsl';
import { noise, prepare, TSLFn } from './tsl-utils.js';



var defaults = {
	$name: 'Processed wood',
	$width: 260,

	scale: 2,
	lengths: 4,
	strength: 0.3,
	angle: 0,

	color: new Color( 0x702020 ),
	background: new Color( 0xF0D0A0 ),

	seed: 0,
};



var processedWood = TSLFn( ( params )=>{

	params = prepare( params, defaults );

	var angle = radians( params.angle ).toVar();
	var posLocal = vec3(
		sub( positionGeometry.x.mul( cos( angle ) ), positionGeometry.y.mul( sin( angle ) ) ),
		add( positionGeometry.x.mul( sin( angle ) ), positionGeometry.y.mul( cos( angle ) ) ),
		positionGeometry.z,
	).toVar();

	var scale = params.scale.div( 2 ).add( 1 ).toVar();
	var pos = posLocal.mul( exp( scale ) ).add( params.seed ).toVar( );

	var len = params.lengths.add( 5 ).reciprocal().toVar();
	var k = noise( pos.mul( scale, vec3( 1, len, len ) ) );
	k = k.mul( noise( pos.mul( vec3( 25, 1, 1 ) ) ).add( -1 ).mul( 0.2 ) );
	k = k.add( params.strength.sub( 0.5 ) ).smoothstep( -0.3, 0.3 ).oneMinus();

	return mix( params.color, params.background, k );

}, defaults );



export { processedWood };
