
//	TSL-Textures: Grid



import { Color } from "three";
import { abs, add, div, equirectUV, min, mix, mul, oneMinus, positionGeometry, pow, remapClamp, round, screenSize, screenUV, select, sin, smoothstep, sub } from 'three/tsl';
import { prepare, TSLFn } from './tsl-utils.js';



var defaults = {
	$name: 'Grid',

	countU: 32,
	countV: 16,

	thinness: 0.8,

	color: new Color( 0x000000 ),
	background: new Color( 0xFFFFFF ),

	flat: 0,
};



var grid = TSLFn( ( params ) => {

	params = prepare( params, defaults );

	var aspect = select( params.flat, screenSize.x.div( screenSize.y ), 2 );

	var uv = select( params.flat, screenUV, equirectUV( positionGeometry.normalize() ) ).toVar(),
		a = mul( uv.x, aspect, Math.PI ),
		b = mul( uv.y, Math.PI ).toVar();

	var uTo = div( round( mul( uv.x, params.countU ) ), params.countU ),
		vTo = div( round( mul( uv.y, params.countV ) ), params.countV ),
		aTo = mul( uTo, aspect, Math.PI ),
		bTo = mul( vTo, Math.PI );

	var angleU = abs( sub( a, aTo ) ).mul( select( params.flat, 1, sin( b ) ) ),
		angleV = abs( sub( b, bTo ) ),
		angle = min( angleU, angleV );

	var treshold = mul( min( div( aspect.mul( Math.PI ), params.countU ), div( Math.PI, params.countV ) ), remapClamp( pow( params.thinness, 0.5 ), 0, 1, 0.9, 0.04 ), 0.5 );
	var k = oneMinus( smoothstep( sub( treshold, 0.002 ), add( treshold, 0.002 ), angle ) );

	return mix( params.background, params.color, k );

}, defaults );



export { grid };
