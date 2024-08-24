import * as THREE from "three";

import { planet } from "tsl-textures/planet.js";
import { stars } from "tsl-textures/stars.js";

// general setup, boring, skip to the next comment

console.clear();

var scene = new THREE.Scene();
scene.background = new THREE.Color( "black" );

var camera = new THREE.PerspectiveCamera( 30, innerWidth / innerHeight );
camera.position.set( 0, 0, 6 );

var renderer = new THREE.WebGPURenderer( { antialias: true } );
renderer.setSize( innerWidth, innerHeight );
document.body.appendChild( renderer.domElement );

window.addEventListener( "resize", ( /*event*/ ) => {

	camera.aspect = innerWidth / innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( innerWidth, innerHeight );

} );

var light = new THREE.DirectionalLight( "white", 2 );
light.position.set( 1, 1, 1 );
scene.add( light );

var moonLight = new THREE.SpotLight( "firebrick", 5 );
moonLight.angle = 0.7;
moonLight.penumbra = 1;
scene.add( moonLight );

// next comment

var skyParams = {
	...stars.defaults,
	density: 0.5,
	background: new THREE.Color( "black" )
};

var sky = new THREE.Mesh(
	new THREE.SphereGeometry( 10, 60, 30 ),
	new THREE.MeshBasicNodeMaterial( {
		side: THREE.BackSide,
		colorNode: stars( skyParams )
	} )
);
scene.add( sky );

var earthParams = {
	...planet.defaults,
	iterations: 3,
	scale: 1,
	seed: THREE.uniform( 0 )
};

var earth = new THREE.Mesh(
	new THREE.SphereGeometry( 1, 60, 30 ),
	new THREE.MeshPhysicalNodeMaterial( {
		colorNode: planet( earthParams )
	} )
);
scene.add( earth );

var moonParams = {
	scale: 3,
	iterations: 2,
	levelSea: 0.1,
	levelMountain: 0.6,
	balanceWater: 0.5,
	balanceSand: 0.409,
	balanceSnow: 0.803,
	colorDeep: new THREE.Color( 16774656 ),
	colorShallow: new THREE.Color( 14640426 ),
	colorBeach: new THREE.Color( 0 ),
	colorGrass: new THREE.Color( 10427420 ),
	colorForest: new THREE.Color( 16621056 ),
	colorSnow: new THREE.Color( 16770304 ),
	seed: THREE.uniform( 0 )
};

var moon = new THREE.Mesh(
	new THREE.SphereGeometry( 0.3, 30, 15 ),
	new THREE.MeshBasicNodeMaterial( {
		colorNode: planet( moonParams )
	} )
);
scene.add( moon );

function animationLoop( t ) {

	earthParams.seed.value = t / 3000;
	moonParams.seed.value = t / 1000;

	earth.rotation.y = t / 2500;
	moon.rotation.y = t / 1500;

	moon.position.setFromSphericalCoords( 2, Math.PI / 2, t / 2000 );
	moonLight.position.copy( moon.position );

	renderer.render( scene, camera );

}

renderer.setAnimationLoop( animationLoop );
