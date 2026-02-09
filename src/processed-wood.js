
//	TSL-Textures: Processed wood



import { Color } from "three";
import { add, cos, exp, Fn, mix, positionGeometry, radians, sin, sub, vec3 } from 'three/tsl';
import { noise } from './tsl-utils.js';



var defaults = {
	$name: 'Processed wood',
	$width: 260,

	position: positionGeometry,
	scale: 2,
	lengths: 4,
	strength: 0.3,
	angle: 0,

	color: new Color( 0x702020 ),
	background: new Color( 0xF0D0A0 ),

	seed: 0,
};



var processedWoodRaw = Fn( ([ position, scale, lengths, strength, angle, color, background, seed ])=>{

	var angle = radians( angle ).toVar();
	var posLocal = vec3(
		sub( position.x.mul( cos( angle ) ), position.y.mul( sin( angle ) ) ),
		add( position.x.mul( sin( angle ) ), position.y.mul( cos( angle ) ) ),
		position.z,
	).toVar();

	var xscale = scale.div( 2 ).add( 1 ).toVar();
	var pos = posLocal.mul( exp( scale ) ).add( seed ).toVar( );

	var len = lengths.add( 5 ).reciprocal().toVar();
	var k = noise( pos.mul( xscale, vec3( 1, len, len ) ) );
	k = k.mul( noise( pos.mul( vec3( 25, 1, 1 ) ) ).add( -1 ).mul( 0.2 ) );
	k = k.add( strength.sub( 0.5 ) ).smoothstep( -0.3, 0.3 ).oneMinus();

	return mix( color, background, k );

} ).setLayout( {
	name: 'processedWoodRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'lengths', type: 'float' },
		{ name: 'strength', type: 'float' },
		{ name: 'angle', type: 'float' },
		{ name: 'color', type: 'vec3' },
		{ name: 'background', type: 'vec3' },
		{ name: 'seed', type: 'float' },
	] }
);



function processedWood( params={} ) {

	var { position, scale, lengths, strength, angle, color, background, seed } = { ...defaults, ...params };

	return processedWoodRaw( position, scale, lengths, strength, angle, color, background, seed );

}



processedWood.defaults = defaults;



export { processedWood };
