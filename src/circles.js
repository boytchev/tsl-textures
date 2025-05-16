
//	TSL-Textures: Circles



import { Color } from "three";
import { acos, clamp, exp, float, Fn, positionGeometry, select, sin } from 'three/tsl';
import { hsl, prepare, toHsl } from './tsl-utils.js';



var circles = Fn( ( params ) => {

	params = prepare( { ...circles.defaults, ...params } );

	var pos = select( params.flat, positionGeometry, positionGeometry.normalize() );

	var angle = acos( clamp( pos.y, -1, 1 ) ).mul( 20 );

	var scale = exp( params.scale.sub( 1 ) );

	var x = angle.div( 3000 ).mul( scale );

	var k = float( params.seed.sin().mul( 100 ) ).toVar();

	for ( var n=0; n<=10; n++ ) {

		k.addAssign( sin( x.mul( 2**n ).sub( Math.PI*n/2 ) ).mul( -n*( n+1 )/2 ) );

	}

	k.assign( k.div( 200 ).clamp( -2, 2 ) );

	var HSL = toHsl( params.color );

	var hue = HSL.x.add( k.mul( params.variety ) ).mod( 1 ).mul( 10 );

	var huei = hue.floor();
	var huef = hue.sub( huei );
	huef = select( huef.lessThan( 0.5 ), huef.pow( 1.5 ), huef.pow( 1/1.5 ) );

	return hsl( huei.add( huef ).div( 10 ), HSL.y, HSL.z );

} );



circles.defaults = {
	$name: 'Circles',

	scale: 2,
	variety: 1,

	color: new Color( 0xF0E0D0 ),

	flat: 0,

	seed: 0,
};



export { circles };
