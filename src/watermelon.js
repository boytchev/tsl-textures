
//	TSL-Textures: Watermelon



import { Color } from 'three';
import { equirectUV, exp, Fn, mix, positionGeometry, screenUV, select, vec3 } from 'three/tsl';
import { noise, prepare } from './tsl-utils.js';



var watermelon = Fn( ( params )=>{

	params = prepare( { ...watermelon.defaults, ...params } );

	var variation = select( params.flat, params.variation.mul( 0.85 ).add( 0.15 ), params.variation );

	var pos = positionGeometry.mul( exp( params.scale.div( 4 ).add( 2 ) ) ).add( params.seed ).toVar( );

	var uv = select( params.flat, screenUV, equirectUV( positionGeometry.normalize() ) ).toVar(),
		a = uv.x.mul( params.stripes.round(), select( params.flat, Math.PI, 2*Math.PI ) ).add( noise( pos.mul( vec3( 1, 0.3, 1 ) ) ).mul( 2 ) );

	var k = a.sin().add( 0.5 ).div( 2 ).mul( uv.y.remap( 0, 1, -Math.PI, Math.PI ).cos().add( 1.2 ).clamp( 0, 1 ) )
		.add( variation.mul( 2, noise( pos.mul( 1.5 ) ).div( 2 ) ) )
		.add( variation.mul( 2, noise( pos.mul( 4 ) ).div( 6 ) ) )
		.toVar();

	k.assign(
		k.mix( k.round(), 0.75 )
			.add( noise( pos.mul( 2 ) ).mul( params.noise, 0.5 ) )
			.add( noise( pos.mul( 3 ) ).mul( params.noise, 1 ) )
			.add( noise( pos.mul( 15 ) ).mul( params.noise, 0.2 ) )
			.clamp( 0, 1 )
	);

	var color = mix( params.background, params.color, k ).toVar();

	return color;

} );



watermelon.defaults = {
	$name: 'Watermelon',

	scale: 2,
	stripes: 12,
	variation: 0.5,
	noise: 0.25,

	color: new Color( 'yellowgreen' ),
	background: new Color( 'darkgreen' ),

	flat: 0,

	seed: 0,
};



export { watermelon };
