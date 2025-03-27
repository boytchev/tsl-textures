import * as THREE from "three";
import { uniform } from "three/tsl";
import * as TWEEN from "three/addons/libs/tween.module.js";

import { supersphere, watermelon } from "tsl-textures";

// general setup, boring, skip to the next comment

console.clear();

var scene = new THREE.Scene();
scene.background = new THREE.Color( "black" );

var camera = new THREE.PerspectiveCamera( 30, innerWidth / innerHeight );
camera.position.set( 0, 0, 8 );

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

scene.add( light, new THREE.AmbientLight( 'white', 0.1 ) );



// next comment
var data = {
	exponent: 1,
	color: new THREE.Color( 10145074 ),
	background: new THREE.Color( 0 ),
	scale: 1,
	seed: 0,
};

var shapeOptions = { exponent: uniform( -0.5 ) };
var colorOptions = { scale: 2,
	stripes: uniform( 12 ),
	variation: 0.5,
	noise: 0.25,
	color: uniform( new THREE.Color( 10145074 ) ),
	background: uniform( new THREE.Color( 25600 ) ),
	seed: uniform( 0 ) };

var melon = new THREE.Mesh(
	new THREE.BoxGeometry( 1, 1, 1, 40, 40, 40 ),
	new THREE.MeshPhysicalNodeMaterial( {
		roughness: 0.4,
		metalness: 0.3,
		positionNode: supersphere( shapeOptions ),
		normalNode: supersphere.normal( shapeOptions ),
		colorNode: watermelon( colorOptions )
	} )
);

scene.add( melon );



var exponents = [ -0.5, 0, 1, 4 ],
	colors = [
		new THREE.Color( 10145074 ),
		new THREE.Color( 7970090 ),
		new THREE.Color( 5472346 ),
		new THREE.Color( 25600 ),
		new THREE.Color( 0x00ff00 ),
	],
	backgrounds = [
		new THREE.Color( 25600 ),
		new THREE.Color( 12506285 ),
		new THREE.Color( 14212790 ),
		new THREE.Color( 10145074 ),
		new THREE.Color( 0 ),
	],
	scales = [ 1.75, 1.5, 1.25, 1 ];

var idx1 = 0,
	idx2 = 0;

function changeMelon( ) {

	idx1 += Math.round( 2*Math.random() )+1;
	idx2 += Math.round( 2*Math.random() )+1;

	var target = {
		exponent: exponents[ idx1%exponents.length ],
		color: colors[ idx2%colors.length ],
		background: backgrounds[ idx2%backgrounds.length ],
		scale: scales[ idx1%scales.length ],
		seed: data.seed+1,
	};


	new TWEEN.Tween( data )
		.to( target, 800 )
		.easing( TWEEN.Easing.Elastic.Out )
		.delay( 800 )
		.start()
		.onComplete( changeMelon );

}

changeMelon();

function animationLoop( t ) {

	TWEEN.update();
	t=14000;
	shapeOptions.exponent.value = data.exponent;

	colorOptions.color.value.copy( data.color );
	colorOptions.background.value.copy( data.background );
	colorOptions.seed.value = data.seed;

	melon.rotation.z = t / 3500;
	melon.rotation.y = t / 2500;
	melon.scale.setScalar( data.scale );

	renderer.render( scene, camera );

}

renderer.setAnimationLoop( animationLoop );
