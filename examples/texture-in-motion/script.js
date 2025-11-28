import * as THREE from "three";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";

import { Fn, If, mix, positionLocal, positionWorld, uniform, vec3 } from 'three/tsl';

import { camouflage, dalmatianSpots, dysonSphere, hideFallbackWarning, noise, planet, showFallbackWarning } from "tsl-textures";


// general setup

console.clear( );

showFallbackWarning( );


var scene = new THREE.Scene();
scene.background = new THREE.Color( 'black' );


var camera = new THREE.PerspectiveCamera( 30, innerWidth / innerHeight );
camera.position.set( 0, 1.5, 5 );
camera.lookAt( 0, 0.75, 0 );


var renderer = new THREE.WebGPURenderer( { antialias: true } );
renderer.setSize( innerWidth, innerHeight );
renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild( renderer.domElement );


window.addEventListener( "resize", ( /*event*/ ) => {

	camera.aspect = innerWidth / innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( innerWidth, innerHeight );

} );




// lights

var light = new THREE.SpotLight( 'white', 30 );
light.target = new THREE.Object3D();
light.position.set( 2, 2.5, 2 );
light.target.position.set( 0, 1, 0 );
light.castShadow = true;
light.angle = 0.5;
light.penumbra = 1;

light.shadow.camera.near = 2;
light.shadow.camera.far = 15;
light.shadow.focus = 1.3;
light.shadow.bias = -0.01;


var frontalLight = new THREE.SpotLight( 'white', 30 );
frontalLight.position.copy( camera.position );


scene.add( light, light.target, frontalLight );



// ground

var groundMaterial = new THREE.MeshPhysicalNodeMaterial( {} );

var ground = new THREE.Mesh(
	new THREE.PlaneGeometry( 40, 40 ),
	groundMaterial
);

ground.rotation.x = -Math.PI/2;
ground.receiveShadow = true;
scene.add( ground );



// soldier

var model, mixer;

var modelMaterial = new THREE.MeshPhysicalNodeMaterial( { color: 'white' } );

new GLTFLoader().load( `../../assets/models/Soldier/Soldier.glb`, gltf => {

	model = gltf.scene;

	model.traverse( child => {

		if ( child.isMesh ) {

			child.material = modelMaterial;
			child.castShadow = true;
			child.receiveShadow = true;

		}

	} );

	mixer = new THREE.AnimationMixer( model );
	mixer.clipAction( gltf.animations[ 3 ]).play();

	scene.add( model );

	renderer.setAnimationLoop( animationLoop );

} );



// TSL textures

var modelTSL_1 = planet( {
	iterations: 7,
	levelSea: 0.147,
	levelMountain: 0.464,
	balanceWater: 0.628,
	balanceSand: 0.409,
	balanceSnow: 0.803,
	colorDeep: new THREE.Color( 16774656 ),
	colorShallow: new THREE.Color( 14640426 ),
	colorBeach: new THREE.Color( 0 ),
	colorGrass: new THREE.Color( 10427420 ),
	colorForest: new THREE.Color( 16621056 ),
	colorSnow: new THREE.Color( 16770304 ),
	seed: 2450,
	scale: -1 } );

var modelTSL_2 = camouflage( { scale: -2 } );

var modelTSL_3 = dysonSphere( { scale: -4-2 } );

var modelTSL_4 = dalmatianSpots( {
	background: new THREE.Color( 1, 1, 1 ),
	color: new THREE.Color( 0 ),
	density: 0.7,
	scale: -2 } );


var groundTSL_1 = planet( {
	iterations: 7,
	levelSea: 0.147,
	levelMountain: 0.464,
	balanceWater: 0.628,
	balanceSand: 0.409,
	balanceSnow: 0.803,
	colorDeep: new THREE.Color( 16774656 ),
	colorShallow: new THREE.Color( 14640426 ),
	colorBeach: new THREE.Color( 0 ),
	colorGrass: new THREE.Color( 10427420 ),
	colorForest: new THREE.Color( 16621056 ),
	colorSnow: new THREE.Color( 16770304 ),
	seed: 2450,
	scale: 2 } );

var groundTSL_2 = camouflage( { scale: 2 } );

var groundTSL_3 = dysonSphere( { scale: 2 } );

var groundTSL_4 = dalmatianSpots( { scale: 3 } );



// Texture blending with wave transition

var blendTSL = Fn( ( params )=>{

	var k = params.transition
		.add( positionWorld.length().pow( 0.5 ).mul( params.sign ) )
		.add( noise( positionLocal.mul( 6 ) ).mul( 0.5 ) )
		.clamp( 0, 1 ).toVar();

	k.addAssign( k.mul( -2*Math.PI ).sin() );

	var result = vec3().toVar(),
		x = params.x.toVar(),
		y = params.y.toVar(),
		z = params.z.toVar(),
		t = params.t.toVar();

	If( params.phase.equal( 0 ), ()=>{

		result.assign( mix( x, y, k ) );

	} )
		.ElseIf( params.phase.equal( 1 ), ()=>{

			result.assign( mix( y, z, k ) );

		} )
		.ElseIf( params.phase.equal( 2 ), ()=>{

			result.assign( mix( z, t, k ) );

		} )
		.Else( ()=>{

			result.assign( mix( t, x, k ) );

		} );

	return result;

} );


var phase = 2;

var modelOptions = {
	x: modelTSL_1,
	y: modelTSL_2,
	z: modelTSL_3,
	t: modelTSL_4,
	transition: uniform( 0 ),
	sign: 1,
	phase: uniform( phase )
};

modelMaterial.colorNode = blendTSL( modelOptions );

var groundOptions = {
	x: groundTSL_1,
	y: groundTSL_2,
	z: groundTSL_3,
	t: groundTSL_4,
	transition: uniform( 0 ),
	sign: -1,
	phase: uniform( phase )
};

groundMaterial.colorNode = blendTSL( groundOptions );



// main animation Loop

var ANIM_FULL = 11,
	ANIM = 4;

var localTime = 0,
	globalTime = 0,
	clock = new THREE.Clock();


function animationLoop( /* t */ ) {

	hideFallbackWarning( );

	var dT = clock.getDelta();

	globalTime += dT*2;
	localTime += dT*2;

	if ( localTime >= ANIM_FULL ) {

		localTime -= ANIM_FULL;

		phase++;
		groundOptions.phase.value = phase%4;
		modelOptions.phase.value = phase%4;

	}


	if ( mixer ) {

		mixer.update( dT );

	}

	var transition = THREE.MathUtils.clamp( ( globalTime%ANIM_FULL )-ANIM_FULL/2, -ANIM, 1+ANIM );

	groundOptions.transition.value = transition+1;
	modelOptions.transition.value = transition;

	var angle = globalTime/8*1.5;

	model.rotation.y = angle;
	ground.position.set( -7.2/1.5*Math.cos( angle ), 0, 7.2/1.5*Math.sin( angle ) );

	renderer.render( scene, camera );

}
