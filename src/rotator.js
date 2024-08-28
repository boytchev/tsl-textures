
//	TSL-Textures: Rotator



import { Vector2, Vector3 } from "three";
import { cross, modelNormalMatrix, normalLocal, positionLocal, sub, tangentLocal, tslFn, vec4 } from 'three';
import { matRotYXZ, matTrans, selectPlanar } from 'tsl-textures/tsl-utils.js';



var surfacePos = tslFn( ([ pos, params ])=>{

	var zone = selectPlanar( pos, params.selectorAngles, params.selectorCenter, params.selectorWidth );

	var R = matRotYXZ( params.angles.mul( zone ) ),
		T = matTrans( params.center ),
		TN = matTrans( params.center.negate() );

	return T.mul( R ).mul( TN ).mul( vec4( pos, 1 ) ).xyz;

} );



var rotator = tslFn( ( params )=>{

	return surfacePos( positionLocal, params );

} );



rotator.normal = tslFn( ( params ) => {

	var eps = 0.01;

	var position = positionLocal,
		normal = normalLocal.normalize().toVar(),
		tangent = tangentLocal.normalize().mul( eps ).toVar(),
		bitangent = cross( normal, tangent ).normalize().mul( eps ).toVar();

	var pos = surfacePos( position, params );
	var posU = surfacePos( position.add( tangent ), params );
	var posV = surfacePos( position.add( bitangent ), params );

	var dU = sub( posU, pos ),
		dV = sub( posV, pos );

	return modelNormalMatrix.mul( cross( dU, dV ).normalize() );

} );



rotator.defaults = {
	$name: 'Rotator',
	$positionNode: true,
	$selectorPlanar: true,

	angles: new Vector3( 0.4, -0.6, 0 ),
	center: new Vector3( 0, 0, 0 ),

	selectorCenter: new Vector3( 0, 0, 0 ),
	selectorAngles: new Vector2( 0, 0 ),
	selectorWidth: 2,

};



export { rotator };
