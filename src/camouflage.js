
//	TSL-Textures: Camouflage



import { Color } from 'three';
import { tslFn, If, round, vec3, exp, positionLocal } from 'three/nodes';
import { noise } from 'tsl-textures/tsl-utils.js';



var camouflage = tslFn( ( params )=>{

	var pos = positionLocal.mul( exp( params.scale ) ).add( params.seed ).toVar( );

	var color = vec3( 0, 0, 0 ).toVar( );

	If( round( noise( pos ).add( 0.2 ) ).greaterThanEqual( 1 ), () => {

		color.assign( params.colorA );

	}
	)
		.elseif( round( noise( pos.yzx ).add( 0.3 ) ).greaterThanEqual( 1 ), () => {

			color.assign( params.colorB );

		}
		)
		.elseif( round( noise( pos.zxy ).add( 0.4 ) ).greaterThanEqual( 1 ), () => {

			color.assign( params.colorC );

		}
		)
		.else( () => {

			color.assign( params.colorD );

		}
		);

	return color;

} );



camouflage.defaults = {
	$name: 'camouflage',

	scale: 2,

	colorA: new Color( 0xc2bea8 ),
	colorB: new Color( 0x9c895e ),
	colorC: new Color( 0x92a375 ),
	colorD: new Color( 0x717561 ),

	seed: 0,
};



export { camouflage };
