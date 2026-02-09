
//	TSL-Textures: Brain



import { Color } from "three";
import { Fn, mix, positionGeometry, time, vec3 } from 'three/tsl';
import { fractal, noise } from './tsl-utils.js';



var defaults = {
	$name: 'Brain',

	position: positionGeometry,
	scale: 2,

	smooth: 0.5,
	wave: 0.5,
	speed: 2.5,
	time: time,

	color: new Color( 0xFFD0D0 ),
	background: new Color( 0x500000 ),

	seed: 0,
};



var brainRaw = Fn( ([ position, scale, xsmooth, /*wave, speed, time,*/ color, background, seed ])=>{

	var pos = position.mul( scale.div( 3 ).exp( ) ).add( seed ).toVar( 'pos' );

	var octaves = xsmooth.oneMinus().mul( 2 ).exp( ).toVar( 'octaves' );

	var n = fractal( pos.mul( 5 ), octaves ).add( 1 ).div( 2 ).clamp( 0, 1 ).pow( 2 );

	return mix( color, background, n );

} ).setLayout( {
	name: 'brainRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'xsmooth', type: 'float' },
		/*{ name: 'wave', type: 'float' },*/
		/*{ name: 'speed', type: 'float' },*/
		/*{ name: 'time', type: 'float' },*/
		{ name: 'color', type: 'vec3' },
		{ name: 'background', type: 'vec3' },
		{ name: 'seed', type: 'float' },
	] }
);


var brainNormalRaw = Fn( ([ position, scale, xsmooth, wave, speed, time, /*color, background,*/ seed ])=>{

	var pos = position.mul( scale.div( 3 ).exp( ) ).add( seed ).toVar( 'pos' );

	var octaves = xsmooth.oneMinus().mul( 2 ).exp( ).toVar( 'octaves' );

	const EPS = 0.01;

	var n = fractal( pos.mul( 5 ), octaves ).toVar( 'n' ),
		dx = fractal( pos.add( vec3( EPS, 0, 0 ) ).mul( 5 ), octaves ).sub( n ).div( EPS ).toVar( 'dx' ),
		dy = fractal( pos.add( vec3( 0, EPS, 0 ) ).mul( 5 ), octaves ).sub( n ).div( EPS ).toVar( 'dy' );

	var dTime = noise( pos.mul( wave, 5 ) ).add( 1 ).div( 2 ).mul( 6.28 ).toVar( 'dTime' );

	return vec3( dx, dy, time.mul( speed ).add( dTime ).sin().add( n, 1 ) ).normalize();

} ).setLayout( {
	name: 'brainNormalRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'xsmooth', type: 'float' },
		{ name: 'wave', type: 'float' },
		{ name: 'speed', type: 'float' },
		{ name: 'time', type: 'float' },
		/*{ name: 'color', type: 'vec3' },*/
		/*{ name: 'background', type: 'vec3' },*/
		{ name: 'seed', type: 'float' },
	] }
);



function brain( params={} ) {

	var { position, scale, smooth, /*wave, speed, time,*/ color, background, seed } = { ...defaults, ...params };

	return brainRaw( position, scale, smooth, /*wave, speed, time,*/ color, background, seed );

}



brain.normal = function ( params={} ) {

	var { position, scale, smooth, wave, speed, time, /*color, background,*/ seed } = { ...defaults, ...params };

	return brainNormalRaw( position, scale, smooth, wave, speed, time, /*color, background,*/ seed );

};



brain.defaults = defaults;



export { brain };
