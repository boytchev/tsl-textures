
//	TSL-Textures: Tiger fur



import { Color } from "three";
import { exp, Fn, mix, positionGeometry, vec3 } from 'three/tsl';
import { noise, prepare } from './tsl-utils.js';



var tigerFur = Fn( ( params )=>{

	params = prepare( { ...tigerFur.defaults, ...params } );

	var scale = params.scale.div( 2 ).add( 1 ).toVar();
	var pos = positionGeometry.mul( exp( scale ) ).add( params.seed ).toVar( );

	var len = params.length.add( 5 ).reciprocal().toVar();
	var hairs = params.hairs.mul( 0.3 ).toVar();
	var k = noise( pos.mul( scale, vec3( 1, len, len ) ) );
	k = k.add( noise( pos.mul( vec3( 25, 1, 1 ) ) ).add( 1 ).mul( hairs ) );
	k = k.add( params.strength.sub( 0.5 ) ).smoothstep( params.blur.negate(), params.blur ).oneMinus();

	var n = positionGeometry.y.add( hairs.sub( 0.5 ) ).smoothstep( -1, 0.5 );

	return mix( params.bottomColor, params.color, n ).mul( k );

} );


tigerFur.defaults = {
	$name: 'Tiger fur',

	scale: 2,
	length: 4,
	blur: 0.3,
	strength: 0.3,
	hairs: 0.5,

	color: new Color( 0xFFAA00 ),
	bottomColor: new Color( 0xFFFFEE ),

	seed: 0,
};



export { tigerFur };
