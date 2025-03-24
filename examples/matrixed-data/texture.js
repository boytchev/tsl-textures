
// TSL-Textures: Example of matrixed data



import { cross, float, Fn, If, mat3, normalLocal, positionGeometry, select, tangentLocal, transformNormalToView, vec3 } from 'three/tsl';
import { noise } from 'tsl-textures';




// calculate the bumpness of a surface point

var bumpness = Fn( ([ pos, density ]) => {

	return noise( pos, 0.5, 0.5 ).abs().pow( density );

} );



// calculate the position of a surface point based on bumpness

var surfacePos = Fn( ([ pos, density ]) => {

	return pos.add( bumpness( pos, density ).mul( normalLocal ) );

} );



// calculate color, opacity, normal and roughness in a matrix

var sandbox = Fn( ( params ) => {

	// calculate position, tangent and bitangent

	var position = positionGeometry.mul( params.scale ).toVar( ),
		tangent = tangentLocal.normalize().mul( 0.01 ).toVar(),
		bitangent = cross( normalLocal, tangent ).normalize().mul( 0.01 ).toVar();

	// calculate the actual normal considering the bumpness

	var pos = surfacePos( position, params.density ),
		dU = surfacePos( position.add( tangent ), params.density ).sub( pos ),
		dV = surfacePos( position.add( bitangent ), params.density ).sub( pos );

	var normal = transformNormalToView( cross( dU, dV ) );

	// pattern is shaped as stripes, calculate the stripe number

	var stripe = bumpness( position, params.density ).mul( 50 ).toVar();

	var roughness = select( stripe.greaterThanEqual( 1.5 ), 0.2, 0.4 );

	var opacity = float( 1 ).toVar();

	var color = vec3( 0 ).toVar();

	If( stripe.greaterThanEqual( 1.5 ), ()=>{

		// the red woodish color
		color.assign( vec3( noise( position.mul( vec3( 1, 30, 1 ) ) ).abs().pow( 0.7 ), 0, 0 ) );

	} )
		.ElseIf( stripe.lessThanEqual( 0.7 ), ()=>{

			// the white transparent color
			color.assign( vec3( 1 ) );
			opacity.assign( select(
				stripe.sin().greaterThan( 0.2 ),
				0,
				select(
					stripe.sin().greaterThan( 0.18 ), 1, 0.1 )
			) );

		} );

	// pack color, normal, roughness and opacity

	return mat3(
		color,
		normal,
		vec3( roughness, opacity, 0 )
	);

} );



export { sandbox };
