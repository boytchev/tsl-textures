
//	TSL-Textures: Voronoi Cells



import { Color } from 'three';
import { exp, mix, mx_worley_noise_float, positionGeometry } from 'three/tsl';
import { convertToNodes, noise, TSLFn } from './tsl-utils.js';



var defaults = {
	$name: 'Reticular veins',

	scale: 2,
	reticulation: 5,
	strength: 0.2,
	organelles: 0.2,

	color: new Color( 0xFFFFF0 ),
	background: new Color( 0x208020 ),

	seed: 0,
};



var reticularVeins = TSLFn( ( params )=>{

	params = convertToNodes( params, defaults );

	var pos = positionGeometry.mul( exp( params.scale.div( 2 ).add( 0.5 ) ) ).add( params.seed ).toVar( );

	var k1 = mx_worley_noise_float( pos.mul( 1 ) );
	var k2 = mx_worley_noise_float( pos.add( 100 ).mul( params.reticulation ) ).mul( params.strength );
	var dots = noise( pos.mul( 100 ) ).mul( params.strength, params.organelles );

	var k = k1.add( k2 ).add( dots );

	return mix( params.background, params.color, k );

}, defaults );



export { reticularVeins };
