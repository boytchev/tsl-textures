
//	TSL-Textures: Rough clay



import { cross, exp, Fn, mx_worley_noise_float, normalLocal, positionGeometry, sub, tangentLocal, transformNormalToView } from 'three/tsl';
import { noise, prepare, TSLFn } from './tsl-utils.js';



var defaults = {
	$name: 'Rough clay',
	$normalNode: true,

	scale: 2,
	bump: 0.5,
	curvature: 0.2,

	seed: 0,
};



var surfacePos = Fn( ([ pos, normal, bump, curvature ]) => {

	var k1 = mx_worley_noise_float( pos.add( noise( pos ).mul( curvature ) ) ).add( 0.8 ).pow( 5 ).toVar();
	k1.addAssign( k1.pow( 0.5 ) );
	//k1.addAssign( noise(pos.mul(noiseScale.add(8))).add(1).pow(2).mul(noiseBump) );
	return pos.add( normal.mul( k1 ).mul( bump ) );

} );



var roughClay = TSLFn( ( params ) => {

	params = prepare( params, defaults );

	var eps = 0.001;

	var bump = params.bump.div( 50 ).toVar();

	var position = positionGeometry.mul( exp( params.scale.div( 2 ) ) ).add( params.seed.sin().mul( 10 ) ).toVar( ),
		normal = normalLocal.normalize().toVar(),
		tangent = tangentLocal.normalize().mul( eps ).toVar(),
		bitangent = cross( normal, tangent ).normalize().mul( eps ).toVar();

	var pos = surfacePos( position, normal, bump, params.curvature );
	var posU = surfacePos( position.add( tangent ), normal, bump, params.curvature );
	var posV = surfacePos( position.add( bitangent ), normal, bump, params.curvature );

	var dU = sub( posU, pos ),
		dV = sub( posV, pos );

	return transformNormalToView( cross( dU, dV ).normalize() );


}, defaults );



export { roughClay };
