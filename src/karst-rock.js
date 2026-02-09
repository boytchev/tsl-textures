
//	TSL-Textures: Karst rock



import { Color } from "three";
import { exp, Fn, mix, positionGeometry } from 'three/tsl';
import { noise } from './tsl-utils.js';



var defaults = {
	$name: 'Karst rock',

	position: positionGeometry,
	scale: 2,

	color: new Color( 0xFFF4F0 ),
	background: new Color( 0xD0D0D0 ),

	seed: 0,
};



var karstRockRaw = Fn( ([ position, scale, color, background, seed ])=>{

	var pos = position.mul( exp( scale ) ).add( seed.sin().mul( 5 ) ).toVar( );

	var pos2 = pos.add( noise( pos.mul( 2 ) ) ).toVar();

	var k = noise( pos2 ).div( noise( pos2.mul( 1.01 ) ) ).clamp( 0, 2 ).toVar();

	k.addAssign( noise( pos.mul( 100 ) ).div( 3 ) );
	k.addAssign( noise( pos.mul( 2 ) ).div( 2 ) );

	return mix( background, color, k ).mul( k.pow( 0.1 ) );

} ).setLayout( {
	name: 'karstRockRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'color', type: 'vec3' },
		{ name: 'background', type: 'vec3' },
		{ name: 'seed', type: 'float' },
	] }
);



function karstRock( params={} ) {

	var { position, scale, color, background, seed } = { ...defaults, ...params };

	return karstRockRaw( position, scale, color, background, seed );

}



karstRock.defaults = defaults;



export { karstRock };
