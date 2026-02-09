
//	TSL-Textures: Circles



import { Color } from "three";
import { acos, clamp, exp, Fn, positionGeometry, select, sin, vec3 } from 'three/tsl';
import { hsl, toHsl } from './tsl-utils.js';



var defaults = {
	$name: 'Circles',

	position: positionGeometry,

	scale: 2,
	variety: 1,

	color: new Color( 0xF0E0D0 ),

	seed: 0,
};



var circlesRaw = Fn( ([ position, scale, variety, color, seed ]) => {

	var pos = position.toVar();

	var angle = acos( clamp( pos.y, -1, 1 ) ).mul( 20 );

	var x = angle.div( 3000 ).mul( exp( scale.sub( 1 ) ) );

	var k = seed.sin().mul( 100 ).toVar();

	for ( var n=0; n<=10; n++ ) {

		k.addAssign( sin( x.mul( 2**n ).sub( Math.PI*n/2 ) ).mul( -n*( n+1 )/2 ) );

	}

	k.assign( k.div( 200 ).clamp( -2, 2 ) );

	var HSL = toHsl( color );

	var hue = HSL.x.add( k.mul( variety ) ).mod( 1 ).mul( 10 );

	var huei = hue.floor();
	var huef = hue.sub( huei );
	huef = select( huef.lessThan( 0.5 ), huef.pow( 1.5 ), huef.pow( 1/1.5 ) );

	return hsl( vec3( huei.add( huef ).div( 10 ), HSL.yz ) );

} ).setLayout( {
	name: 'circlesRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'variety', type: 'float' },
		{ name: 'color', type: 'vec3' },
		{ name: 'seed', type: 'float' },
	] }
);



function circles( params={} ) {

	var { position, scale, variety, color, seed } = { ...defaults, ...params };

	return circlesRaw( position, scale, variety, color, seed );

}



circles.defaults = defaults;



export { circles };
