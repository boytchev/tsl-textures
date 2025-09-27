
// TO DO:	polka-dots


import * as THREE from "three";
import { uniform } from "three/tsl";
import { OrbitControls } from "three/addons/controls/OrbitControls.js";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import * as lil from "three/addons/libs/lil-gui.module.min.js";
import { mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';
import { dynamic, hideFallbackWarning, overlayPlanar, showFallbackWarning } from "tsl-textures";

const THREEJS = '0.174.0';

const HOME_URL = '../';
const USE_BALL = 0;
const USE_CUBE = 1;
const USE_HEAD = 2;
const USE_ANIM = 3;

// bitmasks
const ADD_NOTHING = 0;
const ADD_GRID = 1;
const ADD_AUTOROTATION = 2;


var params = {},
	dynamics = {},
	selectorParams = { show: false };

const EXPORT_MAP = 1;
//const EXPORT_EQUI_MAP = 2;
//const EXPORT_CUBE_MAP = 3;

var exportOptions = {
	width: 1024,
	height: 1024,
	type: EXPORT_MAP,
	map: null,
	alphaMap: null,
	normalMap: null,
	roughnessMap: null,
};

var exportCanvas, exportRenderer, exportScene, exportCamera, exportModel, exportDynamics;

// check WebGPU
showFallbackWarning( );


// setting up the scene

var renderer = new THREE.WebGPURenderer( { antialias: true } );
renderer.setSize( innerWidth, innerHeight );
renderer.setAnimationLoop( animationLoop );
renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
document.body.appendChild( renderer.domElement );

var scene = new THREE.Scene();
scene.background = new THREE.Color( 'white' );

var camera = new THREE.PerspectiveCamera( 60, innerWidth/innerHeight );
camera.lookAt( scene.position );

var light = new THREE.DirectionalLight( 'white', 1.5 );
light.decay = 0;
scene.add( light );


var ambientLight = new THREE.AmbientLight( 'white', 2 );
scene.add( ambientLight );

var controls = new OrbitControls( camera, renderer.domElement );
controls.enableDamping = true;
controls.zoomSpeed = 5;
controls.autoRotateSpeed = 1;

var geometry = new THREE.BufferGeometry();

var model = new THREE.Mesh(
	geometry,
	new THREE.MeshPhysicalNodeMaterial( {} )
);
scene.add( model );

var mixer, action;




// manage window resizes

window.addEventListener( "resize", onResize );

function onResize( /*event*/ ) {

	camera.aspect = innerWidth/innerHeight;

	camera.updateProjectionMatrix( );

	renderer.setSize( innerWidth, innerHeight );

}

onResize( );





function animationLoop( /*t*/ ) {

	hideFallbackWarning( );

	if ( mixer ) {

		mixer.update( 1/144 );

	}

	controls.update( );
	light.position.copy( camera.position );
	renderer.renderAsync( scene, camera );

}



function install( tslTexture, useGeometry=USE_BALL, addFeature=ADD_NOTHING ) {

	// adjust camera
	if ( useGeometry == USE_BALL ) {

		camera.fov = 5;
		camera.position.set( 0, 0, 30 );

	} else if ( useGeometry == USE_HEAD ) {

		camera.fov = 60;
		camera.position.set( 0, 0, 10 );

	} else {

		camera.fov = 60;
		camera.position.set( 2, 2, 4 );

	}

	camera.updateProjectionMatrix();


	// adjust lights
	if ( useGeometry == USE_CUBE ) {

		light.intensity = 3;
		ambientLight.intensity = 1;

	} else if ( useGeometry == USE_HEAD ) {

		light.intensity = 2.5;
		ambientLight.intensity = 0.5;

	}


	var texture;
	if ( addFeature & ADD_GRID ) {

		texture = new THREE.TextureLoader().load( '../assets/textures/grid.png' );
		texture.wrapS = THREE.RepeatWrapping;
		texture.wrapT = THREE.RepeatWrapping;
		texture.anisotropy = 16; // cannot find capabilities.getMaxAnisotropy() for WebGPU

	}


	if ( addFeature & ADD_AUTOROTATION ) {

		controls.autoRotate = true;

	}

	// adjust geometry
	switch ( useGeometry ) {

		case USE_BALL:
			geometry = new THREE.IcosahedronGeometry( 1, 20 );
			geometry = mergeVertices( geometry );
			geometry.computeTangents();
			if ( addFeature & ADD_GRID ) {

				texture.repeat.set( 6, 3 );
				model.material.map = texture;

			}

			break;

		case USE_CUBE:
			geometry = new THREE.BoxGeometry( 2, 2, 2, 100, 100, 100 );
			//geometry = mergeVertices( geometry );
			geometry.computeTangents();
			if ( addFeature & ADD_GRID ) {

				texture.repeat.set( 2, 2 );
				model.material.map = texture;

			}

			break;

		case USE_HEAD:
			geometry = new THREE.BoxGeometry( 2, 2, 2 );
			new GLTFLoader().load(
				'../assets/models/LeePerrySmith/LeePerrySmith.glb', ( result )=>{

					geometry = result.scene.children[ 0 ].geometry;
					geometry = mergeVertices( geometry );
					geometry.translate( 0.12, 0, 0 );
					geometry.computeTangents();
					scene.remove( model );
					model = new THREE.Mesh( geometry, model.material );
					geometry.needsUpdate = true;
					scene.add( model );

				} );
			break;

		case USE_ANIM:
			geometry = new THREE.BoxGeometry( 2, 2, 2 );
			new GLTFLoader().load(
				'../assets/models/Soldier/Soldier.glb', ( result )=>{

					//geometry = result.scene.children[ 0 ].geometry;
					//geometry = mergeVertices( geometry );
					//geometry.computeTangents();
					var material = model.material;
					scene.remove( model );
					//model = new THREE.Mesh( geometry, model.material );
					//geometry.needsUpdate = true;

					model = result.scene.children[ 0 ];
					model.scale.setScalar( 0.1 );

					model.traverse( child => {

						if ( child.isMesh ) {

							child.material = material;
							child.material.map = texture;

						}

					} );


					mixer = new THREE.AnimationMixer( model );
					action = mixer.clipAction( result.animations[ 3 ]);
					action.play();

					scene.add( model );

				} );
			break;

	}

	model.geometry = geometry;


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
				if ( value.indexOf( ',' )>0 ) {

					var split = value.split( ',' ).map( x=>parseFloat( x ) );
					if ( split.length==2 )
						url[ key ] = new THREE.Vector2( ...split );
					else
						if ( split.length==3 )
							url[ key ] = new THREE.Vector3( ...split );
						else
							url[ key ] = split;

				} else
					url[ key ] = parseFloat( value );

	}

	for ( const [ key, value ] of Object.entries( tslTexture.defaults ) )
		if ( key[ 0 ]!='$' ) {

			if ( value.isColor )
				params[ key ] = new THREE.Color( url[ key ] ?? value );
			else
				if ( value.isVector3 || value.isVector2 ) {

					params[ key ] = url[ key ] ?? value;

				} else
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

	} else

		if ( tslTexture.defaults.$positionNode ) {

			model.material.positionNode = tslTexture( dynamics );
			if ( tslTexture.normal ) {

				model.material.normalNode = tslTexture.normal( dynamics );

			}

			if ( tslTexture.defaults.$selectorPlanar ) {

				model.material.emissiveNode = overlayPlanar( dynamics );
				dynamics.selectorShow = uniform( 0 );

			}


		} else {

			model.material.colorNode = tslTexture( dynamics );

			if ( tslTexture.normal ) {

				model.material.normalNode = tslTexture.normal( dynamics );

			}

			if ( tslTexture.roughness ) {

				model.material.roughnessNode = tslTexture.roughness( dynamics );

			}

			if ( tslTexture.opacity ) {

				model.material.transparent = true;
				model.material.opacity = 1;
				model.material.side = THREE.DoubleSide;
				model.material.opacityNode = tslTexture.opacity( dynamics );

			}

		}

	processParameters( ); // causes recalculation of dynamics

	var optionsFolder = gui.addFolder( '<big>Options</big>' );

	if ( !tslTexture.defaults.$positionNode ) {

		var exportFolder = gui.addFolder( '<big>Export</big>' ).close();

		exportOptions.map = ()=>{

			downloadImage( tslTexture, name, 1 );

		};

		exportOptions.normalMap = ()=>{

			downloadImage( tslTexture, name, 2 );

		};

		exportOptions.alphaMap = ()=>{

			downloadImage( tslTexture, name, 3 );

		};

		exportOptions.roughnessMap = ()=>{

			downloadImage( tslTexture, name, 4 );

		};

		exportFolder.add( exportOptions, 'width', [ 4096, 2048, 1024, 512, 256, 128 ]).name( '<right>width</right>' );
		exportFolder.add( exportOptions, 'height', [ 4096, 2048, 1024, 512, 256, 128 ]).name( '<right>height</right>' );

		exportFolder.add( exportOptions, 'type', { 'Just map': EXPORT_MAP/*, 'Equi map':EXPORT_EQUI_MAP, 'Cube map': EXPORT_CUBE_MAP*/ } ).name( '<right>type</right>' ).onChange( ()=>{} ).disable();
		if ( !tslTexture.defaults.$normalNode )
			exportFolder.add( exportOptions, 'map' ).name( 'Download color map (*.jpg)' );
		if ( tslTexture.defaults.$normalNode || tslTexture.normal )
			exportFolder.add( exportOptions, 'normalMap' ).name( 'Download normal map (*.jpg)' );
		if ( tslTexture.opacity )
			exportFolder.add( exportOptions, 'alphaMap' ).name( 'Download alpha map (*.jpg)' );
		if ( tslTexture.roughness )
			exportFolder.add( exportOptions, 'roughnessMap' ).name( 'Download roughness map (*.jpg)' );

		initExport( guiOptions.width??245 );

	}

	return optionsFolder;

} // install




camera.fov = 5;
camera.position.set( 0, 0, 30 );
camera.updateProjectionMatrix();




function processParameters( ) {

	if ( exportCanvas ) {

		exportCanvas.style.display = 'none';

	}

	// copy all numeric parameters from params to dynamics
	// cobvert all color parameters to THREE.Color
	// ignore parameter called '$...' and 'seed'

	for ( const [ key, value ] of Object.entries( dynamics ) )
		if ( key != 'seed' && key[ 0 ] != '$' )
			if ( value instanceof THREE.Color )
				dynamics[ key ].value.set( params[ key ]);
			else
				if ( params[ key ] instanceof THREE.Vector3 )
					dynamics[ key ].value.copy( params[ key ]);
				else
					if ( params[ key ] instanceof THREE.Vector2 )
						dynamics[ key ].value.copy( params[ key ]);
					else
						dynamics[ key ].value = params[ key ];

	if ( typeof dynamics.selectorShow !=='undefined' ) {

		dynamics.selectorShow.value = selectorParams.show?1:0;

	}

}


function processExportParameters( ) {

	// copy all numeric parameters from params to dynamics
	// cobvert all color parameters to THREE.Color
	// ignore parameter called '$...' and 'seed'

	for ( const [ key, value ] of Object.entries( exportDynamics ) )
		if ( key != 'seed' && key[ 0 ] != '$' )
			if ( value instanceof THREE.Color )
				exportDynamics[ key ].value.set( params[ key ]);
			else
				if ( params[ key ] instanceof THREE.Vector3 )
					exportDynamics[ key ].value.copy( params[ key ]);
				else
					if ( params[ key ] instanceof THREE.Vector2 )
						exportDynamics[ key ].value.copy( params[ key ]);
					else
						exportDynamics[ key ].value = params[ key ];

	if ( typeof exportDynamics.selectorShow !=='undefined' ) {

		exportDynamics.selectorShow.value = selectorParams.show?1:0;

	}

}


async function shareURL( event, name ) {

	event.stopPropagation();

	var url = [];

	for ( const [ key, value ] of Object.entries( params ) )
		if ( value instanceof THREE.Color )
			url.push( `${key}=${value.getHex()}` );
		else
			if ( value instanceof THREE.Vector3 )
				url.push( `${key}=${value.x},${value.y},${value.z}` );
			else
				if ( value instanceof THREE.Vector2 )
					url.push( `${key}=${value.x},${value.y}` );
				else
					url.push( `${key}=${value}` );

	url = url.join( '&' );

	url = window.location.href.split( '?' )[ 0 ].split( '#' )[ 0 ] + '?' + url;

	await navigator.clipboard.writeText( url );

	alert( `URL for this ${name} copied to the clipboard.` );

}



async function getCode( event, name, filename, tslTexture ) {

	event.stopPropagation();

	var paramsStr = [];

	for ( const [ key, value ] of Object.entries( params ) )
		if ( value instanceof THREE.Color )
			paramsStr.push( `${key}: new THREE.Color(${value.getHex()})` );
		else
			if ( value instanceof THREE.Vector3 )
				paramsStr.push( `${key}: new THREE.Vector3(${value.x},${value.y},${value.z})` );
			else
				if ( value instanceof THREE.Vector2 )
					paramsStr.push( `${key}: new THREE.Vector2(${value.x},${value.y})` );
				else
					paramsStr.push( `${key}: ${value}` );

	paramsStr = paramsStr.join( `,\n	` );

	//"tsl-textures/": "https://cdn.jsdelivr.net/npm/tsl-textures@${TSLTEXTURES}/src/"

	var js = `
<script type="importmap">
  {
    "imports": {
      "three": "https://cdn.jsdelivr.net/npm/three@${THREEJS}/build/three.webgpu.min.js",
      "three/webgpu": "https://cdn.jsdelivr.net/npm/three@${THREEJS}/build/three.webgpu.min.js",
      "three/tsl": "https://cdn.jsdelivr.net/npm/three@${THREEJS}/build/three.tsl.min.js",
      "tsl-textures": "https://cdn.jsdelivr.net/gh/boytchev/tsl-textures/dist/tsl-textures.js"
    }
  }
</script>

import * as THREE from "three";
import { ${name} } from "tsl-textures";
`;
	if ( tslTexture.defaults.$normalNode )
		js += `
model.material.normalNode = ${name} ( {
	${paramsStr}
} );
`;
	else
		if ( tslTexture.defaults.$positionNode ) {

			js += `
model.material.positionNode = ${name} ( {
	${paramsStr}
} );
`;
			if ( tslTexture.normal ) {

				js += `
model.material.normalNode = ${name}.normal ( {
	${paramsStr}
} );
`;

			}

		} else
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


	await navigator.clipboard.writeText( js );

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


function initExport( left ) {

	var width = exportOptions.width,
		height = exportOptions.height;

	exportCanvas = document.createElement( 'canvas' );
	exportCanvas.width = width;
	exportCanvas.height = height;

	document.body.appendChild( exportCanvas );

	exportCanvas.style = `position: absolute; display: none; width:100px !important; height:100px !important; z-index: 1000; border: solid 6px #101010; border-bottom-right-radius:1em; top:0px; left:${left-6}px; `;


	exportRenderer = new THREE.WebGPURenderer( { antialias: true, canvas: exportCanvas } );
	exportRenderer.setSize( width, height );
	exportRenderer.outputColorSpace = THREE.LinearSRGBColorSpace;

	exportCanvas.width = width;
	exportCanvas.height = height;

	exportCanvas.style.width = '100px';
	exportCanvas.style.height = '100px';

	exportScene = new THREE.Scene();

	exportCamera = new THREE.OrthographicCamera( -width/2, width/2, height/2, -height/2, 0, 10000 );
	exportCamera.position.set( 0, 0, 1 );
	exportCamera.lookAt( 0, 0, 0 );
	exportCamera.zoom = 500;
	exportCamera.updateProjectionMatrix();


}


function downloadImage( tslTexture, name, map ) {

	var width = exportOptions.width,
		height = exportOptions.height;

	var widthPx = Math.round( 100*width/Math.max( width, height ) ),
		heightPx = Math.round( 100*height/Math.max( width, height ) );

	exportCanvas.width = widthPx;
	exportCanvas.height = heightPx;

	exportRenderer.setSize( width, height );

	exportCanvas.style.width = widthPx+'px';
	exportCanvas.style.height = heightPx+'px';

	exportCanvas.style.display = 'block';

	exportCamera.left = -width/2;
	exportCamera.right = width/2;
	exportCamera.top = height/2;
	exportCamera.bottom = -height/2;
	exportCamera.updateProjectionMatrix();

	exportModel = new THREE.Mesh(
		new THREE.PlaneGeometry( width/2, height/2 ).translate( 0, 0, -1 ),
		new THREE.MeshBasicNodeMaterial( { color: 'yellow' } )
	);
	exportScene.add( exportModel );

	if ( exportOptions.type==EXPORT_MAP && 'flat' in params ) {

		params.flat = 1;

	}

	exportDynamics = dynamic( params );

	if ( 'seed' in params )
		exportDynamics.seed.value = params.seed;


	processExportParameters( ); // causes recalculation of dynamics

	var suffix = '';

	if ( tslTexture.defaults.$normalNode ) {

		suffix = '-normal';
		exportModel.material.colorNode = tslTexture( exportDynamics ).div( 2 ).add( 0.5 );

	} else {

		if ( map==2 ) {

			suffix = '-normal';
			exportModel.material.colorNode = tslTexture.normal( exportDynamics ).div( 2 ).add( 0.5 );

		} else
			if ( map==3 ) {

				suffix = '-alpha';
				exportModel.material.colorNode = tslTexture.opacity( exportDynamics );

			} else
				if ( map==4 ) {

					suffix = '-roughness';
					exportModel.material.colorNode = tslTexture.roughness( exportDynamics );

				} else {

					suffix = '';
					exportModel.material.colorNode = tslTexture( exportDynamics );

				}

	} // if-else


	var frame = 0;
	exportRenderer.setAnimationLoop( ()=>{

		frame++;
		exportRenderer.renderAsync( exportScene, exportCamera );
		if ( frame>5 ) {

			exportRenderer.setAnimationLoop( null );

			var dataURL = exportCanvas.toDataURL( 'image/jpeg', 1 ); // 0.9 is quality (0 to 1)

			var link = document.createElement( 'a' );
			link.download = name+suffix;
			link.href = dataURL;

			document.body.appendChild( link );
			link.click();
			document.body.removeChild( link );

			exportScene.remove( exportModel );

			if ( exportOptions.type==EXPORT_MAP && 'flat' in params ) {

				params.flat = 0;

			}

		}

	} );


}


export { scene, model, install, params, light, ambientLight, USE_BALL, USE_CUBE, USE_HEAD, USE_ANIM, ADD_NOTHING, ADD_GRID, ADD_AUTOROTATION, selectorParams, controls };
