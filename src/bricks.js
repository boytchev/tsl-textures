
//	TSL-Textures: Bricks



import { Color, Vector3 } from 'three';
import { exp, float, mix, mul, mx_fractal_noise_vec3, positionGeometry, vec3 } from 'three/tsl';
import { convertToNodes, noise, remapExp, TSLFn } from './tsl-utils.js';



var defaults = {
	$name: 'Bricks',

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

// mortar joint



var bricks = TSLFn( ( params )=>{

	params = convertToNodes( params, defaults );


	var pos = positionGeometry.mul( exp( params.scale ) ).add( params.seed ).toVar( );

	var size = params.brickSize;

	var floor = pos.div( size ).floor().div( params.brickShift );

	var offset = vec3( floor.y, 0, floor.y ).toVar();

	var p = pos.div( size ).fract().add( offset ).fract().toVar();

	var n = mx_fractal_noise_vec3( pos.mul( remapExp( params.jointSpan, 0, 1, 20, 0.2 ) ) ).div( remapExp( params.jointJitter, 0, 1, 500, 1 ) ).toVar();

	var border = mul(
		p.mul( size ).add( n.z ).smoothstep( size.y.sub( params.jointSize, params.jointBlur ), size.y.sub( params.jointSize ) ).y.oneMinus(),
		p.mul( size ).add( n.y ).smoothstep( params.jointSize, params.jointSize.add( params.jointBlur ) ).y,

		p.mul( size ).add( n.y ).smoothstep( size.x.sub( params.jointSize, params.jointBlur ), size.x.sub( params.jointSize ) ).x.oneMinus(),
		p.mul( size ).add( n.x ).smoothstep( params.jointSize, params.jointSize.add( params.jointBlur ) ).x,

		p.mul( size ).add( n.x ).smoothstep( size.z.sub( params.jointSize, params.jointBlur ), size.z.sub( params.jointSize ) ).z.oneMinus(),
		p.mul( size ).add( n.z ).smoothstep( params.jointSize, params.jointSize.add( params.jointBlur ) ).z,
	).clamp( 0, 1 );

	var shade = mix( float( 1 ), noise( noise( pos.xyz.div( size ).add( offset ).floor().zxy.mul( 100 ).add( Math.PI ) ).mul( 10 ) ).add( 2 ).div( 2 ).pow( 4 ).clamp( 0, 1 ), params.colorShade );

	var ns = noise( pos.mul( remapExp( params.noiseSize, 0, 1, 5, 250 ) ) ).mul( params.noiseStrength ).add( 1 );

	var brickNoise = noise( noise( pos.xyz.div( size ).add( offset ).floor().zxy.mul( 200 ).add( Math.PI ) ).mul( 10 ) ).add( 1 ).div( 1 );
	var brickColor = mix( params.color, params.additional, brickNoise.pow( 2 ) );

	return mix( params.background, shade.mul( brickColor, border ), border ).mul( ns );

}, defaults );



export { bricks };
