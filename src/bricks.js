
//	TSL-Textures: Bricks



import { Color, Vector3 } from 'three';
import { exp, float, Fn, mix, mul, positionGeometry, vec3 } from 'three/tsl';
import { fractal3, noise, remapExp } from './tsl-utils.js';



var defaults = {
	$name: 'Bricks',

	position: positionGeometry,
	scale: 2,

	brickSize: new Vector3( 2, 1, 2 ),
	brickShift: 2,

	jointSize: 0.05,
	jointSpan: 0.5,
	jointJitter: 0.5,
	jointBlur: 0.03,

	noiseSize: 0.5,
	noiseStrength: 0.2,

	colorShade: 0.5,

	color: new Color( 0xFF4000 ),
	additional: new Color( 0xD0A030 ),
	background: new Color( 0xAAAAAA ),


	seed: 0,
};



var bricksRaw = Fn( ([ position, scale, brickSize, brickShift, jointSize, jointSpan, jointJitter, jointBlur, noiseSize, noiseStrength, colorShade, color, additional, background, seed ])=>{

	var pos = position.mul( exp( scale ) ).add( seed ).toVar( );

	var size = brickSize;

	var floor = pos.div( size ).floor().div( brickShift );

	var offset = vec3( floor.y, 0, floor.y ).toVar();

	var p = pos.div( size ).fract().add( offset ).fract().toVar();

	var n = fractal3( pos.mul( remapExp( jointSpan, 0, 1, 20, 0.2 ) ) ).div( remapExp( jointJitter, 0, 1, 500, 1 ) ).toVar();

	var border = mul(
		p.mul( size ).add( n.z ).smoothstep( size.y.sub( jointSize, jointBlur ), size.y.sub( jointSize ) ).y.oneMinus(),
		p.mul( size ).add( n.y ).smoothstep( jointSize, jointSize.add( jointBlur ) ).y,

		p.mul( size ).add( n.y ).smoothstep( size.x.sub( jointSize, jointBlur ), size.x.sub( jointSize ) ).x.oneMinus(),
		p.mul( size ).add( n.x ).smoothstep( jointSize, jointSize.add( jointBlur ) ).x,

		p.mul( size ).add( n.x ).smoothstep( size.z.sub( jointSize, jointBlur ), size.z.sub( jointSize ) ).z.oneMinus(),
		p.mul( size ).add( n.z ).smoothstep( jointSize, jointSize.add( jointBlur ) ).z,
	).clamp( 0, 1 );

	var shade = mix( float( 1 ), noise( noise( pos.xyz.div( size ).add( offset ).floor().zxy.mul( 100 ).add( Math.PI ) ).mul( 10 ) ).add( 2 ).div( 2 ).pow( 4 ).clamp( 0, 1 ), colorShade );

	var ns = noise( pos.mul( remapExp( noiseSize, 0, 1, 5, 250 ) ) ).mul( noiseStrength ).add( 1 );

	var brickNoise = noise( noise( pos.xyz.div( size ).add( offset ).floor().zxy.mul( 200 ).add( Math.PI ) ).mul( 10 ) ).add( 1 ).div( 1 );
	var brickColor = mix( color, additional, brickNoise.pow( 2 ) );

	return mix( background, shade.mul( brickColor, border ), border ).mul( ns );

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

	var { position, scale, brickSize, brickShift, jointSize, jointSpan, jointJitter, jointBlur, noiseSize, noiseStrength, colorShade, color, additional, background, seed } = { ...defaults, ...params };

	return bricksRaw( position, scale, brickSize, brickShift, jointSize, jointSpan, jointJitter, jointBlur, noiseSize, noiseStrength, colorShade, color, additional, background, seed );

}



bricks.defaults = defaults;



export { bricks };
