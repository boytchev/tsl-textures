
//	TSL-Textures: Tiger fur



import { Color } from "three";
import { exp, Fn, mix, positionGeometry, vec3 } from 'three/tsl';
import { noise } from './tsl-utils.js';



var defaults = {
	$name: 'Tiger fur',

	position: positionGeometry,
	scale: 2,
	lengths: 4,
	blur: 0.3,
	strength: 0.3,
	hairs: 0.5,

	color: new Color( 0xFFAA00 ),
	bottomColor: new Color( 0xFFFFEE ),

	seed: 0,
};



var tigerFurRaw = Fn( ([ position, scale, lengths, blur, strength, hairs, color, bottomColor, seed ])=>{

	var xscale = scale.div( 2 ).add( 1 ).toVar();
	var pos = position.mul( exp( xscale ) ).add( seed ).toVar( );

	var len = lengths.add( 5 ).reciprocal().toVar();
	var hairs = hairs.mul( 0.3 ).toVar();
	var k = noise( pos.mul( xscale, vec3( 1, len, len ) ) );
	k = k.add( noise( pos.mul( vec3( 25, 1, 1 ) ) ).add( 1 ).mul( hairs ) );
	k = k.add( strength.sub( 0.5 ) ).smoothstep( blur.negate(), blur ).oneMinus();

	var n = position.y.add( hairs.sub( 0.5 ) ).smoothstep( -1, 0.5 );

	return mix( bottomColor, color, n ).mul( k );

} ).setLayout( {
	name: 'tigerFurRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'lengths', type: 'float' },
		{ name: 'blur', type: 'float' },
		{ name: 'strength', type: 'float' },
		{ name: 'hairs', type: 'float' },
		{ name: 'color', type: 'vec3' },
		{ name: 'bottomColor', type: 'vec3' },
		{ name: 'seed', type: 'float' },
	] }
);



function tigerFur( params={} ) {

	var { position, scale, lengths, blur, strength, hairs, color, bottomColor, seed } = { ...defaults, ...params };

	return tigerFurRaw( position, scale, lengths, blur, strength, hairs, color, bottomColor, seed );

}



tigerFur.defaults = defaults;



export { tigerFur };
