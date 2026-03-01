// TSL Textures v3.0.1

'use strict';

var tsl = require('three/tsl');
var three = require('three');

// simple vector noise, vec3->float[-1,1]
const vnoise = tsl.Fn( ([ v ])=>{

	return v.dot( tsl.vec3( 12.9898, 78.233, -97.5123 ) ).sin().mul( 43758.5453 ).fract().mul( 2 ).sub( 1 );

} ).setLayout( {
	name: 'vnoise',
	type: 'float',
	inputs: [
		{ name: 'v', type: 'vec3' },
	]
} );



// approximate normal vector given point and two neighbout points
const approximateNormal = tsl.Fn( ([ pos, posU, posV ])=>{

	var dU = tsl.sub( posU, pos ),
		dV = tsl.sub( posV, pos );

	return tsl.transformNormalToView( tsl.cross( dU, dV ).normalize() );

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
const remapExp = tsl.Fn( ([ x, fromMin, fromMax, toMin, toMax ]) => {

	x = tsl.remap( x, fromMin, fromMax, 0, 1 );
	x = tsl.pow( 2, tsl.mul( x, tsl.log2( toMax.div( toMin ) ) ).add( tsl.log2( toMin ) ) );
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

const hslHelper = tsl.Fn( ([ h, s, l, n ])=>{

	var k = n.add( h.mul( 12 ) ).mod( 12 );
	var a = s.mul( tsl.min( l, tsl.sub( 1, l ) ) );
	return l.sub( a.mul( tsl.max( -1, tsl.min( tsl.min( k.sub( 3 ), tsl.sub( 9, k ) ), 1 ) ) ) );

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
const hsl = tsl.Fn( ([ col ]) => {

	var h = col.x.fract().add( 1 ).fract();
	var s = col.y.clamp( 0, 1 );
	var l = col.z.clamp( 0, 1 );

	var r = hslHelper( h, s, l, 0 );
	var g = hslHelper( h, s, l, 8 );
	var b = hslHelper( h, s, l, 4 );

	return tsl.vec3( r, g, b );

} ).setLayout( {
	name: 'hsl',
	type: 'vec3',
	inputs: [
		{ name: 'col', type: 'vec3' },
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



const spherical = tsl.Fn( ([ phi, theta ]) => {

	return tsl.vec3(
		tsl.sin( theta ).mul( tsl.sin( phi ) ),
		tsl.cos( phi ),
		tsl.cos( theta ).mul( tsl.sin( phi ) )
	);

} ).setLayout( {
	name: 'spherical',
	type: 'vec3',
	inputs: [
		{ name: 'phi', type: 'float' },
		{ name: 'theta', type: 'float' },
	]
} );



const rotatePivot = tsl.Fn( ([ vector, pivot, angle ])=>{

	return tsl.rotate( vector.sub( pivot ), angle ).add( pivot );

} ).setLayout( {
	name: 'rotatePivot',
	type: 'vec3',
	inputs: [
		{ name: 'vector', type: 'vec3' },
		{ name: 'pivot', type: 'vec3' },
		{ name: 'angle', type: 'vec3' },
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

var defaults$P = {
	$name: 'Brain',

	position: tsl.positionGeometry,
	scale: 2,

	smooth: 0.5,
	wave: 0.5,
	speed: 2.5,
	time: tsl.time,

	color: new three.Color( 0xFFD0D0 ),
	background: new three.Color( 0x500000 ),

	seed: 0,
};



var brainRaw = tsl.Fn( ([ position, scale, xsmooth, /*wave, speed, time,*/ color, background, seed ])=>{

	var pos = position.mul( scale.div( 3 ).exp( ) ).add( seed ).toVar( 'pos' );

	var octaves = xsmooth.oneMinus().mul( 2 ).exp( ).toVar( 'octaves' );

	var n = tsl.mx_fractal_noise_float( pos.mul( 5 ), octaves ).add( 1 ).div( 2 ).clamp( 0, 1 ).pow( 2 );

	return tsl.mix( color, background, n );

} ).setLayout( {
	name: 'brainRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'xsmooth', type: 'float' },
		/*{ name: 'wave', type: 'float' },*/
		/*{ name: 'speed', type: 'float' },*/
		/*{ name: 'time', type: 'float' },*/
		{ name: 'color', type: 'vec3' },
		{ name: 'background', type: 'vec3' },
		{ name: 'seed', type: 'float' },
	] }
);


var brainNormalRaw = tsl.Fn( ([ position, scale, xsmooth, wave, speed, time, /*color, background,*/ seed ])=>{

	var pos = position.mul( scale.div( 3 ).exp( ) ).add( seed ).toVar( 'pos' );

	var octaves = xsmooth.oneMinus().mul( 2 ).exp( ).toVar( 'octaves' );

	const EPS = 0.01;

	var n = tsl.mx_fractal_noise_float( pos.mul( 5 ), octaves ).toVar( 'n' ),
		dx = tsl.mx_fractal_noise_float( pos.add( tsl.vec3( EPS, 0, 0 ) ).mul( 5 ), octaves ).sub( n ).div( EPS ).toVar( 'dx' ),
		dy = tsl.mx_fractal_noise_float( pos.add( tsl.vec3( 0, EPS, 0 ) ).mul( 5 ), octaves ).sub( n ).div( EPS ).toVar( 'dy' );

	var dTime = tsl.mx_noise_float( pos.mul( wave, 5 ) ).add( 1 ).div( 2 ).mul( 6.28 ).toVar( 'dTime' );

	return tsl.vec3( dx, dy, time.mul( speed ).add( dTime ).sin().add( n, 1 ) ).normalize();

} ).setLayout( {
	name: 'brainNormalRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'xsmooth', type: 'float' },
		{ name: 'wave', type: 'float' },
		{ name: 'speed', type: 'float' },
		{ name: 'time', type: 'float' },
		/*{ name: 'color', type: 'vec3' },*/
		/*{ name: 'background', type: 'vec3' },*/
		{ name: 'seed', type: 'float' },
	] }
);



function brain( params={} ) {

	var { position, scale, smooth, /*wave, speed, time,*/ color, background, seed } = { ...defaults$P, ...params };

	return brainRaw( position, scale, smooth, /*wave, speed, time,*/ color, background, seed );

}



brain.normal = function ( params={} ) {

	var { position, scale, smooth, wave, speed, time, /*color, background,*/ seed } = { ...defaults$P, ...params };

	return brainNormalRaw( position, scale, smooth, wave, speed, time, /*color, background,*/ seed );

};



brain.defaults = defaults$P;

var defaults$O = {
	$name: 'Camouflage',

	position: tsl.positionGeometry,
	scale: 2,

	colorA: new three.Color( 0xc2bea8 ),
	colorB: new three.Color( 0x9c895e ),
	colorC: new three.Color( 0x92a375 ),
	colorD: new three.Color( 0x717561 ),

	seed: 0,
};



var camouflageRaw = tsl.Fn( ([ position, scale, colorA, colorB, colorC, colorD, seed ])=>{

	var pos = position.mul( scale.exp( ) ).add( seed ).toVar( 'pos' );

	var color = colorD.toVar( 'color' );

	tsl.If( tsl.mx_noise_float( pos ).greaterThanEqual( 0.3 ), () => {

		color.assign( colorA );

	}
	)
		.ElseIf( tsl.mx_noise_float( pos.yzx ).greaterThanEqual( 0.2 ), () => {

			color.assign( colorB );

		}
		)
		.ElseIf( tsl.mx_noise_float( pos.zxy ).greaterThanEqual( 0.1 ), () => {

			color.assign( colorC );

		}
		);

	return color;

} ).setLayout( {
	name: 'camouflageRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'colorA', type: 'vec3' },
		{ name: 'colorB', type: 'vec3' },
		{ name: 'colorC', type: 'vec3' },
		{ name: 'colorD', type: 'vec3' },
		{ name: 'seed', type: 'float' },
	] }
);



function camouflage( params={} ) {

	var { position, scale, colorA, colorB, colorC, colorD, seed } = { ...defaults$O, ...params };

	return camouflageRaw( position, scale, colorA, colorB, colorC, colorD, seed );

}



camouflage.defaults = defaults$O;

var defaults$N = {
	$name: 'Cave art',

	position: tsl.positionGeometry,
	scale: 2,

	thinness: 2,
	noise: 0.3,

	color: new three.Color( 0xD34545 ),
	background: new three.Color( 0xFFF8F0 ),

	seed: 0,
};



var caveArtRaw = tsl.Fn( ([ position, scale, thinness, xnoise, color, background, seed ]) => {

	var pos = position.mul( scale.exp( ) ).add( seed ).toVar( 'pos' );

	thinness = tsl.float( 3 ).sub( thinness ).exp( );

	var k1 = tsl.mx_noise_float( pos, 4 ).sin().toVar( 'k1' ),
		k2 = tsl.mx_noise_float( pos.mul( 1.5 ), 4 ).cos().toVar( 'k2' ),
		k = thinness.sub( k1.add( k2 ).abs( ).pow2( ).mul( 20 ) ).toVar( 'k' );

	tsl.If( tsl.or( k1.greaterThan( k2 ), k.lessThan( 0 ) ), ()=>{

		k.assign( 0 );

	} );

	tsl.If( k.lessThanEqual( 0 ), ()=>{

		k.assign( xnoise.mul( tsl.mx_noise_float( pos.mul( 30 ) ).pow2( ) ) );

	} );

	return tsl.mix( background, color, k );

} ).setLayout( {
	name: 'caveArtRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'thinness', type: 'float' },
		{ name: 'xnoise', type: 'float' },
		{ name: 'color', type: 'vec3' },
		{ name: 'background', type: 'vec3' },
		{ name: 'seed', type: 'float' },
	] }
);



function caveArt( params={} ) {

	var { position, scale, thinness, noise, color, background, seed } = { ...defaults$N, ...params };

	return caveArtRaw( position, scale, thinness, noise, color, background, seed );

}



caveArt.defaults = defaults$N;

var defaults$M = {
	$name: 'Circles',

	position: tsl.positionGeometry,

	scale: 2,
	variety: 1,

	color: new three.Color( 0xF0E0D0 ),

	seed: 0,
};



var circlesRaw = tsl.Fn( ([ position, scale, variety, color, seed ]) => {

	var pos = position.toVar();

	var angle = tsl.acos( tsl.clamp( pos.y, -1, 1 ) ).mul( 20 );

	var x = angle.div( 3000 ).mul( tsl.exp( scale.sub( 1 ) ) );

	var k = seed.sin().mul( 100 ).toVar();

	for ( var n=0; n<=10; n++ ) {

		k.addAssign( tsl.sin( x.mul( 2**n ).sub( Math.PI*n/2 ) ).mul( -n*( n+1 )/2 ) );

	}

	k.assign( k.div( 200 ).clamp( -2, 2 ) );

	var HSL = toHsl( color );

	var hue = HSL.x.add( k.mul( variety ) ).mod( 1 ).mul( 10 );

	var huei = hue.floor();
	var huef = hue.sub( huei );
	huef = tsl.select( huef.lessThan( 0.5 ), huef.pow( 1.5 ), huef.pow( 1/1.5 ) );

	return hsl( tsl.vec3( huei.add( huef ).div( 10 ), HSL.yz ) );

} ).setLayout( {
	name: 'circlesRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'variety', type: 'float' },
		{ name: 'color', type: 'vec3' },
		{ name: 'seed', type: 'float' },
	] }
);



function circles( params={} ) {

	var { position, scale, variety, color, seed } = { ...defaults$M, ...params };

	return circlesRaw( position, scale, variety, color, seed );

}



circles.defaults = defaults$M;

var defaults$L = {
	$name: 'Clouds',

	position: tsl.positionGeometry,
	scale: 2,
	density: 0.5,
	opacity: 1,

	color: new three.Color( 0xFFFFFF ),
	subcolor: new three.Color( 0xA0A0B0 ),

	seed: 0,
};



var cloud_core = tsl.Fn( ([ position, scale, density, seed ]) => {

	const pos = position.mul( tsl.exp( scale.div( 1.5 ).sub( 0.5 ) ) ).add( seed ).toVar( 'pos' );

	return tsl.mx_fractal_noise_float( pos, 4 ).add( density.remap( 0, 1, -0.5, 1.5 ) );

} ).setLayout( {
	name: 'cloud_core',
	type: 'float',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'density', type: 'float' },
		{ name: 'seed', type: 'float' },
	] }
);



var cloudsRaw = tsl.Fn( ([ position, scale, density, /*opacity,*/color, subcolor, seed ]) => {

	var k = cloud_core( position, scale, density, seed );
	return tsl.mix( subcolor, color, k.clamp( 0, 1 ) );


} ).setLayout( {
	name: 'cloudsRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'density', type: 'float' },
		/*{ name: 'opacity', type: 'float' },*/
		{ name: 'color', type: 'vec3' },
		{ name: 'subcolor', type: 'vec3' },
		{ name: 'seed', type: 'float' },
	] }
);



var cloudsOpacityRaw = tsl.Fn( ([ position, scale, density, opacity, /*color,subcolor,*/seed ]) => {

	var k = cloud_core( position, scale, density, seed );
	return tsl.clamp( 0, 1, tsl.mul( k, 2 ).pow( 1.5 ).sub( 1 ).mul( opacity ) );

} ).setLayout( {
	name: 'cloudsOpacityRaw',
	type: 'float',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'density', type: 'float' },
		{ name: 'opacity', type: 'float' },
		/*{ name: 'color', type: 'vec3' },*/
		/*{ name: 'subcolor', type: 'vec3' },*/
		{ name: 'seed', type: 'float' },
	] }
);



function clouds( params={} ) {

	var { position, scale, density, /*opacity,*/color, subcolor, seed } = { ...defaults$L, ...params };

	return cloudsRaw( position, scale, density, /*opacity,*/color, subcolor, seed );

}



clouds.opacity = function ( params={} ) {

	var { position, scale, density, opacity, /*color,subcolor,*/seed } = { ...defaults$L, ...params };

	return cloudsOpacityRaw( position, scale, density, opacity, /*color,subcolor,*/seed );

};



clouds.defaults = defaults$L;

var defaults$K = {
	$name: 'Concrete',
	$normalNode: true,

	position: tsl.positionGeometry,

	scale: 2,
	density: 0.5,
	bump: 0.5,

	seed: 0,
};



var surfacePos$7 = tsl.Fn( ([ position, normal, density ]) => {

	var k = tsl.mx_noise_float( position, 0.5, 0.5 ).abs().pow( density );

	return position.add( normal.mul( k ) );

} ).setLayout( {
	name: 'surfacePos',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'normal', type: 'vec3' },
		{ name: 'density', type: 'float' },
	] }
);



var concreteRaw = tsl.Fn( ([ position, normal, tangent, scale, density, bump, seed ]) => {

	const EPS = 0.001;

	var seed3d = tsl.vec3( 1, 2, 3 ).mul( seed ).sin().mul( 100 ).toVar( 'seed3d' );

	var xposition = position.mul( tsl.exp( scale.div( 2 ).add( 2 ) ) ).add( seed3d ).toVar( 'xposition' ),
		xnormal = normal.normalize().toVar( 'xnormal' ),
		xtangent = tangent.normalize().mul( EPS ).toVar( 'xtangent' ),
		xbitangent = tsl.cross( xnormal, xtangent ).normalize().mul( EPS ).toVar( 'xbitangent' );

	var xdensity = tsl.remap( density, 0, 1, 10, 0.5 ).toVar( 'xdensity' );

	xnormal.mulAssign( bump );

	var pos = surfacePos$7( xposition, xnormal, xdensity ).toVar( 'pos' ),
		posU = surfacePos$7( xposition.add( xtangent ), xnormal, xdensity ).toVar( 'posU' ),
		posV = surfacePos$7( xposition.add( xbitangent ), xnormal, xdensity ).toVar( 'posV' );

	return approximateNormal( pos, posU, posV );

} ).setLayout( {
	name: 'concreteRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'normal', type: 'vec3' },
		{ name: 'tangent', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'density', type: 'float' },
		{ name: 'bump', type: 'float' },
		{ name: 'seed', type: 'float' },
	] }
);



function concrete( params={} ) {

	var { position, scale, density, bump, seed } = { ...defaults$K, ...params };

	return concreteRaw( position, tsl.normalLocal, tsl.tangentLocal, scale, density, bump, seed );

}



concrete.defaults = defaults$K;

var defaults$J = {
	$name: 'Cork',

	position: tsl.positionGeometry,
	scale: 1,
	straight: 1,
	noise: 0.3,

	color: new three.Color( 0xfff0c0 ),
	background: new three.Color( 0xd08060 ),

	seed: 0,
};



var corkRaw = tsl.Fn( ([ position, scale, straight, xnoise, color, background, seed ])=>{

	var pos = position.mul( tsl.exp( scale.div( 1.5 ).add( 1 ) ) ).add( seed ).toVar( 'pos' );

	var midCell = pos.round().toConst( 'midCell' );

	var minCell = midCell.toVar( 'minCell' ),
		minDist = tsl.float( 1 ).toVar( 'minDist' );

	var cell = tsl.vec3().toVar( 'cell' ),
		dist = tsl.float().toVar( 'dist' );

	var strtaightness = straight.exp().reciprocal().toVar( 'strtaightness' );

	var i=tsl.int( 0 ).toVar( 'i' ),
		j=tsl.int( 0 ).toVar( 'j' ),
		k=tsl.int( 0 ).toVar( 'k' );

	// Loop uses hard-coded i, j, k as indices
	tsl.Loop( 3, 3, 3, () => {

		cell.assign( midCell.add( tsl.vec3( i, j, k ).sub( 1 ) ) );
		var cellCenter = cell.add( vnoise( cell ) );
		dist.assign( pos.distance( cellCenter ) );

		dist.addAssign( tsl.mx_noise_float( pos.add( cell ), strtaightness ) );

		tsl.If( dist.lessThan( minDist ), ()=>{

			minDist.assign( dist );
			minCell.assign( cell );

		} );

	} );

	var n = tsl.mx_noise_float( minCell.mul( Math.PI ), 0.5, 0.5 ).toVar( 'n' );

	var r = tsl.mx_noise_float( pos.mul( 12 ) ).toVar( 'r' );
	r.mulAssign( r, r );
	r.addAssign( tsl.mx_noise_float( pos.mul( 40 ), 1/3 ) );

	var result = tsl.mix( color, background, n.add( r.mul( xnoise ) ) );

	return result;

} ).setLayout( {
	name: 'camouflageRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'straight', type: 'float' },
		{ name: 'xnoise', type: 'float' },
		{ name: 'color', type: 'vec3' },
		{ name: 'background', type: 'vec3' },
		{ name: 'seed', type: 'float' },
	] }
);



function cork( params={} ) {

	var { position, scale, straight, noise, color, background, seed } = { ...defaults$J, ...params };

	return corkRaw( position, scale, straight, noise, color, background, seed );

}



cork.defaults = defaults$J;

var defaults$I = {
	$name: 'Dalmatian spots',
	$width: 260,

	position: tsl.positionGeometry,

	scale: 2,
	density: 0.6,

	color: new three.Color( 0xFFFFFF ),
	background: new three.Color( 0x000000 ),

	seed: 0,
};



var dalmatianSpotsRaw = tsl.Fn( ([ position, scale, density, color, background, seed ])=>{

	var pos = position.mul( scale.exp( ) ).add( seed ).sub( 1000 ).toVar( 'pos' );

	var k = tsl.float( 1 ).toVar( 'k' );

	var d = tsl.float( 1.5 ).sub( density ).mul( 2 ).toVar( 'd' );
	var count = density.mul( 5 ).add( 5 ).toVar( 'count' );

	tsl.Loop( count, ()=> {

		k.mulAssign( tsl.mx_noise_float( pos ).abs().pow( d ).mul( 100 ).sub( 50 ).clamp( 0, 1 ).oneMinus() );
		pos.assign( pos.mul( 1.01 ) );
		k.mulAssign( tsl.mx_noise_float( pos.yzx ).abs().pow( d ).mul( 100 ).sub( 50 ).clamp( 0, 1 ).oneMinus() );
		pos.assign( pos.mul( 1.01 ) );
		k.mulAssign( tsl.mx_noise_float( pos.zxy ).abs().pow( d ).mul( 100 ).sub( 50 ).clamp( 0, 1 ).oneMinus() );
		pos.assign( pos.mul( 1.01 ) );

	} );

	return tsl.mix( background, color, k.clamp( 0, 1 ) );

} ).setLayout( {
	name: 'dalmatianSpotsRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'density', type: 'float' },
		{ name: 'color', type: 'vec3' },
		{ name: 'background', type: 'vec3' },
		{ name: 'seed', type: 'float' },
	] }
);



function dalmatianSpots( params={} ) {

	var { position, scale, density, color, background, seed } = { ...defaults$I, ...params };

	return dalmatianSpotsRaw( position, scale, density, color, background, seed );

}



dalmatianSpots.defaults = defaults$I;

var defaults$H = {
	$name: 'Darth Maul',

	position: tsl.positionGeometry,
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



var darthMaulRaw = tsl.Fn( ([ position, scale, shift, complexity, angle, distance, color, background, balance, seed ]) => {

	var xposition = position.add( shift ).mul( tsl.exp( scale.div( 1.5 ).sub( 1 ) ) ).sub( shift ).mul( tsl.vec3( 1, 1/2, 1/2 ) ).toVar( );

	var s = tsl.select( position.y.mul( angle.radians().cos() ).add( position.z.mul( angle.radians().sin() ) ).greaterThan( distance ), 1, 0 );

	// implement symmetry
	xposition.x.assign( xposition.x.add( shift.x ).abs() );
	xposition.y.addAssign( seed );
	xposition.z.mulAssign( shift.z );

	var n = tsl.mx_noise_float( xposition ).toVar();

	var k = n.sin().mul( n.mul( complexity.mul( 2 ).add( 1 ).exp() ).sin() ).remap( 0, 0.2, 1, -1 ).greaterThan( balance ).select( 0, 1 );

	var c = tsl.select( xposition.x.greaterThan( tsl.mx_noise_float( xposition.mul( 2.3 ) ).abs().mul( 0.5 ).add( 0.02 )	), 1, 0 );

	return tsl.mix( background, color, k.mul( s ).mul( c ).clamp( 0, 1 ) );

} ).setLayout( {
	name: 'darthMaulRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'shift', type: 'vec3' },
		{ name: 'complexity', type: 'float' },
		{ name: 'angle', type: 'float' },
		{ name: 'distance', type: 'float' },
		{ name: 'color', type: 'vec3' },
		{ name: 'background', type: 'vec3' },
		{ name: 'balance', type: 'float' },
		{ name: 'seed', type: 'float' },
	] }
);



function darthMaul( params={} ) {

	var { position, scale, shift, complexity, angle, distance, color, background, balance, seed } = { ...defaults$H, ...params };

	return darthMaulRaw( position, scale, shift, complexity, angle, distance, color, background, balance, seed );

}



darthMaul.defaults = defaults$H;

var defaults$G = {
	$name: 'Dyson sphere',

	position: tsl.positionGeometry,
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

} ).setLayout( {
	name: 'noisea',
	type: 'float',
	inputs: [
		{ name: 'pos', type: 'vec3' },
	] }
);



var smoother = tsl.Fn( ([ x ])=>{

	var t = x.oneMinus().clamp( 0, 1 ).toVar();
	return t.mul( t ).mul( tsl.float( 3 ).sub( t.mul( 2 ) ) );

} ).setLayout( {
	name: 'smoother',
	type: 'float',
	inputs: [
		{ name: 'x', type: 'float' },
	] }
);



var noiseg = tsl.Fn( ([ pos ])=>{

	var minx = pos.x.floor().toVar();
	var maxx = minx.add( 1 ).toVar();

	var miny = pos.y.floor().toVar();
	var maxy = miny.add( 1 ).toVar();

	var minz = pos.z.floor().toVar();
	var maxz = minz.add( 1 ).toVar();

	var dx = smoother( pos.x.fract() ).toVar();
	var dy = smoother( pos.y.fract() ).toVar();
	var dz = smoother( pos.z.fract() ).toVar();

	var mx = smoother( dx.oneMinus() ).toVar();
	var my = smoother( dy.oneMinus() ).toVar();
	var mz = smoother( dz.oneMinus() ).toVar();

	var n000 = noisea( tsl.vec3( minx, miny, minz ) ).mul( mx ).mul( my ).mul( mz ).toVar();
	var n001 = noisea( tsl.vec3( minx, miny, maxz ) ).mul( mx ).mul( my ).mul( dz ).toVar();
	var n010 = noisea( tsl.vec3( minx, maxy, minz ) ).mul( mx ).mul( dy ).mul( mz ).toVar();
	var n011 = noisea( tsl.vec3( minx, maxy, maxz ) ).mul( mx ).mul( dy ).mul( dz ).toVar();
	var n100 = noisea( tsl.vec3( maxx, miny, minz ) ).mul( dx ).mul( my ).mul( mz ).toVar();
	var n101 = noisea( tsl.vec3( maxx, miny, maxz ) ).mul( dx ).mul( my ).mul( dz ).toVar();
	var n110 = noisea( tsl.vec3( maxx, maxy, minz ) ).mul( dx ).mul( dy ).mul( mz ).toVar();
	var n111 = noisea( tsl.vec3( maxx, maxy, maxz ) ).mul( dx ).mul( dy ).mul( dz ).toVar();

	return n000.add( n001 ).add( n010 ).add( n011 ).add( n100 ).add( n101 ).add( n110 ).add( n111 );

} ).setLayout( {
	name: 'noiseg',
	type: 'float',
	inputs: [
		{ name: 'pos', type: 'vec3' },
	] }
);



var dysonSphereRaw = tsl.Fn( ([ position, scale, complexity, color, background, seed ])=>{

	var pos = position.mul( tsl.exp( scale.div( 2 ).add( 0.5 ) ) ).add( seed ).toVar( );

	var res = tsl.vec3().toVar();
	var factor = tsl.float( 1 ).toVar();

	tsl.Loop( complexity.add( 4 ), ()=>{

		res.addAssign( noiseg( pos.mul( factor ) ) );
		factor.addAssign( factor );

	} );

	return tsl.mix( background, color, res.x.add( 1 ).div( 5 ) );

} ).setLayout( {
	name: 'dysonSphereRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'complexity', type: 'float' },
		{ name: 'color', type: 'vec3' },
		{ name: 'background', type: 'vec3' },
		{ name: 'seed', type: 'float' },
	] }
);



function dysonSphere( params={} ) {

	var { position, scale, complexity, color, background, seed } = { ...defaults$G, ...params };

	return dysonSphereRaw( position, scale, complexity, color, background, seed );

}



dysonSphere.defaults = defaults$G;

var defaults$F = {
	$name: 'Entangled',

	position: tsl.positionGeometry,
	scale: 2,
	density: 10,

	color: new three.Color( 0x002040 ),
	background: new three.Color( 0xFFFFFF ),

	seed: 0,
};



var entangledRaw = tsl.Fn( ([ position, scale, density, color, background, seed ]) => {

	var xscale = tsl.exp( scale.div( 2 ) ).toVar( );
	var pos = position.add( seed ).toVar( );
	var k = tsl.float( -1e4 ).toVar( );
	var k1 = tsl.float( 0 ).toVar( );

	tsl.Loop( density, ()=> {

		k1.assign( tsl.sin( tsl.mx_noise_float( tsl.mul( pos, xscale ) ).mul( 3*Math.PI ) ) );
		k.assign( tsl.max( k, k1 ) );
		xscale.mulAssign( 1.2 );

	} );

	k.assign( tsl.oneMinus( tsl.pow( tsl.abs( k ), 5 ) ).mul( 6 ) );

	return tsl.mix( color, background, k );

} ).setLayout( {
	name: 'entangled',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'density', type: 'int' },
		{ name: 'color', type: 'vec3' },
		{ name: 'background', type: 'vec3' },
		{ name: 'seed', type: 'float' },
	] }
);



function entangled( params={} ) {

	var { position, scale, density, color, background, seed } = { ...defaults$F, ...params };

	return entangledRaw( position, scale, density, color, background, seed );

}



entangled.defaults = defaults$F;

var defaults$E = {
	$name: 'Fordite',

	position: tsl.positionGeometry,
	scale: 2,
	color: new three.Color( 0, 0, 0 ),

	seed: 0,
};



var forditeRaw = tsl.Fn( ([ position, scale, color, seed ]) => {

	var pos = position.mul( tsl.exp( scale ) ).add( seed ).toVar( );

	var k = tsl.mx_noise_float(
		tsl.vec3(
			tsl.mx_noise_float( pos, 1 ),
			tsl.mx_noise_float( pos, 2 ),
			tsl.mx_noise_float( pos, 3 ),
		)
	).toVar( );

	return hsl( tsl.vec3(
		k,
		1,
		tsl.sin( tsl.mul( k, Math.PI, 4 ) ).mul( 0.5 ).add( 0.5 )
	) ).add( color );

} ).setLayout( {
	name: 'forditeRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'color', type: 'vec3' },
		{ name: 'seed', type: 'float' },
	] }
);



function fordite( params={} ) {

	var { position, scale, color, seed } = { ...defaults$E, ...params };

	return forditeRaw( position, scale, color, seed );

}



fordite.defaults = defaults$E;

var defaults$D = {
	$name: 'Gas giant',

	position: tsl.positionGeometry,
	scale: 2,
	turbulence: 0.3,
	blur: 0.6,

	colorA: new three.Color( 0xFFF8F0 ),
	colorB: new three.Color( 0xF0E8B0 ),
	colorC: new three.Color( 0xAFA0D0 ),

	seed: 0,
};



var gasGiantRaw = tsl.Fn( ([ position, scale, turbulence, blur, colorA, colorB, colorC, seed ])=>{

	var xscale = scale.div( 2 ).add( 1 ).toVar();
	var pos = position.mul( tsl.exp( xscale ) ).add( seed ).toVar( );

	// turbulence strength
	var xturbulence = turbulence.mul(
		tsl.mx_noise_float( tsl.vec3( 0, pos.y.mul( 0.5 ), 0 ).add( 1 ) ).add(
			tsl.mx_noise_float( tsl.vec3( 0, pos.y.mul( 1 ), 0 ).add( 1 ) ).mul( 0.5 ),
			tsl.mx_noise_float( tsl.vec3( 1, pos.y.mul( 2 ), 1 ).add( 1 ) ).mul( 0.25 )
		)
	).mul( 5 ).abs().toVar();

	var spot = tsl.mx_noise_float( pos.div( 4 ) ).add( 1 ).div( 2 ).pow( 10 ).mul( 10 ).smoothstep( 0, 1 );

	// apply turbulence
	pos.addAssign( tsl.vec3( tsl.mx_noise_float( pos ), tsl.mx_noise_float( pos.yxz ), tsl.mx_noise_float( pos.yzx ) ).mul( xturbulence.mul( spot.mul( 2 ).exp() ) ) );


	var xblur = blur.pow( 0.2 ).oneMinus().mul( xturbulence.add( 1 ) ).toVar();

	var k = tsl.mx_noise_float( pos.mul( tsl.vec3( 0, xscale, 0 ) ) );
	k = k.add( tsl.mx_noise_float( pos.mul( tsl.vec3( 1, 15, 1 ) ) ).mul( xblur ) );
	k = k.add( -0.5 ).smoothstep( -1, 1 ).oneMinus();

	var n = tsl.mx_noise_float( tsl.vec3( 0, pos.y.mul( 0.75 ), 0 ) ).add( 1 );

	var HSL = toHsl( tsl.mix( colorB, colorA, n ) );
	var color = hsl( tsl.vec3( HSL.x.add( tsl.mx_noise_float( pos.mul( tsl.vec3( 0, xscale, 0 ) ) ).div( 4 ) ), HSL.yz ) ).toVar();

	color.assign( tsl.mix( color, colorC, xturbulence.mul( 0.3 ) ) );

	return color.mul( k );

} ).setLayout( {
	name: 'gasGiantRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'turbulence', type: 'float' },
		{ name: 'blur', type: 'float' },
		{ name: 'colorA', type: 'vec3' },
		{ name: 'colorB', type: 'vec3' },
		{ name: 'colorC', type: 'vec3' },
		{ name: 'seed', type: 'float' },
	] }
);



function gasGiant( params={} ) {

	var { position, scale, turbulence, blur, colorA, colorB, colorC, seed } = { ...defaults$D, ...params };

	return gasGiantRaw( position, scale, turbulence, blur, colorA, colorB, colorC, seed );

}



gasGiant.defaults = defaults$D;

var defaults$C = {
	$name: 'Grid',
	$replaceExportUVS: tsl.screenUV,
	$replaceExportASP: tsl.screenSize.x.div( tsl.screenSize.y ).log2(),

	uvs: tsl.equirectUV( tsl.positionGeometry.normalize() ),

	countU: 32,
	countV: 16,

	aspect: 1,
	thinness: 0.8,
	equirectangular: true,

	color: new three.Color( 0x000000 ),
	background: new three.Color( 0xFFFFFF ),

};



var gridRaw = tsl.Fn( ([ uvs, countU, countV, aspect, thinness, equirectangular, color, background ]) => {

	var xaspect = tsl.max( tsl.exp2( aspect ), 1 );

	var a = tsl.mul( uvs.x, xaspect, Math.PI ).toVar(),
		b = tsl.mul( uvs.y, Math.PI ).toVar();

	var uTo = tsl.div( tsl.round( tsl.mul( uvs.x, countU ) ), countU ),
		vTo = tsl.div( tsl.round( tsl.mul( uvs.y, countV ) ), countV ),
		aTo = tsl.mul( uTo, xaspect, Math.PI ),
		bTo = tsl.mul( vTo, Math.PI );

	var angleU = tsl.abs( tsl.sub( a, aTo ) ).mul( tsl.mix( 1, tsl.sin( b ), equirectangular ) ),
		angleV = tsl.abs( tsl.sub( b, bTo ) ),
		angle = tsl.min( angleU, angleV );

	var treshold = tsl.mul( tsl.min( tsl.div( xaspect.mul( Math.PI ), countU ), tsl.div( Math.PI, countV ) ), tsl.remapClamp( tsl.pow( thinness, 0.5 ), 0, 1, 0.9, 0.04 ), 0.5 );
	var k = tsl.oneMinus( tsl.smoothstep( tsl.sub( treshold, 0.002 ), tsl.add( treshold, 0.002 ), angle ) );

	return tsl.mix( background, color, k );

} ).setLayout( {
	name: 'gridRaw',
	type: 'vec3',
	inputs: [
		{ name: 'uvs', type: 'vec2' },
		{ name: 'countU', type: 'float' },
		{ name: 'countV', type: 'float' },
		{ name: 'aspect', type: 'float' },
		{ name: 'thinness', type: 'float' },
		{ name: 'equirectangular', type: 'int' },
		{ name: 'color', type: 'vec3' },
		{ name: 'background', type: 'vec3' },
	] }
);



function grid( params={} ) {

	var { uvs, countU, countV, aspect, thinness, equirectangular, color, background } = { ...defaults$C, ...params };

	return gridRaw( uvs, countU, countV, aspect, thinness, equirectangular, color, background );

}



grid.defaults = defaults$C;

var defaults$B = {
	$name: 'Isolines',

	position: tsl.positionGeometry,
	scale: 2,
	density: 40,
	blur: 0.3,
	thinness: 0.6,

	color: new three.Color( 0xFFFFFF ),
	background: new three.Color( 0x000000 ),

	seed: 0,
};



var isolinesRaw = tsl.Fn( ([ position, scale, density, blur, thinness, color, background, seed ])=>{

	var pos = position.mul( tsl.exp( scale ) ).add( seed ).toVar( );

	var k = tsl.mx_noise_float( pos, density );

	k = tsl.oneMinus( tsl.sin( k ) ).div( 2 );

	k = tsl.smoothstep( tsl.sub( thinness, blur ), tsl.add( thinness, blur ), k );

	return tsl.mix( color, background, k );

} ).setLayout( {
	name: 'isolinesRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'density', type: 'float' },
		{ name: 'blur', type: 'float' },
		{ name: 'thinness', type: 'float' },
		{ name: 'color', type: 'vec3' },
		{ name: 'background', type: 'vec3' },
		{ name: 'seed', type: 'float' },
	] }
);



function isolines( params={} ) {

	var { position, scale, density, blur, thinness, color, background, seed } = { ...defaults$B, ...params };

	return isolinesRaw( position, scale, density, blur, thinness, color, background, seed );

}



isolines.defaults = defaults$B;

var defaults$A = {
	$name: 'Karst rock',

	position: tsl.positionGeometry,
	scale: 2,

	color: new three.Color( 0xFFF4F0 ),
	background: new three.Color( 0xD0D0D0 ),

	seed: 0,
};



var karstRockRaw = tsl.Fn( ([ position, scale, color, background, seed ])=>{

	var pos = position.mul( tsl.exp( scale ) ).add( seed.sin().mul( 5 ) ).toVar( );

	var pos2 = pos.add( tsl.mx_noise_float( pos.mul( 2 ) ) ).toVar();

	var k = tsl.mx_noise_float( pos2 ).div( tsl.mx_noise_float( pos2.mul( 1.01 ) ) ).clamp( 0, 2 ).toVar();

	k.addAssign( tsl.mx_noise_float( pos.mul( 100 ) ).div( 3 ) );
	k.addAssign( tsl.mx_noise_float( pos.mul( 2 ) ).div( 2 ) );

	return tsl.mix( background, color, k ).mul( k.pow( 0.1 ) );

} ).setLayout( {
	name: 'karstRockRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'color', type: 'vec3' },
		{ name: 'background', type: 'vec3' },
		{ name: 'seed', type: 'float' },
	] }
);



function karstRock( params={} ) {

	var { position, scale, color, background, seed } = { ...defaults$A, ...params };

	return karstRockRaw( position, scale, color, background, seed );

}



karstRock.defaults = defaults$A;

var defaults$z = {
	$name: 'Marble',

	position: tsl.positionGeometry,
	scale: 1.2,
	thinness: 5,
	noise: 0.3,

	color: new three.Color( 0x4545D3 ),
	background: new three.Color( 0xF0F8FF ),

	seed: 0,
};



var marbleRaw = tsl.Fn( ([ position, scale, thinness, xnoise, color, background, seed ]) => {

	var pos = position.mul( tsl.exp( scale ) ).add( seed ).toVar( );

	var k = tsl.add(
		tsl.mx_noise_float( pos ),
		tsl.mx_noise_float( pos.mul( 2 ) ).mul( 0.5 ),
		tsl.mx_noise_float( pos.mul( 6 ) ).mul( 0.1 )
	);

	var k = tsl.oneMinus( k.abs().pow( 2.5 ) ).toVar();

	var	maxSmooth = tsl.oneMinus( tsl.pow( 0.5, thinness.add( 7 ) ) ).toVar(),
		minSmooth = tsl.oneMinus( tsl.pow( 0.5, thinness.add( 7 ).mul( 0.5 ) ) ).toVar();

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

	k.assign( k.add( tsl.mul( xnoise, tsl.mx_noise_float( pos.mul( 150 ) ).abs().pow3() ) ) );

	return tsl.mix( background, color, k );

} ).setLayout( {
	name: 'marbleRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'thinness', type: 'float' },
		{ name: 'xnoise', type: 'float' },
		{ name: 'color', type: 'vec3' },
		{ name: 'background', type: 'vec3' },
		{ name: 'seed', type: 'float' },
	] }
);



function marble( params={} ) {

	var { position, scale, thinness, noise, color, background, seed } = { ...defaults$z, ...params };

	return marbleRaw( position, scale, thinness, noise, color, background, seed );

}



marble.defaults = defaults$z;

var defaults$y = {
	$name: 'Neon Lights',

	position: tsl.positionGeometry,

	scale: 2,
	thinness: 0.8,
	mode: 0, // 0=additive, 1=subtractive

	colorA: new three.Color( 0xFF0000 ),
	colorB: new three.Color( 0x00FF00 ),
	colorC: new three.Color( 0x0000FF ),
	background: new three.Color( 0x000000 ),

	seed: 0,
};



var neonLightsRaw = tsl.Fn( ([ position, scale, thinness, mode, colorA, colorB, colorC, background, seed ]) => {

	var pos = position;

	var xscale = tsl.exp( scale.remap( 0, 4, -2, 2 ) ).toVar();
	var xthinness = tsl.exp( thinness.remap( 0, 1, 1.5, 0 ) ).toVar();

	var color = background.toVar();
	var neon = tsl.vec3( 0 ).toVar();

	var x = tsl.mx_noise_float( pos.xyz ).toVar();
	var y = tsl.mx_noise_float( pos.yzx ).toVar();
	var z = tsl.mx_noise_float( pos.zxy ).toVar();

	var k = tsl.mx_noise_float( tsl.vec3( x, y, z ).mul( xscale ).add( seed ) ).toVar();
	k.assign( tsl.oneMinus( tsl.sqrt( tsl.abs( k ) ) ).pow( 3 ) );

	neon.assign( colorA );
	var HSL = toHsl( neon );
	neon.assign( hsl( tsl.vec3( HSL.xy, HSL.z.mul( k ) ) ) );

	color.addAssign( tsl.select( mode.equal( 0 ), neon, neon.negate() ).mul( xthinness ) );

	k.assign( tsl.mx_noise_float( tsl.vec3( y, z, x ).mul( xscale ).sub( seed ) ) );
	k.assign( tsl.oneMinus( tsl.sqrt( tsl.abs( k ) ) ).pow( 3 ) );

	neon.assign( colorB );
	var HSL = toHsl( neon );
	neon.assign( hsl( tsl.vec3( HSL.xy, HSL.z.mul( k ) ) ) );

	color.addAssign( tsl.select( mode.equal( 0 ), neon, neon.negate() ).mul( xthinness ) );


	k.assign( tsl.mx_noise_float( tsl.vec3( z, x, y.negate() ).mul( xscale ).add( seed ) ) );
	k.assign( tsl.oneMinus( tsl.sqrt( tsl.abs( k ) ) ).pow( 3 ) );

	neon.assign( colorC );
	var HSL = toHsl( neon );
	neon.assign( hsl( tsl.vec3( HSL.xy, HSL.z.mul( k ) ) ) );

	color.addAssign( tsl.select( mode.equal( 0 ), neon, neon.negate() ).mul( xthinness ) );

	return color;

} ).setLayout( {
	name: 'neonLightsRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'thinness', type: 'float' },
		{ name: 'node', type: 'float' },
		{ name: 'colorA', type: 'vec3' },
		{ name: 'colorB', type: 'vec3' },
		{ name: 'colorC', type: 'vec3' },
		{ name: 'background', type: 'vec3' },
		{ name: 'seed', type: 'float' },
	] }
);



function neonLights( params={} ) {

	var { position, scale, thinness, mode, colorA, colorB, colorC, background, seed } = { ...defaults$y, ...params };

	return neonLightsRaw( position, scale, thinness, mode, colorA, colorB, colorC, background, seed );

}



neonLights.defaults = defaults$y;

var defaults$x = {
	$name: 'Perlin noise',

	position: tsl.positionGeometry,
	scale: 2,
	balance: 0,
	contrast: 0,

	color: new three.Color( 0xFFFFFF ),
	background: new three.Color( 0x000000 ),

	seed: 0,
};



var perlinNoiseRaw = tsl.Fn( ([ position, scale, balance, contrast, color, background, seed ]) => {

	var pos = position.mul( tsl.exp( scale ) ).add( seed );

	var k = tsl.clamp( 0, 1, tsl.mx_noise_float( pos ).mul( 0.5, tsl.exp( contrast ) ).add( 0.5, balance ) );

	return tsl.mix( background, color, k );

} ).setLayout( {
	name: 'perlinNoiseRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'balance', type: 'float' },
		{ name: 'contrast', type: 'float' },
		{ name: 'color', type: 'vec3' },
		{ name: 'background', type: 'vec3' },
		{ name: 'seed', type: 'float' },
	] }
);



function perlinNoise( params={} ) {

	var { position, scale, balance, contrast, color, background, seed } = { ...defaults$x, ...params };

	return perlinNoiseRaw( position, scale, balance, contrast, color, background, seed );

}



perlinNoise.defaults = defaults$x;

var defaults$w = {
	$name: 'Photosphere',

	position: tsl.positionGeometry,
	scale: 2,

	color: new three.Color( 0xFFFF00 ),
	background: new three.Color( 0xFF0000 ),

	seed: 0,
};



var photosphereRaw = tsl.Fn( ([ position, scale, color, background, seed ]) => {

	var xscale = tsl.exp( scale.add( 1 ) ).toVar( );
	var pos = position.toVar( );

	var vec = tsl.vec3( pos ).toVar();

	tsl.Loop( 6, () => {

		vec.assign( tsl.rotate( vec, pos.mul( xscale ) ) );
		xscale.mulAssign( seed.mul( xscale ).sin().mul( 0.05 ).add( 1.1 ) );

	} );


	var k = tsl.mx_noise_float( vec ).add( 1 ).div( 2 );

	return tsl.mix( background, color, k );

} ).setLayout( {
	name: 'photosphereRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'color', type: 'vec3' },
		{ name: 'background', type: 'vec3' },
		{ name: 'seed', type: 'float' },
	] }
);



function photosphere( params={} ) {

	var { position, scale, color, background, seed } = { ...defaults$w, ...params };

	return photosphereRaw( position, scale, color, background, seed );

}



photosphere.defaults = defaults$w;

var defaults$v = {
	$name: 'Planet',

	position: tsl.positionGeometry,
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



var planetRaw = tsl.Fn( ([ position, scale, iterations, levelSea, levelMountain, balanceWater, balanceSand, balanceSnow, colorDeep, colorShallow, colorBeach, colorGrass, colorForest, colorSnow, seed ])=>{

	var k = tsl.float( 0 ).toVar(),
		sum = tsl.float( 0 ).toVar(),
		xscale = tsl.exp( scale.sub( 2 ) ).toVar(),
		xpower = tsl.float( 2 ).toVar();

	tsl.Loop( iterations.add( 10 ), ()=>{

		k.addAssign( tsl.mul( xpower, tsl.mx_noise_float( position.mul( xscale ).add( seed ) ) ) );
		sum.addAssign( xpower );
		xscale.mulAssign( 1.5 );
		xpower.mulAssign( 0.8 );

	} );

	k.assign( tsl.mul( k, k, 0.5 ).div( sum ) );

	var levelSea = levelSea.pow( 2 ).toVar();
	var levelMountain = levelMountain.pow( 2 ).toVar();
	var levelSand = tsl.mix( levelSea, levelMountain, balanceSand ).toVar();
	var levelCoast = tsl.mix( levelSea, levelSand, 0.4 ).toVar();
	var levelGrass = tsl.mix( levelSea, levelSand, 0.6 ).toVar();

	var color = tsl.vec3().toVar();

	// process water
	tsl.If( k.lessThan( levelSea ), ()=>{

		// deep-shallow
		color.assign( tsl.mix(
			colorDeep,
			colorShallow,
			tsl.remap( k, 0, levelSea, 0, 1 ).pow( tsl.exp( balanceWater.mul( -8 ).add( 4 ) ) )
		) );

	} )
		.ElseIf( k.lessThan( levelCoast ), ()=>{

			// shallow-sand
			color.assign( tsl.mix(
				colorShallow,
				colorBeach,
				tsl.remap( k, levelSea, levelCoast )
			) );

		} )
		.ElseIf( k.lessThan( levelGrass ), ()=>{

			// sand
			color.assign( colorBeach );

		} )
		.ElseIf( k.lessThan( levelSand ), ()=>{

			// shallow-sand-grass
			color.assign( tsl.mix(
				colorBeach,
				colorGrass,
				tsl.remap( k, levelGrass, levelSand )
			) );

		} )
		.ElseIf( k.lessThan( levelMountain ), ()=>{

			// grass-forest
			color.assign( tsl.mix(
				colorGrass,
				colorForest,
				tsl.remap( k, levelSand, levelMountain ).pow( 0.75 )
			) );

		} )
		.Else( ()=>{

			// forest-snow
			var levelSnow = tsl.mix( 1, levelMountain, balanceSnow );
			color.assign( tsl.mix(
				colorForest,
				colorSnow,
				tsl.smoothstep( tsl.mix( levelSnow, levelMountain, balanceSnow.pow( 0.5 ) ), levelSnow, k )
			) );

		} );

	return color;

} ).setLayout( {
	name: 'planetRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },

		{ name: 'iterations', type: 'int' },
		{ name: 'levelSea', type: 'float' },
		{ name: 'levelMountain', type: 'float' },
		{ name: 'balanceWater', type: 'float' },
		{ name: 'balanceSand', type: 'float' },
		{ name: 'balanceSnow', type: 'float' },

		{ name: 'colorDeep', type: 'vec3' },
		{ name: 'colorShallow', type: 'vec3' },
		{ name: 'colorBeach', type: 'vec3' },
		{ name: 'colorGrass', type: 'vec3' },
		{ name: 'colorForest', type: 'vec3' },
		{ name: 'colorSnow', type: 'vec3' },

		{ name: 'seed', type: 'float' },
	] }
);



function planet( params={} ) {

	var { position, scale, iterations, levelSea, levelMountain, balanceWater, balanceSand, balanceSnow, colorDeep, colorShallow, colorBeach, colorGrass, colorForest, colorSnow, seed } = { ...defaults$v, ...params };

	return planetRaw( position, scale, iterations, levelSea, levelMountain, balanceWater, balanceSand, balanceSnow, colorDeep, colorShallow, colorBeach, colorGrass, colorForest, colorSnow, seed );

}



planet.defaults = defaults$v;

var defaults$u = {
	$name: 'Polka dots',

	position: tsl.positionGeometry,
	count: 2,
	size: 0.5,
	blur: 0.25,

	color: new three.Color( 0x000000 ),
	background: new three.Color( 0xFFFFFF ),

	flat: 0,
};



var goldenRatio = ( 1+5**0.5 )/2;



var polkaDotsRaw = tsl.Fn( ([ position, count, size, blur, color, background, xflat ]) => {

	var dist = tsl.float( 1 ).toVar();

	tsl.If( xflat.equal( 1 ), ()=>{

		var cnt = count.pow( 2 ).sub( 0.5 ).toVar();
		var pos = position.xy.mul( cnt ).mul( tsl.mat2( 1, 1, -1, 1 ) );
		var posTo = pos.round().toVar();

		dist.assign( pos.distance( posTo ).div( cnt ) );

	} ).Else( ()=>{

		var cnt = tsl.pow( 10, count ).toVar();
		var vec = position.normalize().toVar();

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

	var xsize = tsl.exp( size.mul( 5 ).sub( 5 ) ).toVar();
	var xblur = blur.pow( 4 ).toVar();
	var k = tsl.smoothstep( xsize.sub( xblur ), xsize.add( xblur ), dist );

	return tsl.mix( color, background, k );

} ).setLayout( {
	name: 'polkaDotsRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'count', type: 'float' },
		{ name: 'size', type: 'float' },
		{ name: 'blur', type: 'float' },
		{ name: 'color', type: 'vec3' },
		{ name: 'background', type: 'vec3' },
		{ name: 'xflat', type: 'int' },
	] }
);



function polkaDots( params={} ) {

	var { position, count, size, blur, color, background, flat } = { ...defaults$u, ...params };

	return polkaDotsRaw( position, count, size, blur, color, background, flat );

}



polkaDots.defaults = defaults$u;

var defaults$t = {
	$name: 'Processed wood',
	$width: 260,

	position: tsl.positionGeometry,
	scale: 2,
	lengths: 4,
	strength: 0.3,
	angle: 0,

	color: new three.Color( 0x702020 ),
	background: new three.Color( 0xF0D0A0 ),

	seed: 0,
};



var processedWoodRaw = tsl.Fn( ([ position, scale, lengths, strength, angle, color, background, seed ])=>{

	var angle = tsl.radians( angle ).toVar();
	var posLocal = tsl.vec3(
		tsl.sub( position.x.mul( tsl.cos( angle ) ), position.y.mul( tsl.sin( angle ) ) ),
		tsl.add( position.x.mul( tsl.sin( angle ) ), position.y.mul( tsl.cos( angle ) ) ),
		position.z,
	).toVar();

	var xscale = scale.div( 2 ).add( 1 ).toVar();
	var pos = posLocal.mul( tsl.exp( scale ) ).add( seed ).toVar( );

	var len = lengths.add( 5 ).reciprocal().toVar();
	var k = tsl.mx_noise_float( pos.mul( xscale, tsl.vec3( 1, len, len ) ) );
	k = k.mul( tsl.mx_noise_float( pos.mul( tsl.vec3( 25, 1, 1 ) ) ).add( -1 ).mul( 0.2 ) );
	k = k.add( strength.sub( 0.5 ) ).smoothstep( -0.3, 0.3 ).oneMinus();

	return tsl.mix( color, background, k );

} ).setLayout( {
	name: 'processedWoodRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'lengths', type: 'float' },
		{ name: 'strength', type: 'float' },
		{ name: 'angle', type: 'float' },
		{ name: 'color', type: 'vec3' },
		{ name: 'background', type: 'vec3' },
		{ name: 'seed', type: 'float' },
	] }
);



function processedWood( params={} ) {

	var { position, scale, lengths, strength, angle, color, background, seed } = { ...defaults$t, ...params };

	return processedWoodRaw( position, scale, lengths, strength, angle, color, background, seed );

}



processedWood.defaults = defaults$t;

var defaults$s = {
	$name: 'Protozoa',

	position: tsl.positionGeometry,
	matcap: tsl.matcapUV,
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

} ).setLayout( {
	name: 'pnoise',
	type: 'float',
	inputs: [
		{ name: 'pos', type: 'vec3' },
		{ name: 'fat', type: 'float' },
	] }
);



var protozoaRaw = tsl.Fn( ([ position, matcap, scale, fat, amount, color, subcolor, background, seed ])=>{

	var pos = position.mul( tsl.exp( scale.sub( 1 ) ) ).add( seed ).toVar( );

	var xmatcap = tsl.vec3( matcap, matcap.length() ).toVar();

	var rings1 = tsl.float( 0 ).toVar();
	var rings2 = tsl.float( 0 ).toVar();

	var n1 = tsl.float( 0 ).toVar();
	var n2 = tsl.float( 0 ).toVar();

	var fat = fat.add( 0.2 ).oneMinus().mul( 60 ).add( 30 ).toVar();
	var xscale = tsl.float( 2 ).toVar();

	var dPos = amount.div( 2 ).add( 0.5 ).exp().toVar();

	tsl.Loop( 10, ()=>{

		rings1.assign( pnoise( pos.xyz.add( xmatcap ), fat ) );
		rings2.assign( pnoise( pos.yzx.add( xmatcap ), fat ) );

		n1.addAssign( rings1.mul( rings2 ).mul( xscale ) );
		n2.addAssign( rings1.max( rings2 ).mul( xscale ) );

		pos.assign( tsl.mix( pos.mul( dPos ), 0, 0.4 ) );

		xscale.mulAssign( 0.9 );

	} );

	return tsl.mix( background, tsl.mix( color, subcolor, n2.mul( 0.1 ) ), n1 );

} ).setLayout( {
	name: 'protozoaRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'matcap', type: 'vec2' },
		{ name: 'scale', type: 'float' },
		{ name: 'fat', type: 'float' },
		{ name: 'amount', type: 'float' },
		{ name: 'color', type: 'vec3' },
		{ name: 'subcolor', type: 'vec3' },
		{ name: 'background', type: 'vec3' },
		{ name: 'seed', type: 'float' },
	] }
);



function protozoa( params={} ) {

	var { position, matcap, scale, fat, amount, color, subcolor, background, seed } = { ...defaults$s, ...params };

	return protozoaRaw( position, matcap, scale, fat, amount, color, subcolor, background, seed );

}



protozoa.defaults = defaults$s;

var defaults$r = {
	$name: 'Rotator',
	$positionNode: true,
	$selectorPlanar: true,

	angles: new three.Vector3( -0.2, 0.7, 0 ),
	center: new three.Vector3( 0, 0, 0 ),

	selectorCenter: new three.Vector3( 0, 0, 0 ),
	selectorAngles: new three.Vector2( 0, 0 ),
	selectorWidth: 2,

};



var surfacePos$6 = tsl.Fn( ([ pos, angles, center, selectorAngles, selectorCenter, selectorWidth ])=>{

	var zone = selectPlanar( pos, selectorAngles, selectorCenter, selectorWidth );

	return rotatePivot( pos, center, angles.mul( zone ) );

} ).setLayout( {
	name: 'surfacePos',
	type: 'vec3',
	inputs: [
		{ name: 'pos', type: 'vec3' },
		{ name: 'angles', type: 'vec3' },
		{ name: 'center', type: 'vec3' },
		{ name: 'selectorAngles', type: 'vec2' },
		{ name: 'selectorCenter', type: 'vec3' },
		{ name: 'selectorWidth', type: 'float' },
	]
} );



var rotatorRaw = tsl.Fn( ([ angles, center, selectorAngles, selectorCenter, selectorWidth ])=>{

	return surfacePos$6( tsl.positionGeometry, angles, center, selectorAngles, selectorCenter, selectorWidth );

} ).setLayout( {
	name: 'rotatorRaw',
	type: 'vec3',
	inputs: [
		{ name: 'angles', type: 'vec3' },
		{ name: 'center', type: 'vec3' },
		{ name: 'selectorAngles', type: 'vec2' },
		{ name: 'selectorCenter', type: 'vec3' },
		{ name: 'selectorWidth', type: 'float' },
	]
} );



var rotatorNormalRaw = tsl.Fn( ([ angles, center, selectorAngles, selectorCenter, selectorWidth ]) => {

	const EPS = 0.01;

	var position = tsl.positionGeometry,
		normal = tsl.normalLocal.normalize().toVar(),
		tangent = tsl.tangentLocal.normalize().mul( EPS ).toVar(),
		bitangent = tsl.cross( normal, tangent ).normalize().mul( EPS ).toVar();

	var pos = surfacePos$6( position, angles, center, selectorAngles, selectorCenter, selectorWidth );
	var posU = surfacePos$6( position.add( tangent ), angles, center, selectorAngles, selectorCenter, selectorWidth );
	var posV = surfacePos$6( position.add( bitangent ), angles, center, selectorAngles, selectorCenter, selectorWidth );

	return approximateNormal( pos, posU, posV );

} ).setLayout( {
	name: 'rotatorNormalRaw',
	type: 'vec3',
	inputs: [
		{ name: 'angles', type: 'vec3' },
		{ name: 'center', type: 'vec3' },
		{ name: 'selectorAngles', type: 'vec2' },
		{ name: 'selectorCenter', type: 'vec3' },
		{ name: 'selectorWidth', type: 'float' },
	]
} );



function rotator( params={} ) {

	var { angles, center, selectorAngles, selectorCenter, selectorWidth } = { ...defaults$r, ...params };

	return rotatorRaw( angles, center, selectorAngles, selectorCenter, selectorWidth );

}



rotator.normal = function ( params={} ) {

	var { angles, center, selectorAngles, selectorCenter, selectorWidth } = { ...defaults$r, ...params };

	return rotatorNormalRaw( angles, center, selectorAngles, selectorCenter, selectorWidth );

};



rotator.defaults = defaults$r;

var defaults$q = {
	$name: 'Rough clay',
	$normalNode: true,

	position: tsl.positionGeometry,
	scale: 2,
	bump: 0.5,
	curvature: 0.2,

	seed: 0,
};



var surfacePos$5 = tsl.Fn( ([ pos, normal, curvature ]) => {

	var k1 = tsl.mx_worley_noise_float( pos.add( tsl.mx_noise_float( pos ).mul( curvature ) ) ).add( 0.8 ).pow( 5 ).toVar();
	k1.addAssign( k1.pow( 0.5 ) );
	return pos.add( normal.mul( k1 ) );

} ).setLayout( {
	name: 'surfacePos',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'normal', type: 'vec3' },
		{ name: 'curvature', type: 'float' },
	] }
);



var roughClayRaw = tsl.Fn( ([ position, normal, tangent, scale, bump, curvature, seed ]) => {

	const EPS = 0.001;

	var xposition = position.mul( tsl.exp( scale.div( 2 ) ) ).add( seed.sin().mul( 10 ) ).toVar( ),
		xnormal = normal.normalize().toVar(),
		xtangent = tangent.normalize().mul( EPS ).toVar(),
		xbitangent = tsl.cross( xnormal, xtangent ).normalize().mul( EPS ).toVar();

	xnormal.mulAssign( bump, 1/50 );

	var pos = surfacePos$5( xposition, xnormal, curvature );
	var posU = surfacePos$5( xposition.add( xtangent ), xnormal, curvature );
	var posV = surfacePos$5( xposition.add( xbitangent ), xnormal, curvature );

	return approximateNormal( pos, posU, posV );

} ).setLayout( {
	name: 'concreteRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'normal', type: 'vec3' },
		{ name: 'tangent', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'bump', type: 'float' },
		{ name: 'curvature', type: 'float' },
		{ name: 'seed', type: 'float' },
	] }
);



function roughClay( params={} ) {

	var { position, scale, bump, curvature, seed } = { ...defaults$q, ...params };

	return roughClayRaw( position, tsl.normalLocal, tsl.tangentLocal, scale, bump, curvature, seed );

}



roughClay.defaults = defaults$q;

var defaults$p = {
	$name: 'Runny eggs',

	position: tsl.positionGeometry,
	scale: 1,

	sizeYolk: 0.2,
	sizeWhite: 0.7,

	colorYolk: new three.Color( 'orange' ),
	colorWhite: new three.Color( 'white' ),
	colorBackground: new three.Color( 'lightgray' ),

	seed: 0,
};



var surfacePos$4 = tsl.Fn( ([ pos, normal, sizeYolk, sizeWhite ]) => {

	var n = tsl.mx_worley_noise_float( pos ).toVar();
	var whites = n.add( sizeWhite ).pow( 8 ).oneMinus();
	var yolks = n.add( sizeYolk ).pow( 18 ).oneMinus().clamp( 0, 1 );

	var k = tsl.mix( 0, tsl.mix( 0, 1, yolks ), whites );

	return pos.add( normal.mul( k ) );

} ).setLayout( {
	name: 'surfacePos',
	type: 'vec3',
	inputs: [
		{ name: 'pos', type: 'vec3' },
		{ name: 'normal', type: 'vec3' },
		{ name: 'sizeYolk', type: 'float' },
		{ name: 'sizeWhite', type: 'float' },
	] }
);



var runnyEggsRaw = tsl.Fn( ([ position, scale, sizeYolk, sizeWhite, colorYolk, colorWhite, colorBackground, seed ]) => {

	var pos = position.mul( tsl.exp( scale ) ).add( seed.sin().mul( 10 ) ).toVar( );

	var n = tsl.mx_worley_noise_float( pos ).toVar();
	var whites = n.add( sizeWhite.oneMinus() ).pow( 8 ).oneMinus().clamp( -0.5, 1 );
	var yolks = n.add( sizeYolk.oneMinus() ).pow( 18 ).oneMinus().clamp( 0, 1 ).pow( 0.4 ).clamp( 0, 1 );

	return tsl.mix( colorBackground, tsl.mix( colorWhite, colorYolk, yolks ), whites );

} ).setLayout( {
	name: 'runnyEggsRaw',
	type: 'vec3',
	inputs: [
		{ name: 'pos', type: 'vec3' },
		{ name: 'normal', type: 'vec3' },
		{ name: 'sizeYolk', type: 'float' },
		{ name: 'sizeWhite', type: 'float' },
		{ name: 'colorYolk', type: 'vec3' },
		{ name: 'colorWhite', type: 'vec3' },
		{ name: 'colorBackground', type: 'vec3' },
		{ name: 'seed', type: 'float' },
	] }
);



var runnyEggsNormalRaw = tsl.Fn( ([ position, normal, tangent, scale, sizeYolk, sizeWhite, /*colorYolk, colorWhite, colorBackground,*/ seed ]) => {

	const EPS = 0.001;
	const BUMP = 0.05;

	var xposition = position.mul( tsl.exp( scale ) ).add( seed.sin().mul( 10 ) ).toVar( ),
		xnormal = normal.normalize().toVar(),
		xtangent = tangent.normalize().mul( EPS ).toVar(),
		bitangent = tsl.cross( xnormal, xtangent ).normalize().mul( EPS ).toVar();

	var xSizeYolk = sizeYolk.oneMinus();
	var xSizeWhite = sizeWhite.oneMinus();

	xnormal.mulAssign( BUMP );

	var pos = surfacePos$4( xposition, xnormal, xSizeYolk, xSizeWhite );
	var posU = surfacePos$4( xposition.add( xtangent ), xnormal, xSizeYolk, xSizeWhite );
	var posV = surfacePos$4( xposition.add( bitangent ), xnormal, xSizeYolk, xSizeWhite );

	return approximateNormal( pos, posU, posV );

} ).setLayout( {
	name: 'runnyEggsNormalRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'normal', type: 'vec3' },
		{ name: 'tangent', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'sizeYolk', type: 'float' },
		{ name: 'sizeWhite', type: 'float' },
		/*{ name: 'colorYolk', type: 'vec3' },*/
		/*{ name: 'colorWhite', type: 'vec3' },*/
		/*{ name: 'colorBackground', type: 'vec3' },*/
		{ name: 'seed', type: 'float' },
	] }
);



var runnyEggsRoughnessRaw = tsl.Fn( ([ position, scale, sizeYolk, /*sizeWhite, colorYolk, colorWhite, colorBackground,*/ seed ]) => {

	var pos = position.mul( tsl.exp( scale ) ).add( seed.sin().mul( 10 ) ).toVar( );

	var n = tsl.mx_worley_noise_float( pos ).toVar();
	var yolks = n.add( sizeYolk.oneMinus() ).pow( 18 ).clamp( 0, 1 );

	return yolks;

} ).setLayout( {
	name: 'runnyEggsRoughnessRaw',
	type: 'float',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'sizeYolk', type: 'float' },
		/*{ name: 'sizeWhite', type: 'float' },*/
		/*{ name: 'colorYolk', type: 'vec3' },*/
		/*{ name: 'colorWhite', type: 'vec3' },*/
		/*{ name: 'colorBackground', type: 'vec3' },*/
		{ name: 'seed', type: 'float' },
	] }
);



function runnyEggs( params={} ) {

	var { position, scale, sizeYolk, sizeWhite, colorYolk, colorWhite, colorBackground, seed } = { ...defaults$p, ...params };

	return runnyEggsRaw( position, scale, sizeYolk, sizeWhite, colorYolk, colorWhite, colorBackground, seed );

}



runnyEggs.normal = function ( params={} ) {

	var { position, scale, sizeYolk, sizeWhite, /*colorYolk, colorWhite, colorBackground,*/ seed } = { ...defaults$p, ...params };

	return runnyEggsNormalRaw( position, tsl.normalLocal, tsl.tangentLocal, scale, sizeYolk, sizeWhite, /*colorYolk, colorWhite, colorBackground,*/ seed );

};



runnyEggs.roughness = function ( params={} ) {

	var { position, scale, sizeYolk, /*sizeWhite, colorYolk, colorWhite, colorBackground,*/ seed } = { ...defaults$p, ...params };

	return runnyEggsRoughnessRaw( position, scale, sizeYolk, /*sizeWhite, colorYolk, colorWhite, colorBackground,*/ seed );

};



runnyEggs.defaults = defaults$p;

var defaults$o = {
	$name: 'rust',

	position: tsl.positionGeometry,
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



var _rust = tsl.Fn( ([ position, scale, iterations, amount, seed ])=>{

	var pos = position.mul( tsl.exp( scale.div( 4 ).add( -1 ) ) ).add( seed ).toVar( );

	var xamount = amount.mul( tsl.mx_noise_float( pos.mul( amount.div( 2 ).add( 4 ) ) ).add( 4 ) ).toVar();

	var k = tsl.mx_noise_float( pos ).toVar();

	tsl.Loop( iterations, ()=>{

		pos.mulAssign( 2 );
		k.addAssign( tsl.mx_noise_float( pos ) );

	} );

	k.subAssign( tsl.mx_noise_float( pos.mul( 2 ) ).abs() );

	k.assign( k.sub( xamount ).clamp( 0, 15 ) );

	return k;

} ).setLayout( {
	name: '_rust',
	type: 'float',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'iterations', type: 'int' },
		{ name: 'amount', type: 'float' },
		{ name: 'seed', type: 'float' },
	] }
);


var rustRaw = tsl.Fn( ([ position, scale, iterations, amount, /*opacity,*/xnoise, noiseScale, color, background, seed ])=>{

	var k = _rust( position, scale, iterations, amount, seed ).mul( 1.25 ).pow( 0.5 );

	var pos = position.mul( tsl.exp( scale.add( noiseScale.mul( 3 ), 2 ) ) );

	k.addAssign( xnoise.mul( tsl.mx_noise_float( pos ).abs().add( 0.1 ).pow( 2 ) ) );

	return tsl.mix( color, background, k );

} ).setLayout( {
	name: 'rustRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'iterations', type: 'int' },
		{ name: 'amount', type: 'float' },
		/*{ name: 'opacity', type: 'float' },*/
		{ name: 'xnoise', type: 'float' },
		{ name: 'noiseScale', type: 'float' },
		{ name: 'color', type: 'vec3' },
		{ name: 'background', type: 'vec3' },
		{ name: 'seed', type: 'float' },
	] }
);




var rustOpacityRaw = tsl.Fn( ([ position, scale, iterations, amount, opacity, /*xnoise, noiseScale, color, background,*/ seed ])=>{

	var k = _rust( position, scale, iterations, amount, seed ).mul( opacity.add( 0.2 ) );

	return k.oneMinus();

} ).setLayout( {
	name: 'rustOpacityRaw',
	type: 'float',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'iterations', type: 'int' },
		{ name: 'amount', type: 'float' },
		{ name: 'opacity', type: 'float' },
		/*{ name: 'xnoise', type: 'float' },*/
		/*{ name: 'noiseScale', type: 'float' },*/
		/*{ name: 'color', type: 'vec3' },*/
		/*{ name: 'background', type: 'vec3' },*/
		{ name: 'seed', type: 'float' },
	] }
);



function rust( params={} ) {

	var { position, scale, iterations, amount, /*opacity,*/ noise, noiseScale, color, background, seed } = { ...defaults$o, ...params };

	return rustRaw( position, scale, iterations, amount, /*opacity,*/noise, noiseScale, color, background, seed );

}



rust.opacity = function ( params={} ) {

	var { position, scale, iterations, amount, opacity, /*xnoise, noiseScale, color, background,*/ seed } = { ...defaults$o, ...params };

	return rustOpacityRaw( position, scale, iterations, amount, opacity, /*xnoise, noiseScale, color, background,*/ seed );

};



rust.defaults = defaults$o;

var defaults$n = {
	$name: 'Satin',

	position: tsl.positionGeometry,
	scale: 2,

	color: new three.Color( 0x7080FF ),
	background: new three.Color( 0x000050 ),

	seed: 0,
};



var satinRaw = tsl.Fn( ([ position, scale, color, background, seed ]) => {

	var pos = position.toVar( 'pos' ),
		scale = scale.div( 3 ).exp( ).toVar( 'xscale' );

	var k = tsl.mx_noise_float(
		tsl.vec3(
			tsl.mx_noise_float( tsl.vec3( pos.x.mul( 2 ), pos.y, pos.z ).mul( scale ) ),
			tsl.mx_noise_float( tsl.vec3( pos.x, pos.y.mul( 2 ), pos.z ).mul( scale ) ),
			tsl.mx_noise_float( tsl.vec3( pos.x, pos.y, pos.z.mul( 2 ) ).mul( scale ) ),
		).mul( scale ).add( seed )
	).abs().pow( 3 ).mul( 20 ).toVar( 'k' );

	return tsl.mix( background, color, k );

} ).setLayout( {
	name: 'satinRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'color', type: 'vec3' },
		{ name: 'background', type: 'vec3' },
		{ name: 'seed', type: 'float' },
	] }
);



function satin( params={} ) {

	var { position, scale, color, background, seed } = { ...defaults$n, ...params };

	return satinRaw( position, scale, color, background, seed );

}



satin.defaults = defaults$n;

var defaults$m = {
	$name: 'Scaler',
	$positionNode: true,
	$selectorPlanar: true,

	scales: new three.Vector3( 0.01, 0.9, 1.7 ),
	center: new three.Vector3( 0, 0, 0 ),

	selectorCenter: new three.Vector3( 0, 0, 0 ),
	selectorAngles: new three.Vector2( 0, 0 ),
	selectorWidth: 2,

};



var surfacePos$3 = tsl.Fn( ([ pos, scales, center, selectorAngles, selectorCenter, selectorWidth ])=>{

	var zone = selectPlanar( pos, selectorAngles, selectorCenter, selectorWidth );

	var S = tsl.mix( tsl.vec3( 1, 1, 1 ), scales, zone );

	return pos.sub( center ).mul( S ).add( center );

} );



var scalerRaw = tsl.Fn( ([ scales, center, selectorAngles, selectorCenter, selectorWidth ])=>{

	return surfacePos$3( tsl.positionGeometry, scales, center, selectorAngles, selectorCenter, selectorWidth );

} ).setLayout( {
	name: 'scalerRaw',
	type: 'vec3',
	inputs: [
		{ name: 'scales', type: 'vec3' },
		{ name: 'center', type: 'vec3' },
		{ name: 'selectorAngles', type: 'vec2' },
		{ name: 'selectorCenter', type: 'vec3' },
		{ name: 'selectorWidth', type: 'float' },
	]
} );



var scalerNormalRaw = tsl.Fn( ([ scales, center, selectorAngles, selectorCenter, selectorWidth ]) => {

	var EPS = 0.01;

	var position = tsl.positionGeometry,
		normal = tsl.normalLocal.normalize().toVar(),
		tangent = tsl.tangentLocal.normalize().mul( EPS ).toVar(),
		bitangent = tsl.cross( normal, tangent ).normalize().mul( EPS ).toVar();

	var pos = surfacePos$3( position, scales, center, selectorAngles, selectorCenter, selectorWidth );
	var posU = surfacePos$3( position.add( tangent ), scales, center, selectorAngles, selectorCenter, selectorWidth );
	var posV = surfacePos$3( position.add( bitangent ), scales, center, selectorAngles, selectorCenter, selectorWidth );

	return approximateNormal( pos, posU, posV );

} ).setLayout( {
	name: 'scalerNormalRaw',
	type: 'vec3',
	inputs: [
		{ name: 'scales', type: 'vec3' },
		{ name: 'center', type: 'vec3' },
		{ name: 'selectorAngles', type: 'vec2' },
		{ name: 'selectorCenter', type: 'vec3' },
		{ name: 'selectorWidth', type: 'float' },
	]
} );



function scaler( params={} ) {

	var { scales, center, selectorAngles, selectorCenter, selectorWidth } = { ...defaults$m, ...params };

	return scalerRaw( scales, center, selectorAngles, selectorCenter, selectorWidth );

}



scaler.normal = function ( params={} ) {

	var { scales, center, selectorAngles, selectorCenter, selectorWidth } = { ...defaults$m, ...params };

	return scalerNormalRaw( scales, center, selectorAngles, selectorCenter, selectorWidth );

};



scaler.defaults = defaults$m;

var defaults$l = {
	$name: 'Scepter head',

	position: tsl.positionGeometry,

	xFactor: 10,
	yFactor: 22,
	zFactor: 10,

	colorRim: new three.Color( 0xFFFFFF ),
	colorA: new three.Color( 0x70E0FF ),
	colorB: new three.Color( 0x3000FF ),
};



var scepterHeadRaw = tsl.Fn( ([ position, xFactor, yFactor, zFactor, colorRim, colorA, colorB ]) => {

	var pos = position.toVar( 'pos' );

	var fx = pos.x.mul( remapExp( xFactor, 0, 100, 1.35, 30 ) ).toVar( 'fx' ),
		fy = pos.y.mul( remapExp( yFactor, 0, 100, 1.35, 30 ) ).toVar( 'fy' ),
		fz = pos.z.mul( remapExp( zFactor, 0, 100, 1.35, 30 ) ).toVar( 'fz' );

	var cosX = tsl.cos( fx ),
		cosY = tsl.cos( fy ),
		cosZ = tsl.cos( fz );

	var k = tsl.mx_noise_float( tsl.vec3( pos.x.div( cosX ), pos.y.div( cosY ), pos.z.div( cosZ ) ) );

	k = tsl.sign( k ).mul( tsl.abs( k ).pow( 0.75 ) );

	var dx = tsl.abs( tsl.mul( fx, tsl.tan( fx ) ).add( 1 ).div( cosX ) ),
		dy = tsl.abs( tsl.mul( fy, tsl.tan( fy ) ).add( 1 ).div( cosY ) ),
		dz = tsl.abs( tsl.mul( fz, tsl.tan( fz ) ).add( 1 ).div( cosZ ) );

	var HSL = tsl.vec3().toVar();

	var indexX = ( tsl.abs( tsl.floor( ( fx.mul( 2/Math.PI ).add( 1 ) ).div( 2 ) ) ) ),
		indexY = ( tsl.abs( tsl.floor( ( fy.mul( 2/Math.PI ).add( 1 ) ).div( 2 ) ) ) ),
		indexZ = ( tsl.abs( tsl.floor( ( fz.mul( 2/Math.PI ).add( 1 ) ).div( 2 ) ) ) );

	var index = tsl.mod( ( tsl.add( indexX, indexY, indexZ ) ), 2 );

	HSL.assign( toHsl( tsl.mix( colorA, colorB, index ) ) );
	var color1 = hsl( tsl.vec3( HSL.xy, HSL.z.mul( k ) ) ).toVar( 'color1' );

	HSL.assign( toHsl( colorRim ) );
	var color2 = hsl( tsl.vec3( HSL.xy, tsl.mul( 2, k, HSL.z ) ) ).toVar( 'color2' );

	return tsl.mix( color1, color2, tsl.remapClamp( tsl.max( dx, tsl.max( dy, dz ) ), 55-10, 55+10 ) );

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

	var { position, xFactor, yFactor, zFactor, colorRim, colorA, colorB } = { ...defaults$l, ...params };

	return scepterHeadRaw( position, xFactor, yFactor, zFactor, colorRim, colorA, colorB );

}



scepterHead.defaults = defaults$l;

var defaults$k = {
	$name: 'Scream',

	position: tsl.positionGeometry,
	scale: 2,
	variety: 1,

	color: new three.Color( 0xF0F060 ),
	background: new three.Color( 0xD09090 ),

	seed: 0,
};



var screamRaw = tsl.Fn( ([ position, scale, variety, color, background, seed ]) => {

	var pos = position.mul( tsl.exp( scale ) ).add( seed ).toVar( 'pos' );

	var k = tsl.mx_noise_float( tsl.add( tsl.sin( pos.xyz ), tsl.cos( pos.yzx ) ) );

	pos.assign( position.mul( tsl.exp( scale ).mul( k ) ).add( seed ) );

	var k = tsl.mx_noise_float( tsl.add( tsl.sin( pos.xyz ), tsl.cos( pos.yzx ) ).mul( 2 ) );

	var col = tsl.mix( background, color, k ).toVar( 'col' );

	var HSL = toHsl( col ).toVar( 'HSL' );

	return hsl( tsl.vec3( tsl.add( HSL.x, variety.mul( tsl.sin( k.mul( Math.PI ) ) ).mul( 0.5 ) ), HSL.yz ) );

} ).setLayout( {
	name: 'satinRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'variety', type: 'float' },
		{ name: 'color', type: 'vec3' },
		{ name: 'background', type: 'vec3' },
		{ name: 'seed', type: 'float' },
	] }
);



function scream( params={} ) {

	var { position, scale, variety, color, background, seed } = { ...defaults$k, ...params };

	return screamRaw( position, scale, variety, color, background, seed );

}



scream.defaults = defaults$k;

var defaults$j = {
	$name: 'Stars',

	position: tsl.positionGeometry,
	scale: 2,
	density: 2,
	variation: 0,

	color: new three.Color( 0xfff5f0 ),
	background: new three.Color( 0x000060 ),

	seed: 0,
};



var starsRaw = tsl.Fn( ([ position, scale, density, variation, color, background, seed ]) => {

	var pos = position.mul( tsl.exp( scale.div( 2 ).add( 3 ) ) ).add( seed ).toVar( );

	var k = tsl.abs( tsl.mx_noise_float( pos ) ).pow( 10 ).mul( 10 );

	k = k.mul( tsl.exp( density.sub( 2 ) ) );

	var dS = tsl.select( k.greaterThan( 0.1 ), variation.mul( tsl.mx_noise_float( pos ) ), 0 );

	var col = toHsl( tsl.mix( background, color, k ) );

	return hsl( tsl.vec3( tsl.add( col.x, dS ), col.yz ) );

} ).setLayout( {
	name: 'starsRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'density', type: 'float' },
		{ name: 'variation', type: 'float' },
		{ name: 'color', type: 'vec3' },
		{ name: 'background', type: 'vec3' },
		{ name: 'seed', type: 'float' },
	] }
);



function stars( params={} ) {

	var { position, scale, density, variation, color, background, seed } = { ...defaults$j, ...params };

	return starsRaw( position, scale, density, variation, color, background, seed );

}



stars.defaults = defaults$j;

var defaults$i = {
	$name: 'Static noise',

	position: tsl.screenCoordinate,
	time: tsl.time,

	scale: 2,
	balance: 0,
	contrast: 0,

	delay: 0,

	seed: 0,
};



var staticNoiseRaw = tsl.Fn( ([ position, time, scale, balance, contrast, delay, seed ]) => {

	var pos = position.div( tsl.exp( scale ) ).add( seed );

	var speed = delay.sub( 1 ).mul( 5 ).exp(),
		t = time.div( speed ).round().mul( speed );

	var offset = vnoise( t.sin() ).mul( 1000 );

	var k = tsl.clamp( 0, 1, tsl.mx_noise_float( pos.add( offset ) ) );

	k = k.mul( 0.5, tsl.exp( contrast ) ).add( 0.5, balance );

	return tsl.vec3( k );

} ).setLayout( {
	name: 'staticNoiseRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec2' },
		{ name: 'time', type: 'float' },
		{ name: 'scale', type: 'float' },
		{ name: 'balance', type: 'float' },
		{ name: 'contrast', type: 'float' },
		{ name: 'delay', type: 'float' },
		{ name: 'seed', type: 'float' },
	] }
);



function staticNoise( params={} ) {

	var { position, time, scale, balance, contrast, delay, seed } = { ...defaults$i, ...params };

	return staticNoiseRaw( position, time, scale, balance, contrast, delay, seed );

}



staticNoise.defaults = defaults$i;

var defaults$h = {
	$name: 'Supersphere',
	$positionNode: true,

	exponent: 3,

};



var surfacePos$2 = tsl.Fn( ([ pos, exponent ])=>{

	var xexponent = tsl.float( 2 ).pow( exponent );
	var equPos = pos.div( pos.length() ).toVar();
	var equPos2 = equPos.abs().pow( xexponent ).toVar();

	var p = equPos2.x
		.add( equPos2.y )
		.add( equPos2.z )
		.pow( xexponent.reciprocal( ) );

	return equPos.div( p );

} ).setLayout( {
	name: 'surfacePos',
	type: 'vec3',
	inputs: [
		{ name: 'pos', type: 'vec3' },
		{ name: 'exponent', type: 'float' },
	]
} );



var supersphereRaw = tsl.Fn( ([ exponent ])=>{

	return surfacePos$2( tsl.positionGeometry, exponent );

} ).setLayout( {
	name: 'supersphereRaw',
	type: 'vec3',
	inputs: [
		{ name: 'exponent', type: 'float' },
	]
} );



var supersphereNormalRaw = tsl.Fn( ([ exponent ]) => {

	const EPS = 0.01;

	var position = tsl.positionGeometry,
		normal = tsl.normalLocal.normalize().toVar(),
		tangent = tsl.tangentLocal.normalize().mul( EPS ).toVar(),
		bitangent = tsl.cross( normal, tangent ).normalize().mul( EPS ).toVar();

	var pos = surfacePos$2( position, exponent );
	var posU = surfacePos$2( position.add( tangent ), exponent );
	var posV = surfacePos$2( position.add( bitangent ), exponent );

	return approximateNormal( pos, posU, posV );

} ).setLayout( {
	name: 'supersphereRaw',
	type: 'vec3',
	inputs: [
		{ name: 'exponent', type: 'float' },
	]
} );



function supersphere( params={} ) {

	var { exponent } = { ...defaults$h, ...params };

	return supersphereRaw( exponent );

}



supersphere.normal = function ( params={} ) {

	var { exponent } = { ...defaults$h, ...params };

	return supersphereNormalRaw( exponent );

};



supersphere.defaults = defaults$h;

var defaults$g = {
	$name: 'Tiger fur',

	position: tsl.positionGeometry,
	scale: 2,
	lengths: 4,
	blur: 0.3,
	strength: 0.3,
	hairs: 0.5,

	color: new three.Color( 0xFFAA00 ),
	bottomColor: new three.Color( 0xFFFFEE ),

	seed: 0,
};



var tigerFurRaw = tsl.Fn( ([ position, scale, lengths, blur, strength, hairs, color, bottomColor, seed ])=>{

	var xscale = scale.div( 2 ).add( 1 ).toVar();
	var pos = position.mul( tsl.exp( xscale ) ).add( seed ).toVar( );

	var len = lengths.add( 5 ).reciprocal().toVar();
	var hairs = hairs.mul( 0.3 ).toVar();
	var k = tsl.mx_noise_float( pos.mul( xscale, tsl.vec3( 1, len, len ) ) );
	k = k.add( tsl.mx_noise_float( pos.mul( tsl.vec3( 25, 1, 1 ) ) ).add( 1 ).mul( hairs ) );
	k = k.add( strength.sub( 0.5 ) ).smoothstep( blur.negate(), blur ).oneMinus();

	var n = position.y.add( hairs.sub( 0.5 ) ).smoothstep( -1, 0.5 );

	return tsl.mix( bottomColor, color, n ).mul( k );

} ).setLayout( {
	name: 'tigerFurRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'lengths', type: 'float' },
		{ name: 'blur', type: 'float' },
		{ name: 'strength', type: 'float' },
		{ name: 'hairs', type: 'float' },
		{ name: 'color', type: 'vec3' },
		{ name: 'bottomColor', type: 'vec3' },
		{ name: 'seed', type: 'float' },
	] }
);



function tigerFur( params={} ) {

	var { position, scale, lengths, blur, strength, hairs, color, bottomColor, seed } = { ...defaults$g, ...params };

	return tigerFurRaw( position, scale, lengths, blur, strength, hairs, color, bottomColor, seed );

}



tigerFur.defaults = defaults$g;

var defaults$f = {
	$name: 'Translator',
	$positionNode: true,
	$selectorPlanar: true,

	distance: new three.Vector3( -0.5, 0, 0.2 ),

	selectorCenter: new three.Vector3( 0, 0, 0 ),
	selectorAngles: new three.Vector2( 0, 0 ),
	selectorWidth: 0.7,

};



var surfacePos$1 = tsl.Fn( ([ pos, distance, selectorAngles, selectorCenter, selectorWidth ])=>{

	var zone = selectPlanar( pos, selectorAngles, selectorCenter, selectorWidth );

	return pos.add( distance.mul( zone ) );

} ).setLayout( {
	name: 'surfacePos',
	type: 'vec3',
	inputs: [
		{ name: 'pos', type: 'vec3' },
		{ name: 'distance', type: 'vec3' },
		{ name: 'selectorAngles', type: 'vec2' },
		{ name: 'selectorCenter', type: 'vec3' },
		{ name: 'selectorWidth', type: 'float' },
	]
} );



var translatorRaw = tsl.Fn( ([ distance, selectorAngles, selectorCenter, selectorWidth ])=>{

	return surfacePos$1( tsl.positionGeometry, distance, selectorAngles, selectorCenter, selectorWidth );

} ).setLayout( {
	name: 'translatorRaw',
	type: 'vec3',
	inputs: [
		{ name: 'distance', type: 'vec3' },
		{ name: 'selectorAngles', type: 'vec2' },
		{ name: 'selectorCenter', type: 'vec3' },
		{ name: 'selectorWidth', type: 'float' },
	]
} );



var translatorNormalRaw = tsl.Fn( ([ distance, selectorAngles, selectorCenter, selectorWidth ])=>{

	var EPS = 0.01;

	var position = tsl.positionGeometry,
		normal = tsl.normalLocal.normalize().toVar(),
		tangent = tsl.tangentLocal.normalize().mul( EPS ).toVar(),
		bitangent = tsl.cross( normal, tangent ).normalize().mul( EPS ).toVar();

	var pos = surfacePos$1( position, distance, selectorAngles, selectorCenter, selectorWidth );
	var posU = surfacePos$1( position.add( tangent ), distance, selectorAngles, selectorCenter, selectorWidth );
	var posV = surfacePos$1( position.add( bitangent ), distance, selectorAngles, selectorCenter, selectorWidth );

	return approximateNormal( pos, posU, posV );

} ).setLayout( {
	name: 'translatorNormalRaw',
	type: 'vec3',
	inputs: [
		{ name: 'distance', type: 'vec3' },
		{ name: 'selectorAngles', type: 'vec2' },
		{ name: 'selectorCenter', type: 'vec3' },
		{ name: 'selectorWidth', type: 'float' },
	]
} );



function translator( params={} ) {

	var { distance, selectorAngles, selectorCenter, selectorWidth } = { ...defaults$f, ...params };

	return translatorRaw( distance, selectorAngles, selectorCenter, selectorWidth );

}



translator.normal = function ( params={} ) {

	var { distance, selectorAngles, selectorCenter, selectorWidth } = { ...defaults$f, ...params };

	return translatorNormalRaw( distance, selectorAngles, selectorCenter, selectorWidth );

};



translator.defaults = defaults$f;

var defaults$e = {
	$name: 'Voronoi cells',

	position: tsl.positionGeometry,
	scale: 2,
	variation: 0,
	facet: 0,

	color: new three.Color( 0 ),
	background: new three.Color( 0xc0d0ff ),

	seed: 0,
};



var voronoiCellsRaw = tsl.Fn( ([ position, scale, variation, facet, color, background, seed ])=>{

	var pos = position.mul( tsl.exp( scale.div( 2 ).add( 0.5 ) ) ).add( seed ).toVar( );

	var midCell = pos.round().toVar();

	var minCell = midCell.toVar();
	var minDist = tsl.float( 1 ).toVar();

	var cell = tsl.vec3().toVar();
	var dist = tsl.float().toVar();

	var i=tsl.int( 0 ).toVar( 'i' ),
		j=tsl.int( 0 ).toVar( 'j' ),
		k=tsl.int( 0 ).toVar( 'k' );

	// Loop uses hard-coded i, j, k as indices
	tsl.Loop( 3, 3, 3, () => {

		cell.assign( midCell.add( tsl.vec3( i, j, k ).sub( 1 ) ) );
		//var cellCenter = cell.add( noise( cell.mul( Math.PI ) ) ); // too slow on WebGL2
		var cellCenter = cell.add( vnoise( cell.mul( Math.PI*2 ) ).div( 2 ) );
		dist.assign( pos.distance( cellCenter ) );

		tsl.If( dist.lessThan( minDist ), ()=>{

			minDist.assign( dist );
			minCell.assign( cell );

		} );

	} );

	var n = tsl.mx_noise_float( minCell.mul( Math.PI ) ).toVar();
	var m = tsl.mix( minDist, n.add( 1 ).div( 2 ), facet );

	var color = tsl.mix( color, background, m ).toVar();
	var randomColor = tsl.vec3( n.mul( 16.8 ), n.mul( 31.4159 ), n.mul( 27.1828 ) ).sin().add( 1 ).div( 2 );

	return tsl.mix( color, tsl.mix( color, randomColor, variation ), variation );

} ).setLayout( {
	name: 'voronoiCellsRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'variation', type: 'float' },
		{ name: 'facet', type: 'float' },
		{ name: 'color', type: 'vec3' },
		{ name: 'background', type: 'vec3' },
		{ name: 'seed', type: 'float' },
	] }
);



function voronoiCells( params={} ) {

	var { position, scale, variation, facet, color, background, seed } = { ...defaults$e, ...params };

	return voronoiCellsRaw( position, scale, variation, facet, color, background, seed );

}



voronoiCells.defaults = defaults$e;

var defaults$d = {
	$name: 'Water Drops',
	$normalNode: true,

	position: tsl.positionGeometry,

	scale: 1.4,
	density: 0.5,
	bump: 0.6,

	seed: 0,
};



var surfacePos = tsl.Fn( ([ pos, normal, density ]) => {

	var k = tsl.mx_noise_float( pos, 1, density ).clamp( 0, 1 );
	k = tsl.cos( k.mul( Math.PI ) ).add( 1 ).pow( 0.5 ).toVar();

	return pos.add( normal.mul( k ) );

} ).setLayout( {
	name: 'surfacePos',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'normal', type: 'vec3' },
		{ name: 'density', type: 'float' },
	] }
);



var waterDropsRaw = tsl.Fn( ([ position, normal, tangent, scale, density, bump, seed ]) => {

	var EPS = 0.001;

	var seed3d = tsl.vec3( 1, 2, 3 ).mul( seed ).sin().mul( 100 ).toVar( );

	var xposition = position.mul( tsl.exp( scale.div( 1 ).add( 1 ) ) ).add( seed3d ).toVar( ),
		xnormal = normal.normalize().toVar(),
		xtangent = tangent.normalize().mul( EPS ).toVar(),
		xbitangent = tsl.cross( xnormal, xtangent ).normalize().mul( EPS ).toVar();

	var xdensity = tsl.remap( density, 0, 1, 1.5, 0.7 ).toVar();

	xnormal.mulAssign( bump );

	var pos = surfacePos( xposition, xnormal, xdensity ),
		posU = surfacePos( xposition.add( xtangent ), xnormal, xdensity ),
		posV = surfacePos( xposition.add( xbitangent ), xnormal, xdensity );

	return approximateNormal( pos, posU, posV );

} ).setLayout( {
	name: 'waterDropsRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'normal', type: 'vec3' },
		{ name: 'tangent', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'density', type: 'float' },
		{ name: 'bump', type: 'float' },
		{ name: 'seed', type: 'float' },
	] }
);



function waterDrops( params={} ) {

	var { position, scale, density, bump, seed } = { ...defaults$d, ...params };

	return waterDropsRaw( position, tsl.normalLocal, tsl.tangentLocal, scale, density, bump, seed );

}



waterDrops.defaults = defaults$d;

var defaults$c = {
	$name: 'Watermelon',
	$replaceExportUVS: tsl.screenUV,

	position: tsl.positionGeometry,
	uvs: tsl.equirectUV( tsl.positionGeometry.normalize() ),

	scale: 2,
	stripes: 12,
	variation: 0.5,
	noise: 0.25,

	color: new three.Color( 'yellowgreen' ),
	background: new three.Color( 'darkgreen' ),

	seed: 0,
};



var watermelonRaw = tsl.Fn( ([ position, uvs, scale, stripes, variation, xnoise, color, background, seed ])=>{

	var pos = position.mul( tsl.exp( scale.div( 4 ).add( 2 ) ) ).add( seed ).toVar( );

	var a = uvs.x.mul( stripes, 2*Math.PI ).add( tsl.mx_noise_float( pos.mul( tsl.vec3( 1, 0.3, 1 ) ) ).mul( 2 ) );

	var k = a.sin().add( 0.5 ).div( 2 ).mul( uvs.y.remap( 0, 1, -Math.PI, Math.PI ).cos().add( 1.2 ).clamp( 0, 1 ) )
		.add( variation.mul( 2, tsl.mx_noise_float( pos.mul( 1.5 ) ).div( 2 ) ) )
		.add( variation.mul( 2, tsl.mx_noise_float( pos.mul( 4 ) ).div( 6 ) ) )
		.toVar();

	k.assign(
		k.mix( k.round(), 0.75 )
			.add( tsl.mx_noise_float( pos.mul( 2 ) ).mul( xnoise, 0.5 ) )
			.add( tsl.mx_noise_float( pos.mul( 3 ) ).mul( xnoise, 1 ) )
			.add( tsl.mx_noise_float( pos.mul( 15 ) ).mul( xnoise, 0.2 ) )
			.clamp( 0, 1 )
	);

	var color = tsl.mix( background, color, k ).toVar();

	return color;

} ).setLayout( {
	name: 'watermelonRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'uvs', type: 'vec2' },
		{ name: 'scale', type: 'float' },
		{ name: 'stripes', type: 'int' },
		{ name: 'variation', type: 'float' },
		{ name: 'xnoise', type: 'float' },
		{ name: 'color', type: 'vec3' },
		{ name: 'background', type: 'vec3' },
		{ name: 'seed', type: 'float' },
	] }
);



function watermelon( params={} ) {

	var { position, uvs, scale, stripes, variation, noise, color, background, seed } = { ...defaults$c, ...params };

	return watermelonRaw( position, uvs, scale, stripes, variation, noise, color, background, seed );

}



watermelon.defaults = defaults$c;

var defaults$b = {
	$name: 'Waves',

	position: tsl.positionGeometry,
	scale: 2,
	speed: 0,
	time: tsl.time,
	level: -0.4,
	rough: 10,
	height: 0.5,

	foamSize: 0.2,
	foamEdge: 0.5,

	color: new three.Color( 0xFFFFFF ),
	background: new three.Color( 0x2060FF ),

	seed: 0,
};



var waves_core = tsl.Fn( ([ position, scale, speed, time, level, rough, height, foamSize, /*foamEdge,*/ seed ]) => {

	const xscale = tsl.exp( scale.sub( 1 ) ).toVar();
	const pos = position.mul( xscale ).add( seed ).toVar( 'pos' );
	const xtime = time.mul( speed.exp() );

	var posXZ = tsl.vec3( pos.x, 0, pos.z ).div( 3 );

	const xfoamSize = foamSize.mul( tsl.mx_fractal_noise_float( pos, rough.div( 2 ) ).div( 2 ).add( 1 ).div( 2 ) );

	var xheight = height.div( xscale, 0.8 ).toVar();

	var wave = position.y.sub( level )
		.add( tsl.mx_fractal_noise_float( posXZ, 1 ).mul( 2*3.14 ).add( xtime ).sin().div( 2 ).mul( xheight ) )
		.sub( tsl.mx_fractal_noise_float( pos, rough ).mul( 2*3.14 ).add( xtime.mul( 2 ) ).sin().sub( 1 ).div( 5 ).mul( xheight ) )
		.smoothstep( tsl.float( 0.5 ).sub( xfoamSize ), tsl.float( 0.5 ).add( xfoamSize ) )
		.toVar();

	return wave;

} ).setLayout( {
	name: 'waves_core',
	type: 'float',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'speed', type: 'float' },
		{ name: 'time', type: 'float' },
		{ name: 'level', type: 'float' },
		{ name: 'rough', type: 'float' },
		{ name: 'height', type: 'float' },
		{ name: 'foamSize', type: 'float' },
		/*{ name: 'foamEdge', type: 'float' },*/
		{ name: 'seed', type: 'float' },
	] }
);



var wavesRaw = tsl.Fn( ([ position, scale, speed, time, level, rough, height, foamSize, /*foamEdge,*/ color, background, seed ]) => {

	var k = waves_core( position, scale, speed, time, level, rough, height, foamSize, /*foamEdge,*/ seed );
	return tsl.mix( background, color, k.clamp( 0, 1 ) );


} ).setLayout( {
	name: 'wavesRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'speed', type: 'float' },
		{ name: 'time', type: 'float' },
		{ name: 'level', type: 'float' },
		{ name: 'rough', type: 'float' },
		{ name: 'height', type: 'float' },
		{ name: 'foamSize', type: 'float' },
		/*{ name: 'foamEdge', type: 'float' },*/
		{ name: 'color', type: 'vec3' },
		{ name: 'background', type: 'vec3' },
		{ name: 'seed', type: 'float' },
	] }
);



var wavesOpacityRaw = tsl.Fn( ([ position, scale, speed, time, level, rough, height, foamSize, foamEdge, /*color,background,*/ seed ]) => {

	var k = waves_core( position, scale, speed, time, level, rough, height, foamSize, /*foamEdge,*/ seed ).oneMinus();

	return k.smoothstep( 0, foamEdge.oneMinus().div( 10 ) );

} ).setLayout( {
	name: 'wavesOpacityRaw',
	type: 'float',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'speed', type: 'float' },
		{ name: 'time', type: 'float' },
		{ name: 'level', type: 'float' },
		{ name: 'rough', type: 'float' },
		{ name: 'height', type: 'float' },
		{ name: 'foamSize', type: 'float' },
		{ name: 'foamEdge', type: 'float' },
		/*{ name: 'color', type: 'vec3' },*/
		/*{ name: 'subcolor', type: 'vec3' },*/
		{ name: 'seed', type: 'float' },
	] }
);



function waves( params={} ) {

	var { position, scale, speed, time, level, rough, height, foamSize, /*foamEdge,*/ color, background, seed } = { ...defaults$b, ...params };

	return wavesRaw( position, scale, speed, time, level, rough, height, foamSize, /*foamEdge,*/ color, background, seed );

}



waves.opacity = function ( params={} ) {

	var { position, scale, speed, time, level, rough, height, foamSize, foamEdge, /*color,background,*/seed } = { ...defaults$b, ...params };

	return wavesOpacityRaw( position, scale, speed, time, level, rough, height, foamSize, foamEdge, /*color,background,*/seed );

};



waves.defaults = defaults$b;

var defaults$a = {
	$name: 'Wood',

	position: tsl.positionGeometry,
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



var woodRaw = tsl.Fn( ([ position, scale, rings, lengths, angle, fibers, fibersDensity, color, background, seed ]) => {

	var angle = tsl.radians( angle ).toVar();
	var posLocal = tsl.vec3(
		tsl.sub( position.x.mul( tsl.cos( angle ) ), position.y.mul( tsl.sin( angle ) ) ),
		tsl.add( position.x.mul( tsl.sin( angle ) ), position.y.mul( tsl.cos( angle ) ) ),
		position.z,
	).toVar();


	// main pattern with rings
	var pos = posLocal.mul( tsl.exp( scale.sub( 3 ) ).mul( tsl.vec3( tsl.reciprocal( lengths ), 4, tsl.reciprocal( lengths ) ) ) ).add( seed ).toVar( );
	var k = tsl.mx_noise_float( pos ).add( 1 ).mul( 10 ).mul( rings );
	k = k.add( k.cos() ).cos().add( 1 ).div( 2 );

	var kk = tsl.float( 0 ).toVar(),
		sum = tsl.float( 0 ).toVar(),
		scale = tsl.exp( scale.sub( 2 ) ).mul( tsl.vec3( 1, fibersDensity, 1 ) ).toVar(),
		power = tsl.float( 2 ).toVar();

	tsl.Loop( 10, ()=>{

		kk.addAssign( tsl.mul( power, tsl.mx_noise_float( posLocal.mul( scale ).add( seed ) ) ) );
		sum.addAssign( power );
		scale.mulAssign( 1.8 );
		power.mulAssign( 0.6 );

	} );

	kk.assign( tsl.mul( kk, 5 ).div( sum ).mul( 10 ).sin().add( 1 ).div( 2 ) );

	return tsl.mix( color, background, tsl.mix( k, kk, fibers ) );

} ).setLayout( {
	name: 'woodRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'rings', type: 'float' },
		{ name: 'lengths', type: 'float' },
		{ name: 'angle', type: 'float' },
		{ name: 'fibers', type: 'float' },
		{ name: 'fibersDensity', type: 'float' },
		{ name: 'color', type: 'vec3' },
		{ name: 'background', type: 'vec3' },
		{ name: 'seed', type: 'float' },
	] }
);



function wood( params={} ) {

	var { position, scale, rings, lengths, angle, fibers, fibersDensity, color, background, seed } = { ...defaults$a, ...params };

	return woodRaw( position, scale, rings, lengths, angle, fibers, fibersDensity, color, background, seed );

}



wood.defaults = defaults$a;

var defaults$9 = {
	$name: 'Zebra lines',

	position: tsl.positionGeometry,
	scale: 2,
	thinness: 0.5,
	phi: 0,
	theta: 0,

	color: new three.Color( 0x0 ),
	background: new three.Color( 0xFFFFFF ),

	flat: 0,
	// no seed for zebra lines
};



var zebraLinesRaw = tsl.Fn( ([ position, scale, thinness, phi, theta, color, background, xflat ]) => {

	var pos = tsl.select( xflat, position, position.normalize() ).toVar( );

	var dir = tsl.select( xflat, tsl.vec2( tsl.cos( phi ), tsl.sin( phi ) ), spherical( phi, theta ) ).toVar();

	var angle = tsl.select( xflat, tsl.clamp( dir.dot( pos ), -2, 2 ), tsl.acos( tsl.clamp( dir.dot( pos ), -1, 1 ) ) ).toVar();

	var scale = tsl.exp( scale.add( 1 ) ).toVar();

	var k = tsl.sin( angle.mul( scale ) ).sub( thinness.sub( 0.5 ).mul( 2 ) );

	k = tsl.clamp( k.mul( 1000 ).div( scale ), -1, 1 ).mul( 0.5 ).add( 0.5 );

	return tsl.mix( background, color, k );

} ).setLayout( {
	name: 'zebraLinesRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'thinness', type: 'float' },
		{ name: 'phi', type: 'float' },
		{ name: 'theta', type: 'float' },
		{ name: 'color', type: 'vec3' },
		{ name: 'background', type: 'vec3' },
		{ name: 'xflat', type: 'int' },
	] }
);



function zebraLines( params={} ) {

	var { position, scale, thinness, phi, theta, color, background, flat } = { ...defaults$9, ...params };

	return zebraLinesRaw( position, scale, thinness, phi, theta, color, background, flat );

}



zebraLines.defaults = defaults$9;

var defaults$8 = {
	$name: 'Circle decor',

	position: tsl.positionGeometry,
	scale: 2,
	grains: 0.2,

	complexity: 1,
	blur: 0.2,

	color: new three.Color( 0x0 ),
	background: new three.Color( 0xFFFFFF ),

	seed: 0,
};



var circleDecorRaw = tsl.Fn( ([ position, scale, grains, complexity, blur, color, background, seed ])=>{

	var pos = position.mul( tsl.exp( scale.div( 4 ) ) ).add( seed ).toVar( 'pos' );
	var subpos = pos.mul( 2 ).toVar( 'subpos' );

	var k1 = tsl.mx_worley_noise_float( pos );
	var k2 = tsl.mx_worley_noise_float( subpos );
	var k3 = tsl.mx_worley_noise_float( pos.mul( grains.mul( 4 ).add( 2 ) ) ).mul( 2 );

	var compScale = tsl.mx_noise_float( pos ).div( 2 ).add( 1 );

	var k = k1.min( k2, k3 ).clamp( 0, 1 ).mul( complexity.add( 2 ).exp(), compScale, Math.PI ).sin().smoothstep( blur.negate(), blur );

	return tsl.mix( color, background, k.oneMinus() );

} ).setLayout( {
	name: 'camouflageRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'grains', type: 'float' },
		{ name: 'complexity', type: 'float' },
		{ name: 'blur', type: 'float' },
		{ name: 'color', type: 'vec3' },
		{ name: 'background', type: 'vec3' },
		{ name: 'seed', type: 'float' },
	] }
);



function circleDecor( params={} ) {

	var { position, scale, grains, complexity, blur, color, background, seed } = { ...defaults$8, ...params };

	return circleDecorRaw( position, scale, grains, complexity, blur, color, background, seed );

}



circleDecor.defaults = defaults$8;

var defaults$7 = {
	$name: 'Reticular veins',

	position: tsl.positionGeometry,
	scale: 2,
	reticulation: 5,
	strength: 0.2,
	organelles: 0.2,

	color: new three.Color( 0xFFFFF0 ),
	background: new three.Color( 0x208020 ),

	seed: 0,
};



var reticularVeinsRaw = tsl.Fn( ([ position, scale, reticulation, strength, organelles, color, background, seed ])=>{

	var pos = position.mul( tsl.exp( scale.div( 2 ).add( 0.5 ) ) ).add( seed ).toVar( );

	var k1 = tsl.mx_worley_noise_float( pos );
	var k2 = tsl.mx_worley_noise_float( pos.add( 100 ).mul( reticulation ) ).mul( strength );
	var dots = tsl.mx_noise_float( pos.mul( 100 ) ).mul( strength, organelles );

	var k = k1.add( k2 ).add( dots );

	return tsl.mix( background, color, k );

} ).setLayout( {
	name: 'reticularVeinsRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'reticulation', type: 'float' },
		{ name: 'strength', type: 'float' },
		{ name: 'organelles', type: 'float' },
		{ name: 'color', type: 'vec3' },
		{ name: 'background', type: 'vec3' },
		{ name: 'seed', type: 'float' },
	] }
);



function reticularVeins( params={} ) {

	var { position, scale, reticulation, strength, organelles, color, background, seed } = { ...defaults$7, ...params };

	return reticularVeinsRaw( position, scale, reticulation, strength, organelles, color, background, seed );

}



reticularVeins.defaults = defaults$7;

var defaults$6 = {
	$name: 'Roman paving',

	position: tsl.positionGeometry,
	scale: 2,
	depth: 0.5,

	seed: 0,
};



var romanPavingRaw = tsl.Fn( ([ position, scale, depth, seed ])=>{

	var pos = position.mul( tsl.exp( scale ) ).add( seed ).toVar( );

	var k = tsl.mx_worley_noise_vec2( pos ).toVar();

	return k.y.sub( k.x ).pow( depth.mul( 3 ).sub( 3 ).exp() ).smoothstep( 0, 1 );

} ).setLayout( {
	name: 'romanPavingRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'depth', type: 'float' },
		{ name: 'seed', type: 'float' },
	] }
);



function romanPaving( params={} ) {

	var { position, scale, depth, seed } = { ...defaults$6, ...params };

	return romanPavingRaw( position, scale, depth, seed );

}



romanPaving.defaults = defaults$6;

var defaults$5 = {
	$name: 'Crumpled fabric',
	$width: 260,

	position: tsl.positionGeometry,
	scale: 2,
	pinch: 0.5,

	color: new three.Color( 0xB0F0FF ),
	subcolor: new three.Color( 0x4040F0 ),
	background: new three.Color( 0x003000 ),

	seed: 0,
};



var crumpledFabricRaw = tsl.Fn( ([ position, scale, pinch, color, subcolor, background, seed ])=>{

	var pos = position.mul( tsl.exp( scale.sub( 0.5 ) ) ).add( seed ).toVar( );

	tsl.Loop( 4, ()=>{

		var x = tsl.mx_noise_float( pos.xyz );
		var y = tsl.mx_noise_float( pos.yzx );
		var z = tsl.mx_noise_float( pos.zxy );

		pos.addAssign( tsl.vec3( x, y, z ).mul( pinch ) );

	} );

	var k = tsl.mx_noise_float( pos ).add( 1 ).div( 2 ).clamp( 0, 1 );

	var color1 = color.mul( k.mul( 2 ).sub( 1 ).abs().oneMinus() );
	var color2 = subcolor.mul( k ).pow( 2 );
	var color3 = background.mul( k.oneMinus().pow( 2 ) );

	return color1.add( color2 ).add( color3 );

} ).setLayout( {
	name: 'crumpledFabricRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'pinch', type: 'float' },
		{ name: 'color', type: 'vec3' },
		{ name: 'subcolor', type: 'vec3' },
		{ name: 'background', type: 'vec3' },
		{ name: 'seed', type: 'float' },
	] }
);



function crumpledFabric( params={} ) {

	var { position, scale, pinch, color, subcolor, background, seed } = { ...defaults$5, ...params };

	return crumpledFabricRaw( position, scale, pinch, color, subcolor, background, seed );

}



crumpledFabric.defaults = defaults$5;

var defaults$4 = {
	$name: 'Isolayers',

	position: tsl.positionGeometry,
	scale: 2,
	layers: 10,
	edge: 0.5,
	darkness: 0,

	color: new three.Color( 0xFFFFF0 ),
	background: new three.Color( 0xFF4040 ),

	seed: 0,
};



var isolayersRaw = tsl.Fn( ([ position, scale, layers, edge, darkness, color, background, seed ])=>{

	var pos = position.mul( tsl.exp( scale.sub( 1 ) ) ).add( seed ).toVar( );

	var depth = edge.remap( 0, 1, 40, 10 );

	var k = tsl.mx_noise_float( pos, 1.2, 1 ).div( 2 );

	var i = k.mul( layers ).round().div( layers ).clamp( 0, 1 );
	var f = k.sub( tsl.float( 0.5+0.03 ).div( layers ) )
		.mul( layers ).fract()
		.mul( tsl.float( 2 ).pow( depth.reciprocal() ) )
		.pow( depth ).sub( 1 ).abs().oneMinus();

	var hslColor = tsl.mix( toHsl( background ), toHsl( color ), i ).toVar();
	hslColor.z.mulAssign( tsl.mix( 1, i.mul( 1.5 ), darkness ).clamp( 0, 1 ) );

	return hsl( hslColor ).sub( f );

} ).setLayout( {
	name: 'isolayersRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'layers', type: 'int' },
		{ name: 'edge', type: 'float' },
		{ name: 'darkness', type: 'float' },
		{ name: 'color', type: 'vec3' },
		{ name: 'background', type: 'vec3' },
		{ name: 'seed', type: 'float' },
	] }
);



function isolayers( params={} ) {

	var { position, scale, layers, edge, darkness, color, background, seed } = { ...defaults$4, ...params };

	return isolayersRaw( position, scale, layers, edge, darkness, color, background, seed );

}



isolayers.defaults = defaults$4;

var defaults$3 = {
	$name: 'Turbulent smoke',
	$width: 260,

	position: tsl.positionGeometry,
	scale: 2,
	speed: 0,
	details: 5,
	time: tsl.time,

	seed: 0,
};



var turbulentSmokeRaw = tsl.Fn( ([ position, scale, speed, details, time, seed ])=>{

	var pos = position.mul( tsl.exp( scale.sub( 1 ) ) ).add( seed ).toVar( );

	var t = time.mul( speed.sub( 1 ).exp() );

	var q = pos.add( tsl.vec3(
		tsl.mx_fractal_noise_float( pos.add( tsl.vec3( 1, t.sin(), -1 ) ) ),
		tsl.mx_fractal_noise_float( pos.add( tsl.vec3( t.add( 2*Math.PI/3 ).sin(), 1, -1 ) ) ),
		tsl.mx_fractal_noise_float( pos.add( tsl.vec3( 1, -1, t.add( 4*Math.PI/3 ).sin() ) ) ),
	) );

	var p = tsl.mx_fractal_noise_vec3( q, details );

	var k = tsl.mx_worley_noise_float( pos.add( p.div( 2 ) ) ).pow( 4 ).mul( 4 ).oneMinus();

	return k;

} ).setLayout( {
	name: 'turbulentSmokeRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'speed', type: 'float' },
		{ name: 'details', type: 'int' },
		{ name: 'time', type: 'float' },
		{ name: 'seed', type: 'float' },
	] }
);



function turbulentSmoke( params={} ) {

	var { position, scale, speed, details, time, seed } = { ...defaults$3, ...params };

	return turbulentSmokeRaw( position, scale, speed, details, time, seed );

}



turbulentSmoke.defaults = defaults$3;

var defaults$2 = {
	$name: 'Caustics',

	position: tsl.positionGeometry,
	scale: 2,
	speed: 0,
	time: tsl.time,

	color: new three.Color( 0x50A8C0 ),

	seed: 0,
};



var causticsRaw = tsl.Fn( ([ position, scale, speed, time, color, seed ])=>{

	var pos = position.mul( tsl.exp( scale.sub( 1 ) ) ).add( seed ).toVar( );

	var t = time.mul( speed.sub( 1 ).exp() )
		.add( tsl.vec3( 0, 2*Math.PI/3, 4*Math.PI/3 ) )
		.sin();

	var p = tsl.mx_worley_noise_vec3(
		pos.add( tsl.vec3(
			tsl.mx_worley_noise_float( pos.add( t.xyz ) ),
			tsl.mx_worley_noise_float( pos.add( t.yzx ) ),
			tsl.mx_worley_noise_float( pos.add( t.zxy ) ),
		) ) );

	var k = p.length().div( Math.sqrt( 3 ) );

	return k.add( color.sub( 0.5 ).mul( 2 ) );

} ).setLayout( {
	name: 'causticsRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'speed', type: 'float' },
		{ name: 'time', type: 'float' },
		{ name: 'color', type: 'vec3' },
		{ name: 'seed', type: 'float' },
	] }
);



function caustics( params={} ) {

	var { position, scale, speed, time, color, seed } = { ...defaults$2, ...params };

	return causticsRaw( position, scale, speed, time, color, seed );

}



caustics.defaults = defaults$2;

var defaults$1 = {
	$name: 'Bricks',

	position: tsl.positionGeometry,
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



var bricksRaw = tsl.Fn( ([ position, scale, brickSize, brickShift, jointSize, jointSpan, jointJitter, jointBlur, noiseSize, noiseStrength, colorShade, color, additional, background, seed ])=>{

	var pos = position.mul( tsl.exp( scale ) ).add( seed ).toVar( );

	var size = brickSize;

	var floor = pos.div( size ).floor().div( brickShift );

	var offset = tsl.vec3( floor.y, 0, floor.y ).toVar();

	var p = pos.div( size ).fract().add( offset ).fract().toVar();

	var n = tsl.mx_fractal_noise_vec3( pos.mul( remapExp( jointSpan, 0, 1, 20, 0.2 ) ) ).div( remapExp( jointJitter, 0, 1, 500, 1 ) ).toVar();

	var border = tsl.mul(
		p.mul( size ).add( n.z ).smoothstep( size.y.sub( jointSize, jointBlur ), size.y.sub( jointSize ) ).y.oneMinus(),
		p.mul( size ).add( n.y ).smoothstep( jointSize, jointSize.add( jointBlur ) ).y,

		p.mul( size ).add( n.y ).smoothstep( size.x.sub( jointSize, jointBlur ), size.x.sub( jointSize ) ).x.oneMinus(),
		p.mul( size ).add( n.x ).smoothstep( jointSize, jointSize.add( jointBlur ) ).x,

		p.mul( size ).add( n.x ).smoothstep( size.z.sub( jointSize, jointBlur ), size.z.sub( jointSize ) ).z.oneMinus(),
		p.mul( size ).add( n.z ).smoothstep( jointSize, jointSize.add( jointBlur ) ).z,
	).clamp( 0, 1 );

	var shade = tsl.mix( tsl.float( 1 ), tsl.mx_noise_float( tsl.mx_noise_float( pos.xyz.div( size ).add( offset ).floor().zxy.mul( 100 ).add( Math.PI ) ).mul( 10 ) ).add( 2 ).div( 2 ).pow( 4 ).clamp( 0, 1 ), colorShade );

	var ns = tsl.mx_noise_float( pos.mul( remapExp( noiseSize, 0, 1, 5, 250 ) ) ).mul( noiseStrength ).add( 1 );

	var brickNoise = tsl.mx_noise_float( tsl.mx_noise_float( pos.xyz.div( size ).add( offset ).floor().zxy.mul( 200 ).add( Math.PI ) ).mul( 10 ) ).add( 1 ).div( 1 );
	var brickColor = tsl.mix( color, additional, brickNoise.pow( 2 ) );

	return tsl.mix( background, shade.mul( brickColor, border ), border ).mul( ns );

} ).setLayout( {
	name: 'bricksRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },

		{ name: 'brickSize', type: 'vec3' },
		{ name: 'brickShift', type: 'float' },
		{ name: 'jointSize', type: 'float' },
		{ name: 'jointSpan', type: 'float' },
		{ name: 'jointJitter', type: 'float' },
		{ name: 'jointBlur', type: 'float' },
		{ name: 'noiseSize', type: 'float' },
		{ name: 'noiseStrength', type: 'float' },
		{ name: 'colorShade', type: 'float' },

		{ name: 'color', type: 'vec3' },
		{ name: 'additional', type: 'vec3' },
		{ name: 'background', type: 'vec3' },

		{ name: 'seed', type: 'float' },
	] }
);



function bricks( params={} ) {

	var { position, scale, brickSize, brickShift, jointSize, jointSpan, jointJitter, jointBlur, noiseSize, noiseStrength, colorShade, color, additional, background, seed } = { ...defaults$1, ...params };

	return bricksRaw( position, scale, brickSize, brickShift, jointSize, jointSpan, jointJitter, jointBlur, noiseSize, noiseStrength, colorShade, color, additional, background, seed );

}



bricks.defaults = defaults$1;

var defaults = {
	$name: 'Halftone',

	position: tsl.screenCoordinate,
	scale: 2,
	radius: 0.5,
	pattern: 1,

	attenuation: 0,
	near: 6,
	far: 14,

	color: tsl.vertexColor(),

	positionView: tsl.positionView,

};



// square grid of circles
var halftoneGridRaw = tsl.Fn( ([ position, scale, radius, attenuation, far, near, color, positionView ]) => {

	var xscale = tsl.float( 5 ).sub( scale ).exp().toVar(),
		pos = position.toVar(),
		xradius = radius.div( Math.sqrt( 2 ) ).toVar();

	var center = pos.div( xscale ).round().mul( xscale );


	tsl.If( attenuation.notEqual( 0 ), ()=>{

		xradius.mulAssign( positionView.z.mul( -1 ).smoothstep( far, near ).pow( 1/2 ) );

	} );

	tsl.If( pos.distance( center ).greaterThan( xscale.mul( xradius ) ), ()=>tsl.Discard() );

	return color;

} ).setLayout( {
	name: 'halftoneGridRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'radius', type: 'float' },
		{ name: 'attenuation', type: 'int' },
		{ name: 'far', type: 'float' },
		{ name: 'near', type: 'float' },
		{ name: 'color', type: 'vec3' },
		{ name: 'positionView', type: 'vec3' },
	] }
);



// diagonal geid of circles
var halftoneDiagRaw = tsl.Fn( ([ position, scale, radius, attenuation, far, near, color, positionView ]) => {

	var xscale = tsl.float( 5 ).sub( scale ).exp().toVar(),
		pos = position.toVar(),
		xradius = radius.div( Math.sqrt( 2 ) ).toVar();

	var shift = pos.y.div( xscale ).round().mod( 2 );

	var centerA = pos.div( xscale ).round().mulAssign( xscale ).toVar();

	tsl.If( shift.equal( 0 ), ()=>{

		centerA.x.addAssign( xscale.mul( 0.5 ) );

	} );
	var centerB = tsl.vec2( centerA.x.sub( xscale ), centerA.y ).toVar();


	tsl.If( attenuation.notEqual( 0 ), ()=>{

		xradius.mulAssign( positionView.z.mul( -1 ).smoothstep( far, near ).pow( 1/2 ) );

	} );

	tsl.If( tsl.min( pos.distance( centerA ), pos.distance( centerB ) ).greaterThan( xscale.mul( xradius ) ), ()=>tsl.Discard() );

	return color;

} ).setLayout( {
	name: 'halftoneDiagRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'radius', type: 'float' },
		{ name: 'attenuation', type: 'int' },
		{ name: 'far', type: 'float' },
		{ name: 'near', type: 'float' },
		{ name: 'color', type: 'vec3' },
		{ name: 'positionView', type: 'vec3' },
	] }
);



// trigonetric pattern
var halftoneTrigRaw = tsl.Fn( ([ position, scale, radius, pattern, attenuation, far, near, color, positionView ]) => {

	var pos = position.mul( scale.sub( 3.5 ).exp() ).sin().add( 1 ).div( 2 ).toVar(),
		x = pos.x,
		y = pos.y,
		xradius = radius.div( Math.sqrt( 2 ) ).toVar();

	var dist = tsl.float( 0 );

	tsl.Switch( pattern )
		.Case( 2, ()=>{

			dist.assign( x.add( y ).div( 2 ) );

		} )
		.Case( 3, ()=>{

			dist.assign( x.sub( y ).abs().oneMinus() );

		} )
		.Case( 10, ()=>{

			dist.assign( x.sub( y ).abs() );

		} )
		.Case( 4, ()=>{

			dist.assign( x.mul( y ).oneMinus() );

		} )
		.Case( 9, ()=>{

			dist.assign( x.mul( y ) );

		} )
		.Case( 5, ()=>{

			dist.assign( x.max( y ) );

		} )
		.Case( 6, ()=>{

			dist.assign( x.min( y ) );

		} )
		.Case( 7, ()=>{

			dist.assign( x );

		} )
		.Case( 8, ()=>{

			dist.assign( y );

		} );

	tsl.If( attenuation.notEqual( 0 ), ()=>{

		xradius.mulAssign( positionView.z.mul( -1 ).smoothstep( far, near ).pow( 1/2 ) );

	} );

	tsl.If( dist.greaterThan( xradius ), ()=>tsl.Discard() );

	return color;

} ).setLayout( {
	name: 'halftoneTrigRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'radius', type: 'float' },
		{ name: 'pattern', type: 'int' },
		{ name: 'attenuation', type: 'int' },
		{ name: 'far', type: 'float' },
		{ name: 'near', type: 'float' },
		{ name: 'color', type: 'vec3' },
		{ name: 'positionView', type: 'vec3' },
	] }
);



var halftoneRaw = tsl.Fn( ([ position, scale, radius, pattern, attenuation, far, near, color, positionView ]) => {

	var result = tsl.vec3( 0 ).toVar();

	tsl.Switch( pattern )
		.Case( 0, ()=>{

			result.assign( halftoneGridRaw( position, scale, radius, attenuation, far, near, color, positionView ) );

		} )
		.Case( 1, ()=>{

			result.assign( halftoneDiagRaw( position, scale, radius, attenuation, far, near, color, positionView ) );

		} )
		.Default( ()=>{

			result.assign( halftoneTrigRaw( position, scale, radius, pattern, attenuation, far, near, color, positionView ) );

		} );

	return result;

} ).setLayout( {
	name: 'halftoneRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'radius', type: 'float' },
		{ name: 'pattern', type: 'int' },
		{ name: 'attenuation', type: 'int' },
		{ name: 'far', type: 'float' },
		{ name: 'near', type: 'float' },
		{ name: 'color', type: 'vec3' },
		{ name: 'positionView', type: 'vec3' },
	] }
);


function halftone( params={} ) {

	var { position, scale, radius, pattern, attenuation, far, near, color, positionView } = { ...defaults, ...params };

	return halftoneRaw( position, scale, radius, pattern, attenuation, far, near, color, positionView );

}



halftone.defaults = defaults;

window.__TSL_TEXTURES__ = 3.0;
//export { aaa } from './aaa.js';

Object.defineProperty(exports, "fractal", {
	enumerable: true,
	get: function () { return tsl.mx_fractal_noise_float; }
});
Object.defineProperty(exports, "fractal3", {
	enumerable: true,
	get: function () { return tsl.mx_fractal_noise_vec3; }
});
Object.defineProperty(exports, "noise", {
	enumerable: true,
	get: function () { return tsl.mx_noise_float; }
});
Object.defineProperty(exports, "noise3", {
	enumerable: true,
	get: function () { return tsl.mx_noise_vec3; }
});
Object.defineProperty(exports, "voronoi", {
	enumerable: true,
	get: function () { return tsl.mx_worley_noise_float; }
});
Object.defineProperty(exports, "voronoi2", {
	enumerable: true,
	get: function () { return tsl.mx_worley_noise_vec2; }
});
Object.defineProperty(exports, "voronoi3", {
	enumerable: true,
	get: function () { return tsl.mx_worley_noise_vec3; }
});
exports.approximateNormal = approximateNormal;
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
exports.dysonSphere = dysonSphere;
exports.entangled = entangled;
exports.fordite = fordite;
exports.gasGiant = gasGiant;
exports.grid = grid;
exports.halftone = halftone;
exports.hideFallbackWarning = hideFallbackWarning;
exports.hsl = hsl;
exports.isolayers = isolayers;
exports.isolines = isolines;
exports.karstRock = karstRock;
exports.marble = marble;
exports.neonLights = neonLights;
exports.perlinNoise = perlinNoise;
exports.photosphere = photosphere;
exports.planet = planet;
exports.polkaDots = polkaDots;
exports.processedWood = processedWood;
exports.protozoa = protozoa;
exports.remapExp = remapExp;
exports.reticularVeins = reticularVeins;
exports.romanPaving = romanPaving;
exports.rotatePivot = rotatePivot;
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
exports.waves = waves;
exports.wood = wood;
exports.zebraLines = zebraLines;
