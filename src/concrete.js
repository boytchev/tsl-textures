
// TSL-Textures: Concrete



import { cross, exp, Fn, normalLocal, positionGeometry, remap, tangentLocal, vec3 } from 'three/tsl';
import { approximateNormal, noise } from './tsl-utils.js';



var defaults = {
	$name: 'Concrete',
	$normalNode: true,

	position: positionGeometry,

	scale: 2,
	density: 0.5,
	bump: 0.5,

	seed: 0,
};



var surfacePos = Fn( ([ position, normal, density ]) => {

	var k = noise( position, 0.5, 0.5 ).abs().pow( density );

	return position.add( normal.mul( k ) );

} ).setLayout( {
	name: 'surfacePos',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'normal', type: 'vec3' },
		{ name: 'density', type: 'float' },
	] }
);



var concreteRaw = Fn( ([ position, normal, tangent, scale, density, bump, seed ]) => {

	const EPS = 0.001;

	var seed3d = vec3( 1, 2, 3 ).mul( seed ).sin().mul( 100 ).toVar( 'seed3d' );

	var xposition = position.mul( exp( scale.div( 2 ).add( 2 ) ) ).add( seed3d ).toVar( 'xposition' ),
		xnormal = normal.normalize().toVar( 'xnormal' ),
		xtangent = tangent.normalize().mul( EPS ).toVar( 'xtangent' ),
		xbitangent = cross( xnormal, xtangent ).normalize().mul( EPS ).toVar( 'xbitangent' );

	var xdensity = remap( density, 0, 1, 10, 0.5 ).toVar( 'xdensity' );

	xnormal.mulAssign( bump );

	var pos = surfacePos( xposition, xnormal, xdensity ).toVar( 'pos' ),
		posU = surfacePos( xposition.add( xtangent ), xnormal, xdensity ).toVar( 'posU' ),
		posV = surfacePos( xposition.add( xbitangent ), xnormal, xdensity ).toVar( 'posV' );

	return approximateNormal( pos, posU, posV );

} ).setLayout( {
	name: 'concreteRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'normal', type: 'vec3' },
		{ name: 'tangent', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'density', type: 'float' },
		{ name: 'bump', type: 'float' },
		{ name: 'seed', type: 'float' },
	] }
);



function concrete( params={} ) {

	var { position, scale, density, bump, seed } = { ...defaults, ...params };

	return concreteRaw( position, normalLocal, tangentLocal, scale, density, bump, seed );

}



concrete.defaults = defaults;



export { concrete };
