
//	TSL-Textures: Processed wood



import { Color } from "three";
import { add, cos, exp, Fn, mix, positionLocal, radians, sin, sub, vec3 } from 'three';
import { noise } from 'tsl-textures/tsl-utils.js';



var processedWood = Fn( ( params )=>{

	var angle = radians( params.angle ).toVar();
	var posLocal = vec3(
		sub( positionLocal.x.mul( cos( angle ) ), positionLocal.y.mul( sin( angle ) ) ),
		add( positionLocal.x.mul( sin( angle ) ), positionLocal.y.mul( cos( angle ) ) ),
		positionLocal.z,
	).toVar();

	var scale = params.scale.div( 2 ).add( 1 ).toVar();
	var pos = posLocal.mul( exp( scale ) ).add( params.seed ).toVar( );

	var len = params.length.add( 5 ).reciprocal().toVar();
	var k = noise( pos.mul( scale, vec3( 1, len, len ) ) );
	k = k.mul( noise( pos.mul( vec3( 25, 1, 1 ) ) ).add( -1 ).mul( 0.2 ) );
	k = k.add( params.strength.sub( 0.5 ) ).smoothstep( -0.3, 0.3 ).oneMinus();

	return mix( params.color, params.background, k );

} );


processedWood.defaults = {
	$name: 'Processed wood',
	$width: 260,

	scale: 2,
	length: 4,
	strength: 0.3,
	angle: 0,

	color: new Color( 0x702020 ),
	background: new Color( 0xF0D0A0 ),

	seed: 0,
};



export { processedWood };
