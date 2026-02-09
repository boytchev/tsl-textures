
//	TSL-Textures: Melter



import { Vector2, Vector3 } from "three";
import { cross, float, Fn, normalLocal, positionGeometry, sub, tangentLocal, transformNormalToView, vec4 } from 'three/tsl';
import { matTrans, noise, prepare } from './tsl-utils.js';



var surfacePos = Fn( ([ pos, params ])=>{

	var zone = float( 1 ).toVar();
	var n = noise( pos.mul( 2 ) ).add( 1 ).div( 2 ); // noise factor
	var k = params.distance.normalize().dot( normalLocal.normalize() ).max( 0 ).pow( 10 );


	var T = matTrans( params.distance.mul( zone ).mul( n ).mul( k ).pow( 0.1 ) );

	return T.mul( vec4( pos, 1 ) ).xyz;

} );



var melter = Fn( ( params )=>{

	params = prepare( { ...melter.defaults, ...params } );

	return surfacePos( positionGeometry, params );

} );



melter.normal = Fn( ( params ) => {

	params = prepare( { ...melter.defaults, ...params } );

	var eps = 0.01;

	var position = positionGeometry,
		normal = normalLocal.normalize().toVar(),
		tangent = tangentLocal.normalize().mul( eps ).toVar(),
		bitangent = cross( normal, tangent ).normalize().mul( eps ).toVar();

	var pos = surfacePos( position, params );
	var posU = surfacePos( position.add( tangent ), params );
	var posV = surfacePos( position.add( bitangent ), params );

	var dU = sub( posU, pos ),
		dV = sub( posV, pos );

	return transformNormalToView( cross( dU, dV ).normalize() );

} );



melter.defaults = {
	$name: 'Melter',
	$positionNode: true,
	$selectorPlanar: true,

	distance: new Vector3( 0, -0.5, 0 ),

	selectorCenter: new Vector3( 0, 0, 0 ),
	selectorAngles: new Vector2( 0, 0 ),
	selectorWidth: 1.7,

};



export { melter };
