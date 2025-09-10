﻿
//	TSL-Textures: Planet



import { Color } from 'three';
import { exp, float, If, Loop, mix, mul, positionGeometry, remap, smoothstep, vec3 } from 'three/tsl';
import { noise, prepare, TSLFn } from './tsl-utils.js';




var defaults = {
	$name: 'Planet',

	scale: 2,

	iterations: 5,

	levelSea: 0.3,
	levelMountain: 0.7,

	balanceWater: 0.3,
	balanceSand: 0.2,
	balanceSnow: 0.8,

	colorDeep: new Color( 0x123a59 ).convertLinearToSRGB(), // SteelBlue
	colorShallow: new Color( 0x87CEEB ).convertLinearToSRGB(), // SkyBlue
	colorBeach: new Color( 0xFFFACD ).convertLinearToSRGB(), // LemonChiffon
	colorGrass: new Color( 0x3CB371 ).convertLinearToSRGB(), // MediumSeaGreen
	colorForest: new Color( 0x003000 ).convertLinearToSRGB(), // Dark green
	colorSnow: new Color( 0xF0FFFF ).convertLinearToSRGB(), // Azure

	seed: 0,
};



var planet = TSLFn( ( params )=>{

	params = prepare( params, defaults );

	var k = float( 0 ).toVar(),
		sum = float( 0 ).toVar(),
		scale = exp( params.scale.sub( 2 ) ).toVar(),
		power = float( 2 ).toVar();

	Loop( params.iterations.add( 10 ), ()=>{

		k.addAssign( mul( power, noise( positionGeometry.mul( scale ).add( params.seed ) ) ) );
		sum.addAssign( power );
		scale.mulAssign( 1.5 );
		power.mulAssign( 0.8 );

	} );

	k.assign( mul( k, k, 0.5 ).div( sum ) );

	var levelSea = params.levelSea.pow( 2 ).toVar();
	var levelMountain = params.levelMountain.pow( 2 ).toVar();
	var levelSand = mix( levelSea, levelMountain, params.balanceSand ).toVar();
	var levelCoast = mix( levelSea, levelSand, 0.4 ).toVar();
	var levelGrass = mix( levelSea, levelSand, 0.6 ).toVar();

	var color = vec3().toVar();

	// process water
	If( k.lessThan( levelSea ), ()=>{

		// deep-shallow
		color.assign( mix(
			params.colorDeep,
			params.colorShallow,
			remap( k, 0, levelSea, 0, 1 ).pow( exp( params.balanceWater.mul( -8 ).add( 4 ) ) )
		) );

	} )
		.ElseIf( k.lessThan( levelCoast ), ()=>{

			// shallow-sand
			color.assign( mix(
				params.colorShallow,
				params.colorBeach,
				remap( k, levelSea, levelCoast )
			) );

		} )
		.ElseIf( k.lessThan( levelGrass ), ()=>{

			// sand
			color.assign( params.colorBeach );

		} )
		.ElseIf( k.lessThan( levelSand ), ()=>{

			// shallow-sand-grass
			color.assign( mix(
				params.colorBeach,
				params.colorGrass,
				remap( k, levelGrass, levelSand )
			) );

		} )
		.ElseIf( k.lessThan( levelMountain ), ()=>{

			// grass-forest
			color.assign( mix(
				params.colorGrass,
				params.colorForest,
				remap( k, levelSand, levelMountain ).pow( 0.75 )
			) );

		} )
		.Else( ()=>{

			// forest-snow
			var levelSnow = mix( 1, levelMountain, params.balanceSnow );
			color.assign( mix(
				params.colorForest,
				params.colorSnow,
				smoothstep( mix( levelSnow, levelMountain, params.balanceSnow.pow( 0.5 ) ), levelSnow, k )
			) );

		} );

	return color;

}, defaults );



export { planet };
