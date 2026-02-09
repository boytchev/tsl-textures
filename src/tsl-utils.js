
//	TSL Utility Functions

//	noise(pos,mul,add) 				- perlin noise (x*mul+add), x->[-1,1]
//	fractal(pos,octaves,...)		- fractal noise
//	voronoi(pos,jitter,...)			- voronoi cells (worley noise)
//	voronoi2(pos,jitter,...)		- voronoi cells but returns vec2
//	voronoi3(pos,jitter,...)		- voronoi cells but returns vec3
//	vnoise(pos)						- simple noise -> [-1,1]
//	approximateNormal(pos,posU,posV) - approximate normal vector
//  toHsl(vec3)						- convert rgb to hsl
//  hsl(vec3)						- convert hsl to rgb
//	remapExp(x,fromMin,fromMax,toMin,toMax) - exponential version of remap
//	showFallbackWarning( )
//	hideFallbackWarning( )
//	spherical( phi, theta ):vec3	- from angles to point on unit sphere
//	rotatePivot( vector, pivot, angle ) - rotate around pivot point



import { add, cos, cross, float, Fn, If, log2, max, min, mul, pow, remap, rotate, select, sin, smoothstep, sub, transformNormalToView, vec3 } from 'three/tsl';



// simple vector noise, vec3->float[-1,1]
const vnoise = Fn( ([ v ])=>{

	return v.dot( vec3( 12.9898, 78.233, -97.5123 ) ).sin().mul( 43758.5453 ).fract().mul( 2 ).sub( 1 );

} ).setLayout( {
	name: 'vnoise',
	type: 'float',
	inputs: [
		{ name: 'v', type: 'vec3' },
	]
} );



// approximate normal vector given point and two neighbout points
const approximateNormal = Fn( ([ pos, posU, posV ])=>{

	var dU = sub( posU, pos ),
		dV = sub( posV, pos );

	return transformNormalToView( cross( dU, dV ).normalize() );

} ).setLayout( {
	name: 'approximateNormal',
	type: 'vec3',
	inputs: [
		{ name: 'pos', type: 'vec3' },
		{ name: 'posU', type: 'vec3' },
		{ name: 'posV', type: 'vec3' },
	]
} );




// exponential version of remap
const remapExp = Fn( ([ x, fromMin, fromMax, toMin, toMax ]) => {

	x = remap( x, fromMin, fromMax, 0, 1 );
	x = pow( 2, mul( x, log2( toMax.div( toMin ) ) ).add( log2( toMin ) ) );
	return x;

} ).setLayout( {
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



// show notification that
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
			banner = null;

		}

	}

}



// helper function - convert hsl to rgb, ported to TSL from:
// https://en.wikipedia.org/wiki/HSL_and_HSV#HSL_to_RGB_alternative

const hslHelper = Fn( ([ h, s, l, n ])=>{

	var k = n.add( h.mul( 12 ) ).mod( 12 );
	var a = s.mul( min( l, sub( 1, l ) ) );
	return l.sub( a.mul( max( -1, min( min( k.sub( 3 ), sub( 9, k ) ), 1 ) ) ) );

} ).setLayout( {
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
const hsl = Fn( ([ col ]) => {

	var h = col.x.fract().add( 1 ).fract();
	var s = col.y.clamp( 0, 1 );
	var l = col.z.clamp( 0, 1 );

	var r = hslHelper( h, s, l, 0 );
	var g = hslHelper( h, s, l, 8 );
	var b = hslHelper( h, s, l, 4 );

	return vec3( r, g, b );

} ).setLayout( {
	name: 'hsl',
	type: 'vec3',
	inputs: [
		{ name: 'col', type: 'vec3' },
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



const spherical = Fn( ([ phi, theta ]) => {

	return vec3(
		sin( theta ).mul( sin( phi ) ),
		cos( phi ),
		cos( theta ).mul( sin( phi ) )
	);

} ).setLayout( {
	name: 'spherical',
	type: 'vec3',
	inputs: [
		{ name: 'phi', type: 'float' },
		{ name: 'theta', type: 'float' },
	]
} );



const rotatePivot = Fn( ([ vector, pivot, angle ])=>{

	return rotate( vector.sub( pivot ), angle ).add( pivot );

} ).setLayout( {
	name: 'rotatePivot',
	type: 'vec3',
	inputs: [
		{ name: 'vector', type: 'vec3' },
		{ name: 'pivot', type: 'vec3' },
		{ name: 'angle', type: 'vec3' },
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

} ).setLayout( {
	name: 'selectPlanar',
	type: 'float',
	inputs: [
		{ name: 'pos', type: 'vec3' },
		{ name: 'selAngles', type: 'vec2' },
		{ name: 'selCenter', type: 'vec3' },
		{ name: 'selWidth', type: 'float' },
	]
} );



export
{
	approximateNormal,
	showFallbackWarning,
	hideFallbackWarning,
	remapExp,
	hsl,
	toHsl,
	rotatePivot,
	vnoise,
	spherical,
	selectPlanar,
};



export
{
	mx_noise_float as noise,
	mx_fractal_noise_float as fractal,
	mx_fractal_noise_vec3 as fractal3,
	mx_worley_noise_float as voronoi,
	mx_worley_noise_vec2 as voronoi2,
	mx_worley_noise_vec3 as voronoi3,

} from 'three/tsl';
