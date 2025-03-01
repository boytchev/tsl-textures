
//	TSL-Textures: Clouds



import { Color } from "three";
import { clamp, exp, Fn, min, mix, mul, positionGeometry, vec4 } from 'three/tsl';
import { noise, prepare } from './tsl-utils.js';



var _clouds = Fn( ( params ) => {

	var pos = positionGeometry.toVar(),
		scale = exp( params.scale.div( 1.5 ).sub( 0.5 ) ).toVar(),
		density = params.density.remap( 0, 1, -0.15, 0.15 ).toVar();

	var k = noise( pos.mul( scale ).add( params.seed ) ).add( params.density ).toVar( );
	k.addAssign( mul( 0.80, noise( pos.mul( scale, 2 ).add( params.seed ) ) ).add( density ) );
	k.addAssign( mul( 0.10, noise( pos.mul( scale, 6 ).add( params.seed ) ) ).add( density ) );
	k.addAssign( mul( 0.07, noise( pos.mul( scale, 8 ).add( params.seed ) ), params.opacity ).add( density ) );

	var a = clamp( 0, 1, mul( k, 2 ).pow( 1.5 ).sub( 1 ).mul( params.opacity ) ).toVar();

	return vec4( mix( params.subcolor, params.color, min( 1, k ) ), a );

} );


var clouds = Fn( ( params ) => {

	params = prepare( { ...clouds.defaults, ...params } );

	return _clouds( params ).rgb;

} );



clouds.opacity = Fn( ( params ) => {

	params = prepare( { ...clouds.defaults, ...params } );

	return _clouds( params ).a;

} );



clouds.defaults = {
	$name: 'Clouds',

	scale: 2,
	density: 0.5,
	opacity: 1,

	color: new Color( 0xFFFFFF ),
	subcolor: new Color( 0xA0A0B0 ),

	seed: 0,
};



export { clouds };
