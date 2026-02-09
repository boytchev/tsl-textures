
//	TSL-Textures: Dyson sphere



import { Color } from 'three';
import { exp, float, Fn, Loop, mix, positionGeometry, vec3 } from 'three/tsl';



var defaults = {
	$name: 'Dyson sphere',

	position: positionGeometry,
	scale: 2,
	complexity: 2,

	variation: 0,

	color: new Color( 0xc0d0ff ),
	background: new Color( 0 ),

	seed: 0,
};



var noisea = Fn( ([ pos ])=>{

	var p = pos.mul( 5**0.5 ).fract().toVar();
	p.addAssign( p.dot( p.add( vec3( 31.4159, 27.1828, 14.142 ) ) ) );
	return p.z.mul( p.x.add( p.y ) ).fract().mul( 2 ).sub( 1 );

} ).setLayout( {
	name: 'noisea',
	type: 'float',
	inputs: [
		{ name: 'pos', type: 'vec3' },
	] }
);



var smoother = Fn( ([ x ])=>{

	var t = x.oneMinus().clamp( 0, 1 ).toVar();
	return t.mul( t ).mul( float( 3 ).sub( t.mul( 2 ) ) );

} ).setLayout( {
	name: 'smoother',
	type: 'float',
	inputs: [
		{ name: 'x', type: 'float' },
	] }
);



var noiseg = Fn( ([ pos ])=>{

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

	var n000 = noisea( vec3( minx, miny, minz ) ).mul( mx ).mul( my ).mul( mz ).toVar();
	var n001 = noisea( vec3( minx, miny, maxz ) ).mul( mx ).mul( my ).mul( dz ).toVar();
	var n010 = noisea( vec3( minx, maxy, minz ) ).mul( mx ).mul( dy ).mul( mz ).toVar();
	var n011 = noisea( vec3( minx, maxy, maxz ) ).mul( mx ).mul( dy ).mul( dz ).toVar();
	var n100 = noisea( vec3( maxx, miny, minz ) ).mul( dx ).mul( my ).mul( mz ).toVar();
	var n101 = noisea( vec3( maxx, miny, maxz ) ).mul( dx ).mul( my ).mul( dz ).toVar();
	var n110 = noisea( vec3( maxx, maxy, minz ) ).mul( dx ).mul( dy ).mul( mz ).toVar();
	var n111 = noisea( vec3( maxx, maxy, maxz ) ).mul( dx ).mul( dy ).mul( dz ).toVar();

	return n000.add( n001 ).add( n010 ).add( n011 ).add( n100 ).add( n101 ).add( n110 ).add( n111 );

} ).setLayout( {
	name: 'noiseg',
	type: 'float',
	inputs: [
		{ name: 'pos', type: 'vec3' },
	] }
);



var dysonSphereRaw = Fn( ([ position, scale, complexity, color, background, seed ])=>{

	var pos = position.mul( exp( scale.div( 2 ).add( 0.5 ) ) ).add( seed ).toVar( );

	var res = vec3().toVar();
	var factor = float( 1 ).toVar();

	Loop( complexity.add( 4 ), ()=>{

		res.addAssign( noiseg( pos.mul( factor ) ) );
		factor.addAssign( factor );

	} );

	return mix( background, color, res.x.add( 1 ).div( 5 ) );

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

	var { position, scale, complexity, color, background, seed } = { ...defaults, ...params };

	return dysonSphereRaw( position, scale, complexity, color, background, seed );

}



dysonSphere.defaults = defaults;



export { dysonSphere };
