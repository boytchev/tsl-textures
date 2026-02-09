
//	TSL-Textures: Runny eggs



import { Color } from 'three';
import { cross, exp, Fn, mix, normalLocal, positionGeometry, tangentLocal } from 'three/tsl';
import { approximateNormal, voronoi } from './tsl-utils.js';



var defaults = {
	$name: 'Runny eggs',

	position: positionGeometry,
	scale: 1,

	sizeYolk: 0.2,
	sizeWhite: 0.7,

	colorYolk: new Color( 'orange' ),
	colorWhite: new Color( 'white' ),
	colorBackground: new Color( 'lightgray' ),

	seed: 0,
};



var surfacePos = Fn( ([ pos, normal, sizeYolk, sizeWhite ]) => {

	var n = voronoi( pos ).toVar();
	var whites = n.add( sizeWhite ).pow( 8 ).oneMinus();
	var yolks = n.add( sizeYolk ).pow( 18 ).oneMinus().clamp( 0, 1 );

	var k = mix( 0, mix( 0, 1, yolks ), whites );

	return pos.add( normal.mul( k ) );

} ).setLayout( {
	name: 'surfacePos',
	type: 'vec3',
	inputs: [
		{ name: 'pos', type: 'vec3' },
		{ name: 'normal', type: 'vec3' },
		{ name: 'sizeYolk', type: 'float' },
		{ name: 'sizeWhite', type: 'float' },
	] }
);



var runnyEggsRaw = Fn( ([ position, scale, sizeYolk, sizeWhite, colorYolk, colorWhite, colorBackground, seed ]) => {

	var pos = position.mul( exp( scale ) ).add( seed.sin().mul( 10 ) ).toVar( );

	var n = voronoi( pos ).toVar();
	var whites = n.add( sizeWhite.oneMinus() ).pow( 8 ).oneMinus().clamp( -0.5, 1 );
	var yolks = n.add( sizeYolk.oneMinus() ).pow( 18 ).oneMinus().clamp( 0, 1 ).pow( 0.4 ).clamp( 0, 1 );

	return mix( colorBackground, mix( colorWhite, colorYolk, yolks ), whites );

} ).setLayout( {
	name: 'runnyEggsRaw',
	type: 'vec3',
	inputs: [
		{ name: 'pos', type: 'vec3' },
		{ name: 'normal', type: 'vec3' },
		{ name: 'sizeYolk', type: 'float' },
		{ name: 'sizeWhite', type: 'float' },
		{ name: 'colorYolk', type: 'vec3' },
		{ name: 'colorWhite', type: 'vec3' },
		{ name: 'colorBackground', type: 'vec3' },
		{ name: 'seed', type: 'float' },
	] }
);



var runnyEggsNormalRaw = Fn( ([ position, normal, tangent, scale, sizeYolk, sizeWhite, /*colorYolk, colorWhite, colorBackground,*/ seed ]) => {

	const EPS = 0.001;
	const BUMP = 0.05;

	var xposition = position.mul( exp( scale ) ).add( seed.sin().mul( 10 ) ).toVar( ),
		xnormal = normal.normalize().toVar(),
		xtangent = tangent.normalize().mul( EPS ).toVar(),
		bitangent = cross( xnormal, xtangent ).normalize().mul( EPS ).toVar();

	var xSizeYolk = sizeYolk.oneMinus();
	var xSizeWhite = sizeWhite.oneMinus();

	xnormal.mulAssign( BUMP );

	var pos = surfacePos( xposition, xnormal, xSizeYolk, xSizeWhite );
	var posU = surfacePos( xposition.add( xtangent ), xnormal, xSizeYolk, xSizeWhite );
	var posV = surfacePos( xposition.add( bitangent ), xnormal, xSizeYolk, xSizeWhite );

	return approximateNormal( pos, posU, posV );

} ).setLayout( {
	name: 'runnyEggsNormalRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'normal', type: 'vec3' },
		{ name: 'tangent', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'sizeYolk', type: 'float' },
		{ name: 'sizeWhite', type: 'float' },
		/*{ name: 'colorYolk', type: 'vec3' },*/
		/*{ name: 'colorWhite', type: 'vec3' },*/
		/*{ name: 'colorBackground', type: 'vec3' },*/
		{ name: 'seed', type: 'float' },
	] }
);



var runnyEggsRoughnessRaw = Fn( ([ position, scale, sizeYolk, /*sizeWhite, colorYolk, colorWhite, colorBackground,*/ seed ]) => {

	var pos = position.mul( exp( scale ) ).add( seed.sin().mul( 10 ) ).toVar( );

	var n = voronoi( pos ).toVar();
	var yolks = n.add( sizeYolk.oneMinus() ).pow( 18 ).clamp( 0, 1 );

	return yolks;

} ).setLayout( {
	name: 'runnyEggsRoughnessRaw',
	type: 'float',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'sizeYolk', type: 'float' },
		/*{ name: 'sizeWhite', type: 'float' },*/
		/*{ name: 'colorYolk', type: 'vec3' },*/
		/*{ name: 'colorWhite', type: 'vec3' },*/
		/*{ name: 'colorBackground', type: 'vec3' },*/
		{ name: 'seed', type: 'float' },
	] }
);



function runnyEggs( params={} ) {

	var { position, scale, sizeYolk, sizeWhite, colorYolk, colorWhite, colorBackground, seed } = { ...defaults, ...params };

	return runnyEggsRaw( position, scale, sizeYolk, sizeWhite, colorYolk, colorWhite, colorBackground, seed );

}



runnyEggs.normal = function ( params={} ) {

	var { position, scale, sizeYolk, sizeWhite, /*colorYolk, colorWhite, colorBackground,*/ seed } = { ...defaults, ...params };

	return runnyEggsNormalRaw( position, normalLocal, tangentLocal, scale, sizeYolk, sizeWhite, /*colorYolk, colorWhite, colorBackground,*/ seed );

};



runnyEggs.roughness = function ( params={} ) {

	var { position, scale, sizeYolk, /*sizeWhite, colorYolk, colorWhite, colorBackground,*/ seed } = { ...defaults, ...params };

	return runnyEggsRoughnessRaw( position, scale, sizeYolk, /*sizeWhite, colorYolk, colorWhite, colorBackground,*/ seed );

};



runnyEggs.defaults = defaults;



export { runnyEggs };
