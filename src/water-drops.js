
// TSL-Textures: Water Drops



import { cos, cross, exp, Fn, normalLocal, positionGeometry, remap, tangentLocal, vec3 } from 'three/tsl';
import { approximateNormal, noise } from './tsl-utils.js';



var defaults = {
	$name: 'Water Drops',
	$normalNode: true,

	position: positionGeometry,

	scale: 1.4,
	density: 0.5,
	bump: 0.6,

	seed: 0,
};



var surfacePos = Fn( ([ pos, normal, density ]) => {

	var k = noise( pos, 1, density ).clamp( 0, 1 );
	k = cos( k.mul( Math.PI ) ).add( 1 ).pow( 0.5 ).toVar();

	return pos.add( normal.mul( k ) );

} ).setLayout( {
	name: 'surfacePos',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'normal', type: 'vec3' },
		{ name: 'density', type: 'float' },
	] }
);



var waterDropsRaw = Fn( ([ position, normal, tangent, scale, density, bump, seed ]) => {

	var EPS = 0.001;

	var seed3d = vec3( 1, 2, 3 ).mul( seed ).sin().mul( 100 ).toVar( );

	var xposition = position.mul( exp( scale.div( 1 ).add( 1 ) ) ).add( seed3d ).toVar( ),
		xnormal = normal.normalize().toVar(),
		xtangent = tangent.normalize().mul( EPS ).toVar(),
		xbitangent = cross( xnormal, xtangent ).normalize().mul( EPS ).toVar();

	var xdensity = remap( density, 0, 1, 1.5, 0.7 ).toVar();

	xnormal.mulAssign( bump );

	var pos = surfacePos( xposition, xnormal, xdensity ),
		posU = surfacePos( xposition.add( xtangent ), xnormal, xdensity ),
		posV = surfacePos( xposition.add( xbitangent ), xnormal, xdensity );

	return approximateNormal( pos, posU, posV );

} ).setLayout( {
	name: 'waterDropsRaw',
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



function waterDrops( params={} ) {

	var { position, scale, density, bump, seed } = { ...defaults, ...params };

	return waterDropsRaw( position, normalLocal, tangentLocal, scale, density, bump, seed );

}



waterDrops.defaults = defaults;



export { waterDrops };
