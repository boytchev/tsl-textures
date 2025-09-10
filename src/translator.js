
//	TSL-Textures: Translator



import { Vector2, Vector3 } from "three";
import { cross, Fn, normalLocal, positionGeometry, sub, tangentLocal, transformNormalToView, vec4 } from 'three/tsl';
import { matTrans, prepare, selectPlanar, TSLFn } from './tsl-utils.js';



var defaults = {
	$name: 'Translator',
	$positionNode: true,
	$selectorPlanar: true,

	distance: new Vector3( -0.5, 0, 0.2 ),

	selectorCenter: new Vector3( 0, 0, 0 ),
	selectorAngles: new Vector2( 0, 0 ),
	selectorWidth: 0.7,

};



var surfacePos = Fn( ([ pos, params ])=>{

	var zone = selectPlanar( pos, params.selectorAngles, params.selectorCenter, params.selectorWidth );

	var T = matTrans( params.distance.mul( zone ) );

	return T.mul( vec4( pos, 1 ) ).xyz;

} );



var translator = TSLFn( ( params )=>{

	params = prepare( params, defaults );

	return surfacePos( positionGeometry, params );

}, defaults );



translator.normal = TSLFn( ( params ) => {

	params = prepare( params, defaults );

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

}, defaults );



export { translator };
