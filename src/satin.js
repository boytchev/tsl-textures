
//	TSL-Textures: Satin



import { Color } from "three";
import { Fn, mix, positionGeometry, vec3 } from 'three/tsl';
import { noise } from './tsl-utils.js';



var defaults = {
	$name: 'Satin',

	position: positionGeometry,
	scale: 2,

	color: new Color( 0x7080FF ),
	background: new Color( 0x000050 ),

	seed: 0,
};



var satinRaw = Fn( ([ position, scale, color, background, seed ]) => {

	var pos = position.toVar( 'pos' ),
		scale = scale.div( 3 ).exp( ).toVar( 'xscale' );

	var k = noise(
		vec3(
			noise( vec3( pos.x.mul( 2 ), pos.y, pos.z ).mul( scale ) ),
			noise( vec3( pos.x, pos.y.mul( 2 ), pos.z ).mul( scale ) ),
			noise( vec3( pos.x, pos.y, pos.z.mul( 2 ) ).mul( scale ) ),
		).mul( scale ).add( seed )
	).abs().pow( 3 ).mul( 20 ).toVar( 'k' );

	return mix( background, color, k );

} ).setLayout( {
	name: 'satinRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'color', type: 'vec3' },
		{ name: 'background', type: 'vec3' },
		{ name: 'seed', type: 'float' },
	] }
);



function satin( params={} ) {

	var { position, scale, color, background, seed } = { ...defaults, ...params };

	return satinRaw( position, scale, color, background, seed );

}



satin.defaults = defaults;



export { satin };
