
//	TSL-Textures: Planet



import { Color } from 'three';
import { exp, float, Fn, If, Loop, mix, mul, positionGeometry, remap, smoothstep, vec3 } from 'three/tsl';
import { noise } from './tsl-utils.js';




var defaults = {
	$name: 'Planet',

	position: positionGeometry,
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



var planetRaw = Fn( ([ position, scale, iterations, levelSea, levelMountain, balanceWater, balanceSand, balanceSnow, colorDeep, colorShallow, colorBeach, colorGrass, colorForest, colorSnow, seed ])=>{

	var k = float( 0 ).toVar(),
		sum = float( 0 ).toVar(),
		xscale = exp( scale.sub( 2 ) ).toVar(),
		xpower = float( 2 ).toVar();

	Loop( iterations.add( 10 ), ()=>{

		k.addAssign( mul( xpower, noise( position.mul( xscale ).add( seed ) ) ) );
		sum.addAssign( xpower );
		xscale.mulAssign( 1.5 );
		xpower.mulAssign( 0.8 );

	} );

	k.assign( mul( k, k, 0.5 ).div( sum ) );

	var levelSea = levelSea.pow( 2 ).toVar();
	var levelMountain = levelMountain.pow( 2 ).toVar();
	var levelSand = mix( levelSea, levelMountain, balanceSand ).toVar();
	var levelCoast = mix( levelSea, levelSand, 0.4 ).toVar();
	var levelGrass = mix( levelSea, levelSand, 0.6 ).toVar();

	var color = vec3().toVar();

	// process water
	If( k.lessThan( levelSea ), ()=>{

		// deep-shallow
		color.assign( mix(
			colorDeep,
			colorShallow,
			remap( k, 0, levelSea, 0, 1 ).pow( exp( balanceWater.mul( -8 ).add( 4 ) ) )
		) );

	} )
		.ElseIf( k.lessThan( levelCoast ), ()=>{

			// shallow-sand
			color.assign( mix(
				colorShallow,
				colorBeach,
				remap( k, levelSea, levelCoast )
			) );

		} )
		.ElseIf( k.lessThan( levelGrass ), ()=>{

			// sand
			color.assign( colorBeach );

		} )
		.ElseIf( k.lessThan( levelSand ), ()=>{

			// shallow-sand-grass
			color.assign( mix(
				colorBeach,
				colorGrass,
				remap( k, levelGrass, levelSand )
			) );

		} )
		.ElseIf( k.lessThan( levelMountain ), ()=>{

			// grass-forest
			color.assign( mix(
				colorGrass,
				colorForest,
				remap( k, levelSand, levelMountain ).pow( 0.75 )
			) );

		} )
		.Else( ()=>{

			// forest-snow
			var levelSnow = mix( 1, levelMountain, balanceSnow );
			color.assign( mix(
				colorForest,
				colorSnow,
				smoothstep( mix( levelSnow, levelMountain, balanceSnow.pow( 0.5 ) ), levelSnow, k )
			) );

		} );

	return color;

} ).setLayout( {
	name: 'planetRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },

		{ name: 'iterations', type: 'int' },
		{ name: 'levelSea', type: 'float' },
		{ name: 'levelMountain', type: 'float' },
		{ name: 'balanceWater', type: 'float' },
		{ name: 'balanceSand', type: 'float' },
		{ name: 'balanceSnow', type: 'float' },

		{ name: 'colorDeep', type: 'vec3' },
		{ name: 'colorShallow', type: 'vec3' },
		{ name: 'colorBeach', type: 'vec3' },
		{ name: 'colorGrass', type: 'vec3' },
		{ name: 'colorForest', type: 'vec3' },
		{ name: 'colorSnow', type: 'vec3' },

		{ name: 'seed', type: 'float' },
	] }
);



function planet( params={} ) {

	var { position, scale, iterations, levelSea, levelMountain, balanceWater, balanceSand, balanceSnow, colorDeep, colorShallow, colorBeach, colorGrass, colorForest, colorSnow, seed } = { ...defaults, ...params };

	return planetRaw( position, scale, iterations, levelSea, levelMountain, balanceWater, balanceSand, balanceSnow, colorDeep, colorShallow, colorBeach, colorGrass, colorForest, colorSnow, seed );

}



planet.defaults = defaults;



export { planet };
