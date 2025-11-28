
// TSL-Textures: Water Drops



import { cos, cross, exp, Fn, normalLocal, positionGeometry, remap, sin, sub, tangentLocal, transformNormalToView, vec3 } from 'three/tsl';
import { convertToNodes, noise, TSLFn } from './tsl-utils.js';



var defaults = {
	$name: 'Water Drops',
	$normalNode: true,

	scale: 1.4,
	density: 0.5,
	bump: 0.6,

	seed: 0,
};



var surfacePos = Fn( ([ pos, normal, bump, density, seed ]) => {

	var k = noise( pos.add( seed ) ).add( density ).clamp( 0, 1 );
	k = cos( k.mul( Math.PI ) ).add( 1 ).pow( 0.5 ).toVar();

	return pos.add( k.mul( normal, bump ) );

} );



var waterDrops = TSLFn( ( params ) => {

	params = convertToNodes( params, defaults );

	var eps = 0.001;

	var position = positionGeometry.mul( exp( params.scale.div( 1 ).add( 1 ) ) ).toVar( ),
		normal = normalLocal.normalize().toVar(),
		tangent = tangentLocal.normalize().mul( eps ).toVar(),
		bitangent = cross( normal, tangent ).normalize().mul( eps ).toVar();

	var density = remap( params.density, 0, 1, 1.5, 0.7 ).toVar();
	var seed = vec3( sin( params.seed ).mul( 100 ), cos( params.seed.div( 2 ) ).mul( 100 ), sin( params.seed.div( 3 ) ).mul( 100 ) ).toVar();

	var pos = surfacePos( position, normal, params.bump, density, seed );

	var posU = surfacePos( position.add( tangent ), normal, params.bump, density, seed );
	var posV = surfacePos( position.add( bitangent ), normal, params.bump, density, seed );

	var dU = sub( posU, pos ),
		dV = sub( posV, pos );

	return transformNormalToView( cross( dU, dV ).normalize() );

}, defaults );



export { waterDrops };
