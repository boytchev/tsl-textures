
//	TSL-Textures: Turbulent smoke



import { exp, Fn, positionGeometry, time, vec3 } from 'three/tsl';
import { fractal, fractal3, voronoi } from './tsl-utils.js';



var defaults = {
	$name: 'Turbulent smoke',
	$width: 260,

	position: positionGeometry,
	scale: 2,
	speed: 0,
	details: 5,
	time: time,

	seed: 0,
};



var turbulentSmokeRaw = Fn( ([ position, scale, speed, details, time, seed ])=>{

	var pos = position.mul( exp( scale.sub( 1 ) ) ).add( seed ).toVar( );

	var t = time.mul( speed.sub( 1 ).exp() );

	var q = pos.add( vec3(
		fractal( pos.add( vec3( 1, t.sin(), -1 ) ) ),
		fractal( pos.add( vec3( t.add( 2*Math.PI/3 ).sin(), 1, -1 ) ) ),
		fractal( pos.add( vec3( 1, -1, t.add( 4*Math.PI/3 ).sin() ) ) ),
	) );

	var p = fractal3( q, details );

	var k = voronoi( pos.add( p.div( 2 ) ) ).pow( 4 ).mul( 4 ).oneMinus();

	return k;

} ).setLayout( {
	name: 'turbulentSmokeRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'speed', type: 'float' },
		{ name: 'details', type: 'int' },
		{ name: 'time', type: 'float' },
		{ name: 'seed', type: 'float' },
	] }
);



function turbulentSmoke( params={} ) {

	var { position, scale, speed, details, time, seed } = { ...defaults, ...params };

	return turbulentSmokeRaw( position, scale, speed, details, time, seed );

}



turbulentSmoke.defaults = defaults;



export { turbulentSmoke };
