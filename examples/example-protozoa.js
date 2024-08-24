import * as THREE from "three";
import { mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';
import { SimplexNoise } from "three/addons/math/SimplexNoise.js";

import { protozoa } from "tsl-textures/protozoa.js";
import { dysonSphere } from "tsl-textures/dyson-sphere.js";



// general setup

console.clear();

var scene = new THREE.Scene();
scene.background = new THREE.Color( "black" );

var camera = new THREE.PerspectiveCamera( 30, innerWidth / innerHeight, 0.01 );
camera.position.set( 0, 0, 10 );

var renderer = new THREE.WebGPURenderer( { antialias: true } );
renderer.setSize( innerWidth, innerHeight );
document.body.appendChild( renderer.domElement );

window.addEventListener( "resize", ( /*event*/ ) => {

	camera.aspect = innerWidth / innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( innerWidth, innerHeight );

} );

var simplex = new SimplexNoise( ),
	v = new THREE.Vector3( ); // temp object



// lights

var inLight = new THREE.PointLight( 'white', 20 );
scene.add( inLight );

var outLight = new THREE.SpotLight( 'floralwhite', 10, 10, 1.5, 1 );
outLight.position.set( 0, 0, 7 );
scene.add( outLight );



// space station

var stationParams = {
	...dysonSphere.defaults,
	scale: 1,
	color: new THREE.Color( 'white' ),
	background: new THREE.Color( 'black' ),
};

var station = new THREE.Mesh(
	new THREE.TorusGeometry( 2, 0.2, 20, 100 ).scale( 1, 1, 1.5 ),
	new THREE.MeshPhysicalNodeMaterial( {
		colorNode: dysonSphere( stationParams ),
	} )
);
scene.add( station );

var station2 = station.clone();
station2.rotation.x = Math.PI/2;
station.add( station2 );

var station3 = station2.clone();
station3.rotation.y = Math.PI/2;
station2.add( station3 );



// the blob

var blobParams = {
	...protozoa.defaults,
	scale: 1,
	fat: 0.3,
	amount: 0.5,
	background: new THREE.Color( 'azure' ),
	seed: THREE.uniform( 0 )
};

var blob = new THREE.Mesh(
	new THREE.IcosahedronGeometry( 1, 20 ),
	new THREE.MeshPhysicalNodeMaterial( {
		colorNode: protozoa( blobParams ).mul( 2 ),

		roughness: 0.6,
		metalness: 3,

		transmission: 1,
		thickness: 5,
	} )
);
scene.add( blob );

var blobGeometry = blob.geometry,
	blopPosition = blobGeometry.getAttribute( 'position' );

blobGeometry.deleteAttribute( 'uv' );
blobGeometry = mergeVertices( blobGeometry );
blobGeometry.computeVertexNormals();



// main animation loop

function animationLoop( t ) {

	station.rotation.set( t / 6500, t/4600, t/5700 );

	for ( var i=0; i<blopPosition.count; i++ ) {

		v.fromBufferAttribute( blopPosition, i );
		v.setLength( 1 );
		var len = 1+0.1*simplex.noise( v.x-v.z+Math.sin( t/1000 ), v.y+v.z+Math.cos( t/1000 ) );
		v.setLength( len );
		blopPosition.setXYZ( i, v.x, v.y, v.z );

	}

	blopPosition.needsUpdate = true;
	blobGeometry.computeVertexNormals();

	blobParams.seed.value = t / 10000;

	renderer.render( scene, camera );

}

renderer.setAnimationLoop( animationLoop );
