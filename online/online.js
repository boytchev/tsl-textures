
import * as THREE from "three";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as lil from "three/addons/libs/lil-gui.module.min.js";
import WebGPURenderer from 'three/addons/renderers/webgpu/WebGPURenderer.js';
import { MeshPhysicalNodeMaterial } from 'three/nodes';
import { mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';
import { dynamic } from 'tsl-textures/tsl-utils.js';


const HOME_URL = '../';
const USE_BALL = 0;
const USE_CUBE = 1;
const USE_HEAD = 2;
const USE_GEOMETRY = USE_BALL;

var params = {},
	dynamics = {};



// setting up the scene

var renderer = new WebGPURenderer( { antialias: true } );
renderer.setSize( innerWidth, innerHeight );
renderer.setAnimationLoop( animationLoop );
renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
document.body.appendChild( renderer.domElement );

var scene = new THREE.Scene();
scene.background = new THREE.Color( 'white' );

var camera = new THREE.PerspectiveCamera( USE_GEOMETRY == USE_BALL?5:60, innerWidth/innerHeight );
camera.position.set( 0, 0, USE_GEOMETRY == USE_BALL?30:4 );
camera.lookAt( scene.position );

var light = new THREE.DirectionalLight( 'white', 1.5 );
light.decay = 0;
scene.add( light );

var ambientLight = new THREE.AmbientLight( 'white', 2 );
scene.add( ambientLight );

var controls = new OrbitControls( camera, renderer.domElement );
controls.enableDamping = true;

var geometry;

switch ( USE_GEOMETRY ) {

	case USE_BALL:
		geometry = new THREE.IcosahedronGeometry( 1, 20 );
		break;
	case USE_CUBE:
		geometry = new THREE.BoxGeometry( 2, 2, 2 );
		break;
	case USE_HEAD:
		var result = await new GLTFLoader().loadAsync(
			'../assets/models/LeePerrySmith/LeePerrySmith.glb' );
		geometry = result.scene.children[ 0 ].geometry;
		break;

}

geometry = mergeVertices( geometry );
geometry.computeTangents();

var model = new THREE.Mesh(
	geometry,
	new MeshPhysicalNodeMaterial( )
);
scene.add( model );

if ( USE_GEOMETRY == USE_HEAD ) {

	model.scale.setScalar( 0.45 );
	model.rotation.set( 0.2, -0.4, 0 );

}




// manage window resizes

window.addEventListener( "resize", onResize );

function onResize( /*event*/ ) {

	camera.aspect = innerWidth/innerHeight;

	camera.updateProjectionMatrix( );

	renderer.setSize( innerWidth, innerHeight );

}

onResize( );







function animationLoop( /*t*/ ) {

	controls.update( );
	light.position.copy( camera.position );
	renderer.render( scene, camera );

}



function install( tslTexture ) {

	// process URL options
	var urlAddress = window.location.search.split( '#' )[ 0 ], // skip all after #
		urlParameters = new URLSearchParams( urlAddress ),
		url = {};

	for ( var [ key, value ] of urlParameters.entries() ) {

		if ( value == 'true' )
			url[ key ] = true;
		else
			if ( value == 'false' )
				url[ key ] = false;
			else
				url[ key ] = parseFloat( value );

	}

	for ( const [ key, value ] of Object.entries( tslTexture.defaults ) )
		if ( key[ 0 ]!='$' ) {

			if ( value.isColor )
				params[ key ] = new THREE.Color( url[ key ] ?? value );
			else
				params[ key ] = url[ key ] ?? value;

		}


	var name = tslTexture.defaults.$name;
	var filename = name.split( ' ' ).join( '-' ).toLowerCase();

	var funcname = name.split( ' ' );
	for ( var i=0; i<funcname.length; i++ ) {

		funcname[ i ] = funcname[ i ].toLowerCase();
		if ( i > 0 ) funcname[ i ] = funcname[ i ][ 0 ].toUpperCase() + funcname[ i ].slice( 1 );

	}

	funcname = funcname.join( '' );

	var title = `<big><em>${tslTexture.defaults.$name}</em> TSL texture</big>
			<small class="fullline">
				<span id="home" class="link">HOME</span> &middot; 
				<span id="url" class="link">LINK</span> &middot; 
				<span id="code" class="link">CODE</span> &middot; 
				<span id="info" class="link">INFO</span>`;

	if ( isFinite( tslTexture.defaults.seed ) ) {

		title += ` &middot; 
				<span id="refresh" class="link">AGAIN</span>`;

	}

	title += `</small>`;

	var guiOptions = { title: title };
	if ( tslTexture.defaults.$width )
		guiOptions.width = tslTexture.defaults.$width;

	var gui = new lil.GUI( guiOptions );
	gui.$title.style.marginBottom = "2em";
	gui.onChange( processParameters );

	document.getElementById( 'home' ).addEventListener( 'click', goHome );
	document.getElementById( 'info' ).addEventListener( 'click', ( event )=>{

		goToWebPage( event, filename );

	} );
	document.getElementById( 'url' ).addEventListener( 'click', ( event )=>{

		shareURL( event, name );

	} );
	document.getElementById( 'code' ).addEventListener( 'click', ( event )=>{

		getCode( event, funcname, filename, tslTexture );

	} );
	document.getElementById( 'refresh' )?.addEventListener( 'click', refreshSeed );

	onResize( );

	dynamics = dynamic( params );


	if ( tslTexture.defaults.$normalNode ) {

		model.material.normalNode = tslTexture( dynamics );

	} else {

		model.material.colorNode = tslTexture( dynamics );
		if ( tslTexture.opacity ) {

			model.material.transparent = true;
			model.material.opacity = 1;
			model.material.side = THREE.DoubleSide;
			model.material.opacityNode = tslTexture.opacity( dynamics );

		}

	}

	processParameters( ); // causes recalculation of dynamics

	return gui.addFolder( '<big>Options</big>' );

}



function processParameters( ) {

	// copy all numeric parameters from params to dynamics
	// cobvert all color parameters to THREE.Color
	// ignore parameter called '$...' and 'seed'

	for ( const [ key, value ] of Object.entries( dynamics ) )
		if ( key != 'seed' && key[ 0 ] != '$' )
			if ( value instanceof THREE.Color )
				dynamics[ key ].value.set( params[ key ]);
			else
				dynamics[ key ].value = params[ key ];

}


function shareURL( event, name ) {

	event.stopPropagation();

	var url = [];

	for ( const [ key, value ] of Object.entries( params ) )
		if ( value instanceof THREE.Color )
			url.push( `${key}=${value.getHex()}` );
		else
			url.push( `${key}=${value}` );

	url = url.join( '&' );

	url = window.location.href.split( '?' )[ 0 ].split( '#' )[ 0 ] + '?' + url;

	navigator.clipboard.writeText( url );

	alert( `URL for this ${name} copied to the clipboard.` );

}



function getCode( event, name, filename, tslTexture ) {

	event.stopPropagation();

	var paramsStr = [];

	for ( const [ key, value ] of Object.entries( params ) )
		if ( value instanceof THREE.Color )
			paramsStr.push( `${key}: new THREE.Color(${value.getHex()})` );
		else
			paramsStr.push( `${key}: ${value}` );

	paramsStr = paramsStr.join( `,\n	` );

	var js = `
<script type="importmap">
	{
		"imports": {
			"three": "https://cdn.jsdelivr.net/npm/three@0.164.0/build/three.module.js",
			"three/nodes": "https://cdn.jsdelivr.net/npm/three@0.164.0/examples/jsm/nodes/Nodes.js",
			"tsl-textures/": "../src/"
		}
	}
</script>

import { ${name} } from "tsl-textures/${filename}.js";
`;
	if ( tslTexture.defaults.$normalNode )
		js += `
model.material.normalNode = ${name} ( {
	${paramsStr}
} );
`;
	else
		js += `model.material.colorNode = ${name} ( {
	${paramsStr}
} );
`;

	if ( tslTexture.opacity ) {

		js += `
model.material.transparent = true;
model.material.opacity = 1;
model.material.side = THREE.DoubleSide;
model.material.opacityNode = ${name}.opacity ( {
	${paramsStr}
} );
`;

	}


	navigator.clipboard.writeText( js );

	alert( `Javascript code fragment for this ${name} copied to the clipboard.` );

}


function goHome( event ) {

	event.stopPropagation();
	window.location.assign( HOME_URL );

}


function goToWebPage( event, filename ) {

	event.stopPropagation();
	window.location.assign( `../docs/${filename}.html` );

}


function refreshSeed( event ) {

	event.stopPropagation();
	if ( typeof dynamics.seed != 'undefined' ) {

		params.seed = Math.floor( 10000*Math.random() );
		dynamics.seed.value = params.seed;

	}

}


export { scene, model, install, params, light, ambientLight };
