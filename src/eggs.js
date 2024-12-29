
//	TSL-Textures: Eggs



import { Color } from 'three';
import { cross, exp, Fn, mix, mx_worley_noise_float, normalLocal, positionGeometry, sub, tangentLocal, transformNormalToView } from 'three/tsl';



var eggs = Fn( ( params ) => {

	var pos = positionGeometry.mul( exp( params.scale.div( 1 ) ) ).add( params.seed.sin().mul( 10 ) ).toVar( );

	var sizeYolk = params.sizeYolk.oneMinus();
	var sizeWhite = params.sizeWhite.oneMinus();

	var n = mx_worley_noise_float( pos ).toVar();
	var whites = n.add( sizeWhite ).pow( 8 ).oneMinus().clamp( -0.5, 1 );
	var yolks = n.add( sizeYolk ).pow( 18 ).oneMinus().clamp( 0, 1 ).pow( 0.4 ).clamp( 0, 1 );

	return mix( params.colorBackground, mix( params.colorWhite, params.colorYolk, yolks ), whites );

} );


var surfacePos = Fn( ([ pos, normal, bump, sizeYolk, sizeWhite ]) => {

	var n = mx_worley_noise_float( pos ).toVar();
	var whites = n.add( sizeWhite ).pow( 8 ).oneMinus();
	var yolks = n.add( sizeYolk ).pow( 18 ).oneMinus().clamp( 0, 1 );

	var k = mix( 0, mix( 0, 1, yolks ), whites );

	return pos.add( normal.mul( k ).mul( bump ) );

} );


eggs.normal = Fn( ( params ) => {

	var eps = 0.001;
	var bump = 0.05;

	var position = positionGeometry.mul( exp( params.scale.div( 1 ) ) ).add( params.seed.sin().mul( 10 ) ).toVar( ),
		normal = normalLocal.normalize().toVar(),
		tangent = tangentLocal.normalize().mul( eps ).toVar(),
		bitangent = cross( normal, tangent ).normalize().mul( eps ).toVar();

	var sizeYolk = params.sizeYolk.oneMinus();
	var sizeWhite = params.sizeWhite.oneMinus();

	var pos = surfacePos( position, normal, bump, sizeYolk, sizeWhite );
	var posU = surfacePos( position.add( tangent ), normal, bump, sizeYolk, sizeWhite );
	var posV = surfacePos( position.add( bitangent ), normal, bump, sizeYolk, sizeWhite );

	var dU = sub( posU, pos ),
		dV = sub( posV, pos );

	return transformNormalToView( cross( dU, dV ).normalize() );

} );


eggs.roughness = Fn( ( params ) => {

	var pos = positionGeometry.mul( exp( params.scale.div( 1 ) ) ).add( params.seed.sin().mul( 10 ) ).toVar( );

	var sizeYolk = params.sizeYolk.oneMinus();

	var n = mx_worley_noise_float( pos ).toVar();
	var yolks = n.add( sizeYolk ).pow( 18 ).clamp( 0, 1 );

	return yolks;

} );


eggs.defaults = {
	$name: 'Eggs',

	scale: 1,

	sizeYolk: 0.2,
	sizeWhite: 0.7,

	colorYolk: new Color( 'orange' ),
	colorWhite: new Color( 'white' ),
	colorBackground: new Color( 'lightgray' ),

	seed: 0,
};



export { eggs };
