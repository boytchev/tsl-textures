
//	TSL-Textures: Camouflage



import { Color } from 'three';
import { Fn, If, positionGeometry } from 'three/tsl';
import { noise } from './tsl-utils.js';



var defaults = {
	$name: 'Camouflage',

	position: positionGeometry,
	scale: 2,

	colorA: new Color( 0xc2bea8 ),
	colorB: new Color( 0x9c895e ),
	colorC: new Color( 0x92a375 ),
	colorD: new Color( 0x717561 ),

	seed: 0,
};



var camouflageRaw = Fn( ([ position, scale, colorA, colorB, colorC, colorD, seed ])=>{

	var pos = position.mul( scale.exp( ) ).add( seed ).toVar( 'pos' );

	var color = colorD.toVar( 'color' );

	If( noise( pos ).greaterThanEqual( 0.3 ), () => {

		color.assign( colorA );

	}
	)
		.ElseIf( noise( pos.yzx ).greaterThanEqual( 0.2 ), () => {

			color.assign( colorB );

		}
		)
		.ElseIf( noise( pos.zxy ).greaterThanEqual( 0.1 ), () => {

			color.assign( colorC );

		}
		);

	return color;

} ).setLayout( {
	name: 'camouflageRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'colorA', type: 'vec3' },
		{ name: 'colorB', type: 'vec3' },
		{ name: 'colorC', type: 'vec3' },
		{ name: 'colorD', type: 'vec3' },
		{ name: 'seed', type: 'float' },
	] }
);



function camouflage( params={} ) {

	var { position, scale, colorA, colorB, colorC, colorD, seed } = { ...defaults, ...params };

	return camouflageRaw( position, scale, colorA, colorB, colorC, colorD, seed );

}



camouflage.defaults = defaults;



export { camouflage };
