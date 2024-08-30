var audio = new Audio( "sounds/all-sounds.mp3" );

import * as THREE from "three";
import { mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';
import { SimplexNoise } from "three/addons/math/SimplexNoise.js";

import { gasGiant } from "tsl-textures/gas-giant.js";
import { protozoa } from "tsl-textures/protozoa.js";
import { dysonSphere } from "tsl-textures/dyson-sphere.js";
import { simplexNoise } from "tsl-textures/simplex-noise.js";
import { planet } from "tsl-textures/planet.js";
import { stars } from "tsl-textures/stars.js";



// online demo or movie capture
var MOVIE = false;



// all times (in ms)

var TIME = -1;
var SLIDE = ( 18000-1000 )-( MOVIE?3000:0 );
var CLOSING = 12000;
var NERVOUS = 8000;
var EXPLODE = 200;

var SLIDE_START = 1000+1000;
var SLIDE_END = SLIDE_START+SLIDE;

var CLOSING_START = SLIDE_END+2000;
var CLOSING_END = CLOSING_START+CLOSING;

var NERVOUS_START = CLOSING_END;
var NERVOUS_END = NERVOUS_START+NERVOUS;

var EXPLODE_START = NERVOUS_END;
var EXPLODE_END = EXPLODE_START+EXPLODE;

var BOOM_A = EXPLODE_END + 3700;
var BOOM_B = BOOM_A + 3075;
var BOOM_C = BOOM_B + 3075;
var BOOM_SPAN = 750;

var WAKEUP_END = 58900-( MOVIE?3000:0 );
var WAKEUP_START = WAKEUP_END-300;



// HTML elements

var startElem = document.getElementById( 'start' );
var whiteElem = document.getElementById( 'white' );
var hintElem = document.getElementById( 'hint' );
var creditsElem=document.getElementById( 'credits' );

startElem.addEventListener( 'click', start );



// general setup

console.clear();

var scene = new THREE.Scene();
scene.background = new THREE.Color( "black" );

var camera = new THREE.PerspectiveCamera( 30, innerWidth / innerHeight, 0.01 );
camera.position.set( 0, 0, 8 );

var renderer = new THREE.WebGPURenderer( { antialias: true } );
renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.PCFSoftShadowMap;
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

var inLight = new THREE.PointLight( 'white', 10, 5 );

var outLight = new THREE.SpotLight( 'azure', 5, 10, 1.5, 1 );
outLight.position.set( 0, 0, 7 );

var deckLight = new THREE.SpotLight( 'LightSteelBlue', 0.2, 0, 0.5, 1, 1 );
deckLight.position.copy( camera.position );
deckLight.target = new THREE.Object3D();

var planetLight = new THREE.DirectionalLight( 'white', 3 );//, 100, 1, 1 );
planetLight.position.set( -5, 6, -10 );

scene.add( inLight, outLight, deckLight, deckLight.target, planetLight );




// space stars

var starsParams = {
	...stars.defaults,
	scale: -2,
	density: 0,
	background: new THREE.Color( 'black' ),
};

var cosmos = new THREE.Mesh(
	new THREE.IcosahedronGeometry( 100 ),
	new THREE.MeshBasicNodeMaterial( {
		side: THREE.BackSide,
		colorNode: stars( starsParams ),
	} )
);

scene.add( cosmos );



// space station

var stationParams = {
	...dysonSphere.defaults,
	scale: 1,
	color: new THREE.Color( 'white' ),
	background: new THREE.Color( 'black' ),
};

var station = new THREE.Mesh(
	new THREE.TorusGeometry( 2, 0.1, 20, 100 ).scale( 1, 1, 3 ),
	new THREE.MeshPhysicalNodeMaterial( {
		roughness: 0.7,
		metalness: 0.3,
		side: THREE.DoubleSide,
		colorNode: dysonSphere( stationParams ).add( THREE.vec3( 0.15, 0.075, 0 ) ),
	} )
);
scene.add( station );

var station2 = station.clone();
station2.rotation.x = Math.PI/2;
station.add( station2 );

var station3 = station2.clone();
station3.rotation.y = Math.PI/2;
station2.add( station3 );

function updateStation( t ) {

	station.rotation.set( t / 6500, t/4600, t/5700 );

}



// the blob

var	blobNervous = 0;
var	blobExplode = 0;

var blobParams = {
	...protozoa.defaults,
	scale: THREE.uniform( 1 ),
	fat: THREE.uniform( 0.3 ),
	amount: THREE.uniform( 0.5 ),
	background: new THREE.Color( 'azure' ),
	seed: THREE.uniform( 0 )
};

var blob = new THREE.Mesh(
	new THREE.IcosahedronGeometry( 1, 20 ),
	new THREE.MeshPhysicalNodeMaterial( {
		side: THREE.DoubleSide,
		transparent: true,
		colorNode: protozoa( blobParams ).mul( 2 ),
		opacity: 1,

		roughness: 0.65,
		metalness: 3,

		transmission: 1,
		thickness: 15,

		iridescence: 1.2,
		iridescenceThicknessRange: [ 100, 1000 ],

		specularIntensity: 2,

		sheen: 1,
		sheenRoughness: 1,
		sheenColor: new THREE.Color( 'lime' ),
	} )
);
scene.add( blob );

var blobGeometry = blob.geometry,
	blopPosition = blobGeometry.getAttribute( 'position' );

blobGeometry.deleteAttribute( 'uv' );
blobGeometry = mergeVertices( blobGeometry );
blobGeometry.computeVertexNormals();

function updateBlob( t ) {

	var blobScale = 1 + 4*blobExplode,
		blobWaves = 0.15*blobNervous*( 1-blobExplode );

	for ( var i=0; i<blopPosition.count; i++ ) {

		v.fromBufferAttribute( blopPosition, i );
		v.setLength( 1 );
		var len = 1+blobWaves*simplex.noise( v.x-v.z+Math.sin( t/1000 ), v.y+v.z+Math.cos( t/1000 ) )**2;
		v.setLength( len );
		blopPosition.setXYZ( i, v.x, v.y, v.z );

	}

	blopPosition.needsUpdate = true;
	blobGeometry.computeVertexNormals();

	blobParams.scale.value = 2 - 1 * blobExplode;
	blobParams.fat.value = 0.3 + 0.7 * blobExplode;
	blobParams.amount.value = 0.2 + 0.8 * blobExplode;
	blobParams.seed.value = t / ( 10000 - 1000 * blobExplode );

	blob.scale.setScalar( blobScale );
	blob.material.opacity = 1 - 0.15*blobExplode;

}



// observation deck

var deckMap = new THREE.TextureLoader().load( 'textures/window-frame.jpg' );
deckMap.wrapS = deckMap.wrapT = THREE.MirroredRepeatWrapping;
deckMap.repeat.set( 70, 2 );
deckMap.offset.set( 0.5, 0 );

var deckColorNode = simplexNoise( {
	...simplexNoise.defaults,
	balance: 0.3,
	scale: 5.5,
	color: new THREE.Color( 'lightgray' ),
	background: new THREE.Color( 'black' )
} ).div( 100 );

var deck = new THREE.Mesh(
	new THREE.CylinderGeometry( 1, 1, 0.3, 30, 1, true ).rotateY( Math.PI/30 ),
	new THREE.MeshPhysicalNodeMaterial( {
		transparent: true,
		alphaMap: deckMap,
		side: THREE.BackSide,
		colorNode: deckColorNode,
		bumpMap: deckMap,
		bumpScale: 10,
	} )
);

deck.rotation.y = 0.03;
deck.renderOrder = 1;
deck.position.set( 0, 0, 8 );

scene.add( deck );



// ceiling and floor of observation deck

var deckCeiling = new THREE.Mesh(
	new THREE.SphereGeometry( 1, 30, 5, 0, 2*Math.PI, 0, Math.PI/2 ).scale( 1, 0.025, 1 ).translate( 0, 0.15, 0 ),
	new THREE.MeshPhysicalNodeMaterial( {
		side: THREE.DoubleSide,
		colorNode: deckColorNode,
	} )
);

var deckFloor = new THREE.Mesh(
	new THREE.SphereGeometry( 1, 30, 5, 0, 2*Math.PI, Math.PI/2, Math.PI/2 ).scale( 1, 0.025, 1 ).translate( 0, -0.15, 0 ),
	new THREE.MeshPhysicalNodeMaterial( {
		side: THREE.DoubleSide,
		colorNode: deckColorNode,
	} )
);

deck.add( deckFloor, deckCeiling );



// Jupiter

var jupiterParams = {
	...gasGiant.defaults,
	turbulence: 0.5,
	blur: 0.4,
	scale: 2.5,
	colorC: new THREE.Color( 0xFFE0D0 ),
	seed: THREE.uniform( 3 ),
};

var jupiter = new THREE.Mesh(
	new THREE.IcosahedronGeometry( 1, 20 ),
	new THREE.MeshPhysicalNodeMaterial( {
		colorNode: gasGiant( jupiterParams ),
	} )
);

jupiter.scale.setScalar( 8 );
jupiter.position.set( -34/1.5, 0, -5 ); // ^..^^

scene.add( jupiter );

function updateJupiter( t ) {

	jupiter.rotation.set( 0, Math.PI/2+t/150000, 0.7, 'YZX' );
	jupiterParams.seed.value = 114-t/10000;

}



// Europa moon

var dSaturation = 0.1;
var dLightness = -0.3;

var europaParams = {
	scale: 1.44,
	iterations: 7,
	levelSea: 0,
	levelMountain: 0.354,
	balanceWater: 0.3,
	balanceSand: 0.365,
	balanceSnow: 0.8,
	colorDeep: new THREE.Color( 16579316 ).offsetHSL( 0, dSaturation, dLightness ),
	colorShallow: new THREE.Color( 15853529 ).offsetHSL( 0, dSaturation, 0.2+dLightness ),
	colorBeach: new THREE.Color( 14931129 ).offsetHSL( 0, dSaturation, dLightness ),
	colorGrass: new THREE.Color( 15185568 ).offsetHSL( 0, dSaturation, dLightness ),
	colorForest: new THREE.Color( 12355977 ).offsetHSL( 0, dSaturation, dLightness ),
	colorSnow: new THREE.Color( 7756371 ).offsetHSL( 0, dSaturation, dLightness ),
	seed: 2660
};

var europa = new THREE.Mesh(
	new THREE.IcosahedronGeometry( 1, 20 ),
	new THREE.MeshPhysicalNodeMaterial( {
		colorNode: planet( europaParams ).mul( 1 ),
	} )
);

europa.scale.setScalar( 2 );
europa.position.set( -23+12, -2, -4 ); //^..^^

scene.add( europa );

function updateEuropa( t ) {

	europa.rotation.set( 0.7, t/3000, 0, 'XYZ' );

}

planetLight.target = europa;



// camera animation

function updateCamera( t ) {

	if ( t<SLIDE_START ) return;

	var k;

	if ( t<=SLIDE_END ) {

		k = THREE.MathUtils.mapLinear( t, SLIDE_START, SLIDE_END, 0, 1 );
		k = THREE.MathUtils.smoothstep( k, 0, 1 );
		k = THREE.MathUtils.mapLinear( k, 0, 1, 4.0, Math.PI );
		v.setFromSphericalCoords( 1, Math.PI/2, k );
		v.add( camera.position );
		camera.lookAt( v );

		deckLight.target.position.copy( v );
		return;

	}

	if ( t<=CLOSING_END ) {

		k = THREE.MathUtils.mapLinear( t, CLOSING_START, CLOSING_END, -Math.PI, 0 );
		k = THREE.MathUtils.smootherstep( ( Math.cos( k )+1 )/2, 0, 1 );

		camera.position.y = 0-0.079*k;
		camera.position.z = 8-0.72*k;

		camera.lookAt( 0, 0, 0 );

		deckLight.intensity = 0.2 - 0.15*k**0.5;
		deckLight.target.position.set( 0, 0, 0 );

		return;

	}

	if ( t>EXPLODE_END ) {

		var s0 = simplex.noise( t/3000, t/5700, t/5900 )**3;
		var s1 = simplex.noise( t/5000, t/4700, t/4900 )**3;
		var s2 = THREE.MathUtils.mapLinear( t, EXPLODE_END+1500, WAKEUP_END-12000, -Math.PI, Math.PI );
		s2 = THREE.MathUtils.clamp( s2, -Math.PI, Math.PI );
		s2 = ( Math.cos( s2 )+1 )**3;

		camera.position.z = 8-0.72 + 0.000005*( t-EXPLODE_END );
		camera.lookAt( 4*s1-2*s2, s0 + 0.000005*( t-EXPLODE_END ), 0 );
		return;

	}

	camera.lookAt( 0, 0, 0 );

}



// while the canvas is hidden blow annother element, render
// several scenes, so that the shaders get precompiled
// without this, there is a brief pause when a new object
// enters the frustum

renderer.setAnimationLoop( prebuffer );

var angle = 0;

function prebuffer( ) {

	angle = angle+Math.PI/4;
	v.setFromSphericalCoords( 1, Math.PI/2, angle );
	v.add( camera.position );
	camera.lookAt( v );

	renderer.render( scene, camera );

	// if a full circle is done, stop making more renderings
	if ( angle>2*Math.PI ) {

		hintElem.innerHTML = ( MOVIE?'':'Click to start ' )+'live streaming';
		updateCamera( SLIDE_START );
		renderer.render( scene, camera );
		renderer.setAnimationLoop( animationLoop );

	}

}



var started = false;

function start() {

	startElem.style.filter = 'opacity(1)';
	hintElem.innerHTML = 'Live streaming';
	audio.play();
	started = true;

}



// main animation Loop

var blackBackground = 1;

function animationLoop( t ) {

	var q = t;

	if ( !started ) {

		blackBackground *= 0.99;
		startElem.style.background = `rgba(0,0,0,${blackBackground})`;
		TIME = t;

	}

	t -= TIME;

	if ( 400<t && t<( MOVIE?3400:1400 ) ) {

		startElem.style.filter = `opacity(${1-( t-400 )/( MOVIE?3000:1000 )})`;

	}

	if ( t>( MOVIE?3400:1400 ) ) {

		startElem.style.display = 'none';

	}

	// manage nervousness
	if ( NERVOUS_START<=t && t<=NERVOUS_END ) {

		blobNervous = ( t-NERVOUS_START )/( NERVOUS_END-NERVOUS_START );

	}

	// manage explosion
	if ( EXPLODE_START<=t && t<=EXPLODE_END ) {

		blobExplode = ( t-EXPLODE_START )/( EXPLODE_END-EXPLODE_START );

	}

	updateCamera( t );
	updateStation( t );
	updateBlob( t );
	updateJupiter( q );
	updateEuropa( q );

	var k = 0;

	if ( BOOM_A<t && t<BOOM_A+BOOM_SPAN ) k = ( t-BOOM_A )/BOOM_SPAN;
	if ( BOOM_B<t && t<BOOM_B+BOOM_SPAN ) k = ( t-BOOM_B )/BOOM_SPAN;
	if ( BOOM_C<t && t<BOOM_C+BOOM_SPAN ) k = ( t-BOOM_C )/BOOM_SPAN;

	if ( k>0 ) {

		camera.position.y = -0.079 + 0.003*( 1-k )*Math.cos( 50*k );
		blobParams.fat.value = 1 + 0.25*( 1-k );

	}

	if ( WAKEUP_START<t && t<=WAKEUP_END ) {

		whiteElem.style.display = 'block';
		whiteElem.style.filter = `opacity(${THREE.MathUtils.mapLinear( t, WAKEUP_START, WAKEUP_END, 0, 1 )**2})`;

	}

	if ( t>WAKEUP_END ) {

		whiteElem.style.filter = `opacity(1)`;

	}

	if ( t>WAKEUP_END+600 ) {

		creditsElem.style.display = 'table';
		renderer.setAnimationLoop( null );

	}

	renderer.render( scene, camera );

}

