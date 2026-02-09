
//	TSL-Textures: Dalmatian spots



import { Color } from "three";
import { float, Fn, Loop, mix, positionGeometry } from 'three/tsl';
import { noise } from './tsl-utils.js';



var defaults = {
	$name: 'Dalmatian spots',
	$width: 260,

	position: positionGeometry,

	scale: 2,
	density: 0.6,

	color: new Color( 0xFFFFFF ),
	background: new Color( 0x000000 ),

	seed: 0,
};



var dalmatianSpotsRaw = Fn( ([ position, scale, density, color, background, seed ])=>{

	var pos = position.mul( scale.exp( ) ).add( seed ).sub( 1000 ).toVar( 'pos' );

	var k = float( 1 ).toVar( 'k' );

	var d = float( 1.5 ).sub( density ).mul( 2 ).toVar( 'd' );
	var count = density.mul( 5 ).add( 5 ).toVar( 'count' );

	Loop( count, ()=> {

		k.mulAssign( noise( pos ).abs().pow( d ).mul( 100 ).sub( 50 ).clamp( 0, 1 ).oneMinus() );
		pos.assign( pos.mul( 1.01 ) );
		k.mulAssign( noise( pos.yzx ).abs().pow( d ).mul( 100 ).sub( 50 ).clamp( 0, 1 ).oneMinus() );
		pos.assign( pos.mul( 1.01 ) );
		k.mulAssign( noise( pos.zxy ).abs().pow( d ).mul( 100 ).sub( 50 ).clamp( 0, 1 ).oneMinus() );
		pos.assign( pos.mul( 1.01 ) );

	} );

	return mix( background, color, k.clamp( 0, 1 ) );

} ).setLayout( {
	name: 'dalmatianSpotsRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'density', type: 'float' },
		{ name: 'color', type: 'vec3' },
		{ name: 'background', type: 'vec3' },
		{ name: 'seed', type: 'float' },
	] }
);



function dalmatianSpots( params={} ) {

	var { position, scale, density, color, background, seed } = { ...defaults, ...params };

	return dalmatianSpotsRaw( position, scale, density, color, background, seed );

}



dalmatianSpots.defaults = defaults;



export { dalmatianSpots };
