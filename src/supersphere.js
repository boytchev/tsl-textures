
//	TSL-Textures: Supersphere



import { cross, float, Fn, normalLocal, positionGeometry, sub, tangentLocal, transformNormalToView } from 'three/tsl';
import { convertToNodes, TSLFn } from './tsl-utils.js';



var defaults = {
	$name: 'Supersphere',
	$positionNode: true,

	exponent: 3,

};



var surfacePos = Fn( ([ pos, params ])=>{

	var exponent = float( 2 ).pow( params.exponent );
	var equPos = pos.div( pos.length() ).toVar();

	var p = equPos.x.abs().pow( exponent )
		.add( equPos.y.abs().pow( exponent ) )
		.add( equPos.z.abs().pow( exponent ) )
		.pow( float( 1 ).div( exponent ) );

	return equPos.div( p );

} );



var supersphere = TSLFn( ( params )=>{

	params = convertToNodes( params, defaults );

	return surfacePos( positionGeometry, params );

}, defaults );



supersphere.normal = TSLFn( ( params ) => {

	params = convertToNodes( params, defaults );

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



export { supersphere };
