import * as THREE from "three";
import { uniform } from "three/tsl";
import { SimplexNoise } from "three/addons/math/SimplexNoise.js";
import { mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';
import { bricks } from "tsl-textures";
import * as TWEEN from "three/addons/libs/tween.module.js";



// general setup, boring, skip to the next comment

console.clear();

const N = 30;

var scene = new THREE.Scene();
scene.background = new THREE.Color( "black" );

var camera = new THREE.PerspectiveCamera( 30, innerWidth / innerHeight, N/2, 500 );
camera.position.set( 0, 2*N, 8*N );
camera.lookAt( 0, 0, 0 );

var renderer = new THREE.WebGPURenderer( { antialias: true } );
renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
renderer.setSize( innerWidth, innerHeight );
renderer.shadowMap.enabled = true;
document.body.appendChild( renderer.domElement );

window.addEventListener( "resize", ( /*event*/ ) => {

	camera.aspect = innerWidth / innerHeight;
	camera.updateProjectionMatrix();
	renderer.setSize( innerWidth, innerHeight );

} );



// there are three lights, one primary light for the shadows,
// a secondary light to make shadow parts not equally shadowed,
// and an ambient light to remove pure black shadows

var light = new THREE.DirectionalLight( "white", 4.5 );
light.position.set( 2*N, 1*N, N/2 );
light.shadow.mapSize.width = 2*1024;
light.shadow.mapSize.height = 2*1024;
light.shadow.camera.left = -100;
light.shadow.camera.right = 100;
light.shadow.camera.bottom = -100;
light.shadow.camera.top = 100;
light.castShadow = true;
light.shadow.bias = -0.01;
light.shadow.radius = 1;

var light2 = new THREE.DirectionalLight( "orange", 0.5 );
light2.position.set( -4*N, -N, N );

scene.add( light, light2, new THREE.AmbientLight( 'white', 1 ) );



// randomness is mostly simplex-noised-based

var simplex = new SimplexNoise();




// materials for the bricks that are interpolated

var brickStyles = [
	{ // default bricks
		scale: -0.95,
		brickSize: new THREE.Vector3( 2, 1, 2 ),
		brickShift: 2,
		jointSize: 0.05,
		jointSpan: 0.5,
		jointJitter: 0.5,
		jointBlur: 0.1,
		noiseSize: 0.2,
		noiseStrength: 0.3,
		colorShade: 0.8,
		color: new THREE.Color( 16711680 ),
		additional: new THREE.Color( 15783331 ),
		background: new THREE.Color( 'white' ),

		roughness: 1,
		metalness: 0.6,
	},
	{ // Manchester red brick wall
		scale: -0.38,
		brickSize: new THREE.Vector3( 3, 1, 3 ),
		brickShift: 3,
		jointSize: 0.05,
		jointSpan: 0.5,
		jointJitter: 0,
		jointBlur: 0.05,
		noiseSize: 0,
		noiseStrength: 0,
		colorShade: 0,
		color: new THREE.Color( 'firebrick' ),
		additional: new THREE.Color( 'firebrick' ),
		background: new THREE.Color( 'lightgray' ),

		roughness: 1,
		metalness: 0.3,
	},
	{ // cartoon bricks
		scale: -1,
		brickSize: new THREE.Vector3( 3, 1, 3 ),
		brickShift: 2,
		jointSize: 0.1,
		jointSpan: 0.6,
		jointJitter: 0.7,
		jointBlur: 0.01,
		noiseSize: 0.54,
		noiseStrength: 0,
		colorShade: 1,
		color: new THREE.Color( 'lime' ),
		additional: new THREE.Color( 'violet' ),
		background: new THREE.Color( 'linen' ),

		roughness: 0.5,
		metalness: 0.2,
	},
	{ // japanese wall tiles
		scale: 0.11,
		brickSize: new THREE.Vector3( 1, 1, 1 ),
		brickShift: 1,
		jointSize: -0.01,
		jointSpan: 0.8,
		jointJitter: 0,
		jointBlur: 0,
		noiseSize: 0,
		noiseStrength: 0,
		colorShade: 0,
		color: new THREE.Color( 0xffffff ),
		additional: new THREE.Color( 0xdfefff ),
		background: new THREE.Color( 'white' ),

		roughness: 0.3,
		metalness: 0.1,
	},
];



// the current brick style, being modified by tweens

var brickStyle = { // default bricks
	scale: -0.95,
	brickSize: new THREE.Vector3( 2, 1, 2 ),
	brickShift: 2,
	jointSize: 0.05,
	jointSpan: 0.5,
	jointJitter: 0.5,
	jointBlur: 0.1,
	noiseSize: 0.2,
	noiseStrength: 0.3,
	colorShade: 0.8,
	color: new THREE.Color( 16711680 ),
	additional: new THREE.Color( 15783331 ),
	background: new THREE.Color( 'white' ),

	roughness: 1,
	metalness: 0.5,

}
;



// bricks texture style with uniforms

var brickStyleUniforms = { // japanese wall tiles
	scale: uniform( 0.11 ),
	brickSize: uniform( new THREE.Vector3( 1, 1, 1 ) ),
	brickShift: uniform( 1 ),
	jointSize: uniform( -0.01 ),
	jointSpan: uniform( 0.8 ),
	jointJitter: uniform( 0 ),
	jointBlur: uniform( 0 ),
	noiseSize: uniform( 0 ),
	noiseStrength: uniform( 0 ),
	colorShade: uniform( 0 ),
	color: uniform( new THREE.Color( 0xffffff ) ),
	additional: uniform( new THREE.Color( 0xdfefff ) ),
	background: uniform( new THREE.Color( 'white' ) ),
};



// the objects with sufficient vertices for fluxing
// init is used as a clear identity template

var initGeom = new THREE.BoxGeometry( 3*N, N, 3*N, 3*N, N, 3*N );
initGeom.deleteAttribute( 'normal' );
initGeom.deleteAttribute( 'uv' );
initGeom = mergeVertices( initGeom );
initGeom.computeVertexNormals( );

var initPos = initGeom.getAttribute( 'position' ),
	initNor = initGeom.getAttribute( 'normal' );

var geom = initGeom.clone(),
	pos = geom.getAttribute( 'position' );

var cubix = new THREE.Mesh( geom, new THREE.MeshPhysicalNodeMaterial( {
	colorNode: bricks( brickStyleUniforms ),
} ) );
cubix.castShadow = true;
cubix.receiveShadow = true;

scene.add( cubix );



// deformer of the cubix

var v = new THREE.Vector3(),
	n = new THREE.Vector3();

function deform( t, strength ) {

	const CUTY = N-1;
	const CUTXZ = 1.5*N-1;

	for ( var i=0; i<pos.count; i++ ) {

		n.fromBufferAttribute( initNor, i );
		v.fromBufferAttribute( initPos, i );

		var s = 3/N;
		var k1 = 3*simplex.noise4d( Math.floor( v.x*s+n.y/2 ), Math.floor( v.y*s+n.z/2 ), Math.floor( v.z*s+n.x/2 ), t/2 );

		s = 1.5/N;
		var k2 = 2*simplex.noise4d( Math.floor( v.z*s+n.z/2 ), t/3+1/2, Math.floor( v.x*s+n.y/2 ), Math.floor( v.y*s+n.x/2 ) );

		var k = strength*( 3*Math.abs( k1+k2 )-0.5 );

		if ( Math.abs( n.x )>0.5 && ( Math.abs( v.y )>CUTY || Math.abs( v.z )>CUTXZ ) ) k=0;
		if ( Math.abs( n.y )>0.5 && ( Math.abs( v.x )>CUTXZ || Math.abs( v.z )>CUTXZ ) ) k=0;
		if ( Math.abs( n.z )>0.5 && ( Math.abs( v.x )>CUTXZ || Math.abs( v.y )>CUTY ) ) k=0;

		v.addScaledVector( n, 3*k );
		pos.setXYZ( i, ...v );

	}

	pos.needsUpdate = true;
	geom.computeVertexNormals();

}



// animators

var data = {
	time: 0,
	strength: 1,
	rotation: 0,
};

var shapeCount = 0;
var styleId = 0;

function nextShape() {

	var moreDelay = 1;
	if ( shapeCount==15 ) moreDelay = 2;
	if ( shapeCount==16 ) moreDelay = 20;

	if ( shapeCount==16 ) {

		new TWEEN.Tween( data )
			.to( { strength: 0 }, 2000 )
			.easing( TWEEN.Easing.Cubic.Out )
			.delay( 1600 )
			.start();
		return;

	}

	new TWEEN.Tween( data )
		.to( { time: data.time+0.6, strength: 0.8+0.8*Math.random() }, 600 )
		.easing( TWEEN.Easing.Elastic.Out )
		.delay( moreDelay*2010-600 )
		.start()
		.onComplete( nextShape );

	shapeCount++;

	if ( shapeCount%3==0 && shapeCount<15 ) {

		styleId = ( styleId+1 )%brickStyles.length;

		new TWEEN.Tween( brickStyle )
			.to( brickStyles[ styleId ], 300 )
			.easing( TWEEN.Easing.Cubic.InOut )
			.delay( 1300 )
			.start();

	}

	if ( shapeCount%6==3 && shapeCount<15 ) {

		new TWEEN.Tween( data )
			.to( { rotation: data.rotation+Math.PI }, 8000 )
			.easing( TWEEN.Easing.Quintic.InOut )
			.start();

	}


}


// initiate animation, then it reactivates itself

new TWEEN.Tween( data )
	.to( data, 12340 )
	.start()
	.onComplete( nextShape );




function animationLoop( t ) {

	t = t/1000;

	cubix.rotation.z = data.rotation;
	cubix.rotation.y = t/5;

	TWEEN.update();

	deform( data.time, data.strength );

	// push current texture properties to the shader

	brickStyleUniforms.scale.value = brickStyle.scale;

	brickStyleUniforms.brickShift.value = brickStyle.brickShift;
	brickStyleUniforms.jointSize.value = brickStyle.jointSize;
	brickStyleUniforms.jointSpan.value = brickStyle.jointSpan;
	brickStyleUniforms.jointJitter.value = brickStyle.jointJitter;
	brickStyleUniforms.jointBlur.value = brickStyle.jointBlur;
	brickStyleUniforms.noiseSize.value = brickStyle.noiseSize;
	brickStyleUniforms.noiseStrength.value = brickStyle.noiseStrength;
	brickStyleUniforms.colorShade.value = brickStyle.colorShade;

	brickStyleUniforms.brickSize.value.copy( brickStyle.brickSize );
	brickStyleUniforms.color.value.set( brickStyle.color );
	brickStyleUniforms.additional.value.set( brickStyle.additional );
	brickStyleUniforms.background.value.set( brickStyle.background );

	cubix.material.roughness = brickStyle.roughness;
	cubix.material.metalness = brickStyle.metalness;

	// that's all folks

	renderer.render( scene, camera );

}

renderer.setAnimationLoop( animationLoop );
