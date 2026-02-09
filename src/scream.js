
//	TSL-Textures: Scream



import { Color } from "three";
import { add, cos, exp, Fn, mix, positionGeometry, sin, vec3 } from 'three/tsl';
import { hsl, noise, toHsl } from './tsl-utils.js';



var defaults = {
	$name: 'Scream',

	position: positionGeometry,
	scale: 2,
	variety: 1,

	color: new Color( 0xF0F060 ),
	background: new Color( 0xD09090 ),

	seed: 0,
};



var screamRaw = Fn( ([ position, scale, variety, color, background, seed ]) => {

	var pos = position.mul( exp( scale ) ).add( seed ).toVar( 'pos' );

	var k = noise( add( sin( pos.xyz ), cos( pos.yzx ) ) );

	pos.assign( position.mul( exp( scale ).mul( k ) ).add( seed ) );

	var k = noise( add( sin( pos.xyz ), cos( pos.yzx ) ).mul( 2 ) );

	var col = mix( background, color, k ).toVar( 'col' );

	var HSL = toHsl( col ).toVar( 'HSL' );

	return hsl( vec3( add( HSL.x, variety.mul( sin( k.mul( Math.PI ) ) ).mul( 0.5 ) ), HSL.yz ) );

} ).setLayout( {
	name: 'satinRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'variety', type: 'float' },
		{ name: 'color', type: 'vec3' },
		{ name: 'background', type: 'vec3' },
		{ name: 'seed', type: 'float' },
	] }
);



function scream( params={} ) {

	var { position, scale, variety, color, background, seed } = { ...defaults, ...params };

	return screamRaw( position, scale, variety, color, background, seed );

}



scream.defaults = defaults;



export { scream };
