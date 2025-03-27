import * as THREE from "three";
import { uniform } from "three/tsl";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { SimplexNoise } from "three/addons/math/SimplexNoise.js";

import { protozoa, rotator, rust } from "tsl-textures";



// general setup

var scene = new THREE.Scene();
scene.background = new THREE.Color( 'black' );


var camera = new THREE.PerspectiveCamera( 30, innerWidth / innerHeight );


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

var lightA = new THREE.SpotLight( "white", 6 ),
	lightB = lightA.clone(),
	backLight = new THREE.SpotLight( "white", 2.5 );

lightA.castShadow = true;
lightA.decay = 0;
lightA.shadow.bias = -0.01;

lightB.decay = 0;

backLight.decay = 0.2;
backLight.penumbra = 1;
backLight.position.set( 0, 0, -11 );

scene.add( lightA, lightB, backLight );



// random gradient generator

var simplex = new SimplexNoise();



// dirty mirror

var mirror = new THREE.Mesh(
	new THREE.CircleGeometry( 6, 100 ).rotateX( Math.PI ),
	new THREE.MeshPhysicalNodeMaterial( {
		color: 'dimgray',
		transparent: true,
		opacityNode: protozoa( {
			scale: 1,
			fat: 0.05,
			amount: 0.5,
			color: new THREE.Color( 0 ),
			subcolor: new THREE.Color( 0 ),
			background: new THREE.Color( 0xA0A0DF ),
			seed: 10
		} ).oneMinus().div( 2.5 ),
	} )
);

mirror.scale.set( 1, 0.8, 1 );
scene.add( mirror );



// mirror frame

var mirrorFrame = new THREE.Mesh(
	new THREE.TorusGeometry( 6, 0.3, 10, 100 ),
	new THREE.MeshPhysicalNodeMaterial( {
		color: 'azure',
		roughness: 0.5,
		metalness: 0,
		transmission: 1,
	} )
);

mirrorFrame.scale.set( 1, 0.8, 0.05 );

var mirrorSubframe = new THREE.Mesh(
	new THREE.TorusGeometry( 6.4, 0.1, 10, 100 ),
	new THREE.MeshPhysicalNodeMaterial( {
		color: new THREE.Color( 0xFFD000 ),
		roughness: 0,
		metalness: 0.2,
	} )
);

mirrorSubframe.scale.set( 1, 0.8, 0.2 );

scene.add( mirrorFrame, mirrorSubframe );



// decorated wall

var wall = new THREE.Mesh(
	new THREE.RingGeometry( 6.3, 60, 100 ).rotateX( Math.PI ),
	new THREE.MeshPhysicalNodeMaterial( {
		colorNode: rust( {
			scale: 2,
			iterations: 5,
			amount: -0.3,
			opacity: 1,
			noise: 0,
			noiseScale: 0,
			color: new THREE.Color( 0xFFE0A0 ),
			background: new THREE.Color( 0x00B000 ),
			seed: 111
		} ),
	} )
);

wall.scale.set( 1, 0.8, 0.01 );
scene.add( wall );



// configurations of neck motions

var neckA = {
	angles: uniform( new THREE.Vector3( 0, 1, 0 ) ),
	center: new THREE.Vector3( 0, 0, 0 ),
	selectorCenter: new THREE.Vector3( 0, -1.4, 0 ),
	selectorAngles: new THREE.Vector2( 0.63, 0 ),
	selectorWidth: 3
};

var neckB = {
	...neckA,
	angles: uniform( new THREE.Vector3( 0, 1, 0 ) ),
};



// load Lee Perry Smith

var modelA, modelB;

new GLTFLoader().load( `../../assets/models/LeePerrySmith/LeePerrySmith.glb`, gltf => {

	modelA = gltf.scene.children[ 0 ];

	modelA.material = new THREE.MeshPhysicalNodeMaterial( {
		map: new THREE.TextureLoader().load( "../../assets/models/LeePerrySmith/Map-COL.jpg" ),
		positionNode: rotator( neckA ),
		normalNode: rotator.normal( neckA ),
	} );

	modelA.position.set( 0, -1, 6 );
	modelA.castShadow = true;
	modelA.receiveShadow = true;

	modelB = modelA.clone();

	modelB.material = new THREE.MeshPhysicalNodeMaterial( {
		color: new THREE.Color( 0xC0C8D0 ),
		map: modelA.material.map,
		positionNode: rotator( neckB ),
		normalNode: rotator.normal( neckB ),
	} );

	modelA.position.set( 0, -1, -6 );

	scene.add( modelA, modelB );

	lightA.target = modelA;
	lightB.target = modelB;

	renderer.setAnimationLoop( animationLoop );

} );



// main animation Loop

var scale = 0;

function animationLoop( t ) {

	if ( t < 24000 )
		scale = THREE.MathUtils.smoothstep( t, 5000, 5000+2000 );
	else
		scale = 1-THREE.MathUtils.smoothstep( t, 5000+49000, 5000+49000+4000 );

	t /= 2000;


	// neck motion, 150 beats per second

	neckA.angles.value.set(
		0.3*scale*simplex.noise( t, 0 ) + 0.2*scale*Math.sin( 4*Math.PI*t )/*nodding*/ + 0.7*( 1-scale ),
		0.8*scale*simplex.noise( t, 1 ) + 0.5*( 1-scale ),
		0.4*scale*simplex.noise( t, 2 ) - 0.1*( 1-scale ),
	);

	neckB.angles.value.set(
		neckA.angles.value.x,
		-neckA.angles.value.y,
		-neckA.angles.value.z
	);


	// model motion

	modelA.rotation.y = 4*scale*simplex.noise( t/3, 6 );
	modelB.rotation.y = Math.PI - 4*scale*simplex.noise( t/3, 6 );


	// camera motion

	camera.position.setFromSphericalCoords( 25, Math.PI/2, Math.PI+scale*THREE.MathUtils.clamp( 0.6+2*scale*simplex.noise( t/6, 6 ), -0.7, 0.7 )+0.5*( 1-scale ) );
	camera.lookAt( mirror.position );


	renderer.render( scene, camera );

}
