
//	TSL-Textures: Wood



import { Color } from 'three';
import { add, cos, exp, float, Fn, Loop, mix, mul, positionGeometry, radians, reciprocal, sin, sub, vec3 } from 'three/tsl';
import { noise } from './tsl-utils.js';



var defaults = {
	$name: 'Wood',

	position: positionGeometry,
	scale: 2.5,

	rings: 4.5,
	lengths: 1,
	angle: 0,

	fibers: 0.3,
	fibersDensity: 10,

	color: new Color( 0.8, 0.4, 0 ),
	background: new Color( 0.4, 0.1, 0 ),

	seed: 0,
};



var woodRaw = Fn( ([ position, scale, rings, lengths, angle, fibers, fibersDensity, color, background, seed ]) => {

	var angle = radians( angle ).toVar();
	var posLocal = vec3(
		sub( position.x.mul( cos( angle ) ), position.y.mul( sin( angle ) ) ),
		add( position.x.mul( sin( angle ) ), position.y.mul( cos( angle ) ) ),
		position.z,
	).toVar();


	// main pattern with rings
	var pos = posLocal.mul( exp( scale.sub( 3 ) ).mul( vec3( reciprocal( lengths ), 4, reciprocal( lengths ) ) ) ).add( seed ).toVar( );
	var k = noise( pos ).add( 1 ).mul( 10 ).mul( rings );
	k = k.add( k.cos() ).cos().add( 1 ).div( 2 );

	var kk = float( 0 ).toVar(),
		sum = float( 0 ).toVar(),
		scale = exp( scale.sub( 2 ) ).mul( vec3( 1, fibersDensity, 1 ) ).toVar(),
		power = float( 2 ).toVar();

	Loop( 10, ()=>{

		kk.addAssign( mul( power, noise( posLocal.mul( scale ).add( seed ) ) ) );
		sum.addAssign( power );
		scale.mulAssign( 1.8 );
		power.mulAssign( 0.6 );

	} );

	kk.assign( mul( kk, 5 ).div( sum ).mul( 10 ).sin().add( 1 ).div( 2 ) );

	return mix( color, background, mix( k, kk, fibers ) );

} ).setLayout( {
	name: 'woodRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'rings', type: 'float' },
		{ name: 'lengths', type: 'float' },
		{ name: 'angle', type: 'float' },
		{ name: 'fibers', type: 'float' },
		{ name: 'fibersDensity', type: 'float' },
		{ name: 'color', type: 'vec3' },
		{ name: 'background', type: 'vec3' },
		{ name: 'seed', type: 'float' },
	] }
);



function wood( params={} ) {

	var { position, scale, rings, lengths, angle, fibers, fibersDensity, color, background, seed } = { ...defaults, ...params };

	return woodRaw( position, scale, rings, lengths, angle, fibers, fibersDensity, color, background, seed );

}



wood.defaults = defaults;



export { wood };
