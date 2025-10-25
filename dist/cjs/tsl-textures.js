// TSL Textures v2.4.0

'use strict';

var tsl = require('three/tsl');
var three = require('three');

//import { mx_perlin_noise_float as noise } from 'https://cdn.jsdelivr.net/npm/three@0.167.0/src/nodes/materialx/lib/mx_noise.js';


// helper function - convert hsl to rgb, ported to TSL from:
// https://en.wikipedia.org/wiki/HSL_and_HSV#HSL_to_RGB_alternative

const hslHelper = tsl.Fn( ([ h, s, l, n ])=>{

	var k = n.add( h.mul( 12 ) ).mod( 12 );
	var a = s.mul( tsl.min( l, tsl.sub( 1, l ) ) );
	return l.sub( a.mul( tsl.max( -1, tsl.min( tsl.min( k.sub( 3 ), tsl.sub( 9, k ) ), 1 ) ) ) );

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
const hsl = tsl.Fn( ([ h, s, l ]) => {

	h = h.fract().add( 1 ).fract();
	s = s.clamp( 0, 1 );
	l = l.clamp( 0, 1 );

	var r = hslHelper( h, s, l, 0 );
	var g = hslHelper( h, s, l, 8 );
	var b = hslHelper( h, s, l, 4 );

	return tsl.vec3( r, g, b );

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
const toHsl = tsl.Fn( ([ rgb ]) => {

	var R = tsl.float( rgb.x ).toVar(),
		G = tsl.float( rgb.y ).toVar(),
		B = tsl.float( rgb.z ).toVar();

	var mx = tsl.max( R, tsl.max( G, B ) ).toVar();
	var mn = tsl.min( R, tsl.min( G, B ) ).toVar();

	var H = tsl.float( 0 ).toVar(),
		S = tsl.float( 0 ).toVar(),
		L = tsl.add( mx, mn ).div( 2 );

	tsl.If( mn.notEqual( mx ), ()=>{

		const delta = tsl.sub( mx, mn ).toVar();

		S.assign( tsl.select( L.lessThanEqual( 0.5 ), delta.div( tsl.add( mn, mx ) ), delta.div( tsl.sub( 2, tsl.add( mn, mx ) ) ) ) );
		tsl.If( mx.equal( R ), ()=>{

			H.assign( tsl.sub( G, B ).div( delta ).add( tsl.select( G.lessThanEqual( B ), 6, 0 ) ) );

		} )
			.ElseIf( mx.equal( G ), ()=>{

				H.assign( tsl.sub( B, R ).div( delta ).add( 2 ) );

			} )
			.Else( ()=>{

				H.assign( tsl.sub( R, G ).div( delta ).add( 4 ) );

			} );
		H.divAssign( 6 );

	} );
	return tsl.vec3( H, S, L );

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

			if ( value instanceof three.Vector3 )
				result[ key ] = tsl.uniform( value, 'vec3' );
			else
				result[ key ] = tsl.uniform( value );

		}

	}

	return result;

}



// convert phi-theta angles to position on unit sphere
const spherical = tsl.Fn( ([ phi, theta ]) => {

	return tsl.vec3(
		tsl.sin( theta ).mul( tsl.sin( phi ) ),
		tsl.cos( phi ),
		tsl.cos( theta ).mul( tsl.sin( phi ) )
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
const applyEuler = tsl.Fn( ([ vec, eu ]) => {

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
const quaternionFromEuler = tsl.Fn( ([ eu ]) => {

	var c1 = tsl.cos( eu.x.div( 2 ) );
	var c2 = tsl.cos( eu.y.div( 2 ) );
	var c3 = tsl.cos( eu.z.div( 2 ) );

	var s1 = tsl.sin( eu.x.div( 2 ) );
	var s2 = tsl.sin( eu.y.div( 2 ) );
	var s3 = tsl.sin( eu.z.div( 2 ) );

	return tsl.vec4(
		tsl.add( tsl.mul( s1, c2, c3 ), tsl.mul( c1, s2, s3 ) ),
		tsl.sub( tsl.mul( c1, s2, c3 ), tsl.mul( s1, c2, s3 ) ),
		tsl.add( tsl.mul( c1, c2, s3 ), tsl.mul( s1, s2, c3 ) ),
		tsl.sub( tsl.mul( c1, c2, c3 ), tsl.mul( s1, s2, s3 ) ),
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
const applyQuaternion = tsl.Fn( ([ vec, quat ]) => {

	var t = tsl.cross( quat.xyz, vec ).mul( 2 ).toVar( );

	return tsl.add( vec, t.mul( quat.w ), tsl.cross( quat.xyz, t ) );

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
const remapExp = tsl.Fn( ([ x, fromMin, fromMax, toMin, toMax ]) => {

	x = tsl.remap( x, fromMin, fromMax, 0, 1 );
	x = tsl.pow( 2, tsl.mul( x, tsl.log2( toMax.div( toMin ) ) ).add( tsl.log2( toMin ) ) );
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
const vnoise = tsl.Fn( ([ v ])=>{

	return v.dot( tsl.vec3( 12.9898, 78.233, -97.5123 ) ).sin().mul( 43758.5453 ).fract().mul( 2 ).sub( 1 );

} );

vnoise.setLayout( {
	name: 'vnoise',
	type: 'float',
	inputs: [
		{ name: 'v', type: 'vec3' },
	]
} );



// generate X-rotation matrix
const matRotX = tsl.Fn( ([ angle ])=>{

	var	cos = angle.cos().toVar(),
		sin = angle.sin().toVar();

	return tsl.mat4(
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
const matRotY = tsl.Fn( ([ angle ])=>{

	var	cos = angle.cos().toVar(),
		sin = angle.sin().toVar();

	return tsl.mat4(
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
const matRotZ = tsl.Fn( ([ angle ])=>{

	var	cos = angle.cos().toVar(),
		sin = angle.sin().toVar();

	return tsl.mat4(
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
const matRotYXZ = tsl.Fn( ([ angles ])=>{

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
const matScale = tsl.Fn( ([ scales ])=>{

	return tsl.mat4(
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
const matTrans = tsl.Fn( ([ vector ])=>{

	return tsl.mat4(
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


const selectPlanar = tsl.Fn( ([ pos, selAngles, selCenter, selWidth ])=>{

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

	return tsl.smoothstep( 0, 1, k );

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


const overlayPlanar = tsl.Fn( ( params )=>{

	var zone = selectPlanar(
		tsl.positionGeometry,
		params.selectorAngles,
		params.selectorCenter,
		params.selectorWidth
	).sub( 0.5 ).mul( 2 ).abs().oneMinus().pow( 0.25 ).negate().mul(
		params.selectorShow
	);

	return tsl.vec3( 0, zone, zone );

} );



const normalVector = tsl.Fn( ([ pos ])=>{

	var dU = tsl.dFdx( pos ),
		dV = tsl.dFdy( pos );

	return tsl.transformNormalToView( tsl.cross( dU, dV ).normalize() );

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
			params[ name ] = tsl.float( params[ name ]);
		else
			if ( params[ name ] instanceof three.Color )
				params[ name ] = tsl.vec3( params[ name ].r, params[ name ].g, params[ name ].b );
			else
				if ( params[ name ] instanceof three.Vector3 )
					params[ name ] = tsl.vec3( params[ name ].x, params[ name ].y, params[ name ].z );

	}

	return params;

}



// generate scaled noise
function noised( pos, scale=1, octave=1, seed=0 ) {

	return tsl.mx_noise_float( pos.mul( scale, octave ).add( seed ) );

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

	const fn = tsl.Fn( jsFunc, layout );
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

var defaults$N = {
	$name: 'Brain',

	scale: 2,
	smooth: 0.5,

	wave: 0.5,
	speed: 2.5,

	color: new three.Color( 0xFFD0D0 ),
	background: new three.Color( 0x500000 ),

	seed: 0,
};



var brain = TSLFn( ( params )=>{

	params = prepare( params, defaults$N );

	var pos = tsl.positionGeometry.mul( tsl.exp( params.scale.div( 3 ) ) ).add( params.seed ).toVar( );

	var octaves = tsl.exp( params.smooth.oneMinus().mul( 2 ) );

	var n = tsl.mx_fractal_noise_float( pos.mul( 5 ), octaves ).add( 1 ).div( 2 ).clamp( 0, 1 ).pow( 2 );

	return tsl.mix( params.color, params.background, n );

}, defaults$N );



brain.normal = TSLFn( ( params )=>{

	params = prepare( params, defaults$N );

	var pos = tsl.positionGeometry.mul( tsl.exp( params.scale.div( 3 ) ) ).add( params.seed ).toVar( );

	var octaves = tsl.exp( params.smooth.oneMinus().mul( 2 ) );

	var eps = 0.01;
	var n = tsl.mx_fractal_noise_float( pos.mul( 5 ), octaves );
	var dx = tsl.mx_fractal_noise_float( pos.add( tsl.vec3( eps, 0, 0 ) ).mul( 5 ), octaves ).sub( n ).div( eps );
	var dy = tsl.mx_fractal_noise_float( pos.add( tsl.vec3( 0, eps, 0 ) ).mul( 5 ), octaves ).sub( n ).div( eps );

	var dTime = tsl.mx_noise_float( pos.mul( params.wave.mul( 5 ) ) ).add( 1 ).div( 2 ).mul( 6.28 );
	return tsl.vec3( dx, dy, tsl.time.mul( params.speed ).add( dTime ).sin().add( n, 1 ) ).normalize();

}, defaults$N );

var defaults$M = {
	$name: 'Camouflage',

	scale: 2,

	colorA: new three.Color( 0xc2bea8 ),
	colorB: new three.Color( 0x9c895e ),
	colorC: new three.Color( 0x92a375 ),
	colorD: new three.Color( 0x717561 ),

	seed: 0,
};



var camouflage = TSLFn( ( params )=>{

	params = prepare( params, defaults$M );

	var pos = tsl.positionGeometry.mul( tsl.exp( params.scale ) ).add( params.seed ).toVar( );

	var color = tsl.vec3( 0, 0, 0 ).toVar( );

	tsl.If( tsl.round( tsl.mx_noise_float( pos, 1, 0.2 ) ).greaterThanEqual( 1 ), () => {

		color.assign( params.colorA );

	}
	)
		.ElseIf( tsl.round( tsl.mx_noise_float( pos.yzx, 1, 0.3 ) ).greaterThanEqual( 1 ), () => {

			color.assign( params.colorB );

		}
		)
		.ElseIf( tsl.round( tsl.mx_noise_float( pos.zxy, 1, 0.4 ) ).greaterThanEqual( 1 ), () => {

			color.assign( params.colorC );

		}
		)
		.Else( () => {

			color.assign( params.colorD );

		}
		);

	return color;

}, defaults$M );

var defaults$L = {
	$name: 'Cave art',

	scale: 2,
	thinness: 2,
	noise: 0.3,

	color: new three.Color( 0xD34545 ),
	background: new three.Color( 0xFFF8F0 ),

	seed: 0,
};



var caveArt = TSLFn( ( params ) => {

	params = prepare( params, defaults$L );

	var pos = tsl.positionGeometry.mul( tsl.exp( params.scale ) ).add( params.seed ).toVar( );

	var k1 = tsl.mx_noise_float( pos, 4 ).sin().toVar();
	var k2 = tsl.mx_noise_float( pos.mul( 1.5 ), 4 ).cos().toVar();

	var thinness = tsl.exp( tsl.sub( tsl.float( 3 ), params.thinness ) );
	var k = tsl.sub( thinness, tsl.pow2( tsl.abs( tsl.add( k1, k2 ) ) ).mul( 20 ) ).toVar();

	tsl.If( tsl.or( k1.greaterThan( k2 ), k.lessThan( 0 ) ), ()=>{

		k.assign( 0 );

	} );

	tsl.If( k.lessThanEqual( 0 ), ()=>{

		k.assign( params.noise.mul( tsl.pow2( tsl.mx_noise_float( pos.mul( 30 ) ) ) ) );

	} );

	return tsl.mix( params.background, params.color, k );

}, defaults$L );

var defaults$K = {
	$name: 'Circles',

	scale: 2,
	variety: 1,

	color: new three.Color( 0xF0E0D0 ),

	flat: 0,

	seed: 0,
};



var circles = TSLFn( ( params ) => {

	params = prepare( params, defaults$K );

	var pos = tsl.select( params.flat, tsl.positionGeometry, tsl.positionGeometry.normalize() );

	var angle = tsl.acos( tsl.clamp( pos.y, -1, 1 ) ).mul( 20 );

	var scale = tsl.exp( params.scale.sub( 1 ) );

	var x = angle.div( 3000 ).mul( scale );

	var k = tsl.float( params.seed.sin().mul( 100 ) ).toVar();

	for ( var n=0; n<=10; n++ ) {

		k.addAssign( tsl.sin( x.mul( 2**n ).sub( Math.PI*n/2 ) ).mul( -n*( n+1 )/2 ) );

	}

	k.assign( k.div( 200 ).clamp( -2, 2 ) );

	var HSL = toHsl( params.color );

	var hue = HSL.x.add( k.mul( params.variety ) ).mod( 1 ).mul( 10 );

	var huei = hue.floor();
	var huef = hue.sub( huei );
	huef = tsl.select( huef.lessThan( 0.5 ), huef.pow( 1.5 ), huef.pow( 1/1.5 ) );

	return hsl( huei.add( huef ).div( 10 ), HSL.y, HSL.z );

}, defaults$K );

var defaults$J = {
	$name: 'Clouds',

	scale: 2,
	density: 0.5,
	opacity: 1,

	color: new three.Color( 0xFFFFFF ),
	subcolor: new three.Color( 0xA0A0B0 ),

	seed: 0,
};



var _clouds = tsl.Fn( ( params ) => {

	const pos = tsl.positionGeometry;
	const scale = tsl.exp( params.scale.div( 1.5 ).sub( 0.5 ) );

	// color blending
	const k = tsl.add(
		noised( pos, scale, 1, params.seed ),
		noised( pos, scale, 2, params.seed ).mul( 0.80 ),
		noised( pos, scale, 6, params.seed ).mul( 0.10 ),
		noised( pos, scale, 8, params.seed ).mul( 0.07, params.opacity ),
		params.density.remap( 0, 1, -0.5, 1.5 )
	);

	// opacity
	const a = tsl.clamp( 0, 1, tsl.mul( k, 2 ).pow( 1.5 ).sub( 1 ).mul( params.opacity ) );

	// final color+opacity
	return tsl.vec4( tsl.mix( params.subcolor, params.color, k.clamp( 0, 1 ) ), a );

} );



var clouds = TSLFn( ( params ) => {

	// prepare parameters
	params = prepare( params, defaults$J );

	return _clouds( params ).rgb;

}, defaults$J );



clouds.opacity = TSLFn( ( params ) => {

	// prepare parameters
	params = prepare( params, defaults$J );

	return _clouds( params ).a;

}, defaults$J );

var defaults$I = {
	$name: 'Concrete',
	$normalNode: true,

	scale: 2,
	density: 0.5,
	bump: 0.5,

	seed: 0,
};



var surfacePos$7 = tsl.Fn( ([ pos, normal, bump, density, seed ]) => {

	var k = tsl.mx_noise_float( pos.add( seed ) ).mul( 0.5 ).add( 0.5 );
	k = bump.mul( tsl.pow( tsl.abs( k ), density ) );

	return pos.add( k.mul( normal ) );

} );


var concrete = TSLFn( ( params ) => {

	params = prepare( params, defaults$I );

	var eps = 0.001;

	var position = tsl.positionGeometry.mul( tsl.exp( params.scale.div( 2 ).add( 2 ) ) ).toVar( ),
		normal = tsl.normalLocal.normalize().toVar(),
		tangent = tsl.tangentLocal.normalize().mul( eps ).toVar(),
		bitangent = tsl.cross( normal, tangent ).normalize().mul( eps ).toVar();

	var density = tsl.remap( params.density, 0, 1, 10, 0.5 ).toVar();
	var seed = tsl.vec3( tsl.sin( params.seed ).mul( 100 ), tsl.cos( params.seed.div( 2 ) ).mul( 100 ), tsl.sin( params.seed.div( 3 ) ).mul( 100 ) ).toVar();

	var pos = surfacePos$7( position, normal, params.bump, density, seed );
	var posU = surfacePos$7( position.add( tangent ), normal, params.bump, density, seed );
	var posV = surfacePos$7( position.add( bitangent ), normal, params.bump, density, seed );

	var dU = tsl.sub( posU, pos ),
		dV = tsl.sub( posV, pos );

	return tsl.transformNormalToView( tsl.cross( dU, dV ).normalize() );

}, defaults$I );

var defaults$H = {
	$name: 'Cork',

	scale: 1,
	straight: 1,
	noise: 0.3,

	color: new three.Color( 0xfff0c0 ),
	background: new three.Color( 0xd08060 ),

	seed: 0,
};



var cellCenter$1 = tsl.Fn( ([ cell ])=>{

	return cell.add( vnoise( cell ) );

} );


var cork = TSLFn( ( params )=>{

	params = prepare( params, defaults$H );

	var pos = tsl.positionGeometry.mul( tsl.exp( params.scale.div( 1.5 ).add( 1 ) ) ).add( params.seed ).toVar( );

	var midCell = pos.round().toVar();

	var minCell = midCell.toVar();
	var minDist = tsl.float( 1 ).toVar();

	var cell = tsl.vec3().toVar();
	var dist = tsl.float().toVar();

	var i = tsl.float( 0 ).toVar();


	tsl.Loop( 27, () => {

		var ix = i.mod( 3 ).sub( 1 );
		var iy = i.div( 3 ).floor().mod( 3 ).sub( 1 );
		var iz = i.div( 9 ).floor().sub( 1 );
		cell.assign( midCell.add( tsl.vec3( ix, iy, iz ) ) );
		dist.assign( pos.distance( cellCenter$1( cell ) ) );

		dist.addAssign( tsl.mx_noise_float( pos.add( cell ) ).div( params.straight.exp() ) );

		tsl.If( dist.lessThan( minDist ), ()=>{

			minDist.assign( dist );
			minCell.assign( cell );

		} );
		i.addAssign( 1 );

	} );

	var n = tsl.mx_noise_float( minCell.mul( Math.PI ) ).toVar();
	var r = tsl.mx_noise_float( pos.mul( 12 ) ).toVar();
	r.assign( r.sign().mul( r.abs().pow3() ) );
	r.addAssign( tsl.mx_noise_float( pos.mul( 40 ) ).div( 3 ) );
	var k = n.add( 1 ).div( 2 );

	var color = tsl.mix( params.color, params.background, k.add( r.mul( params.noise ) ) ).toVar();

	return color;

}, defaults$H );

var defaults$G = {
	$name: 'Dalmatian spots',
	$width: 260,

	scale: 2,
	density: 0.6,

	color: new three.Color( 0xFFFFFF ),
	background: new three.Color( 0x000000 ),

	seed: 0,
};



var dalmatianSpots = TSLFn( ( params )=>{

	params = prepare( params, defaults$G );

	var pos = tsl.positionGeometry.mul( tsl.exp( params.scale ) ).add( params.seed ).sub( 1000 ).toVar( );

	var k = tsl.float( 1 ).toVar();

	var d = tsl.float( 1.5 ).sub( params.density ).mul( 2 ).toVar();
	var count = params.density.mul( 5 ).add( 5 ).toVar();

	tsl.Loop( count, ()=> {

		k.mulAssign( tsl.mx_noise_float( pos ).abs().pow( d ).mul( 100 ).sub( 50 ).clamp( 0, 1 ).oneMinus() );
		pos.assign( pos.mul( 1.01 ) );
		k.mulAssign( tsl.mx_noise_float( pos.yzx ).abs().pow( d ).mul( 100 ).sub( 50 ).clamp( 0, 1 ).oneMinus() );
		pos.assign( pos.mul( 1.01 ) );
		k.mulAssign( tsl.mx_noise_float( pos.zxy ).abs().pow( d ).mul( 100 ).sub( 50 ).clamp( 0, 1 ).oneMinus() );
		pos.assign( pos.mul( 1.01 ) );

	} );

	return tsl.mix( params.background, params.color, k.clamp( 0, 1 ) );

}, defaults$G );

var defaults$F = {
	$name: 'Darth Maul',

	scale: 2,
	shift: new three.Vector3( 0, 0, 0 ),
	complexity: 0,

	angle: 60,
	distance: 1.9,

	color: new three.Color( 0xF04040 ),
	background: new three.Color( 0x000000 ),
	balance: 0,

	seed: 0,
};



var darthMaul = TSLFn( ( params ) => {

	params = prepare( params, defaults$F );

	var position = tsl.positionGeometry.add( params.shift ).mul( tsl.exp( params.scale.div( 1.5 ).sub( 1 ) ) ).sub( params.shift ).mul( tsl.vec3( 1, 1/2, 1/2 ) ).toVar( );

	var s = tsl.select( tsl.positionGeometry.y.mul( params.angle.radians().cos() ).add( tsl.positionGeometry.z.mul( params.angle.radians().sin() ) ).greaterThan( params.distance ), 1, 0 );

	// implement symmetry
	position.x.assign( position.x.add( params.shift.x ).abs() );
	position.y.addAssign( params.seed );
	position.z.mulAssign( params.shift.z );

	var n = tsl.mx_noise_float( position ).toVar();

	var k = n.sin().mul( n.mul( params.complexity.mul( 2 ).add( 1 ).exp() ).sin() ).remap( 0, 0.2, 1, -1 ).greaterThan( params.balance ).select( 0, 1 );

	var c = tsl.select( position.x.greaterThan( tsl.mx_noise_float( position.mul( 2.3 ) ).abs().mul( 0.5 ).add( 0.02 )	), 1, 0 );

	return tsl.mix( params.background, params.color, k.mul( s ).mul( c ).clamp( 0, 1 ) );

}, defaults$F );

var defaults$E = {
	$name: 'Dyson sphere',

	scale: 2,
	complexity: 2,

	variation: 0,

	color: new three.Color( 0xc0d0ff ),
	background: new three.Color( 0 ),

	seed: 0,
};



var noisea = tsl.Fn( ([ pos ])=>{

	var p = pos.mul( 5**0.5 ).fract().toVar();
	p.addAssign( p.dot( p.add( tsl.vec3( 31.4159, 27.1828, 14.142 ) ) ) );
	return p.z.mul( p.x.add( p.y ) ).fract().mul( 2 ).sub( 1 );

} );


var smooth = tsl.Fn( ([ x ])=>{

	var t = x.oneMinus().clamp( 0, 1 ).toVar();
	return t.mul( t ).mul( tsl.float( 3 ).sub( t.mul( 2 ) ) );

} );


var noiseg = tsl.Fn( ([ pos ])=>{

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

	var n000 = noisea( tsl.vec3( minx, miny, minz ) ).mul( mx ).mul( my ).mul( mz ).toVar();
	var n001 = noisea( tsl.vec3( minx, miny, maxz ) ).mul( mx ).mul( my ).mul( dz ).toVar();
	var n010 = noisea( tsl.vec3( minx, maxy, minz ) ).mul( mx ).mul( dy ).mul( mz ).toVar();
	var n011 = noisea( tsl.vec3( minx, maxy, maxz ) ).mul( mx ).mul( dy ).mul( dz ).toVar();
	var n100 = noisea( tsl.vec3( maxx, miny, minz ) ).mul( dx ).mul( my ).mul( mz ).toVar();
	var n101 = noisea( tsl.vec3( maxx, miny, maxz ) ).mul( dx ).mul( my ).mul( dz ).toVar();
	var n110 = noisea( tsl.vec3( maxx, maxy, minz ) ).mul( dx ).mul( dy ).mul( mz ).toVar();
	var n111 = noisea( tsl.vec3( maxx, maxy, maxz ) ).mul( dx ).mul( dy ).mul( dz ).toVar();

	return n000.add( n001 ).add( n010 ).add( n011 ).add( n100 ).add( n101 ).add( n110 ).add( n111 );

} );



var dysonSphere = TSLFn( ( params )=>{

	params = prepare( params, defaults$E );

	var pos = tsl.positionGeometry.mul( tsl.exp( params.scale.div( 2 ).add( 0.5 ) ) ).add( params.seed ).toVar( );

	var res = tsl.vec3().toVar();
	var factor = tsl.float( 1 ).toVar();

	tsl.Loop( params.complexity.add( 4 ), ()=>{

		res.addAssign( noiseg( pos.mul( factor ) ) );
		factor.addAssign( factor );

	} );

	return tsl.mix( params.background, params.color, res.x.add( 1 ).div( 5 ) );

}, defaults$E );

var defaults$D = {
	$name: 'Entangled',

	scale: 2,
	density: 10,

	color: new three.Color( 0x002040 ),
	background: new three.Color( 0xFFFFFF ),

	seed: 0,
};



var entangled = TSLFn( ( params ) => {

	params = prepare( params, defaults$D );

	var scale = tsl.exp( params.scale.div( 2 ) ).toVar( );
	var pos = tsl.positionGeometry.add( params.seed ).toVar( );
	var k = tsl.float( -1e4 ).toVar( );
	var k1 = tsl.float( 0 ).toVar( );

	tsl.Loop( tsl.floor( tsl.float( params.density ) ), ()=> {

		k1.assign( tsl.sin( tsl.mx_noise_float( tsl.mul( pos, scale ) ).mul( 3*Math.PI ) ) );
		k.assign( tsl.max( k, k1 ) );
		scale.mulAssign( 1.2 );

	} );

	k.assign( tsl.oneMinus( tsl.pow( tsl.abs( k ), 5 ) ).mul( 6 ) );

	return tsl.mix( params.color, params.background, k );

}, defaults$D );

var defaults$C = {
	$name: 'Fordite',
	scale: 2,
	color: new three.Color( 0, 0, 0 ),
	seed: 0,
};



var fordite = TSLFn( ( params ) => {

	params = prepare( params, defaults$C );

	var pos = tsl.positionGeometry.mul( tsl.exp( params.scale ) ).add( params.seed ).toVar( );

	var k = tsl.mx_noise_float(
		tsl.vec3(
			tsl.mx_noise_float( pos ),
			tsl.mx_noise_float( pos ).mul( 2 ),
			tsl.mx_noise_float( pos ).mul( 3 ),
		)
	).toVar( );

	return hsl(
		k,
		1,
		tsl.sin( tsl.mul( k, Math.PI, 4 ) ).mul( 0.5 ).add( 0.5 )
	).add( params.color );

}, defaults$C );

var defaults$B = {
	$name: 'Gas giant',

	scale: 2,
	turbulence: 0.3,
	blur: 0.6,

	colorA: new three.Color( 0xFFF8F0 ),
	colorB: new three.Color( 0xF0E8B0 ),
	colorC: new three.Color( 0xAFA0D0 ),

	seed: 0,
};



var gasGiant = TSLFn( ( params )=>{

	params = prepare( params, defaults$B );

	var scale = params.scale.div( 2 ).add( 1 ).toVar();
	var pos = tsl.positionGeometry.mul( tsl.exp( scale ) ).add( params.seed ).toVar( );

	// turbulence strength
	var turbulence = params.turbulence.mul(
		tsl.mx_noise_float( tsl.vec3( 0, pos.y.mul( 0.5 ), 0 ).add( 1 ) ).add(
			tsl.mx_noise_float( tsl.vec3( 0, pos.y.mul( 1 ), 0 ).add( 1 ) ).mul( 0.5 ),
			tsl.mx_noise_float( tsl.vec3( 1, pos.y.mul( 2 ), 1 ).add( 1 ) ).mul( 0.25 )
		)
	).mul( 5 ).abs().toVar();

	var spot = tsl.mx_noise_float( pos.div( 4 ) ).add( 1 ).div( 2 ).pow( 10 ).mul( 10 ).smoothstep( 0, 1 );

	// apply turbulence
	pos.addAssign( tsl.vec3( tsl.mx_noise_float( pos ), tsl.mx_noise_float( pos.yxz ), tsl.mx_noise_float( pos.yzx ) ).mul( turbulence.mul( spot.mul( 2 ).exp() ) ) );


	var blur = params.blur.pow( 0.2 ).oneMinus().mul( turbulence.add( 1 ) ).toVar();

	var k = tsl.mx_noise_float( pos.mul( tsl.vec3( 0, scale, 0 ) ) );
	k = k.add( tsl.mx_noise_float( pos.mul( tsl.vec3( 1, 15, 1 ) ) ).mul( blur ) );
	k = k.add( -0.5 ).smoothstep( -1, 1 ).oneMinus();

	var n = tsl.mx_noise_float( tsl.vec3( 0, pos.y.mul( 0.75 ), 0 ) ).add( 1 );

	var HSL = toHsl( tsl.mix( params.colorB, params.colorA, n ) );
	var color = hsl( HSL.x.add( tsl.mx_noise_float( pos.mul( tsl.vec3( 0, scale, 0 ) ) ).div( 4 ) ), HSL.y, HSL.z ).toVar();

	color.assign( tsl.mix( color, params.colorC, turbulence.mul( 0.3 ) ) );

	return color.mul( k );

}, defaults$B );

var defaults$A = {
	$name: 'Grid',

	countU: 32,
	countV: 16,

	thinness: 0.8,

	color: new three.Color( 0x000000 ),
	background: new three.Color( 0xFFFFFF ),

	flat: 0,
};



var grid = TSLFn( ( params ) => {

	params = prepare( params, defaults$A );

	var aspect = tsl.select( params.flat, tsl.screenSize.x.div( tsl.screenSize.y ), 2 );

	var uv = tsl.select( params.flat, tsl.screenUV, tsl.equirectUV( tsl.positionGeometry.normalize() ) ).toVar(),
		a = tsl.mul( uv.x, aspect, Math.PI ),
		b = tsl.mul( uv.y, Math.PI ).toVar();

	var uTo = tsl.div( tsl.round( tsl.mul( uv.x, params.countU ) ), params.countU ),
		vTo = tsl.div( tsl.round( tsl.mul( uv.y, params.countV ) ), params.countV ),
		aTo = tsl.mul( uTo, aspect, Math.PI ),
		bTo = tsl.mul( vTo, Math.PI );

	var angleU = tsl.abs( tsl.sub( a, aTo ) ).mul( tsl.select( params.flat, 1, tsl.sin( b ) ) ),
		angleV = tsl.abs( tsl.sub( b, bTo ) ),
		angle = tsl.min( angleU, angleV );

	var treshold = tsl.mul( tsl.min( tsl.div( aspect.mul( Math.PI ), params.countU ), tsl.div( Math.PI, params.countV ) ), tsl.remapClamp( tsl.pow( params.thinness, 0.5 ), 0, 1, 0.9, 0.04 ), 0.5 );
	var k = tsl.oneMinus( tsl.smoothstep( tsl.sub( treshold, 0.002 ), tsl.add( treshold, 0.002 ), angle ) );

	return tsl.mix( params.background, params.color, k );

}, defaults$A );

var defaults$z = {
	$name: 'Isolines',

	scale: 2,
	density: 40,
	blur: 0.3,
	thinness: 0.6,

	color: new three.Color( 0xFFFFFF ),
	background: new three.Color( 0x000000 ),

	seed: 0,
};



var isolines = TSLFn( ( params )=>{

	params = prepare( params, defaults$z );

	var pos = tsl.positionGeometry.mul( tsl.exp( params.scale ) ).add( params.seed ).toVar( );

	var k = tsl.mx_noise_float( pos ).mul( params.density );

	k = tsl.oneMinus( tsl.sin( k ) ).div( 2 );

	k = tsl.smoothstep( tsl.sub( params.thinness, params.blur ), tsl.add( params.thinness, params.blur ), k );

	return tsl.mix( params.color, params.background, k );

}, defaults$z );

var defaults$y = {
	$name: 'Karst rock',

	scale: 2,

	color: new three.Color( 0xFFF4F0 ),
	background: new three.Color( 0xD0D0D0 ),

	seed: 0,
};



var karstRock = TSLFn( ( params )=>{

	params = prepare( params, defaults$y );

	var pos = tsl.positionGeometry.mul( tsl.exp( params.scale ) ).add( params.seed.sin().mul( 5 ) ).toVar( );

	var pos2 = pos.add( tsl.mx_noise_float( pos.mul( 2 ) ) ).toVar();

	var k = tsl.mx_noise_float( pos2 ).div( tsl.mx_noise_float( pos2.mul( 1.01 ) ) ).clamp( 0, 2 ).toVar();

	k.addAssign( tsl.mx_noise_float( pos.mul( 100 ) ).div( 3 ) );
	k.addAssign( tsl.mx_noise_float( pos.mul( 2 ) ).div( 2 ) );

	return tsl.mix( params.background, params.color, k ).mul( k.pow( 0.1 ) );

}, defaults$y );

var defaults$x = {
	$name: 'Marble',

	scale: 1.2,
	thinness: 5,
	noise: 0.3,

	color: new three.Color( 0x4545D3 ),
	background: new three.Color( 0xF0F8FF ),

	seed: 0,
};



var marble = TSLFn( ( params ) => {

	params = prepare( params, defaults$x );

	var pos = tsl.positionGeometry.mul( tsl.exp( params.scale ) ).add( params.seed ).toVar( );

	var k = tsl.add(
		tsl.mx_noise_float( pos ),
		tsl.mx_noise_float( pos.mul( 2 ) ).mul( 0.5 ),
		tsl.mx_noise_float( pos.mul( 6 ) ).mul( 0.1 )
	);

	var k = tsl.oneMinus( k.abs().pow( 2.5 ) ).toVar();

	var	maxSmooth = tsl.oneMinus( tsl.pow( 0.5, params.thinness.add( 7 ) ) ).toVar(),
		minSmooth = tsl.oneMinus( tsl.pow( 0.5, params.thinness.add( 7 ).mul( 0.5 ) ) ).toVar();

	tsl.If( k.greaterThan( maxSmooth ), ()=>{

		k.assign( 1 );

	} )
		.ElseIf( k.lessThan( minSmooth ), ()=>{

			k.assign( 0 );

		} )
		.Else( ()=> {

			var a = k.sub( minSmooth );
			var b = maxSmooth.sub( minSmooth );
			k.assign( tsl.pow( tsl.div( a, b ), 5 ).mul( 0.75 ) );
			k.assign( k.mul( tsl.add( 0.5, tsl.mx_noise_float( pos.mul( 2 ) ).mul( 1.5 ) ) ) );

		} );

	k.assign( k.add( tsl.mul( params.noise, tsl.mx_noise_float( pos.mul( 150 ) ).abs().pow3() ) ) );

	return tsl.mix( params.background, params.color, k );

}, defaults$x );

var defaults$w = {
	$name: 'Neon Lights',

	scale: 1.5,
	thinness: 0.8,
	mode: 0, // 0=additive, 1=subtractive

	colorA: new three.Color( 0xFF0000 ),
	colorB: new three.Color( 0x00FF00 ),
	colorC: new three.Color( 0x0000FF ),
	background: new three.Color( 0x000000 ),

	seed: 0,
};



var neonLights = TSLFn( ( params ) => {

	params = prepare( params, defaults$w );

	var pos = tsl.positionGeometry;//.mul( exp( params.scale ) ).add( params.seed ).toVar( );

	var scale = tsl.exp( params.scale.remap( 0, 4, 2, -2 ) ).toVar();
	var thinness = tsl.exp( params.thinness.remap( 0, 1, 1.5, 0 ) ).toVar();

	var color = params.background.toVar();
	var neon = tsl.vec3( 0 ).toVar();

	var x = tsl.mx_noise_float( pos.xyz ).toVar();
	var y = tsl.mx_noise_float( pos.yzx ).toVar();
	var z = tsl.mx_noise_float( pos.zxy ).toVar();

	var k = tsl.mx_noise_float( tsl.vec3( x, y, z ).mul( scale ).add( params.seed ) ).toVar();
	k.assign( tsl.oneMinus( tsl.sqrt( tsl.abs( k ) ) ).pow( 3 ) );

	neon.assign( params.colorA );
	var HSL = toHsl( neon );
	neon.assign( hsl( HSL.x, HSL.y, HSL.z.mul( k ) ) );

	color.addAssign( tsl.select( params.mode.equal( 0 ), neon, neon.negate() ).mul( thinness ) );

	k.assign( tsl.mx_noise_float( tsl.vec3( y, z, x ).mul( scale ).sub( params.seed ) ) );
	k.assign( tsl.oneMinus( tsl.sqrt( tsl.abs( k ) ) ).pow( 3 ) );

	neon.assign( params.colorB );
	var HSL = toHsl( neon );
	neon.assign( hsl( HSL.x, HSL.y, HSL.z.mul( k ) ) );

	color.addAssign( tsl.select( params.mode.equal( 0 ), neon, neon.negate() ).mul( thinness ) );


	k.assign( tsl.mx_noise_float( tsl.vec3( z, x, y.negate() ).mul( scale ).add( params.seed ) ) );
	k.assign( tsl.oneMinus( tsl.sqrt( tsl.abs( k ) ) ).pow( 3 ) );

	neon.assign( params.colorC );
	var HSL = toHsl( neon );
	neon.assign( hsl( HSL.x, HSL.y, HSL.z.mul( k ) ) );

	color.addAssign( tsl.select( params.mode.equal( 0 ), neon, neon.negate() ).mul( thinness ) );

	return color;

}, defaults$w );

var defaults$v = {
	$name: 'Photosphere',

	scale: 2,

	color: new three.Color( 0xFFFF00 ),
	background: new three.Color( 0xFF0000 ),

	seed: 0,
};



var photosphere = TSLFn( ( params ) => {

	params = prepare( params, defaults$v );

	var scale = tsl.exp( params.scale.add( 1 ) ).toVar( );
	var pos = tsl.positionGeometry.toVar( );

	var vec = tsl.vec3( pos ).toVar();

	tsl.Loop( 6, () => {

		vec.assign( applyEuler( vec, pos.mul( scale ) ) );
		scale.mulAssign( params.seed.mul( scale ).sin().mul( 0.05 ).add( 1.1 ) );

	} );


	var k = tsl.mx_noise_float( vec ).add( 1 ).div( 2 );

	return tsl.mix( params.background, params.color, k );

}, defaults$v );

var defaults$u = {
	$name: 'Planet',

	scale: 2,

	iterations: 5,

	levelSea: 0.3,
	levelMountain: 0.7,

	balanceWater: 0.3,
	balanceSand: 0.2,
	balanceSnow: 0.8,

	colorDeep: new three.Color( 0x123a59 ).convertLinearToSRGB(), // SteelBlue
	colorShallow: new three.Color( 0x87CEEB ).convertLinearToSRGB(), // SkyBlue
	colorBeach: new three.Color( 0xFFFACD ).convertLinearToSRGB(), // LemonChiffon
	colorGrass: new three.Color( 0x3CB371 ).convertLinearToSRGB(), // MediumSeaGreen
	colorForest: new three.Color( 0x003000 ).convertLinearToSRGB(), // Dark green
	colorSnow: new three.Color( 0xF0FFFF ).convertLinearToSRGB(), // Azure

	seed: 0,
};



var planet = TSLFn( ( params )=>{

	params = prepare( params, defaults$u );

	var k = tsl.float( 0 ).toVar(),
		sum = tsl.float( 0 ).toVar(),
		scale = tsl.exp( params.scale.sub( 2 ) ).toVar(),
		power = tsl.float( 2 ).toVar();

	tsl.Loop( params.iterations.add( 10 ), ()=>{

		k.addAssign( tsl.mul( power, tsl.mx_noise_float( tsl.positionGeometry.mul( scale ).add( params.seed ) ) ) );
		sum.addAssign( power );
		scale.mulAssign( 1.5 );
		power.mulAssign( 0.8 );

	} );

	k.assign( tsl.mul( k, k, 0.5 ).div( sum ) );

	var levelSea = params.levelSea.pow( 2 ).toVar();
	var levelMountain = params.levelMountain.pow( 2 ).toVar();
	var levelSand = tsl.mix( levelSea, levelMountain, params.balanceSand ).toVar();
	var levelCoast = tsl.mix( levelSea, levelSand, 0.4 ).toVar();
	var levelGrass = tsl.mix( levelSea, levelSand, 0.6 ).toVar();

	var color = tsl.vec3().toVar();

	// process water
	tsl.If( k.lessThan( levelSea ), ()=>{

		// deep-shallow
		color.assign( tsl.mix(
			params.colorDeep,
			params.colorShallow,
			tsl.remap( k, 0, levelSea, 0, 1 ).pow( tsl.exp( params.balanceWater.mul( -8 ).add( 4 ) ) )
		) );

	} )
		.ElseIf( k.lessThan( levelCoast ), ()=>{

			// shallow-sand
			color.assign( tsl.mix(
				params.colorShallow,
				params.colorBeach,
				tsl.remap( k, levelSea, levelCoast )
			) );

		} )
		.ElseIf( k.lessThan( levelGrass ), ()=>{

			// sand
			color.assign( params.colorBeach );

		} )
		.ElseIf( k.lessThan( levelSand ), ()=>{

			// shallow-sand-grass
			color.assign( tsl.mix(
				params.colorBeach,
				params.colorGrass,
				tsl.remap( k, levelGrass, levelSand )
			) );

		} )
		.ElseIf( k.lessThan( levelMountain ), ()=>{

			// grass-forest
			color.assign( tsl.mix(
				params.colorGrass,
				params.colorForest,
				tsl.remap( k, levelSand, levelMountain ).pow( 0.75 )
			) );

		} )
		.Else( ()=>{

			// forest-snow
			var levelSnow = tsl.mix( 1, levelMountain, params.balanceSnow );
			color.assign( tsl.mix(
				params.colorForest,
				params.colorSnow,
				tsl.smoothstep( tsl.mix( levelSnow, levelMountain, params.balanceSnow.pow( 0.5 ) ), levelSnow, k )
			) );

		} );

	return color;

}, defaults$u );

var defaults$t = {
	$name: 'Polka dots',

	count: 2,
	size: 0.5,
	blur: 0.25,

	color: new three.Color( 0x000000 ),
	background: new three.Color( 0xFFFFFF ),

	flat: 0,
};



var goldenRatio = ( 1+5**0.5 )/2;



var polkaDots = TSLFn( ( params ) => {

	params = prepare( params, defaults$t );

	var dist = tsl.float( 1 ).toVar();

	tsl.If( params.flat.equal( 1 ), ()=>{

		var cnt = params.count.pow( 2 ).sub( 0.5 ).toVar();
		var pos = tsl.positionGeometry.xy.mul( cnt ).mul( tsl.mat2( 1, 1, -1, 1 ) );
		var posTo = pos.round().toVar();

		dist.assign( pos.distance( posTo ).div( cnt ) );

	} ).Else( ()=>{

		var cnt = tsl.pow( 10, params.count ).toVar();
		var vec = tsl.positionGeometry.normalize().toVar();

		var besti = tsl.oneMinus( vec.y ).mul( cnt ).sub( 1 ).div( 2 );

		var span = tsl.max( 10, cnt.pow( 0.5 ) );

		var mini = besti.sub( span ).floor().clamp( 0, cnt );
		var maxi = besti.add( span ).floor().clamp( 0, cnt );

		dist.assign( 1 ).toVar();

		tsl.Loop( maxi.sub( mini ), ( { i } )=> {

			var j = tsl.add( i, mini );
			var theta = tsl.mod( tsl.mul( 2*Math.PI/goldenRatio, j ), 2*Math.PI );
			var phi = tsl.acos( tsl.oneMinus( tsl.float( j ).mul( 2 ).add( 1 ).div( cnt ) ) );
			var pnt = spherical( phi, theta );//.normalize();
			dist.assign( tsl.min( dist, tsl.distance( vec, pnt ) ) );

		} ); // Loop

	} ); // Else

	var size = tsl.exp( params.size.mul( 5 ).sub( 5 ) ).toVar();
	var blur = params.blur.pow( 4 ).toVar();
	var k = tsl.smoothstep( size.sub( blur ), size.add( blur ), dist );

	return tsl.mix( params.color, params.background, k );

}, defaults$t );

var defaults$s = {
	$name: 'Processed wood',
	$width: 260,

	scale: 2,
	lengths: 4,
	strength: 0.3,
	angle: 0,

	color: new three.Color( 0x702020 ),
	background: new three.Color( 0xF0D0A0 ),

	seed: 0,
};



var processedWood = TSLFn( ( params )=>{

	params = prepare( params, defaults$s );

	var angle = tsl.radians( params.angle ).toVar();
	var posLocal = tsl.vec3(
		tsl.sub( tsl.positionGeometry.x.mul( tsl.cos( angle ) ), tsl.positionGeometry.y.mul( tsl.sin( angle ) ) ),
		tsl.add( tsl.positionGeometry.x.mul( tsl.sin( angle ) ), tsl.positionGeometry.y.mul( tsl.cos( angle ) ) ),
		tsl.positionGeometry.z,
	).toVar();

	var scale = params.scale.div( 2 ).add( 1 ).toVar();
	var pos = posLocal.mul( tsl.exp( scale ) ).add( params.seed ).toVar( );

	var len = params.lengths.add( 5 ).reciprocal().toVar();
	var k = tsl.mx_noise_float( pos.mul( scale, tsl.vec3( 1, len, len ) ) );
	k = k.mul( tsl.mx_noise_float( pos.mul( tsl.vec3( 25, 1, 1 ) ) ).add( -1 ).mul( 0.2 ) );
	k = k.add( params.strength.sub( 0.5 ) ).smoothstep( -0.3, 0.3 ).oneMinus();

	return tsl.mix( params.color, params.background, k );

}, defaults$s );

var defaults$r = {
	$name: 'Protozoa',

	scale: 1.5,
	fat: 0.7,
	amount: 0.4,

	color: new three.Color( 0xA0A0A0 ),
	subcolor: new three.Color( 0xE0E8FF ),
	background: new three.Color( 0xF0F8FF ),

	seed: 0,
};



var pnoise = tsl.Fn( ([ pos, fat ])=>{

	return tsl.mx_noise_float( pos ).mul( fat ).clamp( -3.14, 3.14 ).cos().add( 1 ).div( 2 );

} );



var protozoa = TSLFn( ( params )=>{

	params = prepare( params, defaults$r );

	var pos = tsl.positionGeometry.mul( tsl.exp( params.scale.sub( 1 ) ) ).add( params.seed ).toVar( );

	var matcap = tsl.vec3( tsl.matcapUV, tsl.matcapUV.length() ).toVar();

	var rings1 = tsl.float( 0 ).toVar();
	var rings2 = tsl.float( 0 ).toVar();

	var n1 = tsl.float( 0 ).toVar();
	var n2 = tsl.float( 0 ).toVar();

	var fat = params.fat.add( 0.2 ).oneMinus().mul( 60 ).add( 30 ).toVar();
	var scale = tsl.float( 2 ).toVar();

	var dPos = params.amount.div( 2 ).add( 0.5 ).exp().toVar();

	tsl.Loop( 10, ()=>{

		rings1.assign( pnoise( pos.xyz.add( matcap ), fat ) );
		rings2.assign( pnoise( pos.yzx.add( matcap ), fat ) );

		n1.addAssign( rings1.mul( rings2 ).mul( scale ) );
		n2.addAssign( rings1.max( rings2 ).mul( scale ) );

		pos.assign( tsl.mix( pos.mul( dPos ), 0, 0.4 ) );

		scale.mulAssign( 0.9 );

	} );

	return tsl.mix( params.background, tsl.mix( params.color, params.subcolor, n2.mul( 0.1 ) ), n1 );

}, defaults$r );

var defaults$q = {
	$name: 'Rotator',
	$positionNode: true,
	$selectorPlanar: true,

	angles: new three.Vector3( 0.4, -0.6, 0 ),
	center: new three.Vector3( 0, 0, 0 ),

	selectorCenter: new three.Vector3( 0, 0, 0 ),
	selectorAngles: new three.Vector2( 0, 0 ),
	selectorWidth: 2,

};



var surfacePos$6 = tsl.Fn( ([ pos, params ])=>{

	var zone = selectPlanar( pos, params.selectorAngles, params.selectorCenter, params.selectorWidth );

	var R = matRotYXZ( params.angles.mul( zone ) ),
		T = matTrans( params.center ),
		TN = matTrans( params.center.negate() );

	return T.mul( R ).mul( TN ).mul( tsl.vec4( pos, 1 ) ).xyz;

} );



var rotator = TSLFn( ( params )=>{

	params = prepare( params, defaults$q );

	return surfacePos$6( tsl.positionGeometry, params );

}, defaults$q );



rotator.normal = TSLFn( ( params ) => {

	params = prepare( params, defaults$q );

	var eps = 0.01;

	var position = tsl.positionGeometry,
		normal = tsl.normalLocal.normalize().toVar(),
		tangent = tsl.tangentLocal.normalize().mul( eps ).toVar(),
		bitangent = tsl.cross( normal, tangent ).normalize().mul( eps ).toVar();

	var pos = surfacePos$6( position, params );
	var posU = surfacePos$6( position.add( tangent ), params );
	var posV = surfacePos$6( position.add( bitangent ), params );

	var dU = tsl.sub( posU, pos ),
		dV = tsl.sub( posV, pos );

	return tsl.transformNormalToView( tsl.cross( dU, dV ).normalize() );

}, defaults$q );

var defaults$p = {
	$name: 'Rough clay',
	$normalNode: true,

	scale: 2,
	bump: 0.5,
	curvature: 0.2,

	seed: 0,
};



var surfacePos$5 = tsl.Fn( ([ pos, normal, bump, curvature ]) => {

	var k1 = tsl.mx_worley_noise_float( pos.add( tsl.mx_noise_float( pos ).mul( curvature ) ) ).add( 0.8 ).pow( 5 ).toVar();
	k1.addAssign( k1.pow( 0.5 ) );
	//k1.addAssign( noise(pos.mul(noiseScale.add(8))).add(1).pow(2).mul(noiseBump) );
	return pos.add( normal.mul( k1 ).mul( bump ) );

} );



var roughClay = TSLFn( ( params ) => {

	params = prepare( params, defaults$p );

	var eps = 0.001;

	var bump = params.bump.div( 50 ).toVar();

	var position = tsl.positionGeometry.mul( tsl.exp( params.scale.div( 2 ) ) ).add( params.seed.sin().mul( 10 ) ).toVar( ),
		normal = tsl.normalLocal.normalize().toVar(),
		tangent = tsl.tangentLocal.normalize().mul( eps ).toVar(),
		bitangent = tsl.cross( normal, tangent ).normalize().mul( eps ).toVar();

	var pos = surfacePos$5( position, normal, bump, params.curvature );
	var posU = surfacePos$5( position.add( tangent ), normal, bump, params.curvature );
	var posV = surfacePos$5( position.add( bitangent ), normal, bump, params.curvature );

	var dU = tsl.sub( posU, pos ),
		dV = tsl.sub( posV, pos );

	return tsl.transformNormalToView( tsl.cross( dU, dV ).normalize() );


}, defaults$p );

var defaults$o = {
	$name: 'Runny eggs',

	scale: 1,

	sizeYolk: 0.2,
	sizeWhite: 0.7,

	colorYolk: new three.Color( 'orange' ),
	colorWhite: new three.Color( 'white' ),
	colorBackground: new three.Color( 'lightgray' ),

	seed: 0,
};



var runnyEggs = TSLFn( ( params ) => {

	params = prepare( params, defaults$o );

	var pos = tsl.positionGeometry.mul( tsl.exp( params.scale.div( 1 ) ) ).add( params.seed.sin().mul( 10 ) ).toVar( );

	var sizeYolk = params.sizeYolk.oneMinus();
	var sizeWhite = params.sizeWhite.oneMinus();

	var n = tsl.mx_worley_noise_float( pos ).toVar();
	var whites = n.add( sizeWhite ).pow( 8 ).oneMinus().clamp( -0.5, 1 );
	var yolks = n.add( sizeYolk ).pow( 18 ).oneMinus().clamp( 0, 1 ).pow( 0.4 ).clamp( 0, 1 );

	return tsl.mix( params.colorBackground, tsl.mix( params.colorWhite, params.colorYolk, yolks ), whites );

}, defaults$o );


var surfacePos$4 = tsl.Fn( ([ pos, normal, bump, sizeYolk, sizeWhite ]) => {

	var n = tsl.mx_worley_noise_float( pos ).toVar();
	var whites = n.add( sizeWhite ).pow( 8 ).oneMinus();
	var yolks = n.add( sizeYolk ).pow( 18 ).oneMinus().clamp( 0, 1 );

	var k = tsl.mix( 0, tsl.mix( 0, 1, yolks ), whites );

	return pos.add( normal.mul( k ).mul( bump ) );

} );


runnyEggs.normal = TSLFn( ( params ) => {

	params = prepare( params, defaults$o );

	var eps = 0.001;
	var bump = 0.05;

	var position = tsl.positionGeometry.mul( tsl.exp( params.scale.div( 1 ) ) ).add( params.seed.sin().mul( 10 ) ).toVar( ),
		normal = tsl.normalLocal.normalize().toVar(),
		tangent = tsl.tangentLocal.normalize().mul( eps ).toVar(),
		bitangent = tsl.cross( normal, tangent ).normalize().mul( eps ).toVar();

	var sizeYolk = params.sizeYolk.oneMinus();
	var sizeWhite = params.sizeWhite.oneMinus();

	var pos = surfacePos$4( position, normal, bump, sizeYolk, sizeWhite );
	var posU = surfacePos$4( position.add( tangent ), normal, bump, sizeYolk, sizeWhite );
	var posV = surfacePos$4( position.add( bitangent ), normal, bump, sizeYolk, sizeWhite );

	var dU = tsl.sub( posU, pos ),
		dV = tsl.sub( posV, pos );

	return tsl.transformNormalToView( tsl.cross( dU, dV ).normalize() );

}, defaults$o );


runnyEggs.roughness = TSLFn( ( params ) => {

	params = prepare( params, defaults$o );

	var pos = tsl.positionGeometry.mul( tsl.exp( params.scale.div( 1 ) ) ).add( params.seed.sin().mul( 10 ) ).toVar( );

	var sizeYolk = params.sizeYolk.oneMinus();

	var n = tsl.mx_worley_noise_float( pos ).toVar();
	var yolks = n.add( sizeYolk ).pow( 18 ).clamp( 0, 1 );

	return yolks;

}, defaults$o );

var defaults$n = {
	$name: 'rust',

	scale: 2,
	iterations: 8,
	amount: -0.3,
	opacity: 0.5,
	noise: 0.5,
	noiseScale: 0.5,

	color: new three.Color( 0xC08000 ),
	background: new three.Color( 0x000020 ),

	seed: 0,
};



var _rust = tsl.Fn( ( params )=>{

	var pos = tsl.positionGeometry.mul( tsl.exp( params.scale.div( 4 ).add( -1 ) ) ).add( params.seed ).toVar( );

	var amount = params.amount.mul( tsl.mx_noise_float( pos.mul( params.amount.div( 2 ).add( 4 ) ) ).add( 4 ) ).toVar();

	var k = tsl.mx_noise_float( pos ).toVar();

	tsl.Loop( params.iterations, ()=>{

		pos.mulAssign( 2 );
		k.addAssign( tsl.mx_noise_float( pos ) );

	} );

	k.subAssign( tsl.mx_noise_float( pos.mul( 2 ) ).abs() );

	k.assign( k.sub( amount ).clamp( 0, 15 ) );

	return k;

} );


var rust = TSLFn( ( params )=>{

	params = prepare( params, defaults$n );

	var k = _rust( params ).mul( 1.25 ).pow( 0.5 );

	var pos = tsl.positionGeometry.mul( tsl.exp( params.scale.add( params.noiseScale.mul( 3 ), 2 ) ) );

	k.addAssign( params.noise.mul( tsl.mx_noise_float( pos ).abs().add( 0.1 ).pow( 2 ) ) );

	return tsl.mix( params.color, params.background, k );

}, defaults$n );



rust.opacity = TSLFn( ( params )=>{

	params = prepare( params, defaults$n );

	var k = _rust( params ).mul( params.opacity.add( 0.2 ) );

	return k.oneMinus();

}, defaults$n );

var defaults$m = {
	$name: 'Satin',

	scale: 2,

	color: new three.Color( 0x7080FF ),
	background: new three.Color( 0x000050 ),

	seed: 0,
};



var satin = TSLFn( ( params ) => {

	params = prepare( params, defaults$m );

	var pos = tsl.positionGeometry.toVar( );

	var scale = tsl.exp( params.scale.div( 3 ) ).toVar();

	var k = tsl.mx_noise_float(
		tsl.vec3(
			tsl.mx_noise_float( tsl.vec3( pos.x.mul( 2 ), pos.y, pos.z ).mul( scale ) ),
			tsl.mx_noise_float( tsl.vec3( pos.x, pos.y.mul( 2 ), pos.z ).mul( scale ) ),
			tsl.mx_noise_float( tsl.vec3( pos.x, pos.y, pos.z.mul( 2 ) ).mul( scale ) ),
		).mul( scale ).add( params.seed )
	);

	k = tsl.pow( tsl.abs( k ), 3 ).mul( 20 );

	return tsl.mix( params.background, params.color, k );

}, defaults$m );



satin.defaults = {
	$name: 'Satin',

	scale: 2,

	color: new three.Color( 0x7080FF ),
	background: new three.Color( 0x000050 ),

	seed: 0,
};

var defaults$l = {
	$name: 'Scaler',
	$positionNode: true,
	$selectorPlanar: true,

	scales: new three.Vector3( 0.01, 0.9, 1.7 ),
	center: new three.Vector3( 0, 0, 0 ),

	selectorCenter: new three.Vector3( 0, 0, 0 ),
	selectorAngles: new three.Vector2( 0, 0 ),
	selectorWidth: 2,

};



var surfacePos$3 = tsl.Fn( ([ pos, params ])=>{

	var zone = selectPlanar( pos, params.selectorAngles, params.selectorCenter, params.selectorWidth );

	var S = matScale( tsl.mix( tsl.vec3( 1, 1, 1 ), params.scales, zone ) ),
		T = matTrans( params.center ),
		TN = matTrans( params.center.negate() );

	return T.mul( S ).mul( TN ).mul( tsl.vec4( pos, 1 ) ).xyz;

} );



var scaler = TSLFn( ( params )=>{

	params = prepare( params, defaults$l );

	return surfacePos$3( tsl.positionGeometry, params );

}, defaults$l );



scaler.normal = TSLFn( ( params ) => {

	params = prepare( params, defaults$l );

	var eps = 0.01;

	var position = tsl.positionGeometry,
		normal = tsl.normalLocal.normalize().toVar(),
		tangent = tsl.tangentLocal.normalize().mul( eps ).toVar(),
		bitangent = tsl.cross( normal, tangent ).normalize().mul( eps ).toVar();

	var pos = surfacePos$3( position, params );
	var posU = surfacePos$3( position.add( tangent ), params );
	var posV = surfacePos$3( position.add( bitangent ), params );

	var dU = tsl.sub( posU, pos ),
		dV = tsl.sub( posV, pos );

	return tsl.transformNormalToView( tsl.cross( dU, dV ).normalize() );

}, defaults$l );

var defaults$k = {
	$name: 'Scepter head',

	xFactor: 10,
	yFactor: 22,
	zFactor: 10,

	colorRim: new three.Color( 0xFFFFFF ),
	colorA: new three.Color( 0x70E0FF ),
	colorB: new three.Color( 0x3000FF ),
};



var scepterHead = TSLFn( ( params ) => {

	params = prepare( params, defaults$k );

	var pos = tsl.positionGeometry;

	var fx = pos.x.mul( remapExp( params.xFactor, 0, 100, 1.35, 30 ) ).toVar( ),
		fy = pos.y.mul( remapExp( params.yFactor, 0, 100, 1.35, 30 ) ).toVar( ),
		fz = pos.z.mul( remapExp( params.zFactor, 0, 100, 1.35, 30 ) ).toVar( );

	var cosX = tsl.cos( fx ).toVar(),
		cosY = tsl.cos( fy ).toVar(),
		cosZ = tsl.cos( fz ).toVar();

	var k = tsl.mx_noise_float( tsl.vec3( pos.x.div( cosX ), pos.y.div( cosY ), pos.z.div( cosZ ) ) );

	k = tsl.sign( k ).mul( tsl.abs( k ).pow( 0.75 ) );

	var dx = tsl.abs( tsl.mul( fx, tsl.tan( fx ) ).add( 1 ).div( tsl.cos( fx ) ) ),
		dy = tsl.abs( tsl.mul( fy, tsl.tan( fy ) ).add( 1 ).div( tsl.cos( fy ) ) ),
		dz = tsl.abs( tsl.mul( fz, tsl.tan( fz ) ).add( 1 ).div( tsl.cos( fz ) ) );

	var HSL = tsl.vec3().toVar();

	var indexX = ( tsl.abs( tsl.floor( ( fx.mul( 2/Math.PI ).add( 1 ) ).div( 2 ) ) ) ),
		indexY = ( tsl.abs( tsl.floor( ( fy.mul( 2/Math.PI ).add( 1 ) ).div( 2 ) ) ) ),
		indexZ = ( tsl.abs( tsl.floor( ( fz.mul( 2/Math.PI ).add( 1 ) ).div( 2 ) ) ) );

	var index = tsl.mod( ( tsl.add( indexX, indexY, indexZ ) ), 2 );

	HSL.assign( toHsl( tsl.mix( params.colorA, params.colorB, index ) ) );
	var color1 = hsl( HSL.x, HSL.y, HSL.z.mul( k ) ).toVar();

	HSL.assign( toHsl( params.colorRim ) );
	var color2 = hsl( HSL.x, HSL.y, tsl.mul( 2, k, HSL.z ) ).toVar();

	return tsl.mix( color1, color2, tsl.remapClamp( tsl.max( dx, tsl.max( dy, dz ) ), 55-10, 55+10 ) );

}, defaults$k );

var defaults$j = {
	$name: 'Scream',

	scale: 2,
	variety: 1,

	color: new three.Color( 0xF0F060 ),
	background: new three.Color( 0xD09090 ),

	seed: 0,
};



var scream = TSLFn( ( params ) => {

	params = prepare( params, defaults$j );

	var pos = tsl.positionGeometry.mul( tsl.exp( params.scale ) ).add( params.seed ).toVar( );

	var k = tsl.mx_noise_float( tsl.add( tsl.sin( pos.xyz ), tsl.cos( pos.yzx ) ) );

	pos.assign( tsl.positionGeometry.mul( tsl.exp( params.scale ).mul( k ) ).add( params.seed ) );

	var k = tsl.mx_noise_float( tsl.add( tsl.sin( pos.xyz ), tsl.cos( pos.yzx ) ).mul( 2 ) );

	var col = tsl.mix( params.background, params.color, k ).toVar();

	var HSL = toHsl( col ).toVar();

	return hsl( tsl.add( HSL.x, params.variety.mul( tsl.sin( k.mul( Math.PI ) ) ).mul( 0.5 ) ), HSL.y, HSL.z );

}, defaults$j );



scream.defaults = {
	$name: 'Scream',

	scale: 2,
	variety: 1,

	color: new three.Color( 0xF0F060 ),
	background: new three.Color( 0xD09090 ),

	seed: 0,
};

var defaults$i = {
	$name: 'Simplex noise',

	scale: 2,
	balance: 0,
	contrast: 0,

	color: new three.Color( 0xFFFFFF ),
	background: new three.Color( 0x000000 ),

	seed: 0,
};



var simplexNoise = TSLFn( ( params ) => {

	params = prepare( params, defaults$i );

	var pos = tsl.positionGeometry.mul( tsl.exp( params.scale ) ).add( params.seed );

	var k = tsl.clamp( 0, 1, tsl.mx_noise_float( pos ).mul( 0.5, tsl.exp( params.contrast ) ).add( 0.5, params.balance ) );

	return tsl.mix( params.background, params.color, k );

}, defaults$i );

var defaults$h = {
	$name: 'Stars',

	scale: 2,
	density: 2,
	variation: 0,

	color: new three.Color( 0xfff5f0 ),
	background: new three.Color( 0x000060 ),

	seed: 0,
};



var stars = TSLFn( ( params ) => {

	params = prepare( params, defaults$h );

	var pos = tsl.positionGeometry.mul( tsl.exp( params.scale.div( 2 ).add( 3 ) ) ).add( params.seed ).toVar( );

	var k = tsl.abs( tsl.mx_noise_float( pos ) ).pow( 10 ).mul( 10 );

	k = k.mul( tsl.exp( params.density.sub( 2 ) ) );

	var dS = tsl.select( k.greaterThan( 0.1 ), params.variation.mul( tsl.mx_noise_float( pos ) ), 0 );

	var col = toHsl( tsl.mix( params.background, params.color, k ) );

	return hsl( tsl.add( col.x, dS ), col.y, col.z );

}, defaults$h );

var defaults$g = {
	$name: 'Static noise',

	scale: 2,
	balance: 0,
	contrast: 0,

	delay: 0,

	seed: 0,
};



var staticNoise = TSLFn( ( params ) => {

	params = prepare( params, defaults$g );

	var pos = tsl.screenCoordinate.div( tsl.exp( params.scale ) ).add( params.seed );

	var speed = params.delay.sub( 1 ).mul( 5 ).exp(),
		t = tsl.time.div( speed ).round().mul( speed );

	var offset = vnoise( t.sin() ).mul( 1000 );

	var k = tsl.clamp( 0, 1, tsl.mx_noise_float( pos.add( offset ) ) );

	k = k.mul( 0.5, tsl.exp( params.contrast ) ).add( 0.5, params.balance );

	return tsl.vec3( k );

}, defaults$g );

var defaults$f = {
	$name: 'Supersphere',
	$positionNode: true,

	exponent: 3,

};



var surfacePos$2 = tsl.Fn( ([ pos, params ])=>{

	var exponent = tsl.float( 2 ).pow( params.exponent );
	var equPos = pos.div( pos.length() ).toVar();

	var p = equPos.x.abs().pow( exponent )
		.add( equPos.y.abs().pow( exponent ) )
		.add( equPos.z.abs().pow( exponent ) )
		.pow( tsl.float( 1 ).div( exponent ) );

	return equPos.div( p );

} );



var supersphere = TSLFn( ( params )=>{

	params = prepare( params, defaults$f );

	return surfacePos$2( tsl.positionGeometry, params );

}, defaults$f );



supersphere.normal = TSLFn( ( params ) => {

	params = prepare( params, defaults$f );

	var eps = 0.01;

	var position = tsl.positionGeometry,
		normal = tsl.normalLocal.normalize().toVar(),
		tangent = tsl.tangentLocal.normalize().mul( eps ).toVar(),
		bitangent = tsl.cross( normal, tangent ).normalize().mul( eps ).toVar();

	var pos = surfacePos$2( position, params );
	var posU = surfacePos$2( position.add( tangent ), params );
	var posV = surfacePos$2( position.add( bitangent ), params );

	var dU = tsl.sub( posU, pos ),
		dV = tsl.sub( posV, pos );

	return tsl.transformNormalToView( tsl.cross( dU, dV ).normalize() );

}, defaults$f );

var defaults$e = {
	$name: 'Tiger fur',

	scale: 2,
	lengths: 4,
	blur: 0.3,
	strength: 0.3,
	hairs: 0.5,

	color: new three.Color( 0xFFAA00 ),
	bottomColor: new three.Color( 0xFFFFEE ),

	seed: 0,
};



var tigerFur = TSLFn( ( params )=>{

	params = prepare( params, defaults$e );

	var scale = params.scale.div( 2 ).add( 1 ).toVar();
	var pos = tsl.positionGeometry.mul( tsl.exp( scale ) ).add( params.seed ).toVar( );

	var len = params.lengths.add( 5 ).reciprocal().toVar();
	var hairs = params.hairs.mul( 0.3 ).toVar();
	var k = tsl.mx_noise_float( pos.mul( scale, tsl.vec3( 1, len, len ) ) );
	k = k.add( tsl.mx_noise_float( pos.mul( tsl.vec3( 25, 1, 1 ) ) ).add( 1 ).mul( hairs ) );
	k = k.add( params.strength.sub( 0.5 ) ).smoothstep( params.blur.negate(), params.blur ).oneMinus();

	var n = tsl.positionGeometry.y.add( hairs.sub( 0.5 ) ).smoothstep( -1, 0.5 );

	return tsl.mix( params.bottomColor, params.color, n ).mul( k );

}, defaults$e );

var defaults$d = {
	$name: 'Translator',
	$positionNode: true,
	$selectorPlanar: true,

	distance: new three.Vector3( -0.5, 0, 0.2 ),

	selectorCenter: new three.Vector3( 0, 0, 0 ),
	selectorAngles: new three.Vector2( 0, 0 ),
	selectorWidth: 0.7,

};



var surfacePos$1 = tsl.Fn( ([ pos, params ])=>{

	var zone = selectPlanar( pos, params.selectorAngles, params.selectorCenter, params.selectorWidth );

	var T = matTrans( params.distance.mul( zone ) );

	return T.mul( tsl.vec4( pos, 1 ) ).xyz;

} );



var translator = TSLFn( ( params )=>{

	params = prepare( params, defaults$d );

	return surfacePos$1( tsl.positionGeometry, params );

}, defaults$d );



translator.normal = TSLFn( ( params ) => {

	params = prepare( params, defaults$d );

	var eps = 0.01;

	var position = tsl.positionGeometry,
		normal = tsl.normalLocal.normalize().toVar(),
		tangent = tsl.tangentLocal.normalize().mul( eps ).toVar(),
		bitangent = tsl.cross( normal, tangent ).normalize().mul( eps ).toVar();

	var pos = surfacePos$1( position, params );
	var posU = surfacePos$1( position.add( tangent ), params );
	var posV = surfacePos$1( position.add( bitangent ), params );

	var dU = tsl.sub( posU, pos ),
		dV = tsl.sub( posV, pos );

	return tsl.transformNormalToView( tsl.cross( dU, dV ).normalize() );

}, defaults$d );

var defaults$c = {
	$name: 'Voronoi cells',

	scale: 2,
	variation: 0,
	facet: 0,

	color: new three.Color( 0 ),
	background: new three.Color( 0xc0d0ff ),

	seed: 0,
};



var cellCenter = tsl.Fn( ([ cell ])=>{

	return cell.add( tsl.mx_noise_float( cell.mul( Math.PI ) ) );

} );


var voronoiCells = TSLFn( ( params )=>{

	params = prepare( params, defaults$c );

	var pos = tsl.positionGeometry.mul( tsl.exp( params.scale.div( 2 ).add( 0.5 ) ) ).add( params.seed ).toVar( );

	var midCell = pos.round().toVar();

	var minCell = midCell.toVar();
	var minDist = tsl.float( 1 ).toVar();

	var cell = tsl.vec3().toVar();
	var dist = tsl.float().toVar();

	var i = tsl.float( 0 ).toVar();

	tsl.Loop( 27, () => {

		var ix = i.mod( 3 ).sub( 1 );
		var iy = i.div( 3 ).floor().mod( 3 ).sub( 1 );
		var iz = i.div( 9 ).floor().sub( 1 );
		cell.assign( midCell.add( tsl.vec3( ix, iy, iz ) ) );
		dist.assign( pos.distance( cellCenter( cell ) ).add( tsl.mx_noise_float( pos ).div( 5 ) ) );

		tsl.If( dist.lessThan( minDist ), ()=>{

			minDist.assign( dist );
			minCell.assign( cell );

		} );
		i.addAssign( 1 );

	} );


	var n = tsl.mx_noise_float( minCell.mul( Math.PI ) ).toVar();
	var k = tsl.mix( minDist, n.add( 1 ).div( 2 ), params.facet );

	var color = tsl.mix( params.color, params.background, k ).toVar();
	var randomColor = tsl.vec3( n.mul( 16.8 ), n.mul( 31.4159 ), n.mul( 27.1828 ) ).sin().add( 1 ).div( 2 );

	return tsl.mix( color, tsl.mix( color, randomColor, params.variation ), params.variation );

}, defaults$c );

var defaults$b = {
	$name: 'Water Drops',
	$normalNode: true,

	scale: 1.4,
	density: 0.5,
	bump: 0.6,

	seed: 0,
};



var surfacePos = tsl.Fn( ([ pos, normal, bump, density, seed ]) => {

	var k = tsl.mx_noise_float( pos.add( seed ) ).add( density ).clamp( 0, 1 );
	k = tsl.cos( k.mul( Math.PI ) ).add( 1 ).pow( 0.5 ).toVar();

	return pos.add( k.mul( normal, bump ) );

} );



var waterDrops = TSLFn( ( params ) => {

	params = prepare( params, defaults$b );

	var eps = 0.001;

	var position = tsl.positionGeometry.mul( tsl.exp( params.scale.div( 1 ).add( 1 ) ) ).toVar( ),
		normal = tsl.normalLocal.normalize().toVar(),
		tangent = tsl.tangentLocal.normalize().mul( eps ).toVar(),
		bitangent = tsl.cross( normal, tangent ).normalize().mul( eps ).toVar();

	var density = tsl.remap( params.density, 0, 1, 1.5, 0.7 ).toVar();
	var seed = tsl.vec3( tsl.sin( params.seed ).mul( 100 ), tsl.cos( params.seed.div( 2 ) ).mul( 100 ), tsl.sin( params.seed.div( 3 ) ).mul( 100 ) ).toVar();

	var pos = surfacePos( position, normal, params.bump, density, seed );

	var posU = surfacePos( position.add( tangent ), normal, params.bump, density, seed );
	var posV = surfacePos( position.add( bitangent ), normal, params.bump, density, seed );

	var dU = tsl.sub( posU, pos ),
		dV = tsl.sub( posV, pos );

	return tsl.transformNormalToView( tsl.cross( dU, dV ).normalize() );

}, defaults$b );

var defaults$a = {
	$name: 'Watermelon',

	scale: 2,
	stripes: 12,
	variation: 0.5,
	noise: 0.25,

	color: new three.Color( 'yellowgreen' ),
	background: new three.Color( 'darkgreen' ),

	flat: 0,

	seed: 0,
};



var watermelon = TSLFn( ( params )=>{

	params = prepare( params, defaults$a );

	var variation = tsl.select( params.flat, params.variation.mul( 0.85 ).add( 0.15 ), params.variation );

	var pos = tsl.positionGeometry.mul( tsl.exp( params.scale.div( 4 ).add( 2 ) ) ).add( params.seed ).toVar( );

	var uv = tsl.select( params.flat, tsl.screenUV, tsl.equirectUV( tsl.positionGeometry.normalize() ) ).toVar(),
		a = uv.x.mul( params.stripes.round(), tsl.select( params.flat, Math.PI, 2*Math.PI ) ).add( tsl.mx_noise_float( pos.mul( tsl.vec3( 1, 0.3, 1 ) ) ).mul( 2 ) );

	var k = a.sin().add( 0.5 ).div( 2 ).mul( uv.y.remap( 0, 1, -Math.PI, Math.PI ).cos().add( 1.2 ).clamp( 0, 1 ) )
		.add( variation.mul( 2, tsl.mx_noise_float( pos.mul( 1.5 ) ).div( 2 ) ) )
		.add( variation.mul( 2, tsl.mx_noise_float( pos.mul( 4 ) ).div( 6 ) ) )
		.toVar();

	k.assign(
		k.mix( k.round(), 0.75 )
			.add( tsl.mx_noise_float( pos.mul( 2 ) ).mul( params.noise, 0.5 ) )
			.add( tsl.mx_noise_float( pos.mul( 3 ) ).mul( params.noise, 1 ) )
			.add( tsl.mx_noise_float( pos.mul( 15 ) ).mul( params.noise, 0.2 ) )
			.clamp( 0, 1 )
	);

	var color = tsl.mix( params.background, params.color, k ).toVar();

	return color;

}, defaults$a );

var defaults$9 = {
	$name: 'Wood',
	scale: 2.5,
	rings: 4.5,
	lengths: 1,
	angle: 0,
	fibers: 0.3,
	fibersDensity: 10,
	color: new three.Color( 0.8, 0.4, 0 ),
	background: new three.Color( 0.4, 0.1, 0 ),
	seed: 0,
};



var wood = TSLFn( ( params ) => {

	params = prepare( params, defaults$9 );

	var angle = tsl.radians( params.angle ).toVar();
	var posLocal = tsl.vec3(
		tsl.sub( tsl.positionGeometry.x.mul( tsl.cos( angle ) ), tsl.positionGeometry.y.mul( tsl.sin( angle ) ) ),
		tsl.add( tsl.positionGeometry.x.mul( tsl.sin( angle ) ), tsl.positionGeometry.y.mul( tsl.cos( angle ) ) ),
		tsl.positionGeometry.z,
	).toVar();


	// main pattern with rings
	var pos = posLocal.mul( tsl.exp( params.scale.sub( 3 ) ).mul( tsl.vec3( tsl.reciprocal( params.lengths ), 4, tsl.reciprocal( params.lengths ) ) ) ).add( params.seed ).toVar( );
	var k = tsl.mx_noise_float( pos ).add( 1 ).mul( 10 ).mul( params.rings );
	k = k.add( k.cos() ).cos().add( 1 ).div( 2 );

	var kk = tsl.float( 0 ).toVar(),
		sum = tsl.float( 0 ).toVar(),
		scale = tsl.exp( params.scale.sub( 2 ) ).mul( tsl.vec3( 1, params.fibersDensity, 1 ) ).toVar(),
		power = tsl.float( 2 ).toVar();

	tsl.Loop( 10, ()=>{

		kk.addAssign( tsl.mul( power, tsl.mx_noise_float( posLocal.mul( scale ).add( params.seed ) ) ) );
		sum.addAssign( power );
		scale.mulAssign( 1.8 );
		power.mulAssign( 0.6 );

	} );

	kk.assign( tsl.mul( kk, 5 ).div( sum ).mul( 10 ).sin().add( 1 ).div( 2 ) );

	return tsl.mix( params.color, params.background, tsl.mix( k, kk, params.fibers ) );

}, defaults$9 );

var defaults$8 = {
	$name: 'Zebra lines',

	scale: 2,
	thinness: 0.5,
	phi: 0,
	theta: 0,

	color: new three.Color( 0x0 ),
	background: new three.Color( 0xFFFFFF ),

	flat: 0,
	// no seed for zebra lines
};



var zebraLines = TSLFn( ( params ) => {

	params = prepare( params, defaults$8 );

	var pos = tsl.select( params.flat, tsl.positionGeometry, tsl.positionGeometry.normalize() ).toVar( );

	var dir = tsl.select( params.flat, tsl.vec2( tsl.cos( params.phi ), tsl.sin( params.phi ) ), spherical( params.phi, params.theta ) ).toVar();

	var angle = tsl.select( params.flat, tsl.clamp( dir.dot( pos ), -2, 2 ), tsl.acos( tsl.clamp( dir.dot( pos ), -1, 1 ) ) ).toVar();

	var scale = tsl.exp( params.scale.add( 1 ) ).toVar();

	var k = tsl.sin( angle.mul( scale ) ).sub( params.thinness.sub( 0.5 ).mul( 2 ) );

	k = tsl.clamp( k.mul( 1000 ).div( scale ), -1, 1 ).mul( 0.5 ).add( 0.5 );

	return tsl.mix( params.background, params.color, k );

}, defaults$8 );

var defaults$7 = {
	$name: 'Circle decor',

	scale: 2,
	grains: 0.2,

	complexity: 1,
	blur: 0.2,

	color: new three.Color( 0x0 ),
	background: new three.Color( 0xFFFFFF ),

	seed: 0,
};



var circleDecor = TSLFn( ( params )=>{

	params = prepare( params, defaults$7 );

	var pos = tsl.positionGeometry.mul( tsl.exp( params.scale.div( 4 ) ) ).add( params.seed ).toVar( );
	var subpos = pos.mul( 2 ).toVar( );

	var k1 = tsl.mx_worley_noise_float( pos );
	var k2 = tsl.mx_worley_noise_float( subpos );
	var k3 = tsl.mx_worley_noise_float( pos.mul( params.grains.mul( 4 ).add( 2 ) ) ).mul( 2 );

	var compScale = tsl.mx_noise_float( pos ).div( 2 ).add( 1 );

	var k = k1.min( k2, k3 ).clamp( 0, 1 ).mul( params.complexity.add( 2 ).exp(), compScale, Math.PI ).sin().smoothstep( params.blur.negate(), params.blur );

	return tsl.mix( params.color, params.background, k.oneMinus() );

}, defaults$7 );

var defaults$6 = {
	$name: 'Reticular veins',

	scale: 2,
	reticulation: 5,
	strength: 0.2,
	organelles: 0.2,

	color: new three.Color( 0xFFFFF0 ),
	background: new three.Color( 0x208020 ),

	seed: 0,
};



var reticularVeins = TSLFn( ( params )=>{

	params = prepare( params, defaults$6 );

	var pos = tsl.positionGeometry.mul( tsl.exp( params.scale.div( 2 ).add( 0.5 ) ) ).add( params.seed ).toVar( );

	var k1 = tsl.mx_worley_noise_float( pos.mul( 1 ) );
	var k2 = tsl.mx_worley_noise_float( pos.add( 100 ).mul( params.reticulation ) ).mul( params.strength );
	var dots = tsl.mx_noise_float( pos.mul( 100 ) ).mul( params.strength, params.organelles );

	var k = k1.add( k2 ).add( dots );

	return tsl.mix( params.background, params.color, k );

}, defaults$6 );

var defaults$5 = {
	$name: 'Roman paving',

	scale: 2,
	depth: 0.5,

	seed: 0,
};



var romanPaving = TSLFn( ( params )=>{

	params = prepare( params, defaults$5 );

	var pos = tsl.positionGeometry.mul( tsl.exp( params.scale ) ).add( params.seed ).toVar( );

	var k = tsl.mx_worley_noise_vec2( pos ).toVar();

	return k.y.sub( k.x ).pow( params.depth.mul( 3 ).sub( 3 ).exp() ).smoothstep( 0, 1 );

}, defaults$5 );

var defaults$4 = {
	$name: 'Crumpled fabric',
	$width: 260,

	scale: 2,
	pinch: 0.5,

	color: new three.Color( 0xB0F0FF ),
	subcolor: new three.Color( 0x4040F0 ),
	background: new three.Color( 0x003000 ),

	seed: 0,
};



var crumpledFabric = TSLFn( ( params )=>{

	params = prepare( params, defaults$4 );

	var pos = tsl.positionGeometry.mul( tsl.exp( params.scale.sub( 0.5 ) ) ).add( params.seed ).toVar( );

	tsl.Loop( 4, ()=>{

		var x = tsl.mx_noise_float( pos.xyz ).mul( params.pinch );
		var y = tsl.mx_noise_float( pos.yzx ).mul( params.pinch );
		var z = tsl.mx_noise_float( pos.zxy ).mul( params.pinch );

		pos.addAssign( tsl.vec3( x, y, z ) );

	} );

	var k = tsl.mx_noise_float( pos ).add( 1 ).div( 2 ).clamp( 0, 1 );

	var color1 = params.color.mul( k.mul( 2 ).sub( 1 ).abs().oneMinus() );
	var color2 = params.subcolor.mul( k ).pow( 2 );
	var color3 = params.background.mul( k.oneMinus().pow( 2 ) );

	return color1.add( color2 ).add( color3 );

}, defaults$4 );

var defaults$3 = {
	$name: 'Isolayers',

	scale: 2,
	layers: 10,
	edge: 0.5,
	darkness: 0,

	color: new three.Color( 0xFFFFF0 ),
	background: new three.Color( 0xFF4040 ),

	seed: 0,
};



var isolayers = TSLFn( ( params )=>{

	params = prepare( params, defaults$3 );

	var pos = tsl.positionGeometry.mul( tsl.exp( params.scale.sub( 1 ) ) ).add( params.seed ).toVar( );

	var depth = params.edge.remap( 0, 1, 40, 10 );

	var k = tsl.mx_noise_float( pos ).mul( 1.2 ).add( 1 ).div( 2 );

	var i = k.mul( params.layers ).round().div( params.layers ).clamp( 0, 1 );
	var f = k.sub( tsl.float( 0.5+0.03 ).div( params.layers ) )
		.mul( params.layers ).fract()
		.mul( tsl.float( 2 ).pow( depth.reciprocal() ) )
		.pow( depth ).sub( 1 ).abs().oneMinus();

	var hslColor = tsl.mix( toHsl( params.background ), toHsl( params.color ), i ).toVar();
	hslColor.z.mulAssign( tsl.mix( 1, i.mul( 1.5 ), params.darkness ).clamp( 0, 1 ) );

	return hsl( hslColor.x, hslColor.y, hslColor.z ).sub( f );

}, defaults$3 );

var defaults$2 = {
	$name: 'Turbulent smoke',
	$width: 260,

	scale: 2,
	speed: 0,
	details: 5,

	seed: 0,
};



var turbulentSmoke = TSLFn( ( params )=>{

	params = prepare( params, defaults$2 );

	var pos = tsl.positionGeometry.mul( tsl.exp( params.scale.sub( 1 ) ) ).add( params.seed ).toVar( );

	var t = tsl.time.mul( params.speed.sub( 1 ).exp() );

	var q = pos.add( tsl.vec3(
		tsl.mx_fractal_noise_float( pos.add( tsl.vec3( 1, t.sin(), -1 ) ) ),
		tsl.mx_fractal_noise_float( pos.add( tsl.vec3( t.add( 2*Math.PI/3 ).sin(), 1, -1 ) ) ),
		tsl.mx_fractal_noise_float( pos.add( tsl.vec3( 1, -1, t.add( 4*Math.PI/3 ).sin() ) ) ),
	) );

	var p = tsl.mx_fractal_noise_vec3( q, params.details );

	var k = tsl.mx_worley_noise_float( pos.add( p.div( 2 ) ) ).pow( 4 ).mul( 4 ).oneMinus();

	return k;

}, defaults$2 );

var defaults$1 = {
	$name: 'Caustics',

	scale: 2,
	speed: 0,

	color: new three.Color( 0x50A8C0 ),

	seed: 0,
};



var caustics = TSLFn( ( params )=>{

	params = prepare( params, defaults$1 );

	var pos = tsl.positionGeometry.mul( tsl.exp( params.scale.sub( 1 ) ) ).add( params.seed ).toVar( );

	var t = tsl.time.mul( params.speed.sub( 1 ).exp() )
		.add( tsl.vec3( 0, 2*Math.PI/3, 4*Math.PI/3 ) )
		.sin();

	var p = tsl.mx_worley_noise_vec3(
		pos.add( tsl.vec3(
			tsl.mx_worley_noise_float( pos.add( t.xyz ) ),
			tsl.mx_worley_noise_float( pos.add( t.yzx ) ),
			tsl.mx_worley_noise_float( pos.add( t.zxy ) ),
		) ) );

	var k = p.length().div( Math.sqrt( 3 ) );

	return k.add( params.color.sub( 0.5 ).mul( 2 ) );

}, defaults$1 );

var defaults = {
	$name: 'Bricks',

	scale: 2,

	brickSize: new three.Vector3( 2, 1, 2 ),
	brickShift: 2,

	jointSize: 0.05,
	jointSpan: 0.5,
	jointJitter: 0.5,
	jointBlur: 0.03,

	noiseSize: 0.5,
	noiseStrength: 0.2,

	colorShade: 0.5,

	color: new three.Color( 0xFF4000 ),
	additional: new three.Color( 0xD0A030 ),
	background: new three.Color( 0xAAAAAA ),


	seed: 0,
};

// mortar joint



var bricks = TSLFn( ( params )=>{

	params = prepare( params, defaults );


	var pos = tsl.positionGeometry.mul( tsl.exp( params.scale ) ).add( params.seed ).toVar( );

	var size = params.brickSize;

	var floor = pos.div( size ).floor().div( params.brickShift );

	var offset = tsl.vec3( floor.y, 0, floor.y ).toVar();

	var p = pos.div( size ).fract().add( offset ).fract().toVar();

	var n = tsl.mx_fractal_noise_vec3( pos.mul( remapExp( params.jointSpan, 0, 1, 20, 0.2 ) ) ).div( remapExp( params.jointJitter, 0, 1, 500, 1 ) ).toVar();

	var border = tsl.mul(
		p.mul( size ).add( n.z ).smoothstep( size.y.sub( params.jointSize, params.jointBlur ), size.y.sub( params.jointSize ) ).y.oneMinus(),
		p.mul( size ).add( n.y ).smoothstep( params.jointSize, params.jointSize.add( params.jointBlur ) ).y,

		p.mul( size ).add( n.y ).smoothstep( size.x.sub( params.jointSize, params.jointBlur ), size.x.sub( params.jointSize ) ).x.oneMinus(),
		p.mul( size ).add( n.x ).smoothstep( params.jointSize, params.jointSize.add( params.jointBlur ) ).x,

		p.mul( size ).add( n.x ).smoothstep( size.z.sub( params.jointSize, params.jointBlur ), size.z.sub( params.jointSize ) ).z.oneMinus(),
		p.mul( size ).add( n.z ).smoothstep( params.jointSize, params.jointSize.add( params.jointBlur ) ).z,
	).clamp( 0, 1 );

	var shade = tsl.mix( tsl.float( 1 ), tsl.mx_noise_float( tsl.mx_noise_float( pos.xyz.div( size ).add( offset ).floor().zxy.mul( 100 ).add( Math.PI ) ).mul( 10 ) ).add( 2 ).div( 2 ).pow( 4 ).clamp( 0, 1 ), params.colorShade );

	var ns = tsl.mx_noise_float( pos.mul( remapExp( params.noiseSize, 0, 1, 5, 250 ) ) ).mul( params.noiseStrength ).add( 1 );

	var brickNoise = tsl.mx_noise_float( tsl.mx_noise_float( pos.xyz.div( size ).add( offset ).floor().zxy.mul( 200 ).add( Math.PI ) ).mul( 10 ) ).add( 1 ).div( 1 );
	var brickColor = tsl.mix( params.color, params.additional, brickNoise.pow( 2 ) );

	return tsl.mix( params.background, shade.mul( brickColor, border ), border ).mul( ns );

}, defaults );

Object.defineProperty(exports, "noise", {
	enumerable: true,
	get: function () { return tsl.mx_noise_float; }
});
exports.TSLFn = TSLFn;
exports.applyEuler = applyEuler;
exports.brain = brain;
exports.bricks = bricks;
exports.camouflage = camouflage;
exports.caustics = caustics;
exports.caveArt = caveArt;
exports.circleDecor = circleDecor;
exports.circles = circles;
exports.clouds = clouds;
exports.concrete = concrete;
exports.cork = cork;
exports.crumpledFabric = crumpledFabric;
exports.dalmatianSpots = dalmatianSpots;
exports.darthMaul = darthMaul;
exports.dynamic = dynamic;
exports.dysonSphere = dysonSphere;
exports.entangled = entangled;
exports.fordite = fordite;
exports.gasGiant = gasGiant;
exports.grid = grid;
exports.hideFallbackWarning = hideFallbackWarning;
exports.hsl = hsl;
exports.isolayers = isolayers;
exports.isolines = isolines;
exports.karstRock = karstRock;
exports.marble = marble;
exports.matRotX = matRotX;
exports.matRotY = matRotY;
exports.matRotYXZ = matRotYXZ;
exports.matRotZ = matRotZ;
exports.matScale = matScale;
exports.matTrans = matTrans;
exports.neonLights = neonLights;
exports.noised = noised;
exports.normalVector = normalVector;
exports.overlayPlanar = overlayPlanar;
exports.photosphere = photosphere;
exports.planet = planet;
exports.polkaDots = polkaDots;
exports.prepare = prepare;
exports.processedWood = processedWood;
exports.protozoa = protozoa;
exports.remapExp = remapExp;
exports.reticularVeins = reticularVeins;
exports.romanPaving = romanPaving;
exports.rotator = rotator;
exports.roughClay = roughClay;
exports.runnyEggs = runnyEggs;
exports.rust = rust;
exports.satin = satin;
exports.scaler = scaler;
exports.scepterHead = scepterHead;
exports.scream = scream;
exports.selectPlanar = selectPlanar;
exports.showFallbackWarning = showFallbackWarning;
exports.simplexNoise = simplexNoise;
exports.spherical = spherical;
exports.stars = stars;
exports.staticNoise = staticNoise;
exports.supersphere = supersphere;
exports.tigerFur = tigerFur;
exports.toHsl = toHsl;
exports.translator = translator;
exports.turbulentSmoke = turbulentSmoke;
exports.vnoise = vnoise;
exports.voronoiCells = voronoiCells;
exports.waterDrops = waterDrops;
exports.watermelon = watermelon;
exports.wood = wood;
exports.zebraLines = zebraLines;
