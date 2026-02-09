
//	TSL-Textures: Scepter Head



import { Color } from "three";
import { abs, add, cos, floor, Fn, max, mix, mod, mul, positionGeometry, remapClamp, sign, tan, vec3 } from 'three/tsl';
import { hsl, noise, remapExp, toHsl } from './tsl-utils.js';



var defaults = {
	$name: 'Scepter head',

	position: positionGeometry,

	xFactor: 10,
	yFactor: 22,
	zFactor: 10,

	colorRim: new Color( 0xFFFFFF ),
	colorA: new Color( 0x70E0FF ),
	colorB: new Color( 0x3000FF ),
};



var scepterHeadRaw = Fn( ([ position, xFactor, yFactor, zFactor, colorRim, colorA, colorB ]) => {

	var pos = position.toVar( 'pos' );

	var fx = pos.x.mul( remapExp( xFactor, 0, 100, 1.35, 30 ) ).toVar( 'fx' ),
		fy = pos.y.mul( remapExp( yFactor, 0, 100, 1.35, 30 ) ).toVar( 'fy' ),
		fz = pos.z.mul( remapExp( zFactor, 0, 100, 1.35, 30 ) ).toVar( 'fz' );

	var cosX = cos( fx ),
		cosY = cos( fy ),
		cosZ = cos( fz );

	var k = noise( vec3( pos.x.div( cosX ), pos.y.div( cosY ), pos.z.div( cosZ ) ) );

	k = sign( k ).mul( abs( k ).pow( 0.75 ) );

	var dx = abs( mul( fx, tan( fx ) ).add( 1 ).div( cosX ) ),
		dy = abs( mul( fy, tan( fy ) ).add( 1 ).div( cosY ) ),
		dz = abs( mul( fz, tan( fz ) ).add( 1 ).div( cosZ ) );

	var HSL = vec3().toVar();

	var indexX = ( abs( floor( ( fx.mul( 2/Math.PI ).add( 1 ) ).div( 2 ) ) ) ),
		indexY = ( abs( floor( ( fy.mul( 2/Math.PI ).add( 1 ) ).div( 2 ) ) ) ),
		indexZ = ( abs( floor( ( fz.mul( 2/Math.PI ).add( 1 ) ).div( 2 ) ) ) );

	var index = mod( ( add( indexX, indexY, indexZ ) ), 2 );

	HSL.assign( toHsl( mix( colorA, colorB, index ) ) );
	var color1 = hsl( vec3( HSL.xy, HSL.z.mul( k ) ) ).toVar( 'color1' );

	HSL.assign( toHsl( colorRim ) );
	var color2 = hsl( vec3( HSL.xy, mul( 2, k, HSL.z ) ) ).toVar( 'color2' );

	return mix( color1, color2, remapClamp( max( dx, max( dy, dz ) ), 55-10, 55+10 ) );

} ).setLayout( {
	name: 'scepterHeadRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'xFactor', type: 'float' },
		{ name: 'yFactor', type: 'float' },
		{ name: 'zFactor', type: 'float' },
		{ name: 'colorRim', type: 'vec3' },
		{ name: 'colorA', type: 'vec3' },
		{ name: 'colorB', type: 'vec3' },
	] }
);



function scepterHead( params={} ) {

	var { position, xFactor, yFactor, zFactor, colorRim, colorA, colorB } = { ...defaults, ...params };

	return scepterHeadRaw( position, xFactor, yFactor, zFactor, colorRim, colorA, colorB );

}



scepterHead.defaults = defaults;



export { scepterHead };
