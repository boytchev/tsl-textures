
//	TSL-Textures: Protozoa



import { Color } from "three";
import { exp, float, Fn, Loop, matcapUV, mix, positionGeometry, vec3 } from 'three/tsl';
import { noise } from './tsl-utils.js';



var defaults = {
	$name: 'Protozoa',

	position: positionGeometry,
	matcap: matcapUV,
	scale: 1.5,
	fat: 0.7,
	amount: 0.4,

	color: new Color( 0xA0A0A0 ),
	subcolor: new Color( 0xE0E8FF ),
	background: new Color( 0xF0F8FF ),

	seed: 0,
};



var pnoise = Fn( ([ pos, fat ])=>{

	return noise( pos ).mul( fat ).clamp( -3.14, 3.14 ).cos().add( 1 ).div( 2 );

} ).setLayout( {
	name: 'pnoise',
	type: 'float',
	inputs: [
		{ name: 'pos', type: 'vec3' },
		{ name: 'fat', type: 'float' },
	] }
);



var protozoaRaw = Fn( ([ position, matcap, scale, fat, amount, color, subcolor, background, seed ])=>{

	var pos = position.mul( exp( scale.sub( 1 ) ) ).add( seed ).toVar( );

	var xmatcap = vec3( matcap, matcap.length() ).toVar();

	var rings1 = float( 0 ).toVar();
	var rings2 = float( 0 ).toVar();

	var n1 = float( 0 ).toVar();
	var n2 = float( 0 ).toVar();

	var fat = fat.add( 0.2 ).oneMinus().mul( 60 ).add( 30 ).toVar();
	var xscale = float( 2 ).toVar();

	var dPos = amount.div( 2 ).add( 0.5 ).exp().toVar();

	Loop( 10, ()=>{

		rings1.assign( pnoise( pos.xyz.add( xmatcap ), fat ) );
		rings2.assign( pnoise( pos.yzx.add( xmatcap ), fat ) );

		n1.addAssign( rings1.mul( rings2 ).mul( xscale ) );
		n2.addAssign( rings1.max( rings2 ).mul( xscale ) );

		pos.assign( mix( pos.mul( dPos ), 0, 0.4 ) );

		scale.mulAssign( 0.9 );

	} );

	return mix( background, mix( color, subcolor, n2.mul( 0.1 ) ), n1 );

} ).setLayout( {
	name: 'protozoaRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'matcap', type: 'vec2' },
		{ name: 'scale', type: 'float' },
		{ name: 'fat', type: 'float' },
		{ name: 'amount', type: 'float' },
		{ name: 'color', type: 'vec3' },
		{ name: 'subcolor', type: 'vec3' },
		{ name: 'background', type: 'vec3' },
		{ name: 'seed', type: 'float' },
	] }
);



function protozoa( params={} ) {

	var { position, matcap, scale, fat, amount, color, subcolor, background, seed } = { ...defaults, ...params };

	return protozoaRaw( position, matcap, scale, fat, amount, color, subcolor, background, seed );

}



protozoa.defaults = defaults;



export { protozoa };
