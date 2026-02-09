
//	TSL-Textures: Gas giant



import { Color } from "three";
import { exp, Fn, mix, positionGeometry, vec3 } from 'three/tsl';
import { hsl, noise, toHsl } from './tsl-utils.js';



var defaults = {
	$name: 'Gas giant',

	position: positionGeometry,
	scale: 2,
	turbulence: 0.3,
	blur: 0.6,

	colorA: new Color( 0xFFF8F0 ),
	colorB: new Color( 0xF0E8B0 ),
	colorC: new Color( 0xAFA0D0 ),

	seed: 0,
};



var gasGiantRaw = Fn( ([ position, scale, turbulence, blur, colorA, colorB, colorC, seed ])=>{

	var xscale = scale.div( 2 ).add( 1 ).toVar();
	var pos = position.mul( exp( xscale ) ).add( seed ).toVar( );

	// turbulence strength
	var xturbulence = turbulence.mul(
		noise( vec3( 0, pos.y.mul( 0.5 ), 0 ).add( 1 ) ).add(
			noise( vec3( 0, pos.y.mul( 1 ), 0 ).add( 1 ) ).mul( 0.5 ),
			noise( vec3( 1, pos.y.mul( 2 ), 1 ).add( 1 ) ).mul( 0.25 )
		)
	).mul( 5 ).abs().toVar();

	var spot = noise( pos.div( 4 ) ).add( 1 ).div( 2 ).pow( 10 ).mul( 10 ).smoothstep( 0, 1 );

	// apply turbulence
	pos.addAssign( vec3( noise( pos ), noise( pos.yxz ), noise( pos.yzx ) ).mul( xturbulence.mul( spot.mul( 2 ).exp() ) ) );


	var xblur = blur.pow( 0.2 ).oneMinus().mul( xturbulence.add( 1 ) ).toVar();

	var k = noise( pos.mul( vec3( 0, xscale, 0 ) ) );
	k = k.add( noise( pos.mul( vec3( 1, 15, 1 ) ) ).mul( xblur ) );
	k = k.add( -0.5 ).smoothstep( -1, 1 ).oneMinus();

	var n = noise( vec3( 0, pos.y.mul( 0.75 ), 0 ) ).add( 1 );

	var HSL = toHsl( mix( colorB, colorA, n ) );
	var color = hsl( vec3( HSL.x.add( noise( pos.mul( vec3( 0, xscale, 0 ) ) ).div( 4 ) ), HSL.yz ) ).toVar();

	color.assign( mix( color, colorC, xturbulence.mul( 0.3 ) ) );

	return color.mul( k );

} ).setLayout( {
	name: 'gasGiantRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'turbulence', type: 'float' },
		{ name: 'blur', type: 'float' },
		{ name: 'colorA', type: 'vec3' },
		{ name: 'colorB', type: 'vec3' },
		{ name: 'colorC', type: 'vec3' },
		{ name: 'seed', type: 'float' },
	] }
);



function gasGiant( params={} ) {

	var { position, scale, turbulence, blur, colorA, colorB, colorC, seed } = { ...defaults, ...params };

	return gasGiantRaw( position, scale, turbulence, blur, colorA, colorB, colorC, seed );

}



gasGiant.defaults = defaults;



export { gasGiant };
