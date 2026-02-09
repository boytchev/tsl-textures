
//	TSL-Textures: Isolines



import { Color } from "three";
import { add, exp, Fn, mix, oneMinus, positionGeometry, sin, smoothstep, sub } from 'three/tsl';
import { noise } from './tsl-utils.js';



var defaults = {
	$name: 'Isolines',

	position: positionGeometry,
	scale: 2,
	density: 40,
	blur: 0.3,
	thinness: 0.6,

	color: new Color( 0xFFFFFF ),
	background: new Color( 0x000000 ),

	seed: 0,
};



var isolinesRaw = Fn( ([ position, scale, density, blur, thinness, color, background, seed ])=>{

	var pos = position.mul( exp( scale ) ).add( seed ).toVar( );

	var k = noise( pos, density );

	k = oneMinus( sin( k ) ).div( 2 );

	k = smoothstep( sub( thinness, blur ), add( thinness, blur ), k );

	return mix( color, background, k );

} ).setLayout( {
	name: 'isolinesRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'density', type: 'float' },
		{ name: 'blur', type: 'float' },
		{ name: 'thinness', type: 'float' },
		{ name: 'color', type: 'vec3' },
		{ name: 'background', type: 'vec3' },
		{ name: 'seed', type: 'float' },
	] }
);



function isolines( params={} ) {

	var { position, scale, density, blur, thinness, color, background, seed } = { ...defaults, ...params };

	return isolinesRaw( position, scale, density, blur, thinness, color, background, seed );

}



isolines.defaults = defaults;



export { isolines };
