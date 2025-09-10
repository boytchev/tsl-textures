
//	Equirectangular Texture Generator - TSL Utility Functions
//
//	hsl( h, s, l ):vec3 			- convert from hsl to rgb
//	toHsl( rgb:vec3 ):vec3			- convert from rgb to hsl
//	spherical( phi, theta ):vec3	- from angles to point on unit sphere
//	applyEuler( vec:vec3, eu:vec3 ):vec3 - apply Euler rotation to a vector



import { add, cos, cross, dFdx, dFdy, float, Fn, If, log2, mat4, max, min, mul, mx_noise_float, positionGeometry, pow, remap, select, sin, smoothstep, sub, transformNormalToView, uniform, vec3, vec4 } from 'three/tsl';
import { Color, Vector3 } from 'three';
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

toHsl.setLayout( {
	name: 'toHsl',
	type: 'vec3',
	inputs: [
		{ name: 'rgb', type: 'vec3' },
	]
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

applyEuler.setLayout( {
	name: 'applyEuler',
	type: 'vec4',
	inputs: [
		{ name: 'vec', type: 'vec3' },
		{ name: 'eu', type: 'vec3' },
	]
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

quaternionFromEuler.setLayout( {
	name: 'quaternionFromEuler',
	type: 'vec4',
	inputs: [
		{ name: 'eu', type: 'vec3' },
	]
} );


// apply quaternion rotation to a vector
const applyQuaternion = Fn( ([ vec, quat ]) => {

	var t = cross( quat.xyz, vec ).mul( 2 ).toVar( );

	return add( vec, t.mul( quat.w ), cross( quat.xyz, t ) );

} );

applyQuaternion.setLayout( {
	name: 'applyQuaternion',
	type: 'vec3',
	inputs: [
		{ name: 'vec', type: 'vec3' },
		{ name: 'quat', type: 'vec4' },
	]
} );


// exponential version of remap
const remapExp = Fn( ([ x, fromMin, fromMax, toMin, toMax ]) => {

	x = remap( x, fromMin, fromMax, 0, 1 );
	x = pow( 2, mul( x, log2( toMax.div( toMin ) ) ).add( log2( toMin ) ) );
	return x;

} );

remapExp.setLayout( {
	name: 'remapExp',
	type: 'float',
	inputs: [
		{ name: 'x', type: 'float' },
		{ name: 'fromMin', type: 'float' },
		{ name: 'fromMax', type: 'float' },
		{ name: 'toMin', type: 'float' },
		{ name: 'toMax', type: 'float' },
	]
} );



// simple vector noise, vec3->float[-1,1]
const vnoise = Fn( ([ v ])=>{

	return v.dot( vec3( 12.9898, 78.233, -97.5123 ) ).sin().mul( 43758.5453 ).fract().mul( 2 ).sub( 1 );

} );

vnoise.setLayout( {
	name: 'vnoise',
	type: 'float',
	inputs: [
		{ name: 'v', type: 'vec3' },
	]
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

matRotX.setLayout( {
	name: 'matRotX',
	type: 'mat4',
	inputs: [
		{ name: 'angle', type: 'float' },
	]
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

matRotY.setLayout( {
	name: 'matRotY',
	type: 'mat4',
	inputs: [
		{ name: 'angle', type: 'float' },
	]
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

matRotZ.setLayout( {
	name: 'matRotZ',
	type: 'mat4',
	inputs: [
		{ name: 'angle', type: 'float' },
	]
} );



// generate YXZ rotation matrix
const matRotYXZ = Fn( ([ angles ])=>{

	var RX = matRotX( angles.x ),
		RY = matRotY( angles.y ),
		RZ = matRotZ( angles.z );

	return RY.mul( RX ).mul( RZ );

} );

matRotYXZ.setLayout( {
	name: 'matRotYXZ',
	type: 'mat4',
	inputs: [
		{ name: 'angles', type: 'vec3' },
	]
} );



// generate scaling matrix
const matScale = Fn( ([ scales ])=>{

	return mat4(
		scales.x, 0, 0, 0,
		0, scales.y, 0, 0,
		0, 0, scales.z, 0,
		0, 0, 0, 1 );

} );

matScale.setLayout( {
	name: 'matScale',
	type: 'mat4',
	inputs: [
		{ name: 'scales', type: 'vec3' },
	]
} );



// generate translation matrix
const matTrans = Fn( ([ vector ])=>{

	return mat4(
		1, 0, 0, 0,
		0, 1, 0, 0,
		0, 0, 1, 0,
		vector.x, vector.y, vector.z, 1 );

} );

matTrans.setLayout( {
	name: 'matTrans',
	type: 'mat4',
	inputs: [
		{ name: 'vector', type: 'vec3' },
	]
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

selectPlanar.setLayout( {
	name: 'selectPlanar',
	type: 'float',
	inputs: [
		{ name: 'pos', type: 'vec3' },
		{ name: 'selAngles', type: 'vec2' },
		{ name: 'selCenter', type: 'vec3' },
		{ name: 'selWidth', type: 'float' },
	]
} );


const overlayPlanar = Fn( ( params )=>{

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



const normalVector = Fn( ([ pos ])=>{

	var dU = dFdx( pos ),
		dV = dFdy( pos );

	return transformNormalToView( cross( dU, dV ).normalize() );

} );

normalVector.setLayout( {
	name: 'normalVector',
	type: 'vec3',
	inputs: [
		{ name: 'pos', type: 'vec3' },
	]
} );


var banner = null;
var bannerCounter = 10;
async function showFallbackWarning( ) {

	if ( navigator.gpu != undefined ) {

		var adapter = await navigator.gpu.requestAdapter();
		if ( adapter ) return;

	}

	var html = `
	<div style="font-size:1.25em; font-weight:bold;">PLEASE, WAIT</div>
	<div  style="font-size:0.85em; font-weight:100;" >NO WEBGPU &mdash; TRYING WEBGL2</div>
	<div id="counter"></div>
	`;

	banner = document.createElement( 'div' );
	banner.innerHTML = html;

	banner.style.left = 'calc(50% - 8em)';
	banner.style.width = '16em';

	banner.style.fontFamily = 'Bahnschrifts, Arial';
	banner.style.position = 'absolute';
	banner.style.bottom = '20px';
	banner.style.padding = '12px 6px';
	banner.style.border = '1px solid white';
	banner.style.borderRadius = '4px';
	banner.style.background = 'rgba(0,0,0,0.5)';
	banner.style.color = 'white';
	banner.style.textAlign = 'center';
	banner.style.opacity = '0.8';
	banner.style.outline = 'none';
	banner.style.zIndex = '999';

	document.body.appendChild( banner );

}



function hideFallbackWarning( ) {

	if ( banner ) {

		if ( bannerCounter>0 )
			bannerCounter--;
		else {

			banner.style.display = 'none';
			//		document.removeChild( banner );
			banner = null;

		}

	}

}



// converts all numeric, color and vector properties to nodes
function prepare( userParams, defaults ) {

	var propertyNames = [];
	for ( var item of userParams ) {

	  if ( item && typeof item === 'object' ) {

			propertyNames = Object.keys( item );
			break;

		}

	}

	var params = { ...defaults };

	for ( var key of propertyNames ) {

		if ( typeof userParams[ key ] !== 'undefined' )
			params[ key ] = userParams[ key ];

	}

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



// generate scaled noise
function noised( pos, scale=1, octave=1, seed=0 ) {

	return mx_noise_float( pos.mul( scale, octave ).add( seed ) );

}



// a shim (proposed by Grok) to recover from a change of how Fn
// is proxied since Three.js v0.180.0

// explanation from Grok:
/*
In 0.179.0, TSL.Fn likely returned a plain function, allowing a.defaults
to work without Proxy interference. In 0.180.0, the Proxy wrapping an FnNode
instance blocks defaults access (returns undefined) and requires specific FnNode
behavior, making the wrapper incompatible.

Solutions to Fix the Error and Access a.defaultsWe need a solution that:

* Makes a.defaults directly accessible.
* Preserves TSL compatibility by ensuring the object passed to TSL behaves
like a TSL.Fn Proxy.
* Avoids separate defaults variables.
* Mimics the 0.179.0 API where a.defaults worked.

Given the error, direct property access on the TSL.Fn Proxy (e.g., Object.defineProperty(a, 'defaults', {...})) fails because the get trap
returns undefined for unknown properties on FnNode. The non-Proxy wrapper
breaks TSL, so let’s try a refined approach that balances compatibility and
accessibility.1. Proxy Wrapper with FnNode PrototypeInstead of a non-Proxy
wrapper, create a Proxy that mimics TSL.Fn but stores defaults separately to
bypass FnNode’s get behavior. To avoid breaking TSL, ensure the Proxy’s target
has the FnNode prototype.

Why This Might Work:

* The Proxy’s target inherits the FnNode prototype (via fn.call), making it
appear more like the original TSL.Fn Proxy to TSL’s checks.
* defaults is stored in a Map, bypassing FnNode’s get trap that returns
undefined.
* a.fn exposes the original TSL.Fn Proxy for TSL operations.
* Function calls (a(...)) are forwarded to the original Proxy.
* Matches Object.getOwnPropertyDescriptor behavior.

*/

function TSLFn( jsFunc, defaults, layout = null ) {

	var opacity = null;
	var roughness = null;
	var normal = null;

	const fn = Fn( jsFunc, layout );
	const customProps = new Map();
	customProps.set( 'defaults', defaults );
	customProps.set( 'opacity', opacity );
	customProps.set( 'roughness', roughness );
	customProps.set( 'normal', normal );

	// Create a target with FnNode prototype to mimic TSL.Fn
	const target = function () {};

	Object.setPrototypeOf( target, Object.getPrototypeOf( fn.call ) ); // Inherit FnNode prototype

	return new Proxy( target, {
		get( target, prop, receiver ) {

			if ( prop === 'defaults' ) {

				return customProps.get( 'defaults' );

			}

			if ( prop === 'opacity' ) {

				return customProps.get( 'opacity' );

			}

			if ( prop === 'roughness' ) {

				return customProps.get( 'roughness' );

			}

			if ( prop === 'normal' ) {

				return customProps.get( 'normal' );

			}

			if ( prop === 'fn' ) {

				return fn; // Expose original TSL.Fn Proxy

			}

			return Reflect.get( fn, prop, receiver ); // Forward to original Proxy

		},
		set( target, prop, value, receiver ) {

			if ( prop === 'defaults' ) {

				customProps.set( 'defaults', value );
				return true;

			}

			if ( prop === 'opacity' ) {

				customProps.set( 'opacity', value );
				return true;

			}

			if ( prop === 'roughness' ) {

				customProps.set( 'roughness', value );
				return true;

			}

			if ( prop === 'normal' ) {

				customProps.set( 'normal', value );
				return true;

			}

			return Reflect.set( fn, prop, value, receiver );

		},
		apply( target, thisArg, args ) {

			return Reflect.apply( fn, thisArg, args ); // Delegate calls to original Proxy

		},
		getOwnPropertyDescriptor( target, prop ) {

			if ( prop === 'defaults' ) {

				return {
					value: customProps.get( 'defaults' ),
					writable: true,
					enumerable: true,
					configurable: true,
				};

			}

			if ( prop === 'opacity' ) {

				Reflect.getOwnPropertyDescriptor( opacity, prop );

			}

			if ( prop === 'roughness' ) {

				Reflect.getOwnPropertyDescriptor( roughness, prop );

			}

			if ( prop === 'normal' ) {

				Reflect.getOwnPropertyDescriptor( normal, prop );

			}

			return Reflect.getOwnPropertyDescriptor( fn, prop );

		}
	} );

} // TSLFn


export
{
	mx_noise_float as noise
} from 'three/tsl';

export
{
	noised,
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
	overlayPlanar,
	showFallbackWarning,
	hideFallbackWarning,
	normalVector,
	prepare,
	TSLFn
};
