
//	TSL-Textures: Scepter Head



import { Color } from "three";
import { abs, add, cos, floor, Fn, max, mix, mod, mul, positionGeometry, remapClamp, sign, tan, vec3 } from 'three/tsl';
import { hsl, noise, prepare, remapExp, toHsl } from './tsl-utils.js';



var scepterHead = Fn( ( params ) => {

	params = prepare( { ...scepterHead.defaults, ...params } );

	var pos = positionGeometry;

	var fx = pos.x.mul( remapExp( params.xFactor, 0, 100, 1.35, 30 ) ).toVar( ),
		fy = pos.y.mul( remapExp( params.yFactor, 0, 100, 1.35, 30 ) ).toVar( ),
		fz = pos.z.mul( remapExp( params.zFactor, 0, 100, 1.35, 30 ) ).toVar( );

	var cosX = cos( fx ).toVar(),
		cosY = cos( fy ).toVar(),
		cosZ = cos( fz ).toVar();

	var k = noise( vec3( pos.x.div( cosX ), pos.y.div( cosY ), pos.z.div( cosZ ) ) );

	k = sign( k ).mul( abs( k ).pow( 0.75 ) );

	var dx = abs( mul( fx, tan( fx ) ).add( 1 ).div( cos( fx ) ) ),
		dy = abs( mul( fy, tan( fy ) ).add( 1 ).div( cos( fy ) ) ),
		dz = abs( mul( fz, tan( fz ) ).add( 1 ).div( cos( fz ) ) );

	var HSL = vec3().toVar();

	var indexX = ( abs( floor( ( fx.mul( 2/Math.PI ).add( 1 ) ).div( 2 ) ) ) ),
		indexY = ( abs( floor( ( fy.mul( 2/Math.PI ).add( 1 ) ).div( 2 ) ) ) ),
		indexZ = ( abs( floor( ( fz.mul( 2/Math.PI ).add( 1 ) ).div( 2 ) ) ) );

	var index = mod( ( add( indexX, indexY, indexZ ) ), 2 );

	HSL.assign( toHsl( mix( params.colorA, params.colorB, index ) ) );
	var color1 = hsl( HSL.x, HSL.y, HSL.z.mul( k ) ).toVar();

	HSL.assign( toHsl( params.colorRim ) );
	var color2 = hsl( HSL.x, HSL.y, mul( 2, k, HSL.z ) ).toVar();

	return mix( color1, color2, remapClamp( max( dx, max( dy, dz ) ), 55-10, 55+10 ) );

} );



scepterHead.defaults = {
	$name: 'Scepter head',

	xFactor: 10,
	yFactor: 22,
	zFactor: 10,

	colorRim: new Color( 0xFFFFFF ),
	colorA: new Color( 0x70E0FF ),
	colorB: new Color( 0x3000FF ),
};



export { scepterHead };
