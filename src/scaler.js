
//	TSL-Textures: Scaler



import { Vector2, Vector3 } from "three";
import { cross, Fn, mix, normalLocal, positionGeometry, sub, tangentLocal, transformNormalToView, vec3, vec4 } from 'three/tsl';
import { matScale, matTrans, prepare, selectPlanar } from './tsl-utils.js';



var surfacePos = Fn( ([ pos, params ])=>{

	var zone = selectPlanar( pos, params.selectorAngles, params.selectorCenter, params.selectorWidth );

	var S = matScale( mix( vec3( 1, 1, 1 ), params.scales, zone ) ),
		T = matTrans( params.center ),
		TN = matTrans( params.center.negate() );

	return T.mul( S ).mul( TN ).mul( vec4( pos, 1 ) ).xyz;

} );



var scaler = Fn( ( params )=>{

	params = prepare( { ...scaler.defaults, ...params } );

	return surfacePos( positionGeometry, params );

} );



scaler.normal = Fn( ( params ) => {

	params = prepare( { ...scaler.defaults, ...params } );

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



scaler.defaults = {
	$name: 'Scaler',
	$positionNode: true,
	$selectorPlanar: true,

	scales: new Vector3( 0.01, 0.9, 1.7 ),
	center: new Vector3( 0, 0, 0 ),

	selectorCenter: new Vector3( 0, 0, 0 ),
	selectorAngles: new Vector2( 0, 0 ),
	selectorWidth: 2,

};



export { scaler };
