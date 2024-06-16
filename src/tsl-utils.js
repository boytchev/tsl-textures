
//	Equirectangular Texture Generator - TSL Utility Functions
//
//	hsl( h, s, l ):vec3 			- convert from hsl to rgb
//	toHsl( rgb:vec3 ):vec3			- convert from rgb to hsl
//	spherical( phi, theta ):vec3	- from angles to point on unit sphere
//	applyEuler( vec:vec3, eu:vec3 ):vec3 - apply Euler rotation to a vector



import { add, cond, cos, cross, div, float, floor, If, log2, max, min, mul, pow, remap, sin, sub, tslFn, uniform, vec3, vec4 } from 'three/nodes';
import { mx_perlin_noise_float as noise } from 'three/addons/nodes/materialx/lib/mx_noise.js';


// helper function - convert hsl to rgb, ported to TSL from:
// https://en.wikipedia.org/wiki/HSL_and_HSV#HSL_to_RGB_alternative

const hslHelper = tslFn( ([ h, s, l, n ])=>{

	var k = n.add( h.mul( 12 ) ).mod( 12 );
	var a = s.mul( min( l, sub( 1, l ) ) );
	return l.sub( a.mul( max( -1, min( min( k.sub( 3 ), sub( 9, k ) ), 1 ) ) ) );

} );

hslHelper.setLayout( {
	name: 'hslHelper',
	type: 'float',
	inputs: [
		{ name: 'h', type: 'float' },
		{ name: 's', type: 'float' },
		{ name: 'l', type: 'float' },
		{ name: 'n', type: 'float' },
	]
} );



// convert from hsl to rgb
const hsl = tslFn( ([ h, s, l ]) => {

	h = h.fract().add( 1 ).fract();
	s = s.clamp( 0, 1 );
	l = l.clamp( 0, 1 );

	var r = hslHelper( h, s, l, 0 );
	var g = hslHelper( h, s, l, 8 );
	var b = hslHelper( h, s, l, 4 );

	return vec3( r, g, b );

} );

hsl.setLayout( {
	name: 'hsl',
	type: 'vec3',
	inputs: [
		{ name: 'h', type: 'float' },
		{ name: 's', type: 'float' },
		{ name: 'l', type: 'float' },
	]
} );


// convert from rgb to hsl
const toHsl = tslFn( ([ rgb ]) => {

	var R = float( rgb.x ).toVar(),
		G = float( rgb.y ).toVar(),
		B = float( rgb.z ).toVar();

	var mx = max( R, max( G, B ) ).toVar();
	var mn = min( R, min( G, B ) ).toVar();

	var H = float( 0 ).toVar(),
		S = float( 0 ).toVar(),
		L = add( mx, mn ).div( 2 );

	If( mn.notEqual( mx ), ()=>{

		const delta = sub( mx, mn ).toVar();

		S.assign( cond( L.lessThanEqual( 0.5 ), delta.div( add( mn, mx ) ), delta.div( sub( 2, add( mn, mx ) ) ) ) );
		If( mx.equal( R ), ()=>{

			H.assign( sub( G, B ).div( delta ).add( cond( G.lessThanEqual( B ), 6, 0 ) ) );

		} )
			.elseif( mx.equal( G ), ()=>{

				H.assign( sub( B, R ).div( delta ).add( 2 ) );

			} )
			.else( ()=>{

				H.assign( sub( R, G ).div( delta ).add( 4 ) );

			} );
		H.divAssign( 6 );

	} );
	return vec3( H, S, L );

} );





// make all elements dynamic (i.e. uniform)
function dynamic( params ) {

	var result = {};

	for ( var [ key, value ] of Object.entries( params ) ) {

		if ( key[ 0 ]!='$' )
			result[ key ] = uniform( value );

	}

	return result;

}



// convert phi-theta angles to position on unit sphere
const spherical = tslFn( ([ phi, theta ]) => {

	return vec3(
		sin( theta ).mul( sin( phi ) ),
		cos( phi ),
		cos( theta ).mul( sin( phi ) )
	);

} );

spherical.setLayout( {
	name: 'spherical',
	type: 'vec3',
	inputs: [
		{ name: 'phi', type: 'float' },
		{ name: 'theta', type: 'float' },
	]
} );



// apply Euler rotation to a vector
const applyEuler = tslFn( ([ vec, eu ]) => {

	var quat = quaternionFromEuler( eu );
	return applyQuaternion( vec, quat );

} );


// convert Euler XYZ angles to quaternion
const quaternionFromEuler = tslFn( ([ eu ]) => {

	var c1 = cos( eu.x.div( 2 ) );
	var c2 = cos( eu.y.div( 2 ) );
	var c3 = cos( eu.z.div( 2 ) );

	var s1 = sin( eu.x.div( 2 ) );
	var s2 = sin( eu.y.div( 2 ) );
	var s3 = sin( eu.z.div( 2 ) );

	return vec4(
		add( mul( s1, c2, c3 ), mul( c1, s2, s3 ) ),
		sub( mul( c1, s2, c3 ), mul( s1, c2, s3 ) ),
		add( mul( c1, c2, s3 ), mul( s1, s2, c3 ) ),
		sub( mul( c1, c2, c3 ), mul( s1, s2, s3 ) ),
	);

} );


// apply quaternion rotation to a vector
const applyQuaternion = tslFn( ([ vec, quat ]) => {

	var t = cross( quat, vec ).mul( 2 ).toVar( );

	return add( vec, t.mul( quat.w ), cross( quat.xyz, t ) );

} );


// calculate modulo (missing in TSL?)
const mod = tslFn( ([ x, y ]) => {

	return sub( x, floor( div( x, y ) ).mul( y ) );

} );



// exponential version of remap
const remapExp = tslFn( ([ x, fromMin, fromMax, toMin, toMax ]) => {

	x = remap( x, fromMin, fromMax, 0, 1 );
	x = pow( 2, mul( x, log2( toMax.div( toMin ) ) ).add( log2( toMin ) ) );
	return x;
	/*

function mapExp( x, toMin, toMax, fromMin=0, fromMax=100 ) {

	x = map( x, 0, 1, fromMin, fromMax );
	x = 2**( x * Math.log2( toMax/toMin ) + Math.log2( toMin ) );

	return x;

}
*/

} );

export
{
	noise,
	hsl,
	toHsl,
	dynamic,
	spherical,
	applyEuler,
	mod,
	remapExp
};
