
//	TSL-Textures: Neon Lights



import { Color } from "three";
import { abs, exp, Fn, oneMinus, positionGeometry, select, sqrt, vec3 } from 'three/tsl';
import { hsl, noise, toHsl } from './tsl-utils.js';



var defaults = {
	$name: 'Neon Lights',

	position: positionGeometry,

	scale: 2,
	thinness: 0.8,
	mode: 0, // 0=additive, 1=subtractive

	colorA: new Color( 0xFF0000 ),
	colorB: new Color( 0x00FF00 ),
	colorC: new Color( 0x0000FF ),
	background: new Color( 0x000000 ),

	seed: 0,
};



var neonLightsRaw = Fn( ([ position, scale, thinness, mode, colorA, colorB, colorC, background, seed ]) => {

	var pos = position;

	var xscale = exp( scale.remap( 0, 4, -2, 2 ) ).toVar();
	var xthinness = exp( thinness.remap( 0, 1, 1.5, 0 ) ).toVar();

	var color = background.toVar();
	var neon = vec3( 0 ).toVar();

	var x = noise( pos.xyz ).toVar();
	var y = noise( pos.yzx ).toVar();
	var z = noise( pos.zxy ).toVar();

	var k = noise( vec3( x, y, z ).mul( xscale ).add( seed ) ).toVar();
	k.assign( oneMinus( sqrt( abs( k ) ) ).pow( 3 ) );

	neon.assign( colorA );
	var HSL = toHsl( neon );
	neon.assign( hsl( vec3( HSL.xy, HSL.z.mul( k ) ) ) );

	color.addAssign( select( mode.equal( 0 ), neon, neon.negate() ).mul( xthinness ) );

	k.assign( noise( vec3( y, z, x ).mul( xscale ).sub( seed ) ) );
	k.assign( oneMinus( sqrt( abs( k ) ) ).pow( 3 ) );

	neon.assign( colorB );
	var HSL = toHsl( neon );
	neon.assign( hsl( vec3( HSL.xy, HSL.z.mul( k ) ) ) );

	color.addAssign( select( mode.equal( 0 ), neon, neon.negate() ).mul( xthinness ) );


	k.assign( noise( vec3( z, x, y.negate() ).mul( xscale ).add( seed ) ) );
	k.assign( oneMinus( sqrt( abs( k ) ) ).pow( 3 ) );

	neon.assign( colorC );
	var HSL = toHsl( neon );
	neon.assign( hsl( vec3( HSL.xy, HSL.z.mul( k ) ) ) );

	color.addAssign( select( mode.equal( 0 ), neon, neon.negate() ).mul( xthinness ) );

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

	var { position, scale, thinness, mode, colorA, colorB, colorC, background, seed } = { ...defaults, ...params };

	return neonLightsRaw( position, scale, thinness, mode, colorA, colorB, colorC, background, seed );

}



neonLights.defaults = defaults;



export { neonLights };
