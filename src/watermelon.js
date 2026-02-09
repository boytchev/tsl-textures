
//	TSL-Textures: Watermelon



import { Color } from 'three';
import { equirectUV, exp, Fn, mix, positionGeometry, screenUV, vec3 } from 'three/tsl';
import { noise } from './tsl-utils.js';



var defaults = {
	$name: 'Watermelon',
	$replaceExportUVS: screenUV,

	position: positionGeometry,
	uvs: equirectUV( positionGeometry.normalize() ),

	scale: 2,
	stripes: 12,
	variation: 0.5,
	noise: 0.25,

	color: new Color( 'yellowgreen' ),
	background: new Color( 'darkgreen' ),

	seed: 0,
};



var watermelonRaw = Fn( ([ position, uvs, scale, stripes, variation, xnoise, color, background, seed ])=>{

	var pos = position.mul( exp( scale.div( 4 ).add( 2 ) ) ).add( seed ).toVar( );

	var a = uvs.x.mul( stripes, 2*Math.PI ).add( noise( pos.mul( vec3( 1, 0.3, 1 ) ) ).mul( 2 ) );

	var k = a.sin().add( 0.5 ).div( 2 ).mul( uvs.y.remap( 0, 1, -Math.PI, Math.PI ).cos().add( 1.2 ).clamp( 0, 1 ) )
		.add( variation.mul( 2, noise( pos.mul( 1.5 ) ).div( 2 ) ) )
		.add( variation.mul( 2, noise( pos.mul( 4 ) ).div( 6 ) ) )
		.toVar();

	k.assign(
		k.mix( k.round(), 0.75 )
			.add( noise( pos.mul( 2 ) ).mul( xnoise, 0.5 ) )
			.add( noise( pos.mul( 3 ) ).mul( xnoise, 1 ) )
			.add( noise( pos.mul( 15 ) ).mul( xnoise, 0.2 ) )
			.clamp( 0, 1 )
	);

	var color = mix( background, color, k ).toVar();

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

	var { position, uvs, scale, stripes, variation, noise, color, background, seed } = { ...defaults, ...params };

	return watermelonRaw( position, uvs, scale, stripes, variation, noise, color, background, seed );

}



watermelon.defaults = defaults;



export { watermelon };
