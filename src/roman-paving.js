
//	TSL-Textures: Roman paving



import { exp, Fn, positionGeometry } from 'three/tsl';
import { voronoi2 } from './tsl-utils.js';



var defaults = {
	$name: 'Roman paving',

	position: positionGeometry,
	scale: 2,
	depth: 0.5,

	seed: 0,
};



var romanPavingRaw = Fn( ([ position, scale, depth, seed ])=>{

	var pos = position.mul( exp( scale ) ).add( seed ).toVar( );

	var k = voronoi2( pos ).toVar();

	return k.y.sub( k.x ).pow( depth.mul( 3 ).sub( 3 ).exp() ).smoothstep( 0, 1 );

} ).setLayout( {
	name: 'romanPavingRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'depth', type: 'float' },
		{ name: 'seed', type: 'float' },
	] }
);



function romanPaving( params={} ) {

	var { position, scale, depth, seed } = { ...defaults, ...params };

	return romanPavingRaw( position, scale, depth, seed );

}



romanPaving.defaults = defaults;



export { romanPaving };
