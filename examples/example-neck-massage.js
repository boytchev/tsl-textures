import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { SimplexNoise } from "three/addons/math/SimplexNoise.js";

import { rotator } from "tsl-textures/rotator.js";



// general setup

var scene = new THREE.Scene();
scene.background = new THREE.Color( "black" );


var camera = new THREE.PerspectiveCamera( 30, innerWidth / innerHeight );
camera.position.set( 0, 0, 20 );


var renderer = new THREE.WebGPURenderer( { antialias: true } );
renderer.setSize( innerWidth, innerHeight );
renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
document.body.appendChild( renderer.domElement );


var controls = new OrbitControls( camera, renderer.domElement );
controls.enableDamping = true;
controls.maxPolarAngle = 2;


window.addEventListener( "resize", ( /*event*/ ) => {

	camera.aspect = innerWidth / innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( innerWidth, innerHeight );

} );


var light = new THREE.DirectionalLight( "white", 3 );
scene.add( light );


var simplex = new SimplexNoise();



// configuration of neck motion

var neck = {
	angles: THREE.uniform( new THREE.Vector3( 0, 1, 0 ) ),
	center: new THREE.Vector3( 0, 0, 0 ),
	selectorCenter: new THREE.Vector3( 0, -1.2, 0 ),
	selectorAngles: new THREE.Vector2( 0.63, 0 ),
	selectorWidth: 2.5
};



// load Lee Perry Smith

var model;

new GLTFLoader().load( `../assets/models/LeePerrySmith/LeePerrySmith.glb`, gltf => {

	model = gltf.scene.children[ 0 ];

	model.material = new THREE.MeshPhysicalNodeMaterial( {
		map: new THREE.TextureLoader().load( "../assets/models/LeePerrySmith/Map-COL.jpg" ),
		positionNode: rotator( neck ),
		normalNode: rotator.normal( neck ),
	} );

	scene.add( model );

	renderer.setAnimationLoop( animationLoop );

} );



// main animation Loop

function animationLoop( t ) {

	t /= 2000;

	neck.angles.value.set(
		0.5*simplex.noise( t, 0 ),
		0.8*simplex.noise( t, 1 ),
		0.4*simplex.noise( t, 2 ),
	);

	model.rotation.y = 2*simplex.noise( t/3, 3 );

	controls.update( );
	light.position.copy( camera.position );
	renderer.render( scene, camera );

}
