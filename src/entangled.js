
//	TSL-Textures: Entangled



import { Color } from "three";
import { abs, exp, float, Fn, Loop, max, mix, mul, oneMinus, positionGeometry, pow, sin } from 'three/tsl';
import { noise } from './tsl-utils.js';



var defaults = {
	$name: 'Entangled',

	position: positionGeometry,
	scale: 2,
	density: 10,

	color: new Color( 0x002040 ),
	background: new Color( 0xFFFFFF ),

	seed: 0,
};



var entangledRaw = Fn( ([ position, scale, density, color, background, seed ]) => {

	var xscale = exp( scale.div( 2 ) ).toVar( );
	var pos = position.add( seed ).toVar( );
	var k = float( -10000 ).toVar( );
	var k1 = float( 0 ).toVar( );

	Loop( density, ()=> {

		k1.assign( sin( noise( mul( pos, xscale ) ).mul( 3*Math.PI ) ) );
		k.assign( max( k, k1 ) );
		xscale.mulAssign( 1.2 );

	} );

	k.assign( oneMinus( pow( abs( k ), 5 ) ).mul( 6 ) );

	return mix( color, background, k );

} ).setLayout( {
	name: 'entangled',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'density', type: 'int' },
		{ name: 'color', type: 'vec3' },
		{ name: 'background', type: 'vec3' },
		{ name: 'seed', type: 'float' },
	] }
);



function entangled( params={} ) {

	var { position, scale, density, color, background, seed } = { ...defaults, ...params };

	return entangledRaw( position, scale, density, color, background, seed );

}



entangled.defaults = defaults;



export { entangled };
