import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { MeshEdgesGeometry } from "https://cdn.jsdelivr.net/npm/meshedgesgeometry@latest/src/MeshEdgesGeometry.js";
import { toCreasedNormals } from 'three/addons/utils/BufferGeometryUtils.js';

import { hideFallbackWarning, showFallbackWarning } from "tsl-textures/tsl-utils.js";
import { wood } from "tsl-textures/wood.js";



// general setup, boring, skip to the next comment

console.clear();

showFallbackWarning( );


const NODECO = !true;

var scene = new THREE.Scene();
scene.background = new THREE.Color( "black" );

if ( !NODECO ) {

	const urls = [
		'textures/posx.jpg', 'textures/negx.jpg',
		'textures/posy.jpg', 'textures/negy.jpg',
		'textures/posz.jpg', 'textures/negz.jpg'
	];

	const textureCube = new THREE.CubeTextureLoader().load( urls );


	scene.background = textureCube;
	scene.environment = textureCube;
	scene.backgroundBlurriness = 0.0;

}

var camera = new THREE.PerspectiveCamera( 30, innerWidth / innerHeight );
camera.position.set( 6, 2, -12 );

var renderer = new THREE.WebGPURenderer( { antialias: true } );
renderer.setSize( innerWidth, innerHeight );
if ( NODECO ) renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
document.body.appendChild( renderer.domElement );

var controls = new OrbitControls( camera, renderer.domElement );
controls.enableDamping = true;
controls.maxPolarAngle = 2;
controls.autoRotate = true;
controls.autoRotateSpeed = 0.5;

window.addEventListener( "resize", ( /*event*/ ) => {

	camera.aspect = innerWidth / innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( innerWidth, innerHeight );

} );

var light = new THREE.DirectionalLight( "white", NODECO?10:5 );
light.position.set( 1, 1, 1 );
scene.add( light );


// next comment


// define 4 wood materials

var materialNormal = new THREE.MeshPhysicalNodeMaterial( {
	colorNode: wood( {
		color: new THREE.Color( 0 ), //0xffaa55 ),
		background: new THREE.Color( 0x89593f ),
		angle: 45,
		fibers: 0.2,
		length: 3,
		fibersDensity: 25,
		scale: 3,
	} ),
	flatShading: true,
	metalness: 0,
	roughness: 0.5,
} );

var materialLight = new THREE.MeshPhysicalNodeMaterial( {
	colorNode: wood( {
		color: new THREE.Color( 0xffdab5 ),
		background: new THREE.Color( 0xa38363 ),
		rings: 7,
	} ),
	flatShading: true,
	metalness: 0,
	roughness: 0.5,
} );

var materialGray = new THREE.MeshPhysicalNodeMaterial( {
	colorNode: wood( {
		color: new THREE.Color( 'sienna' ),
		background: new THREE.Color( 'peru' ),
		angle: -45
	} ),
	flatShading: true,
	metalness: 0,
	roughness: 0.5,
} );

var materialGround = new THREE.MeshPhysicalNodeMaterial( {
	colorNode: wood( {
		color: new THREE.Color( 'black' ),
		background: new THREE.Color( 'SaddleBrown' ),
		angle: 90,
		scale: 2,
	} ),
	metalness: 0.1,
	roughness: 0,
} );


var materials = [ materialNormal, materialLight, materialGray, materialGround ];
var lineMaterial = new THREE.LineBasicNodeMaterial( {
	color: 'black',
	transparent: true,
	opacity: 0.2
} );

// load 3D models

var models = [ 'ambulance', 'race', 'suvLuxury' ];


for ( let i=0; i<models.length; i++ ) {

	new GLTFLoader().load( `models/${models[ i ]}.glb`, gltf => {

		var model = gltf.scene;

		model.position.set( 2.1*( i-1 ), -0.5, 0 );

		model.traverse( ( child )=>{

			if ( child.scale.x<0 ) {

				child.scale.x = 1;
				child.rotation.y = Math.PI;

			}

			if ( !NODECO && child.material ) {

				child.material = materials[ i ];

			}

		} );

		var edges = new THREE.LineSegments(
			new MeshEdgesGeometry( model ),
			lineMaterial
		);

		scene.add( model, edges );

	} );

}


// greate ground
// a shape to be extruded
var shape = new THREE.Shape();
shape.moveTo( 5, 0 );
for ( var i=0; i<180; i++ )
	shape.lineTo( 5*Math.cos( 2*Math.PI*i/180 ), 2.5*Math.sin( 2*Math.PI*i/180 ) );

var extrudeSettings = {
	depth: 10.05,
	bevelEnabled: true,
	bevelSegments: 12,
	steps: 1,
	bevelSize: 0.1,
	bevelThickness: 0.1,
	curveSegments: 1 };

var geometry = toCreasedNormals( new THREE.ExtrudeGeometry( shape, extrudeSettings ).rotateX( Math.PI/2 ) );

var ground = new THREE.Mesh( geometry, NODECO?new THREE.MeshLambertMaterial():materials[ 3 ]);
ground.position.y = -0.61;
scene.add( ground );


// generate shadows

var canvas = document.createElement( 'CANVAS' );
canvas.width = 32;
canvas.height = 64;
var context = canvas.getContext( '2d' );
context.filter = 'blur(3px)';
context.fillStyle = 'black';
context.fillRect( 6, 6, 32-12, 64-12 );
var texture = new THREE.CanvasTexture( canvas );

var shadow1 = new THREE.Mesh(
	new THREE.PlaneGeometry( 1, 1 ),
	new THREE.MeshBasicNodeMaterial( {
		map: texture,
		side: THREE.DoubleSide,
		transparent: true,
		depthWrite: false,
		opacity: NODECO ? 0.6 : 1,
		polygonOffset: !true,
		polygonOffsetUnits: 11,
		polygonOffsetFactor: 11,
	} )
);
shadow1.scale.set( 2.3, 3.1, 1 );
shadow1.position.y = -0.47;
shadow1.rotation.x = -Math.PI/2;

var shadow2 = shadow1.clone();
shadow2.scale.set( 2.6, 3.5, 1 );
shadow2.position.x = -2.1;

var shadow3 = shadow1.clone();
shadow3.scale.set( 2.5, 3.2, 1 );
shadow3.position.x = 2.1;

scene.add( shadow1, shadow2, shadow3 );



function animationLoop( ) {

	hideFallbackWarning( );
	controls.update( );
	light.position.copy( camera.position );
	renderer.render( scene, camera );

}

renderer.setAnimationLoop( animationLoop );
