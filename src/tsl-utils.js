
//	Equirectangular Texture Generator - TSL Utility Functions
//

import { MathUtils } from 'three';
import { add, cond, cos, float, If, max, min, sin, sub, tslFn, uniform, vec3 } from 'three/nodes';
import { mx_perlin_noise_float as noise } from 'three/addons/nodes/materialx/lib/mx_noise.js';



function map( x, toMin=0, toMax=1, fromMin=0, fromMax=100 ) {

	x = MathUtils.mapLinear( x, fromMin, fromMax, toMin, toMax );

	return x;

}



function mapExp( x, toMin, toMax, fromMin=0, fromMax=100 ) {

	x = map( x, 0, 1, fromMin, fromMax );
	x = 2**( x * Math.log2( toMax/toMin ) + Math.log2( toMin ) );

	return x;

}



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


export
{
	map,
	mapExp,
	noise,
	hsl,
	toHsl,
	dynamic,
	spherical
};
