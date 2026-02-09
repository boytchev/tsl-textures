
//	TSL-Textures: Translator



import { Vector2, Vector3 } from "three";
import { cross, Fn, normalLocal, positionGeometry, tangentLocal } from 'three/tsl';
import { approximateNormal, selectPlanar } from './tsl-utils.js';



var defaults = {
	$name: 'Translator',
	$positionNode: true,
	$selectorPlanar: true,

	distance: new Vector3( -0.5, 0, 0.2 ),

	selectorCenter: new Vector3( 0, 0, 0 ),
	selectorAngles: new Vector2( 0, 0 ),
	selectorWidth: 0.7,

};



var surfacePos = Fn( ([ pos, distance, selectorAngles, selectorCenter, selectorWidth ])=>{

	var zone = selectPlanar( pos, selectorAngles, selectorCenter, selectorWidth );

	return pos.add( distance.mul( zone ) );

} ).setLayout( {
	name: 'surfacePos',
	type: 'vec3',
	inputs: [
		{ name: 'pos', type: 'vec3' },
		{ name: 'distance', type: 'vec3' },
		{ name: 'selectorAngles', type: 'vec2' },
		{ name: 'selectorCenter', type: 'vec3' },
		{ name: 'selectorWidth', type: 'float' },
	]
} );



var translatorRaw = Fn( ([ distance, selectorAngles, selectorCenter, selectorWidth ])=>{

	return surfacePos( positionGeometry, distance, selectorAngles, selectorCenter, selectorWidth );

} ).setLayout( {
	name: 'translatorRaw',
	type: 'vec3',
	inputs: [
		{ name: 'distance', type: 'vec3' },
		{ name: 'selectorAngles', type: 'vec2' },
		{ name: 'selectorCenter', type: 'vec3' },
		{ name: 'selectorWidth', type: 'float' },
	]
} );



var translatorNormalRaw = Fn( ([ distance, selectorAngles, selectorCenter, selectorWidth ])=>{

	var EPS = 0.01;

	var position = positionGeometry,
		normal = normalLocal.normalize().toVar(),
		tangent = tangentLocal.normalize().mul( EPS ).toVar(),
		bitangent = cross( normal, tangent ).normalize().mul( EPS ).toVar();

	var pos = surfacePos( position, distance, selectorAngles, selectorCenter, selectorWidth );
	var posU = surfacePos( position.add( tangent ), distance, selectorAngles, selectorCenter, selectorWidth );
	var posV = surfacePos( position.add( bitangent ), distance, selectorAngles, selectorCenter, selectorWidth );

	return approximateNormal( pos, posU, posV );

} ).setLayout( {
	name: 'translatorNormalRaw',
	type: 'vec3',
	inputs: [
		{ name: 'distance', type: 'vec3' },
		{ name: 'selectorAngles', type: 'vec2' },
		{ name: 'selectorCenter', type: 'vec3' },
		{ name: 'selectorWidth', type: 'float' },
	]
} );



function translator( params={} ) {

	var { distance, selectorAngles, selectorCenter, selectorWidth } = { ...defaults, ...params };

	return translatorRaw( distance, selectorAngles, selectorCenter, selectorWidth );

}



translator.normal = function ( params={} ) {

	var { distance, selectorAngles, selectorCenter, selectorWidth } = { ...defaults, ...params };

	return translatorNormalRaw( distance, selectorAngles, selectorCenter, selectorWidth );

};



translator.defaults = defaults;



export { translator };
