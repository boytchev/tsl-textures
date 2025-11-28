
//	TSL-Textures: Circle decor



import { Color } from 'three';
import { exp, mix, mx_worley_noise_float, positionGeometry } from 'three/tsl';
import { convertToNodes, noise, TSLFn } from './tsl-utils.js';



var defaults = {
	$name: 'Circle decor',

	scale: 2,
	grains: 0.2,

	complexity: 1,
	blur: 0.2,

	color: new Color( 0x0 ),
	background: new Color( 0xFFFFFF ),

	seed: 0,
};



var circleDecor = TSLFn( ( params )=>{

	params = convertToNodes( params, defaults );

	var pos = positionGeometry.mul( exp( params.scale.div( 4 ) ) ).add( params.seed ).toVar( );
	var subpos = pos.mul( 2 ).toVar( );

	var k1 = mx_worley_noise_float( pos );
	var k2 = mx_worley_noise_float( subpos );
	var k3 = mx_worley_noise_float( pos.mul( params.grains.mul( 4 ).add( 2 ) ) ).mul( 2 );

	var compScale = noise( pos ).div( 2 ).add( 1 );

	var k = k1.min( k2, k3 ).clamp( 0, 1 ).mul( params.complexity.add( 2 ).exp(), compScale, Math.PI ).sin().smoothstep( params.blur.negate(), params.blur );

	return mix( params.color, params.background, k.oneMinus() );

}, defaults );



export { circleDecor };
