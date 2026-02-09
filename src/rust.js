
//	TSL-Textures: Voronoi Cells



import { Color } from 'three';
import { exp, Fn, Loop, mix, positionGeometry } from 'three/tsl';
import { noise } from './tsl-utils.js';



var defaults = {
	$name: 'rust',

	position: positionGeometry,
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



var _rust = Fn( ([ position, scale, iterations, amount, seed ])=>{

	var pos = position.mul( exp( scale.div( 4 ).add( -1 ) ) ).add( seed ).toVar( );

	var xamount = amount.mul( noise( pos.mul( amount.div( 2 ).add( 4 ) ) ).add( 4 ) ).toVar();

	var k = noise( pos ).toVar();

	Loop( iterations, ()=>{

		pos.mulAssign( 2 );
		k.addAssign( noise( pos ) );

	} );

	k.subAssign( noise( pos.mul( 2 ) ).abs() );

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


var rustRaw = Fn( ([ position, scale, iterations, amount, /*opacity,*/xnoise, noiseScale, color, background, seed ])=>{

	var k = _rust( position, scale, iterations, amount, seed ).mul( 1.25 ).pow( 0.5 );

	var pos = position.mul( exp( scale.add( noiseScale.mul( 3 ), 2 ) ) );

	k.addAssign( xnoise.mul( noise( pos ).abs().add( 0.1 ).pow( 2 ) ) );

	return mix( color, background, k );

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




var rustOpacityRaw = Fn( ([ position, scale, iterations, amount, opacity, /*xnoise, noiseScale, color, background,*/ seed ])=>{

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

	var { position, scale, iterations, amount, /*opacity,*/ noise, noiseScale, color, background, seed } = { ...defaults, ...params };

	return rustRaw( position, scale, iterations, amount, /*opacity,*/noise, noiseScale, color, background, seed );

}



rust.opacity = function ( params={} ) {

	var { position, scale, iterations, amount, opacity, /*xnoise, noiseScale, color, background,*/ seed } = { ...defaults, ...params };

	return rustOpacityRaw( position, scale, iterations, amount, opacity, /*xnoise, noiseScale, color, background,*/ seed );

};



rust.defaults = defaults;



export { rust };
