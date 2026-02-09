
//	TSL-Textures: Circle decor



import { Color } from 'three';
import { exp, Fn, mix, positionGeometry } from 'three/tsl';
import { noise, voronoi } from './tsl-utils.js';



var defaults = {
	$name: 'Circle decor',

	position: positionGeometry,
	scale: 2,
	grains: 0.2,

	complexity: 1,
	blur: 0.2,

	color: new Color( 0x0 ),
	background: new Color( 0xFFFFFF ),

	seed: 0,
};



var circleDecorRaw = Fn( ([ position, scale, grains, complexity, blur, color, background, seed ])=>{

	var pos = position.mul( exp( scale.div( 4 ) ) ).add( seed ).toVar( 'pos' );
	var subpos = pos.mul( 2 ).toVar( 'subpos' );

	var k1 = voronoi( pos );
	var k2 = voronoi( subpos );
	var k3 = voronoi( pos.mul( grains.mul( 4 ).add( 2 ) ) ).mul( 2 );

	var compScale = noise( pos ).div( 2 ).add( 1 );

	var k = k1.min( k2, k3 ).clamp( 0, 1 ).mul( complexity.add( 2 ).exp(), compScale, Math.PI ).sin().smoothstep( blur.negate(), blur );

	return mix( color, background, k.oneMinus() );

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

	var { position, scale, grains, complexity, blur, color, background, seed } = { ...defaults, ...params };

	return circleDecorRaw( position, scale, grains, complexity, blur, color, background, seed );

}



circleDecor.defaults = defaults;



export { circleDecor };
