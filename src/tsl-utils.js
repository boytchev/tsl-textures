
//	Equirectangular Texture Generator - TSL Utility Functions
//
//	hsl( h, s, l ):vec3 			- convert from hsl to rgb
//	toHsl( rgb:vec3 ):vec3			- convert from rgb to hsl
//	spherical( phi, theta ):vec3	- from angles to point on unit sphere
//	applyEuler( vec:vec3, eu:vec3 ):vec3 - apply Euler rotation to a vector



import { add, cos, cross, float, Fn, If, log2, mat4, max, min, mul, positionLocal, pow, remap, select, sin, smoothstep, sub, uniform, vec3, vec4 } from 'three/tsl';
import { Vector3 } from 'three';
//import { mx_perlin_noise_float as noise } from 'https://cdn.jsdelivr.net/npm/three@0.167.0/src/nodes/materialx/lib/mx_noise.js';


// helper function - convert hsl to rgb, ported to TSL from:
// https://en.wikipedia.org/wiki/HSL_and_HSV#HSL_to_RGB_alternative

const hslHelper = Fn( ([ h, s, l, n ])=>{

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
const hsl = Fn( ([ h, s, l ]) => {

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
const toHsl = Fn( ([ rgb ]) => {

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

		S.assign( select( L.lessThanEqual( 0.5 ), delta.div( add( mn, mx ) ), delta.div( sub( 2, add( mn, mx ) ) ) ) );
		If( mx.equal( R ), ()=>{

			H.assign( sub( G, B ).div( delta ).add( select( G.lessThanEqual( B ), 6, 0 ) ) );

		} )
			.ElseIf( mx.equal( G ), ()=>{

				H.assign( sub( B, R ).div( delta ).add( 2 ) );

			} )
			.Else( ()=>{

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

		if ( key[ 0 ]!='$' ) {

			if ( value instanceof Vector3 )
				result[ key ] = uniform( value, 'vec3' );
			else
				result[ key ] = uniform( value );

		}

	}

	return result;

}



// convert phi-theta angles to position on unit sphere
const spherical = Fn( ([ phi, theta ]) => {

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
const applyEuler = Fn( ([ vec, eu ]) => {

	var quat = quaternionFromEuler( eu );
	return applyQuaternion( vec, quat );

} );


// convert Euler XYZ angles to quaternion
const quaternionFromEuler = Fn( ([ eu ]) => {

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
const applyQuaternion = Fn( ([ vec, quat ]) => {

	var t = cross( quat, vec ).mul( 2 ).toVar( );

	return add( vec, t.mul( quat.w ), cross( quat.xyz, t ) );

} );



// exponential version of remap
const remapExp = Fn( ([ x, fromMin, fromMax, toMin, toMax ]) => {

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



// simple vector noise, vec3->float[-1,1]
const vnoise = Fn( ([ v ])=>{

	return v.dot( vec3( 12.9898, 78.233, -97.5123 ) ).sin().mul( 43758.5453 ).fract().mul( 2 ).sub( 1 );

} );



// generate X-rotation matrix
const matRotX = Fn( ([ angle ])=>{

	var	cos = angle.cos().toVar(),
		sin = angle.sin().toVar();

	return mat4(
		1, 0, 0, 0,
		0, cos, sin, 0,
		0, sin.negate(), cos, 0,
		0, 0, 0, 1 );

} );



// generate Y-rotation matrix
const matRotY = Fn( ([ angle ])=>{

	var	cos = angle.cos().toVar(),
		sin = angle.sin().toVar();

	return mat4(
		cos, 0, sin.negate(), 0,
		0, 1, 0, 0,
		sin, 0, cos, 0,
		0, 0, 0, 1 );

} );



// generate Z-rotation matrix
const matRotZ = Fn( ([ angle ])=>{

	var	cos = angle.cos().toVar(),
		sin = angle.sin().toVar();

	return mat4(
		cos, sin, 0, 0,
		sin.negate(), cos, 0, 0,
		0, 0, 1, 0,
		0, 0, 0, 1 );

} );



// generate YXZ rotation matrix
const matRotYXZ = Fn( ([ angles ])=>{

	var RX = matRotX( angles.x ),
		RY = matRotY( angles.y ),
		RZ = matRotZ( angles.z );

	return RY.mul( RX ).mul( RZ );

} );



// generate scaling matrix
const matScale = Fn( ([ scales ])=>{

	return mat4(
		scales.x, 0, 0, 0,
		0, scales.y, 0, 0,
		0, 0, scales.z, 0,
		0, 0, 0, 1 );

} );



// generate translation matrix
const matTrans = Fn( ([ vector ])=>{

	return mat4(
		1, 0, 0, 0,
		0, 1, 0, 0,
		0, 0, 1, 0,
		vector.x, vector.y, vector.z, 1 );

} );


const selectPlanar = Fn( ([ pos, selAngles, selCenter, selWidth ])=>{

	// select zone in a plane through point selCenter,
	// rotated according to selAngles and selWidth thick
	// result is [0,1] inside plane, 0 below plane, 1 above plane

	// C is projected on segment AB
	// result is [0,1] inside AB, 0 before A, 1 after B

	/* non-optimized version
	var s = spherical(selAngles.x,selAngles.y).mul(selWidth).toVar(),
		c = pos,
		a = selCenter.sub(s.div(2)),
		b = selCenter.add(s.div(2));

	var ca = a.sub(c),
		ab = b.sub(a).toVar();

	var caab = ca.dot(s),
		abab = ab.dot(ab);

	var k = caab.div(abab).negate();
	*/

	var s = spherical( selAngles.x, selAngles.y ).mul( selWidth ).toVar();

	var k = selCenter.sub( s.div( 2 ) ).sub( pos ).dot( s ).div( s.dot( s ) ).negate();

	return smoothstep( 0, 1, k );

} );



const overlayPlanar = Fn( ( params )=>{

	var zone = selectPlanar(
		positionLocal,
		params.selectorAngles,
		params.selectorCenter,
		params.selectorWidth
	).sub( 0.5 ).mul( 2 ).abs().oneMinus().pow( 0.25 ).negate().mul(
		params.selectorShow
	);

	return vec3( 0, zone, zone );

} );



export
{
	mx_noise_float as noise
} from 'three/tsl';

export
{
	vnoise,
	hsl,
	toHsl,
	dynamic,
	spherical,
	applyEuler,
	remapExp,
	matRotX,
	matRotY,
	matRotZ,
	matRotYXZ,
	matTrans,
	matScale,
	selectPlanar,
	overlayPlanar
};
