
//	TSL-Textures: Marble



import { Color } from "three";
import { add, div, exp, Fn, If, mix, mul, oneMinus, positionGeometry, pow } from 'three/tsl';
import { noise } from './tsl-utils.js';



var defaults = {
	$name: 'Marble',

	position: positionGeometry,
	scale: 1.2,
	thinness: 5,
	noise: 0.3,

	color: new Color( 0x4545D3 ),
	background: new Color( 0xF0F8FF ),

	seed: 0,
};



var marbleRaw = Fn( ([ position, scale, thinness, xnoise, color, background, seed ]) => {

	var pos = position.mul( exp( scale ) ).add( seed ).toVar( );

	var k = add(
		noise( pos ),
		noise( pos.mul( 2 ) ).mul( 0.5 ),
		noise( pos.mul( 6 ) ).mul( 0.1 )
	);

	var k = oneMinus( k.abs().pow( 2.5 ) ).toVar();

	var	maxSmooth = oneMinus( pow( 0.5, thinness.add( 7 ) ) ).toVar(),
		minSmooth = oneMinus( pow( 0.5, thinness.add( 7 ).mul( 0.5 ) ) ).toVar();

	If( k.greaterThan( maxSmooth ), ()=>{

		k.assign( 1 );

	} )
		.ElseIf( k.lessThan( minSmooth ), ()=>{

			k.assign( 0 );

		} )
		.Else( ()=> {

			var a = k.sub( minSmooth );
			var b = maxSmooth.sub( minSmooth );
			k.assign( pow( div( a, b ), 5 ).mul( 0.75 ) );
			k.assign( k.mul( add( 0.5, noise( pos.mul( 2 ) ).mul( 1.5 ) ) ) );

		} );

	k.assign( k.add( mul( xnoise, noise( pos.mul( 150 ) ).abs().pow3() ) ) );

	return mix( background, color, k );

} ).setLayout( {
	name: 'marbleRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'thinness', type: 'float' },
		{ name: 'xnoise', type: 'float' },
		{ name: 'color', type: 'vec3' },
		{ name: 'background', type: 'vec3' },
		{ name: 'seed', type: 'float' },
	] }
);



function marble( params={} ) {

	var { position, scale, thinness, noise, color, background, seed } = { ...defaults, ...params };

	return marbleRaw( position, scale, thinness, noise, color, background, seed );

}



marble.defaults = defaults;



export { marble };
