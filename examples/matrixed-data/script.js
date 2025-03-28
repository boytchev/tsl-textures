﻿import * as THREE from "three";
import { uniform } from "three/tsl";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { SimplexNoise } from "three/addons/math/SimplexNoise.js";
import { sandbox } from "./texture.js";


console.clear( );

var scene = new THREE.Scene();
scene.background = new THREE.Color( 'gray' );

var camera = new THREE.PerspectiveCamera( 30, innerWidth/innerHeight );
camera.position.set( 0, 0, 8 );
camera.lookAt( scene.position );

var renderer = new THREE.WebGPURenderer( { antialias: true } );
renderer.setSize( innerWidth, innerHeight );
document.body.appendChild( renderer.domElement );

window.addEventListener( "resize", ( /*event*/ ) => {

	camera.aspect = innerWidth/innerHeight;
	camera.updateProjectionMatrix( );
	renderer.setSize( innerWidth, innerHeight );

} );

var light = new THREE.DirectionalLight( 'white', 2.5 );
light.position.set( 1, 1, 1 );
scene.add( light );

var controls = new OrbitControls( camera, renderer.domElement );
controls.enableDamping = true;
controls.autoRotate = true;
controls.autoRotateSpeed = -1;

var simplex = new SimplexNoise();


// TSL textures

// non-transparent knot with color, normal and roughness

var knotOptions = { scale: 3, density: uniform( 7 ) },
	knotMatrixMap = sandbox( knotOptions ).toVar(),
	knot = new THREE.Mesh(
		new THREE.TorusKnotGeometry( 1, 0.2, 200, 40, 3, 2 ),
		new THREE.MeshPhysicalNodeMaterial( {
			colorNode: knotMatrixMap[ 0 ],
			normalNode: knotMatrixMap[ 1 ],
			roughnessNode: knotMatrixMap[ 2 ].x,
		} )
	);
knot.position.x = -1.5;


// transparent capsule with color, opacity, normal and roughness

var capsuleOptions = { scale: 2, density: uniform( 7 ) },
	capsuleMatrixMap = sandbox( capsuleOptions ).toVar(),
	capsule = new THREE.Mesh(
		new THREE.CapsuleGeometry( 1, 1, 16, 32 ),
		new THREE.MeshPhysicalNodeMaterial( {
			side: THREE.DoubleSide,
			colorNode: capsuleMatrixMap[ 0 ],
			transparent: true,
			opacityNode: capsuleMatrixMap[ 2 ].y,
			normalNode: capsuleMatrixMap[ 1 ],
			roughnessNode: capsuleMatrixMap[ 2 ].x,
		} )
	);
capsule.position.x = 1.5;

scene.add( knot, capsule );


// animation loop, nothing special

function animationLoop( t ) {

	t = t/3000;

	knotOptions.density.value = 7+4*simplex.noise( t, 0 );
	capsuleOptions.density.value = 7-4*simplex.noise( t, 1 );

	knot.rotation.y = 2*t;
	capsule.rotation.y = 2*t;

	controls.update( );
	light.position.copy( camera.position );

	renderer.render( scene, camera );

}


renderer.setAnimationLoop( animationLoop );
