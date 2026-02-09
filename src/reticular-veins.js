
//	TSL-Textures: Voronoi Cells



import { Color } from 'three';
import { exp, Fn, mix, positionGeometry } from 'three/tsl';
import { noise, voronoi } from './tsl-utils.js';



var defaults = {
	$name: 'Reticular veins',

	position: positionGeometry,
	scale: 2,
	reticulation: 5,
	strength: 0.2,
	organelles: 0.2,

	color: new Color( 0xFFFFF0 ),
	background: new Color( 0x208020 ),

	seed: 0,
};



var reticularVeinsRaw = Fn( ([ position, scale, reticulation, strength, organelles, color, background, seed ])=>{

	var pos = position.mul( exp( scale.div( 2 ).add( 0.5 ) ) ).add( seed ).toVar( );

	var k1 = voronoi( pos );
	var k2 = voronoi( pos.add( 100 ).mul( reticulation ) ).mul( strength );
	var dots = noise( pos.mul( 100 ) ).mul( strength, organelles );

	var k = k1.add( k2 ).add( dots );

	return mix( background, color, k );

} ).setLayout( {
	name: 'reticularVeinsRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'reticulation', type: 'float' },
		{ name: 'strength', type: 'float' },
		{ name: 'organelles', type: 'float' },
		{ name: 'color', type: 'vec3' },
		{ name: 'background', type: 'vec3' },
		{ name: 'seed', type: 'float' },
	] }
);



function reticularVeins( params={} ) {

	var { position, scale, reticulation, strength, organelles, color, background, seed } = { ...defaults, ...params };

	return reticularVeinsRaw( position, scale, reticulation, strength, organelles, color, background, seed );

}



reticularVeins.defaults = defaults;



export { reticularVeins };
