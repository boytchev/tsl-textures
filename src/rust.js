
//	TSL-Textures: Voronoi Cells



import { Color } from 'three';
import { exp, loop, mix, positionLocal, tslFn } from 'three/nodes';
import { noise } from 'tsl-textures/tsl-utils.js';



var _rust = tslFn( ( params )=>{

	var pos = positionLocal.mul( exp( params.scale.div( 4 ).add( -1 ) ) ).add( params.seed ).toVar( );

	var amount = params.amount.mul( noise( pos.mul( params.amount.div( 2 ).add( 4 ) ) ).add( 4 ) ).toVar();

	var k = noise( pos ).toVar();

	loop( params.iterations, ()=>{

		pos.mulAssign( 2 );
		k.addAssign( noise( pos ) );

	} );

	k.subAssign( noise( pos.mul( 2 ) ).abs() );

	k.assign( k.sub( amount ).clamp( 0, 15 ) );

	return k;

} );


var rust = tslFn( ( params )=>{

	var k = _rust( params ).mul( 1.25 ).pow( 0.5 );

	var pos = positionLocal.mul( exp( params.scale.add( params.noiseScale.mul( 3 ), 2 ) ) );

	k.addAssign( params.noise.mul( noise( pos ).abs().add( 0.1 ).pow( 2 ) ) );

	return mix( params.color, params.background, k );

} );



rust.opacity = tslFn( ( params )=>{

	var k = _rust( params ).mul( params.opacity.add( 0.2 ) );

	return k.oneMinus();

} );


rust.defaults = {
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



export { rust };
