
//	TSL-Textures: Zebra Lines



import { Color } from "three";
import { acos, clamp, cos, exp, Fn, mix, positionGeometry, select, sin, vec2 } from 'three/tsl';
import { spherical } from './tsl-utils.js';



var defaults = {
	$name: 'Zebra lines',

	position: positionGeometry,
	scale: 2,
	thinness: 0.5,
	phi: 0,
	theta: 0,

	color: new Color( 0x0 ),
	background: new Color( 0xFFFFFF ),

	flat: 0,
	// no seed for zebra lines
};



var zebraLinesRaw = Fn( ([ position, scale, thinness, phi, theta, color, background, xflat ]) => {

	var pos = select( xflat, position, position.normalize() ).toVar( );

	var dir = select( xflat, vec2( cos( phi ), sin( phi ) ), spherical( phi, theta ) ).toVar();

	var angle = select( xflat, clamp( dir.dot( pos ), -2, 2 ), acos( clamp( dir.dot( pos ), -1, 1 ) ) ).toVar();

	var scale = exp( scale.add( 1 ) ).toVar();

	var k = sin( angle.mul( scale ) ).sub( thinness.sub( 0.5 ).mul( 2 ) );

	k = clamp( k.mul( 1000 ).div( scale ), -1, 1 ).mul( 0.5 ).add( 0.5 );

	return mix( background, color, k );

} ).setLayout( {
	name: 'zebraLinesRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'thinness', type: 'float' },
		{ name: 'phi', type: 'float' },
		{ name: 'theta', type: 'float' },
		{ name: 'color', type: 'vec3' },
		{ name: 'background', type: 'vec3' },
		{ name: 'xflat', type: 'int' },
	] }
);



function zebraLines( params={} ) {

	var { position, scale, thinness, phi, theta, color, background, flat } = { ...defaults, ...params };

	return zebraLinesRaw( position, scale, thinness, phi, theta, color, background, flat );

}



zebraLines.defaults = defaults;



export { zebraLines };
