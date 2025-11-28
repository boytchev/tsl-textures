
//	TSL-Textures: Zebra Lines



import { Color } from "three";
import { acos, clamp, cos, exp, mix, positionGeometry, select, sin, vec2 } from 'three/tsl';
import { convertToNodes, spherical, TSLFn } from './tsl-utils.js';



var defaults = {
	$name: 'Zebra lines',

	scale: 2,
	thinness: 0.5,
	phi: 0,
	theta: 0,

	color: new Color( 0x0 ),
	background: new Color( 0xFFFFFF ),

	flat: 0,
	// no seed for zebra lines
};



var zebraLines = TSLFn( ( params ) => {

	params = convertToNodes( params, defaults );

	var pos = select( params.flat, positionGeometry, positionGeometry.normalize() ).toVar( );

	var dir = select( params.flat, vec2( cos( params.phi ), sin( params.phi ) ), spherical( params.phi, params.theta ) ).toVar();

	var angle = select( params.flat, clamp( dir.dot( pos ), -2, 2 ), acos( clamp( dir.dot( pos ), -1, 1 ) ) ).toVar();

	var scale = exp( params.scale.add( 1 ) ).toVar();

	var k = sin( angle.mul( scale ) ).sub( params.thinness.sub( 0.5 ).mul( 2 ) );

	k = clamp( k.mul( 1000 ).div( scale ), -1, 1 ).mul( 0.5 ).add( 0.5 );

	return mix( params.background, params.color, k );

}, defaults );



export { zebraLines };
