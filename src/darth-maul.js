﻿
//	TSL-Textures: Darth Maul



import { Color, Vector3 } from "three";
import { atan, exp, Fn, mix, positionGeometry, select, vec3 } from 'three/tsl';
import { noise, prepare } from './tsl-utils.js';



var darthMaul = Fn( ( params ) => {

	params = prepare( { ...darthMaul.defaults, ...params } );

	//var dX = vec3( params.shift.x, 0, 0 );

	var position = positionGeometry.add( params.shift ).mul( exp( params.scale.div( 1.5 ).sub( 1 ) ) ).sub( params.shift ).mul( vec3( 1, 1/2, 1/2 ) ).toVar( );

	var s = select( positionGeometry.y.mul( params.angle.radians().cos() ).add( positionGeometry.z.mul( params.angle.radians().sin() ) ).greaterThan( params.distance ), 1, 0 );

	// implement symmetry
	position.x.assign( position.x.add( params.shift.x ).abs() );
	position.y.addAssign( params.seed );
	position.z.mulAssign( params.shift.z );

	var n = noise( position ).toVar();

	var k = n.sin().mul( n.mul( params.complexity.mul( 2 ).add( 1 ).exp() ).sin() ).remap( 0, 0.2, 1, -1 ).greaterThan( params.balance ).select( 0, 1 );

	var c = select( position.x.greaterThan( noise( position.mul( 2.3 ) ).abs().mul( 0.5 ).add( 0.02 )	), 1, 0 );

	var pos_actual = positionGeometry.normalize();
	var angle = atan( pos_actual.z, pos_actual.x ).add( Math.PI ).mul( 4/Math.PI ).round().div( 4/Math.PI );
	var pos_center = vec3( angle.cos(), 0.3, angle.sin() );

	var kk1 = pos_center.dot( pos_actual.add( vec3( 0, 0.3, 0 ) ) ).acos();
	var kk = select( kk1.greaterThan( 2.8 ), 1, 0 );

	return mix( mix( params.background, params.color, k.mul( s ).mul( c ).clamp( 0, 1 ) ), vec3( 1, 1, 0 ), kk );

} );



darthMaul.defaults = {
	$name: 'Darth Maul',

	scale: 2,
	shift: new Vector3( 0, 0, 0 ),
	complexity: 0,

	angle: 60,
	distance: 1.9,

	color: new Color( 0xD02020 ),
	background: new Color( 0x000000 ),
	balance: 0,

	seed: 0,
};



export { darthMaul };
