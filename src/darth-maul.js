
//	TSL-Textures: Darth Maul



import { Color, Vector3 } from "three";
import { exp, Fn, mix, positionGeometry, select, vec3 } from 'three/tsl';
import { noise } from './tsl-utils.js';



var defaults = {
	$name: 'Darth Maul',

	position: positionGeometry,
	scale: 2,
	shift: new Vector3( 0, 0, 0 ),
	complexity: 0,

	angle: 60,
	distance: 1.9,

	color: new Color( 0xF04040 ),
	background: new Color( 0x000000 ),
	balance: 0,

	seed: 0,
};



var darthMaulRaw = Fn( ([ position, scale, shift, complexity, angle, distance, color, background, balance, seed ]) => {

	var xposition = position.add( shift ).mul( exp( scale.div( 1.5 ).sub( 1 ) ) ).sub( shift ).mul( vec3( 1, 1/2, 1/2 ) ).toVar( );

	var s = select( position.y.mul( angle.radians().cos() ).add( position.z.mul( angle.radians().sin() ) ).greaterThan( distance ), 1, 0 );

	// implement symmetry
	xposition.x.assign( xposition.x.add( shift.x ).abs() );
	xposition.y.addAssign( seed );
	xposition.z.mulAssign( shift.z );

	var n = noise( xposition ).toVar();

	var k = n.sin().mul( n.mul( complexity.mul( 2 ).add( 1 ).exp() ).sin() ).remap( 0, 0.2, 1, -1 ).greaterThan( balance ).select( 0, 1 );

	var c = select( xposition.x.greaterThan( noise( xposition.mul( 2.3 ) ).abs().mul( 0.5 ).add( 0.02 )	), 1, 0 );

	return mix( background, color, k.mul( s ).mul( c ).clamp( 0, 1 ) );

} ).setLayout( {
	name: 'darthMaulRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'shift', type: 'vec3' },
		{ name: 'complexity', type: 'float' },
		{ name: 'angle', type: 'float' },
		{ name: 'distance', type: 'float' },
		{ name: 'color', type: 'vec3' },
		{ name: 'background', type: 'vec3' },
		{ name: 'balance', type: 'float' },
		{ name: 'seed', type: 'float' },
	] }
);



function darthMaul( params={} ) {

	var { position, scale, shift, complexity, angle, distance, color, background, balance, seed } = { ...defaults, ...params };

	return darthMaulRaw( position, scale, shift, complexity, angle, distance, color, background, balance, seed );

}



darthMaul.defaults = defaults;



export { darthMaul };
