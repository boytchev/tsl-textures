
//	TSL-Textures: Gas giant



import { Color } from "three";
import { exp, mix, positionLocal, Fn, vec3 } from 'three';
import { hsl, noise, toHsl } from 'tsl-textures/tsl-utils.js';



var gasGiant = Fn( ( params )=>{

	var scale = params.scale.div( 2 ).add( 1 ).toVar();
	var pos = positionLocal.mul( exp( scale ) ).add( params.seed ).toVar( );

	// turbulence strength
	var turbulence = params.turbulence.mul(
		noise( vec3( 0, pos.y.mul( 0.5 ), 0 ).add( 1 ) ).add(
			noise( vec3( 0, pos.y.mul( 1 ), 0 ).add( 1 ) ).mul( 0.5 ),
			noise( vec3( 1, pos.y.mul( 2 ), 1 ).add( 1 ) ).mul( 0.25 )
		)
	).mul( 5 ).abs().toVar();

	var spot = noise( pos.div( 4 ) ).add( 1 ).div( 2 ).pow( 10 ).mul( 10 ).smoothstep( 0, 1 );

	// apply turbulence
	pos.addAssign( vec3( noise( pos ), noise( pos.yxz ), noise( pos.yzx ) ).mul( turbulence.mul( spot.mul( 2 ).exp() ) ) );


	var blur = params.blur.pow( 0.2 ).oneMinus().mul( turbulence.add( 1 ) ).toVar();

	var k = noise( pos.mul( vec3( 0, scale, 0 ) ) );
	k = k.add( noise( pos.mul( vec3( 1, 15, 1 ) ) ).mul( blur ) );
	k = k.add( -0.5 ).smoothstep( -1, 1 ).oneMinus();

	var n = noise( vec3( 0, pos.y.mul( 0.75 ), 0 ) ).add( 1 );

	var HSL = toHsl( mix( params.colorB, params.colorA, n ) );
	var color = hsl( HSL.x.add( noise( pos.mul( vec3( 0, scale, 0 ) ) ).div( 4 ) ), HSL.y, HSL.z ).toVar();

	color.assign( mix( color, params.colorC, turbulence.mul( 0.3 ) ) );

	return color.mul( k );

} );


gasGiant.defaults = {
	$name: 'Gas giant',

	scale: 2,
	turbulence: 0.3,
	blur: 0.6,

	colorA: new Color( 0xFFF8F0 ),
	colorB: new Color( 0xF0E8B0 ),
	colorC: new Color( 0xAFA0D0 ),

	seed: 0,
};



export { gasGiant };
