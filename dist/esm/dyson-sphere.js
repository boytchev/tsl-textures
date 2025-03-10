import { Color, Vector3 } from 'three';
import { Fn, min, sub, max, vec3, float, add, If, select, sin, cos, vec4, mul, cross, remap, pow, log2, mat4, smoothstep, positionGeometry, dFdx, dFdy, transformNormalToView, exp, Loop, mix } from 'three/tsl';

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
Fn( ([ rgb ]) => {

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
Fn( ([ vec, eu ]) => {

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
Fn( ([ x, fromMin, fromMax, toMin, toMax ]) => {

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
Fn( ([ v ])=>{

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
Fn( ([ angles ])=>{

	var RX = matRotX( angles.x ),
		RY = matRotY( angles.y ),
		RZ = matRotZ( angles.z );

	return RY.mul( RX ).mul( RZ );

} );



// generate scaling matrix
Fn( ([ scales ])=>{

	return mat4(
		scales.x, 0, 0, 0,
		0, scales.y, 0, 0,
		0, 0, scales.z, 0,
		0, 0, 0, 1 );

} );



// generate translation matrix
Fn( ([ vector ])=>{

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



Fn( ( params )=>{

	var zone = selectPlanar(
		positionGeometry,
		params.selectorAngles,
		params.selectorCenter,
		params.selectorWidth
	).sub( 0.5 ).mul( 2 ).abs().oneMinus().pow( 0.25 ).negate().mul(
		params.selectorShow
	);

	return vec3( 0, zone, zone );

} );



Fn( ([ pos ])=>{

	var dU = dFdx( pos ),
		dV = dFdy( pos );

	return transformNormalToView( cross( dU, dV ).normalize() );

} );



// converts all numeric, color and vector properties to nodes
function prepare( params ) {

	for ( var name of Object.keys( params ) ) {

		if ( typeof params[ name ] === 'number' )
			params[ name ] = float( params[ name ]);
		else
			if ( params[ name ] instanceof Color )
				params[ name ] = vec3( params[ name ].r, params[ name ].g, params[ name ].b );
			else
				if ( params[ name ] instanceof Vector3 )
					params[ name ] = vec3( params[ name ].x, params[ name ].y, params[ name ].z );

	}

	return params;

}

var noisea = Fn( ([ pos ])=>{

	var p = pos.mul( 5**0.5 ).fract().toVar();
	p.addAssign( p.dot( p.add( vec3( 31.4159, 27.1828, 14.142 ) ) ) );
	return p.z.mul( p.x.add( p.y ) ).fract().mul( 2 ).sub( 1 );

} );


var smooth = Fn( ([ x ])=>{

	var t = x.oneMinus().clamp( 0, 1 ).toVar();
	return t.mul( t ).mul( float( 3 ).sub( t.mul( 2 ) ) );

} );


var noiseg = Fn( ([ pos ])=>{

	var minx = pos.x.floor().toVar();
	var maxx = minx.add( 1 ).toVar();

	var miny = pos.y.floor().toVar();
	var maxy = miny.add( 1 ).toVar();

	var minz = pos.z.floor().toVar();
	var maxz = minz.add( 1 ).toVar();

	var dx = smooth( pos.x.fract() ).toVar();
	var dy = smooth( pos.y.fract() ).toVar();
	var dz = smooth( pos.z.fract() ).toVar();

	var mx = smooth( dx.oneMinus() ).toVar();
	var my = smooth( dy.oneMinus() ).toVar();
	var mz = smooth( dz.oneMinus() ).toVar();

	var n000 = noisea( vec3( minx, miny, minz ) ).mul( mx ).mul( my ).mul( mz ).toVar();
	var n001 = noisea( vec3( minx, miny, maxz ) ).mul( mx ).mul( my ).mul( dz ).toVar();
	var n010 = noisea( vec3( minx, maxy, minz ) ).mul( mx ).mul( dy ).mul( mz ).toVar();
	var n011 = noisea( vec3( minx, maxy, maxz ) ).mul( mx ).mul( dy ).mul( dz ).toVar();
	var n100 = noisea( vec3( maxx, miny, minz ) ).mul( dx ).mul( my ).mul( mz ).toVar();
	var n101 = noisea( vec3( maxx, miny, maxz ) ).mul( dx ).mul( my ).mul( dz ).toVar();
	var n110 = noisea( vec3( maxx, maxy, minz ) ).mul( dx ).mul( dy ).mul( mz ).toVar();
	var n111 = noisea( vec3( maxx, maxy, maxz ) ).mul( dx ).mul( dy ).mul( dz ).toVar();

	return n000.add( n001 ).add( n010 ).add( n011 ).add( n100 ).add( n101 ).add( n110 ).add( n111 );

} );



var dysonSphere = Fn( ( params )=>{

	params = prepare( { ...dysonSphere.defaults, ...params } );

	var pos = positionGeometry.mul( exp( params.scale.div( 2 ).add( 0.5 ) ) ).add( params.seed ).toVar( );

	var res = vec3().toVar();
	var factor = float( 1 ).toVar();

	Loop( params.complexity.add( 4 ), ()=>{

		res.addAssign( noiseg( pos.mul( factor ) ) );
		factor.addAssign( factor );

	} );

	return mix( params.background, params.color, res.x.add( 1 ).div( 5 ) );

} );



dysonSphere.defaults = {
	$name: 'Dyson sphere',

	scale: 2,
	complexity: 2,

	variation: 0,

	color: new Color( 0xc0d0ff ),
	background: new Color( 0 ),

	seed: 0,
};

export { dysonSphere };
