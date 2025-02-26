import * as THREE from 'three/webgpu';

import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

import { polkaDots } from 'tsl-textures/polka-dots';

let container, renderer, scene, camera;
let rock, rockMaterial;

// Create the renderer
renderer = new THREE.WebGPURenderer({
    antialias: true
});
renderer.useLegacyLights = false;
renderer.setPixelRatio( window.devicePixelRatio );
renderer.setSize( window.innerWidth, window.innerHeight );
renderer.setAnimationLoop( animate );

// Set the container for the output
container = document.getElementById('threejs-container');
container.innerHTML = '';
container.appendChild( renderer.domElement );

// Create a Scene
scene = new THREE.Scene();
scene.background = new THREE.Color(0xFFFFFF);

// Add the Camera
camera = new THREE.PerspectiveCamera(60,
    window.innerWidth / window.innerHeight,
    1,
    100
);
camera.position.set(5, 2.5, 5);
camera.lookAt(0, 0, 0);

// Add orbit controls
const controls = new OrbitControls( camera, renderer.domElement );
controls.enableDamping = true;

// Ambient Light
const ambientLight = new THREE.AmbientLight( 0x999999 );
scene.add( ambientLight );

// Hemispherical Light
const hemiLight = new THREE.HemisphereLight( 0xffffff, 0x000000, 0.9 );
scene.add( hemiLight );

// const topDirectionalLight = new THREE.DirectionalLight( 0xffffff, 1 );
// topDirectionalLight.position.set(0, 10, 0);
// scene.add( topDirectionalLight );

// Add Axis references
// const axesHelper = new THREE.AxesHelper( 5 );
// scene.add( axesHelper );

// 1. Create base geometry with initial scale
const rockGeometry = new THREE.IcosahedronGeometry(2, 12)

rockMaterial = new THREE.MeshStandardNodeMaterial({
    color: 0xCCCCCC,
    roughness: 0.5,
    metalness: 0.0,
});

rockMaterial.colorNode = polkaDots ( {
    count: 2,
    size: 0.6,
    blur: 0.22,
    color: new THREE.Color(0),
    background: new THREE.Color(16777215)
} );

rock = new THREE.Mesh(rockGeometry, rockMaterial);

scene.add(rock);

/**
 * Animation callback function
 */
function animate() {
    requestAnimationFrame( animate );

    // required if controls.enableDamping or controls.autoRotate are set to true
    controls.update();

    renderer.render( scene, camera );
}
