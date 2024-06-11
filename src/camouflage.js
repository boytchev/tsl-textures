
//	TSL-Textures: Camouflage



import { Color } from 'three';
import { tslFn, If, round, vec3, sin, mul, exp, positionLocal } from 'three/nodes';
import { noise, hsl } from 'tsl-textures/tsl-utils.js';



var camouflage = tslFn( ( params)=>{
	
	var pos = positionLocal.mul( exp( params.scale ) ).add( params.seed ).toVar( );

	var color = vec3(0,0,0).toVar( );
	
	If( round(noise(pos).add(0.2)).greaterThanEqual(1), () =>
	{ color.assign( params.colorA ); }
	)
	.elseif( round(noise(pos.yzx).add(0.3)).greaterThanEqual(1), () =>
	{ color.assign( params.colorB ); }
	)
	.elseif( round(noise(pos.zxy).add(0.4)).greaterThanEqual(1), () =>
	{ color.assign( params.colorC ); }
	)
	.else( () =>
	{ color.assign( params.colorD ); }
	)
	
	return color;
} );



camouflage.defaults = {
	$name: 'camouflage',

	scale: 2,

	colorA: new Color( 0xc2bea8 ),
	colorB: new Color( 0x9c895e ),
	colorC: new Color( 0x92a375 ),
	colorD: new Color( 0x717561 ),

	//hue: 0,
	//saturation: 0,
	//brightness: 0,
	
	seed: 0,
};

/*

function pattern( x, y, z, color, options, / *u, v, px, py* / ) {

	x *= options.scale;
	y *= options.scale;
	z *= options.scale;

	if ( Math.round( noise( x, y, z )+0.2 ) >= 1 )
		color.copy( options.colorA );
	else
		if ( Math.round( noise( y, z, x )+0.3 ) >= 1 )
			color.copy( options.colorB );
		else
			if ( Math.round( noise( z, x, y )+0.4 ) >= 1 )
				color.copy( options.colorC );
			else
				color.copy( options.colorD );

	color.offsetHSL( options.hue, options.saturation, options.brightness );

}


var defaults = {
	$name: 'Camouflage',

	width: 512,
	height: 256,

	scale: 50,

	colorA: 0xc2bea8,
	colorB: 0x9c895e,
	colorC: 0x92a375,
	colorD: 0x717561,

	hue: 0,
	saturation: 0,
	brightness: 0,
};



function options( params ) {

	return {
		colorA: new Color( params.colorA ?? defaults.colorA ),
		colorB: new Color( params.colorB ?? defaults.colorB ),
		colorC: new Color( params.colorC ?? defaults.colorC ),
		colorD: new Color( params.colorD ?? defaults.colorD ),

		scale: mapExp( params.scale ?? defaults.scale, 32, 0.5 ),
		hue: map( params.hue ?? defaults.hue, -1, 1, -360, 360 ),
		saturation: map( params.saturation ?? defaults.saturation ),
		brightness: map( params.brightness ?? defaults.brightness ),

		width: params.width ?? defaults.width,
		height: params.height ?? defaults.height,
	};

}

*/

export { camouflage };