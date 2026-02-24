
//	TSL-Textures: Waves



import { Color } from "three";
import { exp, float, Fn, mix, positionGeometry, time, vec3 } from 'three/tsl';
import { fractal } from './tsl-utils.js';


var defaults = {
	$name: 'Waves',

	position: positionGeometry,
	scale: 2,
	speed: 0,
	time: time,
	level: -0.4,
	rough: 10,
	height: 0.5,

	foamSize: 0.2,
	foamEdge: 0.5,

	color: new Color( 0xFFFFFF ),
	background: new Color( 0x2060FF ),

	seed: 0,
};



var waves_core = Fn( ([ position, scale, speed, time, level, rough, height, foamSize, /*foamEdge,*/ seed ]) => {

	const xscale = exp( scale.sub( 1 ) ).toVar();
	const pos = position.mul( xscale ).add( seed ).toVar( 'pos' );
	const xtime = time.mul( speed.exp() );

	var posXZ = vec3( pos.x, 0, pos.z ).div( 3 );

	const xfoamSize = foamSize.mul( fractal( pos, rough.div( 2 ) ).div( 2 ).add( 1 ).div( 2 ) );

	var xheight = height.div( xscale, 0.8 ).toVar();

	var wave = position.y.sub( level )
		.add( fractal( posXZ, 1 ).mul( 2*3.14 ).add( xtime ).sin().div( 2 ).mul( xheight ) )
		.sub( fractal( pos, rough ).mul( 2*3.14 ).add( xtime.mul( 2 ) ).sin().sub( 1 ).div( 5 ).mul( xheight ) )
		.smoothstep( float( 0.5 ).sub( xfoamSize ), float( 0.5 ).add( xfoamSize ) )
		.toVar();

	return wave;

} ).setLayout( {
	name: 'waves_core',
	type: 'float',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'speed', type: 'float' },
		{ name: 'time', type: 'float' },
		{ name: 'level', type: 'float' },
		{ name: 'rough', type: 'float' },
		{ name: 'height', type: 'float' },
		{ name: 'foamSize', type: 'float' },
		/*{ name: 'foamEdge', type: 'float' },*/
		{ name: 'seed', type: 'float' },
	] }
);



var wavesRaw = Fn( ([ position, scale, speed, time, level, rough, height, foamSize, /*foamEdge,*/ color, background, seed ]) => {

	var k = waves_core( position, scale, speed, time, level, rough, height, foamSize, /*foamEdge,*/ seed );
	return mix( background, color, k.clamp( 0, 1 ) );


} ).setLayout( {
	name: 'wavesRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'speed', type: 'float' },
		{ name: 'time', type: 'float' },
		{ name: 'level', type: 'float' },
		{ name: 'rough', type: 'float' },
		{ name: 'height', type: 'float' },
		{ name: 'foamSize', type: 'float' },
		/*{ name: 'foamEdge', type: 'float' },*/
		{ name: 'color', type: 'vec3' },
		{ name: 'background', type: 'vec3' },
		{ name: 'seed', type: 'float' },
	] }
);



var wavesOpacityRaw = Fn( ([ position, scale, speed, time, level, rough, height, foamSize, foamEdge, /*color,background,*/ seed ]) => {

	var k = waves_core( position, scale, speed, time, level, rough, height, foamSize, /*foamEdge,*/ seed ).oneMinus();

	return k.smoothstep( 0, foamEdge.oneMinus().div( 10 ) );

} ).setLayout( {
	name: 'wavesOpacityRaw',
	type: 'float',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'speed', type: 'float' },
		{ name: 'time', type: 'float' },
		{ name: 'level', type: 'float' },
		{ name: 'rough', type: 'float' },
		{ name: 'height', type: 'float' },
		{ name: 'foamSize', type: 'float' },
		{ name: 'foamEdge', type: 'float' },
		/*{ name: 'color', type: 'vec3' },*/
		/*{ name: 'subcolor', type: 'vec3' },*/
		{ name: 'seed', type: 'float' },
	] }
);



function waves( params={} ) {

	var { position, scale, speed, time, level, rough, height, foamSize, /*foamEdge,*/ color, background, seed } = { ...defaults, ...params };

	return wavesRaw( position, scale, speed, time, level, rough, height, foamSize, /*foamEdge,*/ color, background, seed );

}



waves.opacity = function ( params={} ) {

	var { position, scale, speed, time, level, rough, height, foamSize, foamEdge, /*color,background,*/seed } = { ...defaults, ...params };

	return wavesOpacityRaw( position, scale, speed, time, level, rough, height, foamSize, foamEdge, /*color,background,*/seed );

};



waves.defaults = defaults;



export { waves };
