
//	TSL-Textures: Zebra Lines



import { Color } from "three";
import { acos, clamp, exp, Fn, mix, positionGeometry, sin } from 'three/tsl';
import { prepare, spherical } from './tsl-utils.js';



var zebraLines = Fn( ( params ) => {

	params = prepare( { ...zebraLines.defaults, ...params } );

	var pos = positionGeometry.normalize().toVar( );

	var dir = spherical( params.phi, params.theta ).toVar();

	var angle = acos( clamp( dir.dot( pos ), -1, 1 ) );

	var scale = exp( params.scale.add( 1 ) ).toVar();

	var k = sin( angle.mul( scale ) ).sub( params.thinness.sub( 0.5 ).mul( 2 ) );

	k = clamp( k.mul( 1000 ).div( scale ), -1, 1 ).mul( 0.5 ).add( 0.5 );

	return mix( params.background, params.color, k );

} );



zebraLines.defaults = {
	$name: 'Zebra lines',

	scale: 2,
	thinness: 0.5,
	phi: 0,
	theta: 0,

	color: new Color( 0x0 ),
	background: new Color( 0xFFFFFF ),

	// no seed for zebra lines
};



export { zebraLines };
