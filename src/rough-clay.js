
//	TSL-Textures: Rough clay



import { cross, exp, Fn, normalLocal, positionGeometry, tangentLocal } from 'three/tsl';
import { approximateNormal, noise, voronoi } from './tsl-utils.js';



var defaults = {
	$name: 'Rough clay',
	$normalNode: true,

	position: positionGeometry,
	scale: 2,
	bump: 0.5,
	curvature: 0.2,

	seed: 0,
};



var surfacePos = Fn( ([ pos, normal, curvature ]) => {

	var k1 = voronoi( pos.add( noise( pos ).mul( curvature ) ) ).add( 0.8 ).pow( 5 ).toVar();
	k1.addAssign( k1.pow( 0.5 ) );
	return pos.add( normal.mul( k1 ) );

} ).setLayout( {
	name: 'surfacePos',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'normal', type: 'vec3' },
		{ name: 'curvature', type: 'float' },
	] }
);



var roughClayRaw = Fn( ([ position, normal, tangent, scale, bump, curvature, seed ]) => {

	const EPS = 0.001;

	var xposition = position.mul( exp( scale.div( 2 ) ) ).add( seed.sin().mul( 10 ) ).toVar( ),
		xnormal = normal.normalize().toVar(),
		xtangent = tangent.normalize().mul( EPS ).toVar(),
		xbitangent = cross( xnormal, xtangent ).normalize().mul( EPS ).toVar();

	xnormal.mulAssign( bump, 1/50 );

	var pos = surfacePos( xposition, xnormal, curvature );
	var posU = surfacePos( xposition.add( xtangent ), xnormal, curvature );
	var posV = surfacePos( xposition.add( xbitangent ), xnormal, curvature );

	return approximateNormal( pos, posU, posV );

} ).setLayout( {
	name: 'concreteRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'normal', type: 'vec3' },
		{ name: 'tangent', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'bump', type: 'float' },
		{ name: 'curvature', type: 'float' },
		{ name: 'seed', type: 'float' },
	] }
);



function roughClay( params={} ) {

	var { position, scale, bump, curvature, seed } = { ...defaults, ...params };

	return roughClayRaw( position, normalLocal, tangentLocal, scale, bump, curvature, seed );

}



roughClay.defaults = defaults;



export { roughClay };
