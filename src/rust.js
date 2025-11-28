
//	TSL-Textures: Voronoi Cells



import { Color } from 'three';
import { exp, Fn, Loop, mix, positionGeometry } from 'three/tsl';
import { convertToNodes, noise, TSLFn } from './tsl-utils.js';



var defaults = {
	$name: 'rust',

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



var _rust = Fn( ( params )=>{

	var pos = positionGeometry.mul( exp( params.scale.div( 4 ).add( -1 ) ) ).add( params.seed ).toVar( );

	var amount = params.amount.mul( noise( pos.mul( params.amount.div( 2 ).add( 4 ) ) ).add( 4 ) ).toVar();

	var k = noise( pos ).toVar();

	Loop( params.iterations, ()=>{

		pos.mulAssign( 2 );
		k.addAssign( noise( pos ) );

	} );

	k.subAssign( noise( pos.mul( 2 ) ).abs() );

	k.assign( k.sub( amount ).clamp( 0, 15 ) );

	return k;

} );


var rust = TSLFn( ( params )=>{

	params = convertToNodes( params, defaults );

	var k = _rust( params ).mul( 1.25 ).pow( 0.5 );

	var pos = positionGeometry.mul( exp( params.scale.add( params.noiseScale.mul( 3 ), 2 ) ) );

	k.addAssign( params.noise.mul( noise( pos ).abs().add( 0.1 ).pow( 2 ) ) );

	return mix( params.color, params.background, k );

}, defaults );



rust.opacity = TSLFn( ( params )=>{

	params = convertToNodes( params, defaults );

	var k = _rust( params ).mul( params.opacity.add( 0.2 ) );

	return k.oneMinus();

}, defaults );



export { rust };
