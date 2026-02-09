
//	TSL-Textures: Scaler



import { Vector2, Vector3 } from "three";
import { cross, Fn, mix, normalLocal, positionGeometry, tangentLocal, vec3 } from 'three/tsl';
import { approximateNormal, selectPlanar } from './tsl-utils.js';



var defaults = {
	$name: 'Scaler',
	$positionNode: true,
	$selectorPlanar: true,

	scales: new Vector3( 0.01, 0.9, 1.7 ),
	center: new Vector3( 0, 0, 0 ),

	selectorCenter: new Vector3( 0, 0, 0 ),
	selectorAngles: new Vector2( 0, 0 ),
	selectorWidth: 2,

};



var surfacePos = Fn( ([ pos, scales, center, selectorAngles, selectorCenter, selectorWidth ])=>{

	var zone = selectPlanar( pos, selectorAngles, selectorCenter, selectorWidth );

	var S = mix( vec3( 1, 1, 1 ), scales, zone );

	return pos.sub( center ).mul( S ).add( center );

} );



var scalerRaw = Fn( ([ scales, center, selectorAngles, selectorCenter, selectorWidth ])=>{

	return surfacePos( positionGeometry, scales, center, selectorAngles, selectorCenter, selectorWidth );

} ).setLayout( {
	name: 'scalerRaw',
	type: 'vec3',
	inputs: [
		{ name: 'scales', type: 'vec3' },
		{ name: 'center', type: 'vec3' },
		{ name: 'selectorAngles', type: 'vec2' },
		{ name: 'selectorCenter', type: 'vec3' },
		{ name: 'selectorWidth', type: 'float' },
	]
} );



var scalerNormalRaw = Fn( ([ scales, center, selectorAngles, selectorCenter, selectorWidth ]) => {

	var EPS = 0.01;

	var position = positionGeometry,
		normal = normalLocal.normalize().toVar(),
		tangent = tangentLocal.normalize().mul( EPS ).toVar(),
		bitangent = cross( normal, tangent ).normalize().mul( EPS ).toVar();

	var pos = surfacePos( position, scales, center, selectorAngles, selectorCenter, selectorWidth );
	var posU = surfacePos( position.add( tangent ), scales, center, selectorAngles, selectorCenter, selectorWidth );
	var posV = surfacePos( position.add( bitangent ), scales, center, selectorAngles, selectorCenter, selectorWidth );

	return approximateNormal( pos, posU, posV );

} ).setLayout( {
	name: 'scalerNormalRaw',
	type: 'vec3',
	inputs: [
		{ name: 'scales', type: 'vec3' },
		{ name: 'center', type: 'vec3' },
		{ name: 'selectorAngles', type: 'vec2' },
		{ name: 'selectorCenter', type: 'vec3' },
		{ name: 'selectorWidth', type: 'float' },
	]
} );



function scaler( params={} ) {

	var { scales, center, selectorAngles, selectorCenter, selectorWidth } = { ...defaults, ...params };

	return scalerRaw( scales, center, selectorAngles, selectorCenter, selectorWidth );

}



scaler.normal = function ( params={} ) {

	var { scales, center, selectorAngles, selectorCenter, selectorWidth } = { ...defaults, ...params };

	return scalerNormalRaw( scales, center, selectorAngles, selectorCenter, selectorWidth );

};



scaler.defaults = defaults;



export { scaler };
