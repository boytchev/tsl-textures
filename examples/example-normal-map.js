

import * as THREE from "three";
import { noise } from 'tsl-textures/tsl-utils.js';


// general setup, boring, skip to the next comment

console.clear();

var scene = new THREE.Scene();
scene.background = new THREE.Color( "black" );

var camera = new THREE.PerspectiveCamera( 30, innerWidth / innerHeight );
camera.position.set( 0, 0, 5 );

var renderer = new THREE.WebGPURenderer( { antialias: true } );
renderer.setSize( innerWidth, innerHeight );
document.body.appendChild( renderer.domElement );

window.addEventListener( "resize", ( /*event*/ ) => {

	camera.aspect = innerWidth / innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( innerWidth, innerHeight );

} );

var light = new THREE.DirectionalLight( "white", 1 );
light.position.set( 0, 0, 6 );
scene.add( light );


var uNoise = THREE.tslFn( ([ pos, normal ]) => {

	var k = THREE.add( noise( pos ).mul( 10 ), noise( pos ).mul( 20 ) ).mul( 0.25 );
	var pn = noise( pos.div( 6 ) ).mul( 4 );
	var p = THREE.timerGlobal( 0.5 ).sin().mul( 5 ).add( 2.2 ).add( pn ).clamp( 0.2, 6.2 );

	k = k.abs().pow( p ).div( 5 );

	return pos.add( k.mul( normal ) );

} );

var kNoise = THREE.tslFn( ([ pos ]) => {

	var k = THREE.add( noise( pos ).mul( 10 ), noise( pos ).mul( 20 ) ).mul( 0.25 );
	var pn = noise( pos.div( 2 ) ).mul( 4 );
	var p = THREE.timerGlobal( 0.5 ).sin().mul( 10 ).add( 3.2 ).add( pn ).clamp( 0.2, 6.2 );


	k = k.abs().pow( p ).div( 5 );
	return k;

} );

var test = THREE.tslFn( ( /*params*/ ) => {

	var eps = 0.001;

	var position = THREE.positionLocal.mul( 11 ).add( THREE.timerGlobal().div( 3 ) );
	var normal = THREE.normalLocal.normalize().toVar();
	var tangent = THREE.tangentLocal.normalize().mul( eps ).toVar();
	var bitangent = THREE.cross( normal, tangent ).normalize().mul( eps ).toVar();

	var pos = uNoise( position, normal );
	var posU = uNoise( position.add( tangent ), normal );
	var posV = uNoise( position.add( bitangent ), normal );

	var dU = posU.sub( pos ),
		dV = posV.sub( pos );

	return dU.cross( dV ).normalize();

} );


var testcol = THREE.tslFn( ( /*params*/ ) => {

	var position = THREE.positionLocal.mul( 11 ).add( THREE.timerGlobal().div( 3 ) );
	var k = kNoise( position );

	return THREE.cond( k.lessThan( 0.5 ), THREE.vec3( 1, 1, 0.5 ), THREE.vec3( 0.6, 0.3, 0 ) );

} );


var earth = new THREE.Mesh(
	new THREE.SphereGeometry( 1, 60, 30 ),
	new THREE.MeshPhysicalNodeMaterial( {
		colorNode: testcol( ),
		normalNode: THREE.modelNormalMatrix.mul( test( ) ),
		metalness: 0.6,
		roughness: 0.3,
	} )
);
earth.geometry.computeTangents();
scene.add( earth );


function animationLoop( t ) {

	earth.rotation.x = t / 6500;
	earth.rotation.y = t / 4500 + 1;
	earth.rotation.z = t / 5500 + 2;

	renderer.render( scene, camera );

}

renderer.setAnimationLoop( animationLoop );
