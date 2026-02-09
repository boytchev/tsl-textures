
//	TSL-Textures: Caustics



import { Color } from 'three';
import { exp, Fn, positionGeometry, time, vec3 } from 'three/tsl';
import { voronoi, voronoi3 } from './tsl-utils.js';



var defaults = {
	$name: 'Caustics',

	position: positionGeometry,
	scale: 2,
	speed: 0,
	time: time,

	color: new Color( 0x50A8C0 ),

	seed: 0,
};



var causticsRaw = Fn( ([ position, scale, speed, time, color, seed ])=>{

	var pos = position.mul( exp( scale.sub( 1 ) ) ).add( seed ).toVar( );

	var t = time.mul( speed.sub( 1 ).exp() )
		.add( vec3( 0, 2*Math.PI/3, 4*Math.PI/3 ) )
		.sin();

	var p = voronoi3(
		pos.add( vec3(
			voronoi( pos.add( t.xyz ) ),
			voronoi( pos.add( t.yzx ) ),
			voronoi( pos.add( t.zxy ) ),
		) ) );

	var k = p.length().div( Math.sqrt( 3 ) );

	return k.add( color.sub( 0.5 ).mul( 2 ) );

} ).setLayout( {
	name: 'causticsRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'speed', type: 'float' },
		{ name: 'time', type: 'float' },
		{ name: 'color', type: 'vec3' },
		{ name: 'seed', type: 'float' },
	] }
);



function caustics( params={} ) {

	var { position, scale, speed, time, color, seed } = { ...defaults, ...params };

	return causticsRaw( position, scale, speed, time, color, seed );

}



caustics.defaults = defaults;



export { caustics };
