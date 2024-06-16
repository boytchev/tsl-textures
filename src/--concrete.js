
// TSL-Textures: Concrete



//import { Color } from "three";
import { abs, /*add, div,*/ exp, /*If, MeshLambertNodeMaterial, mix,*/ mul, /*oneMinus,*/ positionLocal, pow, remap, tslFn } from 'three/nodes';
import { /*hsl,*/ noise } from 'tsl-textures/tsl-utils.js';



var concrete = tslFn( ( params ) => {

	var pos = positionLocal.mul( exp( params.scale ) ).add( params.seed ).toVar( );

	var k = noise( pos );

	//return hsl( 0, 0, mul(params.bump,pow(abs(k.div(2).add(0.5)),remap(params.density,0,1,10,0.5))) );
	return mul( params.bump, pow( abs( k.div( 2 ).add( 0.5 ) ), remap( params.density, 0, 1, 10, 0.5 ) ) );

} );



concrete.defaults = {
	$name: 'Concrete',

	scale: 2,
	density: 1,
	bump: 1,

	seed: 0,
};



export { concrete };
