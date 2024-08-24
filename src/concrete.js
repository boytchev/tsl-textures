
// TSL-Textures: Concrete



import { abs, cos, cross, exp, modelNormalMatrix, normalLocal, positionLocal, pow, remap, sin, sub, tangentLocal, tslFn, vec3 } from 'three';
import { noise } from 'tsl-textures/tsl-utils.js';



var surfacePos = tslFn( ([ pos, normal, bump, density, seed ]) => {

	var k = noise( pos.add( seed ) ).mul( 0.5 ).add( 0.5 );
	k = bump.mul( pow( abs( k ), density ) );

	return pos.add( k.mul( normal ) );

} );


var concrete = tslFn( ( params ) => {

	var eps = 0.001;

	var position = positionLocal.mul( exp( params.scale.div( 2 ).add( 2 ) ) ).toVar( ),
		normal = normalLocal.normalize().toVar(),
		tangent = tangentLocal.normalize().mul( eps ).toVar(),
		bitangent = cross( normal, tangent ).normalize().mul( eps ).toVar();

	var density = remap( params.density, 0, 1, 10, 0.5 ).toVar();
	var seed = vec3( sin( params.seed ).mul( 100 ), cos( params.seed.div( 2 ) ).mul( 100 ), sin( params.seed.div( 3 ) ).mul( 100 ) ).toVar();

	var pos = surfacePos( position, normal, params.bump, density, seed );
	var posU = surfacePos( position.add( tangent ), normal, params.bump, density, seed );
	var posV = surfacePos( position.add( bitangent ), normal, params.bump, density, seed );

	var dU = sub( posU, pos ),
		dV = sub( posV, pos );

	return modelNormalMatrix.mul( cross( dU, dV ).normalize() );

} );



concrete.defaults = {
	$name: 'Concrete',
	$normalNode: true,

	scale: 2,
	density: 0.5,
	bump: 0.5,

	seed: 0,
};



export { concrete };
