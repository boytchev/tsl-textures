
//	TSL-Textures: Rotator



import { Vector2, Vector3 } from "three";
import { cross, Fn, normalLocal, positionGeometry, tangentLocal } from 'three/tsl';
import { approximateNormal, rotatePivot, selectPlanar, } from './tsl-utils.js';



var defaults = {
	$name: 'Rotator',
	$positionNode: true,
	$selectorPlanar: true,

	angles: new Vector3( -0.2, 0.7, 0 ),
	center: new Vector3( 0, 0, 0 ),

	selectorCenter: new Vector3( 0, 0, 0 ),
	selectorAngles: new Vector2( 0, 0 ),
	selectorWidth: 2,

};



var surfacePos = Fn( ([ pos, angles, center, selectorAngles, selectorCenter, selectorWidth ])=>{

	var zone = selectPlanar( pos, selectorAngles, selectorCenter, selectorWidth );

	return rotatePivot( pos, center, angles.mul( zone ) );

} ).setLayout( {
	name: 'surfacePos',
	type: 'vec3',
	inputs: [
		{ name: 'pos', type: 'vec3' },
		{ name: 'angles', type: 'vec3' },
		{ name: 'center', type: 'vec3' },
		{ name: 'selectorAngles', type: 'vec2' },
		{ name: 'selectorCenter', type: 'vec3' },
		{ name: 'selectorWidth', type: 'float' },
	]
} );



var rotatorRaw = Fn( ([ angles, center, selectorAngles, selectorCenter, selectorWidth ])=>{

	return surfacePos( positionGeometry, angles, center, selectorAngles, selectorCenter, selectorWidth );

} ).setLayout( {
	name: 'rotatorRaw',
	type: 'vec3',
	inputs: [
		{ name: 'angles', type: 'vec3' },
		{ name: 'center', type: 'vec3' },
		{ name: 'selectorAngles', type: 'vec2' },
		{ name: 'selectorCenter', type: 'vec3' },
		{ name: 'selectorWidth', type: 'float' },
	]
} );



var rotatorNormalRaw = Fn( ([ angles, center, selectorAngles, selectorCenter, selectorWidth ]) => {

	const EPS = 0.01;

	var position = positionGeometry,
		normal = normalLocal.normalize().toVar(),
		tangent = tangentLocal.normalize().mul( EPS ).toVar(),
		bitangent = cross( normal, tangent ).normalize().mul( EPS ).toVar();

	var pos = surfacePos( position, angles, center, selectorAngles, selectorCenter, selectorWidth );
	var posU = surfacePos( position.add( tangent ), angles, center, selectorAngles, selectorCenter, selectorWidth );
	var posV = surfacePos( position.add( bitangent ), angles, center, selectorAngles, selectorCenter, selectorWidth );

	return approximateNormal( pos, posU, posV );

} ).setLayout( {
	name: 'rotatorNormalRaw',
	type: 'vec3',
	inputs: [
		{ name: 'angles', type: 'vec3' },
		{ name: 'center', type: 'vec3' },
		{ name: 'selectorAngles', type: 'vec2' },
		{ name: 'selectorCenter', type: 'vec3' },
		{ name: 'selectorWidth', type: 'float' },
	]
} );



function rotator( params={} ) {

	var { angles, center, selectorAngles, selectorCenter, selectorWidth } = { ...defaults, ...params };

	return rotatorRaw( angles, center, selectorAngles, selectorCenter, selectorWidth );

}



rotator.normal = function ( params={} ) {

	var { angles, center, selectorAngles, selectorCenter, selectorWidth } = { ...defaults, ...params };

	return rotatorNormalRaw( angles, center, selectorAngles, selectorCenter, selectorWidth );

};



rotator.defaults = defaults;



export { rotator };
