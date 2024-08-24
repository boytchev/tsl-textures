
//	TSL-Textures: Dyson sphere



import { Color } from 'three';
import { exp, float, loop, mix, positionLocal, tslFn, vec3 } from 'three';



var noisea = tslFn( ([ pos ])=>{

	var p = pos.mul( 5**0.5 ).fract().toVar();
	p.addAssign( p.dot( p.add( vec3( 31.4159, 27.1828, 14.142 ) ) ) );
	return p.z.mul( p.x.add( p.y ) ).fract().mul( 2 ).sub( 1 );

} );

var noiseg = tslFn( ([ pos ])=>{

	var minx = pos.x.floor().toVar();
	var maxx = minx.add( 1 ).toVar();

	var miny = pos.y.floor().toVar();
	var maxy = miny.add( 1 ).toVar();

	var minz = pos.z.floor().toVar();
	var maxz = minz.add( 1 ).toVar();

	var dx = pos.x.fract().smoothstep( 1, 0 ).toVar();
	var dy = pos.y.fract().smoothstep( 1, 0 ).toVar();
	var dz = pos.z.fract().smoothstep( 1, 0 ).toVar();

	var mx = dx.oneMinus().smoothstep( 1, 0 ).toVar();
	var my = dy.oneMinus().smoothstep( 1, 0 ).toVar();
	var mz = dz.oneMinus().smoothstep( 1, 0 ).toVar();

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



var dysonSphere = tslFn( ( params )=>{

	var pos = positionLocal.mul( exp( params.scale.div( 2 ).add( 0.5 ) ) ).add( params.seed ).toVar( );

	var res = vec3().toVar();
	var factor = float( 1 ).toVar();

	loop( params.complexity.add( 4 ), ()=>{

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
