
//	TSL-Textures: Clouds



import { Color } from "three";
import { clamp, exp, Fn, mix, mul, positionGeometry } from 'three/tsl';
import { fractal } from './tsl-utils.js';



var defaults = {
	$name: 'Clouds',

	position: positionGeometry,
	scale: 2,
	density: 0.5,
	opacity: 1,

	color: new Color( 0xFFFFFF ),
	subcolor: new Color( 0xA0A0B0 ),

	seed: 0,
};



var cloud_core = Fn( ([ position, scale, density, seed ]) => {

	const pos = position.mul( exp( scale.div( 1.5 ).sub( 0.5 ) ) ).add( seed ).toVar( 'pos' );

	return fractal( pos, 4 ).add( density.remap( 0, 1, -0.5, 1.5 ) );

} ).setLayout( {
	name: 'cloud_core',
	type: 'float',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'density', type: 'float' },
		{ name: 'seed', type: 'float' },
	] }
);



var cloudsRaw = Fn( ([ position, scale, density, /*opacity,*/color, subcolor, seed ]) => {

	var k = cloud_core( position, scale, density, seed );
	return mix( subcolor, color, k.clamp( 0, 1 ) );


} ).setLayout( {
	name: 'cloudsRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'density', type: 'float' },
		/*{ name: 'opacity', type: 'float' },*/
		{ name: 'color', type: 'vec3' },
		{ name: 'subcolor', type: 'vec3' },
		{ name: 'seed', type: 'float' },
	] }
);



var cloudsOpacityRaw = Fn( ([ position, scale, density, opacity, /*color,subcolor,*/seed ]) => {

	var k = cloud_core( position, scale, density, seed );
	return clamp( 0, 1, mul( k, 2 ).pow( 1.5 ).sub( 1 ).mul( opacity ) );

} ).setLayout( {
	name: 'cloudsOpacityRaw',
	type: 'float',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'density', type: 'float' },
		{ name: 'opacity', type: 'float' },
		/*{ name: 'color', type: 'vec3' },*/
		/*{ name: 'subcolor', type: 'vec3' },*/
		{ name: 'seed', type: 'float' },
	] }
);



function clouds( params={} ) {

	var { position, scale, density, /*opacity,*/color, subcolor, seed } = { ...defaults, ...params };

	return cloudsRaw( position, scale, density, /*opacity,*/color, subcolor, seed );

}



clouds.opacity = function ( params={} ) {

	var { position, scale, density, opacity, /*color,subcolor,*/seed } = { ...defaults, ...params };

	return cloudsOpacityRaw( position, scale, density, opacity, /*color,subcolor,*/seed );

};



clouds.defaults = defaults;



export { clouds };
