import * as THREE from "three";

import { GLTFLoader } from "three/addons/loaders/GLTFLoader.js";
import { FontLoader } from 'three/addons/loaders/FontLoader.js';
import { TextGeometry } from 'three/addons/geometries/TextGeometry.js';

import * as SkeletonUtils from 'three/addons/utils/SkeletonUtils.js';

import { Fn, If, positionGeometry, positionViewDirection, positionWorld, vec3 } from 'three/tsl';

import { hideFallbackWarning, noise, showFallbackWarning } from 'tsl-textures';


console.clear();



showFallbackWarning();



// resources - a model and a font

const SOLDIER_GLB = '../../assets/models/Soldier/Soldier.glb';
const FONT_JSON = 'https://cdn.jsdelivr.net/npm/three@0.181.0/examples/fonts/helvetiker_regular.typeface.json';



// internal TSL texture

var _camouflage = Fn( ([ position, scale, colorA, colorD ])=>{

	var k = noise( position.mul( scale ) ).toVar(),
		color = vec3().toVar();

	If( ( k ).greaterThan( 0.1 ), () => {

		color.assign( colorA.mul( k.smoothstep( 0.1, 0.15 ) ) );

	} )
		.Else( () => {

			color.assign( colorD.mul( k.smoothstep( 0.1, 0.05 ) ) );

		} );

	return color;

} ).setLayout( {
	name: 'camo',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'colorA', type: 'vec3' },
		{ name: 'colorD', type: 'vec3' },
	] }
);



// external TSL texture

var camouflage = Fn( ( {
	position = positionGeometry,
	scale = 2,
	colorA = new THREE.Color( 0xe2dec8 ),
	colorD = new THREE.Color( 0x717561 ),
} )=>{

	return _camouflage( position, scale, colorA, colorD );

} );



// general initialization

var scene = new THREE.Scene();
scene.background = new THREE.Color( 0 );

var camera = new THREE.PerspectiveCamera( 30, innerWidth / innerHeight );
camera.position.set( 0, 2.2, 5.5 );
camera.lookAt( 0, 0.4, 0 );

var renderer = new THREE.WebGPURenderer( { antialias: true } );
renderer.setSize( innerWidth, innerHeight );
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
document.body.appendChild( renderer.domElement );

var light = new THREE.SpotLight( 'bisque', 1000 );
light.position.set( 0, 12, -5 );
light.castShadow = true;
light.angle = 0.25;
light.penumbra = 1;
light.shadow.intensity = 1;
light.shadow.mapSize.set( 2048, 2048 );
light.shadow.bias = -0.001;
scene.add( light );

var light = new THREE.SpotLight( 'white', 30 );
light.position.set( 0, 5, 5 );
scene.add( light );

var ground = new THREE.Mesh(
	new THREE.PlaneGeometry( 40, 40 ),
	new THREE.MeshPhysicalNodeMaterial( { color: 0x212511 } )
);
ground.position.y = -0.3;
ground.rotation.x = -Math.PI/2;
ground.receiveShadow = true;
scene.add( ground );

window.addEventListener( "resize", ( /*event*/ ) => {

	camera.aspect = innerWidth / innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( innerWidth, innerHeight );

} );



// fake shadows

var canvas = document.createElement( 'canvas' );
canvas.width = 256;
canvas.height = 256;

var context = canvas.getContext( '2d' );
context.fillStyle = 'black';
context.filter = "blur(4px)";
context.fillRect( 20, 15, 40, 256-30 );
context.fillRect( 256-20-40, 15, 40, 256-30 );
context.fillRect( 16+23, 20, 256-16-23-16-23, 256-40 );
context.globalAlpha = 0.4;
context.fillRect( 16+23+20, 10, 256-16-23-16-23-40, 256-20 );

var shadowTexture = new THREE.CanvasTexture( canvas );



// TSL texture materials

var modelMaterial_PG = new THREE.MeshPhysicalNodeMaterial( {
	metalness: 0.0,
	roughness: 0.3,
	colorNode: camouflage( {
		position: positionGeometry,
		scale: 0.08 } )
} );

var modelMaterial_PW = new THREE.MeshPhysicalNodeMaterial( {
	metalness: 0.0,
	roughness: 0.3,
	colorNode: camouflage( {
		position: positionWorld,
		scale: 9 } )
} );

var modelMaterial_PVD = new THREE.MeshPhysicalNodeMaterial( {
	metalness: 0.0,
	roughness: 0.3,
	colorNode: camouflage( {
		position: positionViewDirection,
		scale: 67 } )
} );



// add 3D text to a model

function addText( font, model, string ) {

	var textGeometry = new TextGeometry( 'TSL texture bound to', { font: font, size: 0.06, depth: 0.008 } ).scale( 0.9, 1, 1 ).center();

	var text = new THREE.Mesh( textGeometry, new THREE.MeshStandardMaterial( { depthTest: false, transparent: true, emissive: new THREE.Color( 'lightgray' ) } ) );
	text.rotation.set( -0.3, Math.PI, 0, 'YZX' );
	text.position.set( 0, -0.5, -0.5 );
	model.add( text );

	textGeometry = new TextGeometry( '[ '+string+' ]', { font: font, size: 0.15, depth: 0.008 } ).scale( 1.1, 1, 1 ).center();

	var text2 = new THREE.Mesh( textGeometry, text.material );
	text2.position.set( 0, -0.14, 0 );
	text.add( text2 );

}



// platform geometry where solders walk on

var platformGeometry = new THREE.CylinderGeometry( 15, 15, 80, 32, 40 ).rotateZ( Math.PI/2 ).translate( 0, 0, -5 ),
	pos = platformGeometry.getAttribute( 'position' ),
	v = new THREE.Vector3();

for ( var i=0; i<pos.count; i++ ) {

	v.fromBufferAttribute( pos, i );

	if ( v.y>0.01 ) v.y += 90;
	if ( v.y<-0.01 ) v.y -= 90;

	if ( Math.abs( v.x ) < 30 ) v.z = v.z*0.5-3;
	if ( Math.abs( v.x ) > 38 ) v.z *= 0.5;
	v.y += 10;

	pos.setXYZ( i, ...v );

}

platformGeometry.computeVertexNormals( );



// models of soldiers

var models = [],
	platforms = [];



// adjust model texture

function setModel( model, x, material, animation, platform ) {

	model.position.x = x;
	model.castShadow = true;
	model.receiveShadow = true;

	platform.receiveShadow = true;
	platform.scale.setScalar( 1/100 );
	platform.position.set( x, -0.1, 0 );
	platform.rotation.x = Math.PI/2;
	platform.material = material;

	model.traverse( child => {

		child.castShadow = true;
		child.receiveShadow = true;
		if ( child.isMesh ) {

			child.material = material;

		}

	} );

	models.push( model );
	platforms.push( platform );

	model.mixer = new THREE.AnimationMixer( model );
	model.mixer.clipAction( animation ).play();

	scene.add( model );
	scene.add( platform );

}



// soldier

new GLTFLoader().load( SOLDIER_GLB, gltf => {

	var model = gltf.scene,
		animation = gltf.animations[ 3 ];

	var platform = new THREE.Mesh( platformGeometry ),
		shadow = new THREE.Mesh(
			new THREE.PlaneGeometry( 100, 220 ).translate( 0, 0, -7 ),
			new THREE.MeshBasicMaterial( { transparent: true, map: shadowTexture } )
		);
	shadow.rotation.x = Math.PI;
	platform.add( shadow );


	setModel( model, 0, modelMaterial_PG, animation, platform );
	setModel( SkeletonUtils.clone( model ), -1.25, modelMaterial_PW, animation, platform.clone() );
	setModel( SkeletonUtils.clone( model ), 1.25, modelMaterial_PVD, animation, platform.clone() );

	new FontLoader().load( FONT_JSON, function ( font ) {

		addText( font, models[ 0 ], 'model' );
		addText( font, models[ 1 ], 'space' );
		addText( font, models[ 2 ], 'screen' );

	} );


} );

renderer.setAnimationLoop( animationLoop );



// main render loop

function animationLoop( t ) {

	hideFallbackWarning( );

	t = t/1140;

	// animate models
	var a=0;
	for ( var model of models ) {

		model.rotation.y = 0.5*Math.sin( t )+Math.PI + model.position.x/10;
		if ( model.children[ 1 ]) model.children[ 1 ].rotation.y = -model.rotation.y;
		model.mixer.setTime( t + 0.3*( a++ ) );

	}

	for ( var model of platforms ) {

		model.rotation.z = -( 0.5*Math.sin( t )+Math.PI + model.position.x/10 );

	}

	renderer.render( scene, camera );

}
