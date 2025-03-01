
//	TSL-Textures: Scream



import { Color } from "three";
import { add, cos, exp, Fn, mix, positionGeometry, sin } from 'three/tsl';
import { hsl, noise, prepare, toHsl } from './tsl-utils.js';



var scream = Fn( ( params ) => {

	params = prepare( { ...scream.defaults, ...params } );

	var pos = positionGeometry.mul( exp( params.scale ) ).add( params.seed ).toVar( );

	var k = noise( add( sin( pos.xyz ), cos( pos.yzx ) ) );

	pos.assign( positionGeometry.mul( exp( params.scale ).mul( k ) ).add( params.seed ) );

	var k = noise( add( sin( pos.xyz ), cos( pos.yzx ) ).mul( 2 ) );

	var col = mix( params.background, params.color, k ).toVar();

	var HSL = toHsl( col ).toVar();

	return hsl( add( HSL.x, params.variety.mul( sin( k.mul( Math.PI ) ) ).mul( 0.5 ) ), HSL.y, HSL.z );

} );



scream.defaults = {
	$name: 'Scream',

	scale: 2,
	variety: 1,

	color: new Color( 0xF0F060 ),
	background: new Color( 0xD09090 ),

	seed: 0,
};



export { scream };
