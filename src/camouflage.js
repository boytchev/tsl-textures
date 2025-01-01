
//	TSL-Textures: Camouflage



import { Color } from 'three';
import { exp, Fn, If, positionGeometry, round, vec3 } from 'three/tsl';
import { noise } from 'tsl-textures/tsl-utils.js';



var camouflage = Fn( ( params )=>{

	var pos = positionGeometry.mul( exp( params.scale ) ).add( params.seed ).toVar( );

	var color = vec3( 0, 0, 0 ).toVar( );

	If( round( noise( pos, 1, 0.2 ) ).greaterThanEqual( 1 ), () => {

		color.assign( params.colorA );

	}
	)
		.ElseIf( round( noise( pos.yzx, 1, 0.3 ) ).greaterThanEqual( 1 ), () => {

			color.assign( params.colorB );

		}
		)
		.ElseIf( round( noise( pos.zxy, 1, 0.4 ) ).greaterThanEqual( 1 ), () => {

			color.assign( params.colorC );

		}
		)
		.Else( () => {

			color.assign( params.colorD );

		}
		);

	return color;

} );



camouflage.defaults = {
	$name: 'Camouflage',

	scale: 2,

	colorA: new Color( 0xc2bea8 ),
	colorB: new Color( 0x9c895e ),
	colorC: new Color( 0x92a375 ),
	colorD: new Color( 0x717561 ),

	seed: 0,
};



export { camouflage };
