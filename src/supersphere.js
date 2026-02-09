
//	TSL-Textures: Supersphere



import { cross, float, Fn, normalLocal, positionGeometry, tangentLocal } from 'three/tsl';
import { approximateNormal } from './tsl-utils.js';



var defaults = {
	$name: 'Supersphere',
	$positionNode: true,

	exponent: 3,

};



var surfacePos = Fn( ([ pos, exponent ])=>{

	var xexponent = float( 2 ).pow( exponent );
	var equPos = pos.div( pos.length() ).toVar();
	var equPos2 = equPos.abs().pow( xexponent ).toVar();

	var p = equPos2.x
		.add( equPos2.y )
		.add( equPos2.z )
		.pow( xexponent.reciprocal( ) );

	return equPos.div( p );

} ).setLayout( {
	name: 'surfacePos',
	type: 'vec3',
	inputs: [
		{ name: 'pos', type: 'vec3' },
		{ name: 'exponent', type: 'float' },
	]
} );



var supersphereRaw = Fn( ([ exponent ])=>{

	return surfacePos( positionGeometry, exponent );

} ).setLayout( {
	name: 'supersphereRaw',
	type: 'vec3',
	inputs: [
		{ name: 'exponent', type: 'float' },
	]
} );



var supersphereNormalRaw = Fn( ([ exponent ]) => {

	const EPS = 0.01;

	var position = positionGeometry,
		normal = normalLocal.normalize().toVar(),
		tangent = tangentLocal.normalize().mul( EPS ).toVar(),
		bitangent = cross( normal, tangent ).normalize().mul( EPS ).toVar();

	var pos = surfacePos( position, exponent );
	var posU = surfacePos( position.add( tangent ), exponent );
	var posV = surfacePos( position.add( bitangent ), exponent );

	return approximateNormal( pos, posU, posV );

} ).setLayout( {
	name: 'supersphereRaw',
	type: 'vec3',
	inputs: [
		{ name: 'exponent', type: 'float' },
	]
} );



function supersphere( params={} ) {

	var { exponent } = { ...defaults, ...params };

	return supersphereRaw( exponent );

}



supersphere.normal = function ( params={} ) {

	var { exponent } = { ...defaults, ...params };

	return supersphereNormalRaw( exponent );

};



supersphere.defaults = defaults;



export { supersphere };
