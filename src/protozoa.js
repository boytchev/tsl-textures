
//	TSL-Textures: Protozoa



import { Color } from "three";
import { exp, float, loop, matcapUV, mix, positionLocal, tslFn, vec3 } from 'three';
import { noise } from 'tsl-textures/tsl-utils.js';



var pnoise = tslFn( ([ pos, fat ])=>{

	return noise( pos ).mul( fat ).clamp( -3.14, 3.14 ).cos().add( 1 ).div( 2 );

} );



var protozoa = tslFn( ( params )=>{

	var pos = positionLocal.mul( exp( params.scale.sub( 1 ) ) ).add( params.seed ).toVar( );

	var matcap = vec3( matcapUV, matcapUV.length() ).toVar();

	var rings1 = float( 0 ).toVar();
	var rings2 = float( 0 ).toVar();

	var n1 = float( 0 ).toVar();
	var n2 = float( 0 ).toVar();

	var fat = params.fat.add( 0.2 ).oneMinus().mul( 60 ).add( 30 ).toVar();
	var scale = float( 2 ).toVar();

	var dPos = params.amount.div( 2 ).add( 0.5 ).exp().toVar();

	loop( 10, ()=>{

		rings1.assign( pnoise( pos.xyz.add( matcap ), fat ) );
		rings2.assign( pnoise( pos.yzx.add( matcap ), fat ) );

		n1.addAssign( rings1.mul( rings2 ).mul( scale ) );
		n2.addAssign( rings1.max( rings2 ).mul( scale ) );

		pos.assign( mix( pos.mul( dPos ), 0, 0.4 ) );

		scale.mulAssign( 0.9 );

	} );

	return mix( params.background, mix( params.color, params.subcolor, n2.mul( 0.1 ) ), n1 );

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
