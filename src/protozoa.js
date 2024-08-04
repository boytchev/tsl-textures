
//	TSL-Textures: Protozoa



import { Color } from "three";
import { exp, float, loop, matcapUV, mix, positionLocal, tslFn, vec3 } from 'three/nodes';
import { noise } from 'tsl-textures/tsl-utils.js';



var protozoa = tslFn( ( params )=>{


	var scale = params.scale.toVar();
	var pos = positionLocal.mul( exp( scale.sub( 1 ) ) ).add( params.seed ).toVar( );

	var mc = vec3( matcapUV, matcapUV.length() ).toVar();


	var n = float( 0 ).toVar();
	var nc = float( 0 ).toVar();
	var factor = float( 1 ).toVar();
	var fat = params.fat.add( 0.2 ).oneMinus().mul( 60 ).add( 30 ).toVar();
	var scl = float( 2 ).toVar();

	var dPos = params.amount.div( 2 ).add( 0.5 ).exp().toVar();

	loop( 10, ()=>{

		var rings1 = noise( pos.add( mc ) ).mul( fat ).clamp( -3.14, 3.14 ).cos().add( 1 ).div( 2 ).toVar();
		var rings2 = noise( pos.yzx.add( mc ) ).mul( fat ).clamp( -3.14, 3.14 ).cos().add( 1 ).div( 2 ).toVar();

		n.addAssign( rings1.mul( rings2 ).mul( scl ) );
		nc.addAssign( rings1.max( rings2 ).mul( scl ) );

		pos.mulAssign( dPos );
		pos.assign( mix( pos, vec3( 0, 0, 0 ), 0.4 ) );
		factor.addAssign( 10 );
		scl.mulAssign( 0.9 );

	} );

	return mix( params.background, mix( params.color, params.subcolor, nc.mul( 0.1 ) ), n );

} );


protozoa.defaults = {
	$name: 'Protozoa',

	scale: 1.5,
	fat: 0.7,
	amount: 0.4,

	color: new Color( 0xA0A0A0 ),
	subcolor: new Color( 0xE0E8FF ),
	background: new Color( 0xF0F8FF ),

	seed: 0,
};



export { protozoa };
