
//	TSL-Textures: Wood



import { Color } from 'three';
import { add, cos, exp, float, Fn, Loop, mix, mul, positionGeometry, radians, reciprocal, sin, sub, vec3 } from 'three/tsl';
import { noise, prepare } from './tsl-utils.js';



var wood = Fn( ( params ) => {

	params = prepare( { ...wood.defaults, ...params } );

	var angle = radians( params.angle ).toVar();
	var posLocal = vec3(
		sub( positionGeometry.x.mul( cos( angle ) ), positionGeometry.y.mul( sin( angle ) ) ),
		add( positionGeometry.x.mul( sin( angle ) ), positionGeometry.y.mul( cos( angle ) ) ),
		positionGeometry.z,
	).toVar();


	// main pattern with rings
	var pos = posLocal.mul( exp( params.scale.sub( 3 ) ).mul( vec3( reciprocal( params.length ), 4, reciprocal( params.length ) ) ) ).add( params.seed ).toVar( );
	var k = noise( pos ).add( 1 ).mul( 10 ).mul( params.rings );
	k = k.add( k.cos() ).cos().add( 1 ).div( 2 );

	var kk = float( 0 ).toVar(),
		sum = float( 0 ).toVar(),
		scale = exp( params.scale.sub( 2 ) ).mul( vec3( 1, params.fibersDensity, 1 ) ).toVar(),
		power = float( 2 ).toVar();

	Loop( 10, ()=>{

		kk.addAssign( mul( power, noise( posLocal.mul( scale ).add( params.seed ) ) ) );
		sum.addAssign( power );
		scale.mulAssign( 1.8 );
		power.mulAssign( 0.6 );

	} );

	kk.assign( mul( kk, 5 ).div( sum ).mul( 10 ).sin().add( 1 ).div( 2 ) );

	return mix( params.color, params.background, mix( k, kk, params.fibers ) );

} );



wood.defaults = {
	$name: 'Wood',
	scale: 2.5,
	rings: 4.5,
	length: 1,
	angle: 0,
	fibers: 0.3,
	fibersDensity: 10,
	color: new Color( 0.8, 0.4, 0 ),
	background: new Color( 0.4, 0.1, 0 ),
	seed: 0,
};



export { wood };
