import * as THREE from "three";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { Fn, positionGeometry, uniform, vec2, vec3, vec4 } from "three/tsl";
import { matRotYXZ, matTrans } from "tsl-textures";


console.clear( );



// general initialization of the scene, nothing fancy

var scene = new THREE.Scene();
scene.background = new THREE.Color( 'gainsboro' );

var camera = new THREE.PerspectiveCamera( 30, innerWidth/innerHeight );
camera.position.set( 0, 0, 3.5 );
camera.lookAt( scene.position );

var renderer = new THREE.WebGPURenderer( { antialias: true } );
renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
renderer.setSize( innerWidth, innerHeight );
document.body.appendChild( renderer.domElement );

window.addEventListener( "resize", ( /*event*/ ) => {

	camera.aspect = innerWidth/innerHeight;
	camera.updateProjectionMatrix( );
	renderer.setSize( innerWidth, innerHeight );

} );

var ambientLight = new THREE.AmbientLight( 'white', 2 );
scene.add( ambientLight );

var light = new THREE.DirectionalLight( 'white', 1 );
light.position.set( 0, 0, 1 );
scene.add( light );

var backLight = new THREE.DirectionalLight( 'white', 1 );
backLight.position.set( 0, 0, -1 );
scene.add( backLight );



// load the model and hook its vertices and emission to TSL functions

new GLTFLoader().load( 'mc-powerful-deep-chestnut-bougainvillea-t-pose.glb', ( loadedModel )=> {

	var model = loadedModel.scene;

	// center the model
	var center = new THREE.Vector3();
	new THREE.Box3().setFromObject( model, true ).getCenter( center );
	model.position.sub( center );

	// attach shape shaders
	var material = new THREE.MeshStandardNodeMaterial( {
		color: 'royalblue',
		metalness: 0.2,
		roughness: 0.4,
		positionNode: moveBody( posture ),
		emissiveNode: dotPattern( ),
	} );

	model.traverse( ( child )=>{

		if ( child.isMesh ) child.material = material;

	} );

	scene.add( model );

} ); // GLTFLoader



// a posture for the model, uniforms are the joints' angles

var posture = {

	chestPos: vec3( 0, 110, 0 ),
	chestSpan: vec2( 90, 120 ),
	chestTurn: uniform( vec3( 0, 0, 0 ) ),

	neckPos: vec3( 0, 130, 0 ),
	neckSpan: vec2( 128, 140 ),
	neckTurn: uniform( vec3( 0, 0, 0 ) ),

	waistPos: vec3( 0, 80, 0 ),
	waistSpan: vec2( 70, 120 ),
	waistTurn: uniform( vec3( 0, 0, 0 ) ),

	kneeLeftPos: vec3( 0, 45.5, 0 ),
	kneeLeftSpan: vec2( 53, 38 ),
	kneeLeftTurn: uniform( vec3( 0, 0, 0 ) ),

	kneeRightPos: vec3( 0, 45.5, 0 ),
	kneeRightSpan: vec2( 53, 38 ),
	kneeRightTurn: uniform( vec3( 0, 0, 0 ) ),

	ankleLeftPos: vec3( 8.5, 9, -5 ),
	ankleLeftSpan: vec2( 15, 5 ),
	ankleLeftTurn: uniform( vec3( 0, 0, 0 ) ),

	ankleRightPos: vec3( -8.5, 9, -5 ),
	ankleRightSpan: vec2( 15, 5 ),
	ankleRightTurn: uniform( vec3( 0, 0, 0 ) ),

	legLeftPos: vec3( 7, 85, -5 ),
	legLeftSpan: vec2( 100, 50 ),
	legLeftTurn: uniform( vec3( 0, 0, 0 ) ),

	legRightPos: vec3( -7, 85, -5 ),
	legRightSpan: vec2( 100, 50 ),
	legRightTurn: uniform( vec3( 0, 0, 0 ) ),
};



var selectWaist = Fn( ( { waistSpan } )=>{

	return positionGeometry.y.smoothstep( waistSpan.x, waistSpan.y );

} ); // no .setLayout!



var selectNeck = Fn( ( { neckSpan } )=>{

	return positionGeometry.y.smoothstep( neckSpan.x, neckSpan.y );

} ); // no .setLayout!



var selectChest = Fn( ( { chestSpan } )=>{

	return positionGeometry.y.smoothstep( chestSpan.x, chestSpan.y );

} ); // no .setLayout!



var selectLeft = Fn( ( )=>{

	return positionGeometry.x.smoothstep( -2, 2 );

} ); // no .setLayout!



var selectRight = Fn( ( )=>{

	return positionGeometry.x.smoothstep( 2, -2 );

} ); // no .setLayout!



var selectKneeLeft = Fn( ( { kneeLeftSpan } )=>{

	return positionGeometry.y.smoothstep( kneeLeftSpan.x, kneeLeftSpan.y )
		.mul( selectLeft() );

} ); // no .setLayout!



var selectKneeRight = Fn( ( { kneeRightSpan } )=>{

	return positionGeometry.y.smoothstep( kneeRightSpan.x, kneeRightSpan.y )
		.mul( selectRight() );

} ); // no .setLayout!



var selectAnkleLeft = Fn( ( { ankleLeftSpan } )=>{

	return positionGeometry.y.smoothstep( ankleLeftSpan.x, ankleLeftSpan.y )
		.mul( selectLeft() );

} ); // no .setLayout!



var selectAnkleRight = Fn( ( { ankleRightSpan } )=>{

	return positionGeometry.y.smoothstep( ankleRightSpan.x, ankleRightSpan.y )
		.mul( selectRight() );

} ); // no .setLayout!



var selectLegLeft = Fn( ( { legLeftSpan } )=>{

	return positionGeometry.y.sub( positionGeometry.x.div( 2 ) ).smoothstep( legLeftSpan.x, legLeftSpan.y )
		.mul( positionGeometry.y.smoothstep( legLeftSpan.x, legLeftSpan.y ) )
		.mul( selectLeft() );

} ); // no .setLayout!



var selectLegRight = Fn( ( { legRightSpan } )=>{

	return positionGeometry.y.add( positionGeometry.x.div( 2 ) ).smoothstep( legRightSpan.x, legRightSpan.y )
		.mul( positionGeometry.y.smoothstep( legRightSpan.x, legRightSpan.y ) )
		.mul( selectRight() );

} ); // no .setLayout!



var jointRotateMat= Fn( ([ center, angle, amount ])=>{

	var pivot = vec4( center, 0 ),
		R = matRotYXZ( angle.mul( amount ) ),
		T = matTrans( pivot ),
		TN = matTrans( pivot.negate() );

	return T.mul( R ).mul( TN );

} );



jointRotateMat.setLayout( {
	name: 'jointRotateMat',
	type: 'mat4',
	inputs: [
		{ name: 'center', type: 'vec3' },
		{ name: 'angle', type: 'vec3' },
		{ name: 'amount', type: 'float' },
	]
} );



var moveBody = Fn( ( posture )=>{

	var p = vec4( positionGeometry, 1 ).toVar();

	// neck
	p.assign( jointRotateMat( posture.neckPos, posture.neckTurn, selectNeck( posture ) ).mul( p ) );

	// chest
	p.assign( jointRotateMat( posture.chestPos, posture.chestTurn, selectChest( posture ) ).mul( p ) );

	// waist
	p.assign( jointRotateMat( posture.waistPos, posture.waistTurn, selectWaist( posture ) ).mul( p ) );

	// left ankle
	p.assign( jointRotateMat( posture.ankleLeftPos, posture.ankleLeftTurn, selectAnkleLeft( posture ) ).mul( p ) );

	// right ankle
	p.assign( jointRotateMat( posture.ankleRightPos, posture.ankleRightTurn, selectAnkleRight( posture ) ).mul( p ) );

	// left knee
	p.assign( jointRotateMat( posture.kneeLeftPos, posture.kneeLeftTurn, selectKneeLeft( posture ) ).mul( p ) );

	// right knee
	p.assign( jointRotateMat( posture.kneeRightPos, posture.kneeRightTurn, selectKneeRight( posture ) ).mul( p ) );

	// left leg
	p.assign( jointRotateMat( posture.legLeftPos, posture.legLeftTurn, selectLegLeft( posture ) ).mul( p ) );

	// right leg
	p.assign( jointRotateMat( posture.legRightPos, posture.legRightTurn, selectLegRight( posture ) ).mul( p ) );

	return p.xyz;

} );



var dotPattern = Fn( ()=>{

	var x = positionGeometry.x.div( 1.5 ).sin().abs().add( -0.1 ),
		y = positionGeometry.y.div( 1.5 ).sin().abs().add( -0.1 );

	return vec3( x.mul( y ).smoothstep( 0.6, 0.7 ) );

} );



function rigModel( time ) {

	posture.waistTurn.value.set(
		Math.sin( time )/3+0.2,
		Math.cos( time*1.2 )/3,
		Math.sin( time*3 )/2.5
	);

	posture.chestTurn.value.set(
		Math.cos( time*3 )/3,
		Math.sin( time*1.2*2 )/2,
		Math.cos( time*3*1.5 )/3
	);

	posture.neckTurn.value.set(
		Math.cos( time*3 )/2,
		Math.sin( time*1.2*2 )/2,
		Math.cos( time*3*1.5 )/3
	);

	posture.kneeLeftTurn.value.set(
		( Math.cos( time*3 )+1 )/1.5,
		0,
		0,
	);

	posture.kneeRightTurn.value.set(
		( Math.sin( time*2.4 )+1 )/1.5,
		0,
		0,
	);

	posture.ankleLeftTurn.value.set(
		Math.cos( time*3 )/2,
		Math.cos( time*2.8 )/2,
		Math.cos( time*2.2 )/4,
	);

	posture.ankleRightTurn.value.set(
		Math.sin( time*3.2 )/2,
		Math.cos( time*2.3 )/2,
		Math.sin( time*2.1 )/4,
	);


	posture.legLeftTurn.value.set(
		Math.cos( time*3 )/2-0.15,
		0*Math.cos( time*2.8 )/4,
		( Math.cos( time*2.2 )+1 )/4,
	);

	posture.legRightTurn.value.set(
		Math.sin( time*2.2 )/2-0.15,
		0*Math.sin( time*3.2 )/4,
		-( Math.sin( time*2.6 )+1 )/4,
	);

}



function animationLoop( t ) {

	t = t-1000;
	if ( t<0 ) t = t/10;
	t = t*1.043+300;

	rigModel( t/1000+Math.sin( t/500 )**4/2 );
	scene.rotation.set( Math.sin( t/700 )/4, t/1200, Math.cos( t/900 )/4 );

	renderer.render( scene, camera );

}


renderer.setAnimationLoop( animationLoop );
