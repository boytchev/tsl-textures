import * as THREE from "three";

import { positionLocal, positionWorld, uniform, vec3 } from 'three/tsl';

import { halftone, hideFallbackWarning, isolayers, showFallbackWarning } from "tsl-textures";

import { Pillar } from "./pillar.js";
import { Crystal } from "./crystal.js";


// general setup


console.clear( );


showFallbackWarning( );


var scene = new THREE.Scene();
scene.background = new THREE.Color( 'aliceblue' );


var light = new THREE.DirectionalLight( 'white', 3 );
light.decay = 0;
scene.add( light );

scene.add( new THREE.AmbientLight( 'white', 1 ) );


var camera = new THREE.PerspectiveCamera( 30, innerWidth / innerHeight, 1, 1500 );


var renderer = new THREE.WebGPURenderer( { antialias: true } );
renderer.setSize( innerWidth, innerHeight );
renderer.setAnimationLoop( animationLoop );
document.body.appendChild( renderer.domElement );


window.addEventListener( "resize", ( /*event*/ ) => {

	camera.aspect = innerWidth / innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( innerWidth, innerHeight );

} );



// material based on TSL textures

var isolayersNode = isolayers( {
	position: vec3( positionWorld.x, positionLocal.y, positionWorld.z ),
	scale: -2,
} );

var halftoneParams = {
	scale: 3.5,
	radius: 5,
	pattern: 1,
	attenuation: 1,

	near: uniform( -300 ),
	far: uniform( 500 ),
};

var halftoneNode = halftone( halftoneParams );


var fixedMaterial = new THREE.MeshPhysicalNodeMaterial( {
	colorNode: isolayersNode,
	roughness: 0.3,
	metalness: 0.1,
} );

var halftoneMaterial = new THREE.MeshPhysicalNodeMaterial( {
	colorNode: isolayersNode.mul( halftoneNode.pow( 1/2 ) )
		.mul( positionWorld.y.smoothstep( 70, 10 ) ),
	roughness: 0.3,
	metalness: 0.1,
} );



var farNear = true;
document.getElementById( 'toggle' ).addEventListener( 'click', ( /*event*/ )=>{

	farNear = !farNear;

	halftoneParams.near.value = farNear?-100:1500;
	halftoneParams.far.value = farNear?500:200;

	document.getElementById( 'info' ).innerHTML = farNear ? 'DISTANT OBJECTS' : 'CLOSE OBJECTS';

} );



// ground

var ground = new THREE.Mesh(
	new THREE.CircleGeometry( 300, 80 ),
	fixedMaterial
);
ground.rotation.x = -Math.PI/2;
scene.add( ground );

var border = new THREE.Mesh(
	new THREE.TorusGeometry( 300, 10, 16, 80 ),
	fixedMaterial
);
border.position.z = -2.5;
border.scale.z = 0.25;
ground.add( border );


// pillars

const N = 30;

function r( i ) {

	return 260 * Math.sqrt( ( i-0.5 )/( N-1 ) );

}

function a( i ) {

	return 2*Math.PI*i/( ( 1+Math.sqrt( 5 ) )/2 )**2;

}

var p = [];
for ( var i=0; i<N; i++ )
	p.push( new THREE.Vector3( r( i )*Math.cos( a( i ) ), 65, r( i )*Math.sin( a( i ) ) ) );


var pillars = [],
	crystals = [];

for ( var i=1; i<N; i++ ) {

	var pillar = new Pillar( p[ i ], halftoneMaterial );
	scene.add( pillar );

	pillars.push( pillar );

	var crystal = new Crystal( p[ i ]);
	scene.add( crystal );

	crystals.push( crystal );

}


function animationLoop( t ) {

	t = t/8000;

	hideFallbackWarning( );

	camera.position.set(
		250*( Math.sin( t )+2*Math.sin( 2*t ) ),
		35+20*Math.cos( 8*t ),
		250*( Math.cos( t )-2*Math.sin( 2*t ) ),
	);

	t += 2;
	camera.lookAt(
		0*( Math.sin( t )+2*Math.sin( 2*t ) ),
		35+20*Math.cos( 8*t ),
		0*( Math.cos( t )-2*Math.sin( 2*t ) ),
	);

	for ( var pillar of pillars ) pillar.update( t );
	for ( var crystal of crystals ) crystal.update( t );

	light.position.copy( camera.position );
	light.position.y = 50;

	renderer.render( scene, camera );

}
