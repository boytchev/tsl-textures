// TSL Textures

import { Fn, min, sub, max, vec3, float, add, If, select, sin, cos, vec4, mul, cross, remap, pow, log2, mat4, smoothstep, positionGeometry, dFdx, dFdy, transformNormalToView, mx_noise_float, uniform, exp, round, pow2, abs, or, mix, acos, clamp, normalLocal, tangentLocal, Loop, floor, oneMinus, equirectUV, div, remapClamp, sqrt, mod, distance, radians, matcapUV, mx_worley_noise_float, sign, tan, reciprocal } from 'three/tsl';
export { mx_noise_float as noise } from 'three/tsl';
import { Color, Vector3, Vector2 } from 'three';

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



// generate scaled noise
function noised( pos, scale=1, octave=1, seed=0 ) {

	return mx_noise_float( pos.mul( scale, octave ).add( seed ) );

}

var camouflage = Fn( ( params )=>{

	params = prepare( { ...camouflage.defaults, ...params } );

	var pos = positionGeometry.mul( exp( params.scale ) ).add( params.seed ).toVar( );

	var color = vec3( 0, 0, 0 ).toVar( );

	If( round( mx_noise_float( pos, 1, 0.2 ) ).greaterThanEqual( 1 ), () => {

		color.assign( params.colorA );

	}
	)
		.ElseIf( round( mx_noise_float( pos.yzx, 1, 0.3 ) ).greaterThanEqual( 1 ), () => {

			color.assign( params.colorB );

		}
		)
		.ElseIf( round( mx_noise_float( pos.zxy, 1, 0.4 ) ).greaterThanEqual( 1 ), () => {

			color.assign( params.colorC );

		}
		)
		.Else( () => {

			color.assign( params.colorD );

		}
		);

	return color;

} );



camouflage.defaults = {
	$name: 'Camouflage',

	scale: 2,

	colorA: new Color( 0xc2bea8 ),
	colorB: new Color( 0x9c895e ),
	colorC: new Color( 0x92a375 ),
	colorD: new Color( 0x717561 ),

	seed: 0,
};

var caveArt = Fn( ( params ) => {

	params = prepare( { ...caveArt.defaults, ...params } );

	var pos = positionGeometry.mul( exp( params.scale ) ).add( params.seed ).toVar( );

	var k1 = mx_noise_float( pos, 4 ).sin().toVar();
	var k2 = mx_noise_float( pos.mul( 1.5 ), 4 ).cos().toVar();

	var thinness = exp( sub( float( 3 ), params.thinness ) );
	var k = sub( thinness, pow2( abs( add( k1, k2 ) ) ).mul( 20 ) ).toVar();

	If( or( k1.greaterThan( k2 ), k.lessThan( 0 ) ), ()=>{

		k.assign( 0 );

	} );

	If( k.lessThanEqual( 0 ), ()=>{

		k.assign( params.noise.mul( pow2( mx_noise_float( pos.mul( 30 ) ) ) ) );

	} );

	return mix( params.background, params.color, k );

} );



caveArt.defaults = {
	$name: 'Cave art',

	scale: 2,
	thinness: 2,
	noise: 0.3,

	color: new Color( 0xD34545 ),
	background: new Color( 0xFFF8F0 ),

	seed: 0,
};

var circles = Fn( ( params ) => {

	params = prepare( { ...circles.defaults, ...params } );

	var pos = positionGeometry.normalize();

	var angle = acos( clamp( pos.y, -1, 1 ) ).mul( 20 );

	var scale = exp( params.scale.sub( 1 ) );

	var x = angle.div( 3000 ).mul( scale );

	var k = float( params.seed.sin().mul( 100 ) ).toVar();

	for ( var n=0; n<=10; n++ ) {

		k.addAssign( sin( x.mul( 2**n ).sub( Math.PI*n/2 ) ).mul( -n*( n+1 )/2 ) );

	}

	k.assign( k.div( 200 ).clamp( -2, 2 ) );

	var HSL = toHsl( params.color );

	var hue = HSL.x.add( k.mul( params.variety ) ).mod( 1 ).mul( 10 );

	var huei = hue.floor();
	var huef = hue.sub( huei );
	huef = select( huef.lessThan( 0.5 ), huef.pow( 1.5 ), huef.pow( 1/1.5 ) );

	return hsl( huei.add( huef ).div( 10 ), HSL.y, HSL.z );

} );



circles.defaults = {
	$name: 'Circles',

	scale: 2,
	variety: 1,

	color: new Color( 0xF0E0D0 ),

	seed: 0,
};

var _clouds = Fn( ( params ) => {

	// prepare parameters
	params = prepare( { ...clouds.defaults, ...params } );

	const pos = positionGeometry;
	const scale = exp( params.scale.div( 1.5 ).sub( 0.5 ) );

	// color blending
	const k = add(
		noised( pos, scale, 1, params.seed ),
		noised( pos, scale, 2, params.seed ).mul( 0.80 ),
		noised( pos, scale, 6, params.seed ).mul( 0.10 ),
		noised( pos, scale, 8, params.seed ).mul( 0.07, params.opacity ),
		params.density.remap( 0, 1, -0.5, 1.5 )
	);

	// opacity
	const a = clamp( 0, 1, mul( k, 2 ).pow( 1.5 ).sub( 1 ).mul( params.opacity ) );

	// final color+opacity
	return vec4( mix( params.subcolor, params.color, k.clamp( 0, 1 ) ), a );

} );



var clouds = Fn( ( params ) => {

	return _clouds( params ).rgb;

} );



clouds.opacity = Fn( ( params ) => {

	return _clouds( params ).a;

} );



clouds.defaults = {
	$name: 'Clouds',

	scale: 2,
	density: 0.5,
	opacity: 1,

	color: new Color( 0xFFFFFF ),
	subcolor: new Color( 0xA0A0B0 ),

	seed: 0,
};

var surfacePos$7 = Fn( ([ pos, normal, bump, density, seed ]) => {

	var k = mx_noise_float( pos.add( seed ) ).mul( 0.5 ).add( 0.5 );
	k = bump.mul( pow( abs( k ), density ) );

	return pos.add( k.mul( normal ) );

} );


var concrete = Fn( ( params ) => {

	params = prepare( { ...concrete.defaults, ...params } );

	var eps = 0.001;

	var position = positionGeometry.mul( exp( params.scale.div( 2 ).add( 2 ) ) ).toVar( ),
		normal = normalLocal.normalize().toVar(),
		tangent = tangentLocal.normalize().mul( eps ).toVar(),
		bitangent = cross( normal, tangent ).normalize().mul( eps ).toVar();

	var density = remap( params.density, 0, 1, 10, 0.5 ).toVar();
	var seed = vec3( sin( params.seed ).mul( 100 ), cos( params.seed.div( 2 ) ).mul( 100 ), sin( params.seed.div( 3 ) ).mul( 100 ) ).toVar();

	var pos = surfacePos$7( position, normal, params.bump, density, seed );
	var posU = surfacePos$7( position.add( tangent ), normal, params.bump, density, seed );
	var posV = surfacePos$7( position.add( bitangent ), normal, params.bump, density, seed );

	var dU = sub( posU, pos ),
		dV = sub( posV, pos );

	return transformNormalToView( cross( dU, dV ).normalize() );

} );



concrete.defaults = {
	$name: 'Concrete',
	$normalNode: true,

	scale: 2,
	density: 0.5,
	bump: 0.5,

	seed: 0,
};

var cellCenter$1 = Fn( ([ cell ])=>{

	return cell.add( vnoise( cell ) );

} );


var cork = Fn( ( params )=>{

	params = prepare( { ...cork.defaults, ...params } );

	var pos = positionGeometry.mul( exp( params.scale.div( 1.5 ).add( 1 ) ) ).add( params.seed ).toVar( );

	var midCell = pos.round().toVar();

	var minCell = midCell.toVar();
	var minDist = float( 1 ).toVar();

	var cell = vec3().toVar();
	var dist = float().toVar();

	var i = float( 0 ).toVar();


	Loop( 27, () => {

		var ix = i.mod( 3 ).sub( 1 );
		var iy = i.div( 3 ).floor().mod( 3 ).sub( 1 );
		var iz = i.div( 9 ).floor().sub( 1 );
		cell.assign( midCell.add( vec3( ix, iy, iz ) ) );
		dist.assign( pos.distance( cellCenter$1( cell ) ) );

		dist.addAssign( mx_noise_float( pos.add( cell ) ).div( params.straight.exp() ) );

		If( dist.lessThan( minDist ), ()=>{

			minDist.assign( dist );
			minCell.assign( cell );

		} );
		i.addAssign( 1 );

	} );

	var n = mx_noise_float( minCell.mul( Math.PI ) ).toVar();
	var r = mx_noise_float( pos.mul( 12 ) ).toVar();
	r.assign( r.sign().mul( r.abs().pow3() ) );
	r.addAssign( mx_noise_float( pos.mul( 40 ) ).div( 3 ) );
	var k = n.add( 1 ).div( 2 );

	var color = mix( params.color, params.background, k.add( r.mul( params.noise ) ) ).toVar();

	return color;

} );



cork.defaults = {
	$name: 'Cork',

	scale: 1,
	straight: 1,
	noise: 0.3,

	color: new Color( 0xfff0c0 ),
	background: new Color( 0xd08060 ),

	seed: 0,
};

var dalmatianSpots = Fn( ( params )=>{

	params = prepare( { ...dalmatianSpots.defaults, ...params } );

	var pos = positionGeometry.mul( exp( params.scale ) ).add( params.seed ).sub( 1000 ).toVar( );

	var k = float( 1 ).toVar();

	var d = float( 1.5 ).sub( params.density ).mul( 2 ).toVar();
	var count = params.density.mul( 5 ).add( 5 ).toVar();

	Loop( count, ()=> {

		k.mulAssign( mx_noise_float( pos ).abs().pow( d ).mul( 100 ).sub( 50 ).clamp( 0, 1 ).oneMinus() );
		pos.assign( pos.mul( 1.01 ) );
		k.mulAssign( mx_noise_float( pos.yzx ).abs().pow( d ).mul( 100 ).sub( 50 ).clamp( 0, 1 ).oneMinus() );
		pos.assign( pos.mul( 1.01 ) );
		k.mulAssign( mx_noise_float( pos.zxy ).abs().pow( d ).mul( 100 ).sub( 50 ).clamp( 0, 1 ).oneMinus() );
		pos.assign( pos.mul( 1.01 ) );

	} );

	return mix( params.background, params.color, k.clamp( 0, 1 ) );

} );


dalmatianSpots.defaults = {
	$name: 'Dalmatian spots',
	$width: 260,

	scale: 2,
	density: 0.6,

	color: new Color( 0xFFFFFF ),
	background: new Color( 0x000000 ),

	seed: 0,
};

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

var entangled = Fn( ( params ) => {

	params = prepare( { ...entangled.defaults, ...params } );

	var scale = exp( params.scale.div( 2 ) ).toVar( );
	var pos = positionGeometry.add( params.seed ).toVar( );
	var k = float( -1e4 ).toVar( );
	var k1 = float( 0 ).toVar( );

	Loop( floor( float( params.density ) ), ()=> {

		k1.assign( sin( mx_noise_float( mul( pos, scale ) ).mul( 3*Math.PI ) ) );
		k.assign( max( k, k1 ) );
		scale.mulAssign( 1.2 );

	} );

	k.assign( oneMinus( pow( abs( k ), 5 ) ).mul( 6 ) );

	return mix( params.color, params.background, k );

} );



entangled.defaults = {
	$name: 'Entangled',

	scale: 2,
	density: 10,

	color: new Color( 0x002040 ),
	background: new Color( 0xFFFFFF ),

	seed: 0,
};

var fordite = Fn( ( params ) => {

	params = prepare( { ...fordite.defaults, ...params } );

	var pos = positionGeometry.mul( exp( params.scale ) ).add( params.seed ).toVar( );

	var k = mx_noise_float(
		vec3(
			mx_noise_float( pos ),
			mx_noise_float( pos ).mul( 2 ),
			mx_noise_float( pos ).mul( 3 ),
		)
	).toVar( );

	return hsl(
		k,
		1,
		sin( mul( k, Math.PI, 4 ) ).mul( 0.5 ).add( 0.5 )
	).add( params.color );

} );



fordite.defaults = {
	$name: 'Fordite',
	scale: 2,
	color: new Color( 0, 0, 0 ),
	seed: 0,
};

var gasGiant = Fn( ( params )=>{

	params = prepare( { ...gasGiant.defaults, ...params } );

	var scale = params.scale.div( 2 ).add( 1 ).toVar();
	var pos = positionGeometry.mul( exp( scale ) ).add( params.seed ).toVar( );

	// turbulence strength
	var turbulence = params.turbulence.mul(
		mx_noise_float( vec3( 0, pos.y.mul( 0.5 ), 0 ).add( 1 ) ).add(
			mx_noise_float( vec3( 0, pos.y.mul( 1 ), 0 ).add( 1 ) ).mul( 0.5 ),
			mx_noise_float( vec3( 1, pos.y.mul( 2 ), 1 ).add( 1 ) ).mul( 0.25 )
		)
	).mul( 5 ).abs().toVar();

	var spot = mx_noise_float( pos.div( 4 ) ).add( 1 ).div( 2 ).pow( 10 ).mul( 10 ).smoothstep( 0, 1 );

	// apply turbulence
	pos.addAssign( vec3( mx_noise_float( pos ), mx_noise_float( pos.yxz ), mx_noise_float( pos.yzx ) ).mul( turbulence.mul( spot.mul( 2 ).exp() ) ) );


	var blur = params.blur.pow( 0.2 ).oneMinus().mul( turbulence.add( 1 ) ).toVar();

	var k = mx_noise_float( pos.mul( vec3( 0, scale, 0 ) ) );
	k = k.add( mx_noise_float( pos.mul( vec3( 1, 15, 1 ) ) ).mul( blur ) );
	k = k.add( -0.5 ).smoothstep( -1, 1 ).oneMinus();

	var n = mx_noise_float( vec3( 0, pos.y.mul( 0.75 ), 0 ) ).add( 1 );

	var HSL = toHsl( mix( params.colorB, params.colorA, n ) );
	var color = hsl( HSL.x.add( mx_noise_float( pos.mul( vec3( 0, scale, 0 ) ) ).div( 4 ) ), HSL.y, HSL.z ).toVar();

	color.assign( mix( color, params.colorC, turbulence.mul( 0.3 ) ) );

	return color.mul( k );

} );


gasGiant.defaults = {
	$name: 'Gas giant',

	scale: 2,
	turbulence: 0.3,
	blur: 0.6,

	colorA: new Color( 0xFFF8F0 ),
	colorB: new Color( 0xF0E8B0 ),
	colorC: new Color( 0xAFA0D0 ),

	seed: 0,
};

var grid = Fn( ( params ) => {

	params = prepare( { ...grid.defaults, ...params } );

	var uv = equirectUV( positionGeometry.normalize() ).toVar(),
		a = mul( uv.x, 2*Math.PI ),
		b = mul( uv.y, Math.PI ).toVar();

	var uTo = div( round( mul( uv.x, params.countU ) ), params.countU ),
		vTo = div( round( mul( uv.y, params.countV ) ), params.countV ),
		aTo = mul( uTo, 2*Math.PI ),
		bTo = mul( vTo, Math.PI );

	var angleU = abs( sub( a, aTo ) ).mul( sin( b ) ),
		angleV = abs( sub( b, bTo ) ),
		angle = min( angleU, angleV );

	var treshold = mul( min( div( 2*Math.PI, params.countU ), div( Math.PI, params.countV ) ), remapClamp( pow( params.thinness, 0.5 ), 0, 1, 0.9, 0.04 ), 0.5 );
	var k = oneMinus( smoothstep( sub( treshold, 0.002 ), add( treshold, 0.002 ), angle ) );

	return mix( params.background, params.color, k );

} );



grid.defaults = {
	$name: 'Grid',

	countU: 32,
	countV: 16,

	thinness: 0.8,

	color: new Color( 0x000000 ),
	background: new Color( 0xFFFFFF ),
};

var isolines = Fn( ( params )=>{

	params = prepare( { ...isolines.defaults, ...params } );

	var pos = positionGeometry.mul( exp( params.scale ) ).add( params.seed ).toVar( );

	var k = mx_noise_float( pos ).mul( params.density );

	k = oneMinus( sin( k ) ).div( 2 );

	k = smoothstep( sub( params.thinness, params.blur ), add( params.thinness, params.blur ), k );

	return mix( params.color, params.background, k );

} );


isolines.defaults = {
	$name: 'Isolines',

	scale: 2,
	density: 40,
	blur: 0.3,
	thinness: 0.6,

	color: new Color( 0xFFFFFF ),
	background: new Color( 0x000000 ),

	seed: 0,
};

var karstRock = Fn( ( params )=>{

	params = prepare( { ...karstRock.defaults, ...params } );

	var pos = positionGeometry.mul( exp( params.scale ) ).add( params.seed.sin().mul( 5 ) ).toVar( );

	var pos2 = pos.add( mx_noise_float( pos.mul( 2 ) ) ).toVar();

	var k = mx_noise_float( pos2 ).div( mx_noise_float( pos2.mul( 1.01 ) ) ).clamp( 0, 2 ).toVar();

	k.addAssign( mx_noise_float( pos.mul( 100 ) ).div( 3 ) );
	k.addAssign( mx_noise_float( pos.mul( 2 ) ).div( 2 ) );

	return mix( params.background, params.color, k ).mul( k.pow( 0.1 ) );

} );



karstRock.defaults = {
	$name: 'Karst rock',

	scale: 2,

	color: new Color( 0xFFF4F0 ),
	background: new Color( 0xD0D0D0 ),

	seed: 0,
};

var marble = Fn( ( params ) => {

	params = prepare( { ...marble.defaults, ...params } );

	var pos = positionGeometry.mul( exp( params.scale ) ).add( params.seed ).toVar( );

	var k = add(
		mx_noise_float( pos ),
		mx_noise_float( pos.mul( 2 ) ).mul( 0.5 ),
		mx_noise_float( pos.mul( 6 ) ).mul( 0.1 )
	);

	var k = oneMinus( k.abs().pow( 2.5 ) ).toVar();

	var	maxSmooth = oneMinus( pow( 0.5, params.thinness.add( 7 ) ) ).toVar(),
		minSmooth = oneMinus( pow( 0.5, params.thinness.add( 7 ).mul( 0.5 ) ) ).toVar();

	If( k.greaterThan( maxSmooth ), ()=>{

		k.assign( 1 );

	} )
		.ElseIf( k.lessThan( minSmooth ), ()=>{

			k.assign( 0 );

		} )
		.Else( ()=> {

			var a = k.sub( minSmooth );
			var b = maxSmooth.sub( minSmooth );
			k.assign( pow( div( a, b ), 5 ).mul( 0.75 ) );
			k.assign( k.mul( add( 0.5, mx_noise_float( pos.mul( 2 ) ).mul( 1.5 ) ) ) );

		} );

	k.assign( k.add( mul( params.noise, mx_noise_float( pos.mul( 150 ) ).abs().pow3() ) ) );

	return mix( params.background, params.color, k );

} );



marble.defaults = {
	$name: 'Marble',

	scale: 1.2,
	thinness: 5,
	noise: 0.3,

	color: new Color( 0x4545D3 ),
	background: new Color( 0xF0F8FF ),

	seed: 0,
};

var neonLights = Fn( ( params ) => {

	params = prepare( { ...neonLights.defaults, ...params } );

	var pos = positionGeometry;//.mul( exp( params.scale ) ).add( params.seed ).toVar( );

	var scale = exp( params.scale.remap( 0, 4, 2, -2 ) ).toVar();
	var thinness = exp( params.thinness.remap( 0, 1, 1.5, 0 ) ).toVar();

	var color = params.background.toVar();
	var neon = vec3( 0 ).toVar();

	var x = mx_noise_float( pos.xyz ).toVar();
	var y = mx_noise_float( pos.yzx ).toVar();
	var z = mx_noise_float( pos.zxy ).toVar();

	var k = mx_noise_float( vec3( x, y, z ).mul( scale ).add( params.seed ) ).toVar();
	k.assign( oneMinus( sqrt( abs( k ) ) ).pow( 3 ) );

	neon.assign( params.colorA );
	var HSL = toHsl( neon );
	neon.assign( hsl( HSL.x, HSL.y, HSL.z.mul( k ) ) );

	color.addAssign( select( params.mode.equal( 0 ), neon, neon.negate() ).mul( thinness ) );

	k.assign( mx_noise_float( vec3( y, z, x ).mul( scale ).sub( params.seed ) ) );
	k.assign( oneMinus( sqrt( abs( k ) ) ).pow( 3 ) );

	neon.assign( params.colorB );
	var HSL = toHsl( neon );
	neon.assign( hsl( HSL.x, HSL.y, HSL.z.mul( k ) ) );

	color.addAssign( select( params.mode.equal( 0 ), neon, neon.negate() ).mul( thinness ) );


	k.assign( mx_noise_float( vec3( z, x, y.negate() ).mul( scale ).add( params.seed ) ) );
	k.assign( oneMinus( sqrt( abs( k ) ) ).pow( 3 ) );

	neon.assign( params.colorC );
	var HSL = toHsl( neon );
	neon.assign( hsl( HSL.x, HSL.y, HSL.z.mul( k ) ) );

	color.addAssign( select( params.mode.equal( 0 ), neon, neon.negate() ).mul( thinness ) );

	return color;

} );



neonLights.defaults = {
	$name: 'Neon Lights',

	scale: 1.5,
	thinness: 0.8,
	mode: 0, // 0=additive, 1=subtractive

	colorA: new Color( 0xFF0000 ),
	colorB: new Color( 0x00FF00 ),
	colorC: new Color( 0x0000FF ),
	background: new Color( 0x000000 ),

	seed: 0,
};

var photosphere = Fn( ( params ) => {

	params = prepare( { ...photosphere.defaults, ...params } );

	var scale = exp( params.scale.add( 1 ) ).toVar( );
	var pos = positionGeometry.toVar( );

	var vec = vec3( pos ).toVar();

	Loop( 6, () => {

		vec.assign( applyEuler( vec, pos.mul( scale ) ) );
		scale.mulAssign( params.seed.mul( scale ).sin().mul( 0.05 ).add( 1.1 ) );

	} );


	var k = mx_noise_float( vec ).add( 1 ).div( 2 );

	return mix( params.background, params.color, k );

} );



photosphere.defaults = {
	$name: 'Photosphere',

	scale: 2,

	color: new Color( 0xFFFF00 ),
	background: new Color( 0xFF0000 ),

	seed: 0,
};

var planet = Fn( ( params )=>{

	params = prepare( { ...planet.defaults, ...params } );

	var k = float( 0 ).toVar(),
		sum = float( 0 ).toVar(),
		scale = exp( params.scale.sub( 2 ) ).toVar(),
		power = float( 2 ).toVar();

	Loop( params.iterations.add( 10 ), ()=>{

		k.addAssign( mul( power, mx_noise_float( positionGeometry.mul( scale ).add( params.seed ) ) ) );
		sum.addAssign( power );
		scale.mulAssign( 1.5 );
		power.mulAssign( 0.8 );

	} );

	k.assign( mul( k, k, 0.5 ).div( sum ) );

	var levelSea = params.levelSea.pow( 2 ).toVar();
	var levelMountain = params.levelMountain.pow( 2 ).toVar();
	var levelSand = mix( levelSea, levelMountain, params.balanceSand ).toVar();
	var levelCoast = mix( levelSea, levelSand, 0.4 ).toVar();
	var levelGrass = mix( levelSea, levelSand, 0.6 ).toVar();

	var color = vec3().toVar();

	// process water
	If( k.lessThan( levelSea ), ()=>{

		// deep-shallow
		color.assign( mix(
			params.colorDeep,
			params.colorShallow,
			remap( k, 0, levelSea, 0, 1 ).pow( exp( params.balanceWater.mul( -8 ).add( 4 ) ) )
		) );

	} )
		.ElseIf( k.lessThan( levelCoast ), ()=>{

			// shallow-sand
			color.assign( mix(
				params.colorShallow,
				params.colorBeach,
				remap( k, levelSea, levelCoast )
			) );

		} )
		.ElseIf( k.lessThan( levelGrass ), ()=>{

			// sand
			color.assign( params.colorBeach );

		} )
		.ElseIf( k.lessThan( levelSand ), ()=>{

			// shallow-sand-grass
			color.assign( mix(
				params.colorBeach,
				params.colorGrass,
				remap( k, levelGrass, levelSand )
			) );

		} )
		.ElseIf( k.lessThan( levelMountain ), ()=>{

			// grass-forest
			color.assign( mix(
				params.colorGrass,
				params.colorForest,
				remap( k, levelSand, levelMountain ).pow( 0.75 )
			) );

		} )
		.Else( ()=>{

			// forest-snow
			var levelSnow = mix( 1, levelMountain, params.balanceSnow );
			color.assign( mix(
				params.colorForest,
				params.colorSnow,
				smoothstep( mix( levelSnow, levelMountain, params.balanceSnow.pow( 0.5 ) ), levelSnow, k )
			) );

		} );

	return color;

} );



planet.defaults = {
	$name: 'Planet',

	scale: 2,

	iterations: 5,

	levelSea: 0.3,
	levelMountain: 0.7,

	balanceWater: 0.3,
	balanceSand: 0.2,
	balanceSnow: 0.8,

	colorDeep: new Color( 0x123a59 ).convertLinearToSRGB(), // SteelBlue
	colorShallow: new Color( 0x87CEEB ).convertLinearToSRGB(), // SkyBlue
	colorBeach: new Color( 0xFFFACD ).convertLinearToSRGB(), // LemonChiffon
	colorGrass: new Color( 0x3CB371 ).convertLinearToSRGB(), // MediumSeaGreen
	colorForest: new Color( 0x003000 ).convertLinearToSRGB(), // Dark green
	colorSnow: new Color( 0xF0FFFF ).convertLinearToSRGB(), // Azure

	seed: 0,
};

var goldenRatio = ( 1+5**0.5 )/2;



var polkaDots = Fn( ( params ) => {

	params = prepare( { ...polkaDots.defaults, ...params } );

	var cnt = pow( 10, params.count ).toVar();
	var vec = positionGeometry.normalize().toVar();

	var besti = oneMinus( vec.y ).mul( cnt ).sub( 1 ).div( 2 );

	var span = max( 10, cnt.pow( 0.5 ) );

	var mini = besti.sub( span ).floor().clamp( 0, cnt );
	var maxi = besti.add( span ).floor().clamp( 0, cnt );

	var dist = float( 1 ).toVar();
 	Loop( maxi.sub( mini ), ( { i } )=> {

		var j = add( i, mini );
		var theta = mod( mul( 2*Math.PI/goldenRatio, j ), 2*Math.PI );
		var phi = acos( oneMinus( float( j ).mul( 2 ).add( 1 ).div( cnt ) ) );
		var pnt = spherical( phi, theta );//.normalize();
		dist.assign( min( dist, distance( vec, pnt ) ) );

	} );

	var size = exp( params.size.mul( 5 ).sub( 5 ) ).toVar();
	var blur = params.blur.pow( 4 ).toVar();
	var k = smoothstep( size.sub( blur ), size.add( blur ), dist );

	return mix( params.color, params.background, k );

} );



polkaDots.defaults = {
	$name: 'Polka dots',

	count: 2,
	size: 0.5,
	blur: 0.25,

	color: new Color( 0x000000 ),
	background: new Color( 0xFFFFFF ),
};

var processedWood = Fn( ( params )=>{

	params = prepare( { ...processedWood.defaults, ...params } );

	var angle = radians( params.angle ).toVar();
	var posLocal = vec3(
		sub( positionGeometry.x.mul( cos( angle ) ), positionGeometry.y.mul( sin( angle ) ) ),
		add( positionGeometry.x.mul( sin( angle ) ), positionGeometry.y.mul( cos( angle ) ) ),
		positionGeometry.z,
	).toVar();

	var scale = params.scale.div( 2 ).add( 1 ).toVar();
	var pos = posLocal.mul( exp( scale ) ).add( params.seed ).toVar( );

	var len = params.length.add( 5 ).reciprocal().toVar();
	var k = mx_noise_float( pos.mul( scale, vec3( 1, len, len ) ) );
	k = k.mul( mx_noise_float( pos.mul( vec3( 25, 1, 1 ) ) ).add( -1 ).mul( 0.2 ) );
	k = k.add( params.strength.sub( 0.5 ) ).smoothstep( -0.3, 0.3 ).oneMinus();

	return mix( params.color, params.background, k );

} );


processedWood.defaults = {
	$name: 'Processed wood',
	$width: 260,

	scale: 2,
	length: 4,
	strength: 0.3,
	angle: 0,

	color: new Color( 0x702020 ),
	background: new Color( 0xF0D0A0 ),

	seed: 0,
};

var pnoise = Fn( ([ pos, fat ])=>{

	return mx_noise_float( pos ).mul( fat ).clamp( -3.14, 3.14 ).cos().add( 1 ).div( 2 );

} );



var protozoa = Fn( ( params )=>{

	params = prepare( { ...protozoa.defaults, ...params } );

	var pos = positionGeometry.mul( exp( params.scale.sub( 1 ) ) ).add( params.seed ).toVar( );

	var matcap = vec3( matcapUV, matcapUV.length() ).toVar();

	var rings1 = float( 0 ).toVar();
	var rings2 = float( 0 ).toVar();

	var n1 = float( 0 ).toVar();
	var n2 = float( 0 ).toVar();

	var fat = params.fat.add( 0.2 ).oneMinus().mul( 60 ).add( 30 ).toVar();
	var scale = float( 2 ).toVar();

	var dPos = params.amount.div( 2 ).add( 0.5 ).exp().toVar();

	Loop( 10, ()=>{

		rings1.assign( pnoise( pos.xyz.add( matcap ), fat ) );
		rings2.assign( pnoise( pos.yzx.add( matcap ), fat ) );

		n1.addAssign( rings1.mul( rings2 ).mul( scale ) );
		n2.addAssign( rings1.max( rings2 ).mul( scale ) );

		pos.assign( mix( pos.mul( dPos ), 0, 0.4 ) );

		scale.mulAssign( 0.9 );

	} );

	return mix( params.background, mix( params.color, params.subcolor, n2.mul( 0.1 ) ), n1 );

} );


protozoa.defaults = {
	$name: 'Protozoa',

	scale: 1.5,
	fat: 0.7,
	amount: 0.4,

	color: new Color( 0xA0A0A0 ),
	subcolor: new Color( 0xE0E8FF ),
	background: new Color( 0xF0F8FF ),

	seed: 0,
};

var surfacePos$6 = Fn( ([ pos, params ])=>{

	var zone = selectPlanar( pos, params.selectorAngles, params.selectorCenter, params.selectorWidth );

	var R = matRotYXZ( params.angles.mul( zone ) ),
		T = matTrans( params.center ),
		TN = matTrans( params.center.negate() );

	return T.mul( R ).mul( TN ).mul( vec4( pos, 1 ) ).xyz;

} );



var rotator = Fn( ( params )=>{

	params = prepare( { ...rotator.defaults, ...params } );

	return surfacePos$6( positionGeometry, params );

} );



rotator.normal = Fn( ( params ) => {

	params = prepare( { ...rotator.defaults, ...params } );

	var eps = 0.01;

	var position = positionGeometry,
		normal = normalLocal.normalize().toVar(),
		tangent = tangentLocal.normalize().mul( eps ).toVar(),
		bitangent = cross( normal, tangent ).normalize().mul( eps ).toVar();

	var pos = surfacePos$6( position, params );
	var posU = surfacePos$6( position.add( tangent ), params );
	var posV = surfacePos$6( position.add( bitangent ), params );

	var dU = sub( posU, pos ),
		dV = sub( posV, pos );

	return transformNormalToView( cross( dU, dV ).normalize() );

} );



rotator.defaults = {
	$name: 'Rotator',
	$positionNode: true,
	$selectorPlanar: true,

	angles: new Vector3( 0.4, -0.6, 0 ),
	center: new Vector3( 0, 0, 0 ),

	selectorCenter: new Vector3( 0, 0, 0 ),
	selectorAngles: new Vector2( 0, 0 ),
	selectorWidth: 2,

};

var surfacePos$5 = Fn( ([ pos, normal, bump, curvature ]) => {

	var k1 = mx_worley_noise_float( pos.add( mx_noise_float( pos ).mul( curvature ) ) ).add( 0.8 ).pow( 5 ).toVar();
	k1.addAssign( k1.pow( 0.5 ) );
	//k1.addAssign( noise(pos.mul(noiseScale.add(8))).add(1).pow(2).mul(noiseBump) );
	return pos.add( normal.mul( k1 ).mul( bump ) );

} );

var roughClay = Fn( ( params ) => {

	params = prepare( { ...roughClay.defaults, ...params } );

	var eps = 0.001;

	var bump = params.bump.div( 50 ).toVar();

	var position = positionGeometry.mul( exp( params.scale.div( 2 ) ) ).add( params.seed.sin().mul( 10 ) ).toVar( ),
		normal = normalLocal.normalize().toVar(),
		tangent = tangentLocal.normalize().mul( eps ).toVar(),
		bitangent = cross( normal, tangent ).normalize().mul( eps ).toVar();

	var pos = surfacePos$5( position, normal, bump, params.curvature );
	var posU = surfacePos$5( position.add( tangent ), normal, bump, params.curvature );
	var posV = surfacePos$5( position.add( bitangent ), normal, bump, params.curvature );

	var dU = sub( posU, pos ),
		dV = sub( posV, pos );

	return transformNormalToView( cross( dU, dV ).normalize() );


} );



roughClay.defaults = {
	$name: 'Rough clay',
	$normalNode: true,

	scale: 2,
	bump: 0.5,
	curvature: 0.2,

	seed: 0,
};

var runnyEggs = Fn( ( params ) => {

	params = prepare( { ...runnyEggs.defaults, ...params } );

	var pos = positionGeometry.mul( exp( params.scale.div( 1 ) ) ).add( params.seed.sin().mul( 10 ) ).toVar( );

	var sizeYolk = params.sizeYolk.oneMinus();
	var sizeWhite = params.sizeWhite.oneMinus();

	var n = mx_worley_noise_float( pos ).toVar();
	var whites = n.add( sizeWhite ).pow( 8 ).oneMinus().clamp( -0.5, 1 );
	var yolks = n.add( sizeYolk ).pow( 18 ).oneMinus().clamp( 0, 1 ).pow( 0.4 ).clamp( 0, 1 );

	return mix( params.colorBackground, mix( params.colorWhite, params.colorYolk, yolks ), whites );

} );


var surfacePos$4 = Fn( ([ pos, normal, bump, sizeYolk, sizeWhite ]) => {

	var n = mx_worley_noise_float( pos ).toVar();
	var whites = n.add( sizeWhite ).pow( 8 ).oneMinus();
	var yolks = n.add( sizeYolk ).pow( 18 ).oneMinus().clamp( 0, 1 );

	var k = mix( 0, mix( 0, 1, yolks ), whites );

	return pos.add( normal.mul( k ).mul( bump ) );

} );


runnyEggs.normal = Fn( ( params ) => {

	params = prepare( { ...runnyEggs.defaults, ...params } );

	var eps = 0.001;
	var bump = 0.05;

	var position = positionGeometry.mul( exp( params.scale.div( 1 ) ) ).add( params.seed.sin().mul( 10 ) ).toVar( ),
		normal = normalLocal.normalize().toVar(),
		tangent = tangentLocal.normalize().mul( eps ).toVar(),
		bitangent = cross( normal, tangent ).normalize().mul( eps ).toVar();

	var sizeYolk = params.sizeYolk.oneMinus();
	var sizeWhite = params.sizeWhite.oneMinus();

	var pos = surfacePos$4( position, normal, bump, sizeYolk, sizeWhite );
	var posU = surfacePos$4( position.add( tangent ), normal, bump, sizeYolk, sizeWhite );
	var posV = surfacePos$4( position.add( bitangent ), normal, bump, sizeYolk, sizeWhite );

	var dU = sub( posU, pos ),
		dV = sub( posV, pos );

	return transformNormalToView( cross( dU, dV ).normalize() );

} );


runnyEggs.roughness = Fn( ( params ) => {

	params = prepare( { ...runnyEggs.defaults, ...params } );

	var pos = positionGeometry.mul( exp( params.scale.div( 1 ) ) ).add( params.seed.sin().mul( 10 ) ).toVar( );

	var sizeYolk = params.sizeYolk.oneMinus();

	var n = mx_worley_noise_float( pos ).toVar();
	var yolks = n.add( sizeYolk ).pow( 18 ).clamp( 0, 1 );

	return yolks;

} );


runnyEggs.defaults = {
	$name: 'Runny eggs',

	scale: 1,

	sizeYolk: 0.2,
	sizeWhite: 0.7,

	colorYolk: new Color( 'orange' ),
	colorWhite: new Color( 'white' ),
	colorBackground: new Color( 'lightgray' ),

	seed: 0,
};

var _rust = Fn( ( params )=>{

	var pos = positionGeometry.mul( exp( params.scale.div( 4 ).add( -1 ) ) ).add( params.seed ).toVar( );

	var amount = params.amount.mul( mx_noise_float( pos.mul( params.amount.div( 2 ).add( 4 ) ) ).add( 4 ) ).toVar();

	var k = mx_noise_float( pos ).toVar();

	Loop( params.iterations, ()=>{

		pos.mulAssign( 2 );
		k.addAssign( mx_noise_float( pos ) );

	} );

	k.subAssign( mx_noise_float( pos.mul( 2 ) ).abs() );

	k.assign( k.sub( amount ).clamp( 0, 15 ) );

	return k;

} );


var rust = Fn( ( params )=>{

	params = prepare( { ...rust.defaults, ...params } );

	var k = _rust( params ).mul( 1.25 ).pow( 0.5 );

	var pos = positionGeometry.mul( exp( params.scale.add( params.noiseScale.mul( 3 ), 2 ) ) );

	k.addAssign( params.noise.mul( mx_noise_float( pos ).abs().add( 0.1 ).pow( 2 ) ) );

	return mix( params.color, params.background, k );

} );



rust.opacity = Fn( ( params )=>{

	params = prepare( { ...rust.defaults, ...params } );

	var k = _rust( params ).mul( params.opacity.add( 0.2 ) );

	return k.oneMinus();

} );


rust.defaults = {
	$name: 'rust',

	scale: 2,
	iterations: 8,
	amount: -0.3,
	opacity: 0.5,
	noise: 0.5,
	noiseScale: 0.5,

	color: new Color( 0xC08000 ),
	background: new Color( 0x000020 ),

	seed: 0,
};

var satin = Fn( ( params ) => {

	params = prepare( { ...satin.defaults, ...params } );

	var pos = positionGeometry.toVar( );

	var scale = exp( params.scale.div( 3 ) ).toVar();

	var k = mx_noise_float(
		vec3(
			mx_noise_float( vec3( pos.x.mul( 2 ), pos.y, pos.z ).mul( scale ) ),
			mx_noise_float( vec3( pos.x, pos.y.mul( 2 ), pos.z ).mul( scale ) ),
			mx_noise_float( vec3( pos.x, pos.y, pos.z.mul( 2 ) ).mul( scale ) ),
		).mul( scale ).add( params.seed )
	);

	k = pow( abs( k ), 3 ).mul( 20 );

	return mix( params.background, params.color, k );

} );



satin.defaults = {
	$name: 'Satin',

	scale: 2,

	color: new Color( 0x7080FF ),
	background: new Color( 0x000050 ),

	seed: 0,
};

var surfacePos$3 = Fn( ([ pos, params ])=>{

	var zone = selectPlanar( pos, params.selectorAngles, params.selectorCenter, params.selectorWidth );

	var S = matScale( mix( vec3( 1, 1, 1 ), params.scales, zone ) ),
		T = matTrans( params.center ),
		TN = matTrans( params.center.negate() );

	return T.mul( S ).mul( TN ).mul( vec4( pos, 1 ) ).xyz;

} );



var scaler = Fn( ( params )=>{

	params = prepare( { ...scaler.defaults, ...params } );

	return surfacePos$3( positionGeometry, params );

} );



scaler.normal = Fn( ( params ) => {

	params = prepare( { ...scaler.defaults, ...params } );

	var eps = 0.01;

	var position = positionGeometry,
		normal = normalLocal.normalize().toVar(),
		tangent = tangentLocal.normalize().mul( eps ).toVar(),
		bitangent = cross( normal, tangent ).normalize().mul( eps ).toVar();

	var pos = surfacePos$3( position, params );
	var posU = surfacePos$3( position.add( tangent ), params );
	var posV = surfacePos$3( position.add( bitangent ), params );

	var dU = sub( posU, pos ),
		dV = sub( posV, pos );

	return transformNormalToView( cross( dU, dV ).normalize() );

} );



scaler.defaults = {
	$name: 'Scaler',
	$positionNode: true,
	$selectorPlanar: true,

	scales: new Vector3( 0.01, 0.9, 1.7 ),
	center: new Vector3( 0, 0, 0 ),

	selectorCenter: new Vector3( 0, 0, 0 ),
	selectorAngles: new Vector2( 0, 0 ),
	selectorWidth: 2,

};

var scepterHead = Fn( ( params ) => {

	params = prepare( { ...scepterHead.defaults, ...params } );

	var pos = positionGeometry;

	var fx = pos.x.mul( remapExp( params.xFactor, 0, 100, 1.35, 30 ) ).toVar( ),
		fy = pos.y.mul( remapExp( params.yFactor, 0, 100, 1.35, 30 ) ).toVar( ),
		fz = pos.z.mul( remapExp( params.zFactor, 0, 100, 1.35, 30 ) ).toVar( );

	var cosX = cos( fx ).toVar(),
		cosY = cos( fy ).toVar(),
		cosZ = cos( fz ).toVar();

	var k = mx_noise_float( vec3( pos.x.div( cosX ), pos.y.div( cosY ), pos.z.div( cosZ ) ) );

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

var scream = Fn( ( params ) => {

	params = prepare( { ...scream.defaults, ...params } );

	var pos = positionGeometry.mul( exp( params.scale ) ).add( params.seed ).toVar( );

	var k = mx_noise_float( add( sin( pos.xyz ), cos( pos.yzx ) ) );

	pos.assign( positionGeometry.mul( exp( params.scale ).mul( k ) ).add( params.seed ) );

	var k = mx_noise_float( add( sin( pos.xyz ), cos( pos.yzx ) ).mul( 2 ) );

	var col = mix( params.background, params.color, k ).toVar();

	var HSL = toHsl( col ).toVar();

	return hsl( add( HSL.x, params.variety.mul( sin( k.mul( Math.PI ) ) ).mul( 0.5 ) ), HSL.y, HSL.z );

} );



scream.defaults = {
	$name: 'Scream',

	scale: 2,
	variety: 1,

	color: new Color( 0xF0F060 ),
	background: new Color( 0xD09090 ),

	seed: 0,
};

var simplexNoise = Fn( ( params ) => {

	params = prepare( { ...simplexNoise.defaults, ...params } );

	var pos = positionGeometry.mul( exp( params.scale ) ).add( params.seed );

	var k = clamp( 0, 1, mx_noise_float( pos ).mul( 0.5, exp( params.contrast ) ).add( 0.5, params.balance ) );

	return mix( params.background, params.color, k );

} );



simplexNoise.defaults = {
	$name: 'Simplex noise',

	scale: 2,
	balance: 0,
	contrast: 0,

	color: new Color( 0xFFFFFF ),
	background: new Color( 0x000000 ),

	seed: 0,
};

var stars = Fn( ( params ) => {

	params = prepare( { ...stars.defaults, ...params } );

	var pos = positionGeometry.mul( exp( params.scale.div( 2 ).add( 3 ) ) ).add( params.seed ).toVar( );

	var k = abs( mx_noise_float( pos ) ).pow( 10 ).mul( 10 );

	k = k.mul( exp( params.density.sub( 2 ) ) );

	var dS = select( k.greaterThan( 0.1 ), params.variation.mul( mx_noise_float( pos ) ), 0 );

	var col = toHsl( mix( params.background, params.color, k ) );

	return hsl( add( col.x, dS ), col.y, col.z );

} );



stars.defaults = {
	$name: 'Stars',

	scale: 2,
	density: 2,
	variation: 0,

	color: new Color( 0xfff5f0 ),
	background: new Color( 0x000060 ),

	seed: 0,
};

var surfacePos$2 = Fn( ([ pos, params ])=>{

	var exponent = float( 2 ).pow( params.exponent );
	var equPos = pos.div( pos.length() ).toVar();

	var p = equPos.x.abs().pow( exponent )
		.add( equPos.y.abs().pow( exponent ) )
		.add( equPos.z.abs().pow( exponent ) )
		.pow( float( 1 ).div( exponent ) );

	return equPos.div( p );

} );



var supersphere = Fn( ( params )=>{

	params = prepare( { ...supersphere.defaults, ...params } );

	return surfacePos$2( positionGeometry, params );

} );



supersphere.normal = Fn( ( params ) => {

	params = prepare( { ...supersphere.defaults, ...params } );

	var eps = 0.01;

	var position = positionGeometry,
		normal = normalLocal.normalize().toVar(),
		tangent = tangentLocal.normalize().mul( eps ).toVar(),
		bitangent = cross( normal, tangent ).normalize().mul( eps ).toVar();

	var pos = surfacePos$2( position, params );
	var posU = surfacePos$2( position.add( tangent ), params );
	var posV = surfacePos$2( position.add( bitangent ), params );

	var dU = sub( posU, pos ),
		dV = sub( posV, pos );

	return transformNormalToView( cross( dU, dV ).normalize() );

} );



supersphere.defaults = {
	$name: 'Supersphere',
	$positionNode: true,

	exponent: 3,

};

var tigerFur = Fn( ( params )=>{

	params = prepare( { ...tigerFur.defaults, ...params } );

	var scale = params.scale.div( 2 ).add( 1 ).toVar();
	var pos = positionGeometry.mul( exp( scale ) ).add( params.seed ).toVar( );

	var len = params.length.add( 5 ).reciprocal().toVar();
	var hairs = params.hairs.mul( 0.3 ).toVar();
	var k = mx_noise_float( pos.mul( scale, vec3( 1, len, len ) ) );
	k = k.add( mx_noise_float( pos.mul( vec3( 25, 1, 1 ) ) ).add( 1 ).mul( hairs ) );
	k = k.add( params.strength.sub( 0.5 ) ).smoothstep( params.blur.negate(), params.blur ).oneMinus();

	var n = positionGeometry.y.add( hairs.sub( 0.5 ) ).smoothstep( -1, 0.5 );

	return mix( params.bottomColor, params.color, n ).mul( k );

} );


tigerFur.defaults = {
	$name: 'Tiger fur',

	scale: 2,
	length: 4,
	blur: 0.3,
	strength: 0.3,
	hairs: 0.5,

	color: new Color( 0xFFAA00 ),
	bottomColor: new Color( 0xFFFFEE ),

	seed: 0,
};

var surfacePos$1 = Fn( ([ pos, params ])=>{

	var zone = selectPlanar( pos, params.selectorAngles, params.selectorCenter, params.selectorWidth );

	var T = matTrans( params.distance.mul( zone ) );

	return T.mul( vec4( pos, 1 ) ).xyz;

} );



var translator = Fn( ( params )=>{

	params = prepare( { ...translator.defaults, ...params } );

	return surfacePos$1( positionGeometry, params );

} );



translator.normal = Fn( ( params ) => {

	params = prepare( { ...translator.defaults, ...params } );

	var eps = 0.01;

	var position = positionGeometry,
		normal = normalLocal.normalize().toVar(),
		tangent = tangentLocal.normalize().mul( eps ).toVar(),
		bitangent = cross( normal, tangent ).normalize().mul( eps ).toVar();

	var pos = surfacePos$1( position, params );
	var posU = surfacePos$1( position.add( tangent ), params );
	var posV = surfacePos$1( position.add( bitangent ), params );

	var dU = sub( posU, pos ),
		dV = sub( posV, pos );

	return transformNormalToView( cross( dU, dV ).normalize() );

} );



translator.defaults = {
	$name: 'Translator',
	$positionNode: true,
	$selectorPlanar: true,

	distance: new Vector3( -0.5, 0, 0.2 ),

	selectorCenter: new Vector3( 0, 0, 0 ),
	selectorAngles: new Vector2( 0, 0 ),
	selectorWidth: 0.7,

};

var cellCenter = Fn( ([ cell ])=>{

	return cell.add( mx_noise_float( cell.mul( Math.PI ) ) );

} );


var voronoiCells = Fn( ( params )=>{

	params = prepare( { ...voronoiCells.defaults, ...params } );

	var pos = positionGeometry.mul( exp( params.scale.div( 2 ).add( 0.5 ) ) ).add( params.seed ).toVar( );

	var midCell = pos.round().toVar();

	var minCell = midCell.toVar();
	var minDist = float( 1 ).toVar();

	var cell = vec3().toVar();
	var dist = float().toVar();

	var i = float( 0 ).toVar();

	Loop( 27, () => {

		var ix = i.mod( 3 ).sub( 1 );
		var iy = i.div( 3 ).floor().mod( 3 ).sub( 1 );
		var iz = i.div( 9 ).floor().sub( 1 );
		cell.assign( midCell.add( vec3( ix, iy, iz ) ) );
		dist.assign( pos.distance( cellCenter( cell ) ).add( mx_noise_float( pos ).div( 5 ) ) );

		If( dist.lessThan( minDist ), ()=>{

			minDist.assign( dist );
			minCell.assign( cell );

		} );
		i.addAssign( 1 );

	} );


	var n = mx_noise_float( minCell.mul( Math.PI ) ).toVar();
	var k = mix( minDist, n.add( 1 ).div( 2 ), params.flat );

	var color = mix( params.color, params.background, k ).toVar();
	var randomColor = vec3( n.mul( 16.8 ), n.mul( 31.4159 ), n.mul( 27.1828 ) ).sin().add( 1 ).div( 2 );

	return mix( color, mix( color, randomColor, params.variation ), params.variation );

} );



voronoiCells.defaults = {
	$name: 'Voronoi cells',

	scale: 2,
	variation: 0,
	flat: 0,

	color: new Color( 0 ),
	background: new Color( 0xc0d0ff ),

	seed: 0,
};

var surfacePos = Fn( ([ pos, normal, bump, density, seed ]) => {

	var k = mx_noise_float( pos.add( seed ) ).add( density ).clamp( 0, 1 );
	k = cos( k.mul( Math.PI ) ).add( 1 ).pow( 0.5 ).toVar();

	return pos.add( k.mul( normal, bump ) );

} );


var waterDrops = Fn( ( params ) => {

	params = prepare( { ...waterDrops.defaults, ...params } );

	var eps = 0.001;

	var position = positionGeometry.mul( exp( params.scale.div( 1 ).add( 1 ) ) ).toVar( ),
		normal = normalLocal.normalize().toVar(),
		tangent = tangentLocal.normalize().mul( eps ).toVar(),
		bitangent = cross( normal, tangent ).normalize().mul( eps ).toVar();

	var density = remap( params.density, 0, 1, 1.5, 0.7 ).toVar();
	var seed = vec3( sin( params.seed ).mul( 100 ), cos( params.seed.div( 2 ) ).mul( 100 ), sin( params.seed.div( 3 ) ).mul( 100 ) ).toVar();

	var pos = surfacePos( position, normal, params.bump, density, seed );

	var posU = surfacePos( position.add( tangent ), normal, params.bump, density, seed );
	var posV = surfacePos( position.add( bitangent ), normal, params.bump, density, seed );

	var dU = sub( posU, pos ),
		dV = sub( posV, pos );

	return transformNormalToView( cross( dU, dV ).normalize() );

} );



waterDrops.defaults = {
	$name: 'Water Drops',
	$normalNode: true,

	scale: 1.4,
	density: 0.5,
	bump: 0.6,

	seed: 0,
};

var watermelon = Fn( ( params )=>{

	params = prepare( { ...watermelon.defaults, ...params } );

	var pos = positionGeometry.mul( exp( params.scale.div( 4 ).add( 2 ) ) ).add( params.seed ).toVar( );

	var uv = equirectUV( positionGeometry.normalize() ).toVar(),
		a = uv.x.mul( params.stripes.round(), 2*Math.PI ).add( mx_noise_float( pos.mul( vec3( 1, 0, 1 ) ) ).mul( 2 ) );

	var k = a.sin().add( 0.5 ).div( 2 ).mul( uv.y.remap( 0, 1, -Math.PI, Math.PI ).cos().add( 1.2 ).clamp( 0, 1 ) )
		.add( params.variation.mul( 2, mx_noise_float( pos.mul( 1.5 ) ).div( 2 ) ) )
		.add( params.variation.mul( 2, mx_noise_float( pos.mul( 4 ) ).div( 6 ) ) )
		.toVar();

	k.assign(
		k.mix( k.round(), 0.75 )
			.add( mx_noise_float( pos.mul( 2 ) ).mul( params.noise, 0.5 ) )
			.add( mx_noise_float( pos.mul( 3 ) ).mul( params.noise, 1 ) )
			.add( mx_noise_float( pos.mul( 15 ) ).mul( params.noise, 0.2 ) )
			.clamp( 0, 1 )
	);

	var color = mix( params.background, params.color, k ).toVar();

	return color;

} );



watermelon.defaults = {
	$name: 'Watermelon',

	scale: 2,
	stripes: 12,
	variation: 0.5,
	noise: 0.25,

	color: new Color( 'yellowgreen' ),
	background: new Color( 'darkgreen' ),

	seed: 0,
};

var wood = Fn( ( params ) => {

	params = prepare( { ...wood.defaults, ...params } );

	var angle = radians( params.angle ).toVar();
	var posLocal = vec3(
		sub( positionGeometry.x.mul( cos( angle ) ), positionGeometry.y.mul( sin( angle ) ) ),
		add( positionGeometry.x.mul( sin( angle ) ), positionGeometry.y.mul( cos( angle ) ) ),
		positionGeometry.z,
	).toVar();


	// main pattern with rings
	var pos = posLocal.mul( exp( params.scale.sub( 3 ) ).mul( vec3( reciprocal( params.length ), 4, reciprocal( params.length ) ) ) ).add( params.seed ).toVar( );
	var k = mx_noise_float( pos ).add( 1 ).mul( 10 ).mul( params.rings );
	k = k.add( k.cos() ).cos().add( 1 ).div( 2 );

	var kk = float( 0 ).toVar(),
		sum = float( 0 ).toVar(),
		scale = exp( params.scale.sub( 2 ) ).mul( vec3( 1, params.fibersDensity, 1 ) ).toVar(),
		power = float( 2 ).toVar();

	Loop( 10, ()=>{

		kk.addAssign( mul( power, mx_noise_float( posLocal.mul( scale ).add( params.seed ) ) ) );
		sum.addAssign( power );
		scale.mulAssign( 1.8 );
		power.mulAssign( 0.6 );

	} );

	kk.assign( mul( kk, 5 ).div( sum ).mul( 10 ).sin().add( 1 ).div( 2 ) );

	return mix( params.color, params.background, mix( k, kk, params.fibers ) );

} );



wood.defaults = {
	$name: 'Wood',
	scale: 2.5,
	rings: 4.5,
	length: 1,
	angle: 0,
	fibers: 0.3,
	fibersDensity: 10,
	color: new Color( 0.8, 0.4, 0 ),
	background: new Color( 0.4, 0.1, 0 ),
	seed: 0,
};

var zebraLines = Fn( ( params ) => {

	params = prepare( { ...zebraLines.defaults, ...params } );

	var pos = positionGeometry.normalize().toVar( );

	var dir = spherical( params.phi, params.theta ).toVar();

	var angle = acos( clamp( dir.dot( pos ), -1, 1 ) );

	var scale = exp( params.scale.add( 1 ) ).toVar();

	var k = sin( angle.mul( scale ) ).sub( params.thinness.sub( 0.5 ).mul( 2 ) );

	k = clamp( k.mul( 1000 ).div( scale ), -1, 1 ).mul( 0.5 ).add( 0.5 );

	return mix( params.background, params.color, k );

} );



zebraLines.defaults = {
	$name: 'Zebra lines',

	scale: 2,
	thinness: 0.5,
	phi: 0,
	theta: 0,

	color: new Color( 0x0 ),
	background: new Color( 0xFFFFFF ),

	// no seed for zebra lines
};

export { applyEuler, camouflage, caveArt, circles, clouds, concrete, cork, dalmatianSpots, dynamic, dysonSphere, entangled, fordite, gasGiant, grid, hideFallbackWarning, hsl, isolines, karstRock, marble, matRotX, matRotY, matRotYXZ, matRotZ, matScale, matTrans, neonLights, noised, normalVector, overlayPlanar, photosphere, planet, polkaDots, prepare, processedWood, protozoa, remapExp, rotator, roughClay, runnyEggs, rust, satin, scaler, scepterHead, scream, selectPlanar, showFallbackWarning, simplexNoise, spherical, stars, supersphere, tigerFur, toHsl, translator, vnoise, voronoiCells, waterDrops, watermelon, wood, zebraLines };
