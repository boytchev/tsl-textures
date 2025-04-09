import * as THREE from "three";
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { float, Fn, positionGeometry, time, uniform, vec2, vec3, vec4 } from "three/tsl";
import { SimplexNoise } from "three/addons/math/SimplexNoise.js";
import { matRotX, matRotY, matRotYXZ, matRotZ, matScale, matTrans, noise } from "tsl-textures";



console.clear( );



// general initialization of the scene, nothing fancy

var scene = new THREE.Scene();
scene.background = new THREE.Color( 0xe0f0ff );

var camera = new THREE.PerspectiveCamera( 30, innerWidth/innerHeight );
camera.position.set( 0, 0, 3.5 );
camera.lookAt( scene.position );

var renderer = new THREE.WebGPURenderer( { antialias: true } );
renderer.outputColorSpace = THREE.LinearSRGBColorSpace;
renderer.setSize( innerWidth, innerHeight );
document.body.appendChild( renderer.domElement );

window.addEventListener( "resize", ( /*event*/ ) => {

	camera.aspect = innerWidth/innerHeight;
	camera.updateProjectionMatrix( );
	renderer.setSize( innerWidth, innerHeight );

} );

var ambientLight = new THREE.AmbientLight( 'white', 3 );
scene.add( ambientLight );

var light = new THREE.DirectionalLight( 'white', 1 );
light.position.set( 0, 0, 1 );
scene.add( light );

var backLight = new THREE.DirectionalLight( 'white', 1 );
backLight.position.set( 0, 0, -1 );
scene.add( backLight );



// load the model and hook its vertices and emission to TSL functions

var overModel = new THREE.Object3D();
scene.add( overModel );

new GLTFLoader().load( 'mc-powerful-deep-chestnut-bougainvillea-t-pose.glb', ( loadedModel )=> {

	var model = loadedModel.scene;

	// center the model
	var center = new THREE.Vector3();
	new THREE.Box3().setFromObject( model, true ).getCenter( center );
	model.position.sub( center );

	// attach shape shaders
	var material = new THREE.MeshStandardNodeMaterial( {
		color: 'black',
		metalness: 0.2,
		roughness: 0.8,
		transparent: true,
		side: THREE.DoubleSide,
		opacityNode: tslOpacityNode( ),
		colorNode: tslColorNode( ),
		positionNode: tslPositionNode( posture ),
		emissiveNode: tslEmissiveNode( posture ),
	} );

	model.traverse( ( child )=>{

		if ( child.isMesh ) child.material = material;

	} );

	overModel.add( model );

} ); // GLTFLoader



// a posture for the model, uniforms are the joints' angles

var posture = {

	chestPos: vec3( 0, 110, 0 ),
	chestSpan: vec2( 90, 120 ),
	chestTurn: uniform( vec3( 0, 0, 0 ) ),

	neckPos: vec3( 0, 136, 0 ),
	neckSpan: vec2( 132, 140 ),
	neckTurn: uniform( vec3( 0, 0, 0 ) ),

	waistPos: vec3( 0, 80, 0 ),
	waistSpan: vec2( 70, 120 ),
	waistTurn: uniform( vec3( 0, 0, 0 ) ),

	kneeLeftPos: vec3( 0, 45.5, 0 ),
	kneeLeftSpan: vec2( 53, 41 ),
	kneeLeftTurn: uniform( vec3( 0, 0, 0 ) ),

	kneeRightPos: vec3( 0, 45.5, 0 ),
	kneeRightSpan: vec2( 53, 41 ),
	kneeRightTurn: uniform( vec3( 0, 0, 0 ) ),

	ankleLeftPos: vec3( 8.5, 9, -5 ),
	ankleLeftSpan: vec2( 15, 5 ),
	ankleLeftTurn: uniform( vec3( 0, 0, 0 ) ),

	ankleRightPos: vec3( -8.5, 9, -5 ),
	ankleRightSpan: vec2( 15, 5 ),
	ankleRightTurn: uniform( vec3( 0, 0, 0 ) ),

	legLeftPos: vec3( 7, 90, -5 ),
	legLeftSpan: vec2( 100, 45 ),
	legLeftTurn: uniform( vec3( 0, 0, 0 ) ),

	legRightPos: vec3( -7, 90, -5 ),
	legRightSpan: vec2( 100, 45 ),
	legRightTurn: uniform( vec3( 0, 0, 0 ) ),

	elbowLeftPos: vec3( 42, 125, -5 ),
	elbowLeftSpan: vec2( 39, 46 ),
	elbowLeftTurn: uniform( vec3( 0, 0, 0 ) ),

	elbowRightPos: vec3( -42, 125, -5 ),
	elbowRightSpan: vec2( -39, -46 ),
	elbowRightTurn: uniform( vec3( 0, 0, 0 ) ),

	forearmLeftPos: vec3( 42, 125, -5 ),
	forearmLeftSpan: vec2( 40, 70 ),
	forearmLeftTurn: uniform( vec3( 0, 0, 0 ) ),

	forearmRightPos: vec3( -42, 125, -5 ),
	forearmRightSpan: vec2( -40, -70 ),
	forearmRightTurn: uniform( vec3( 0, 0, 0 ) ),

	wristLeftPos: vec3( 68, 123, -6 ),
	wristLeftSpan: vec2( 67, 74 ),
	wristLeftTurn: uniform( vec3( 0, 0, 0 ) ),

	wristRightPos: vec3( -68, 123, -6 ),
	wristRightSpan: vec2( -67, -74 ),
	wristRightTurn: uniform( vec3( 0, 0, 0 ) ),

	armLeftPos: uniform( vec3( 12, 124, -5 ) ),
	armLeftSpan: uniform( vec4( 8, 16, 144, 1.4 ) ),
	armLeftTurn: uniform( vec3( 0, 0, 0 ) ),

	armRightPos: uniform( vec3( -12, 124, -5 ) ),
	armRightSpan: uniform( vec4( -8, -16, 144, -1.4 ) ),
	armRightTurn: uniform( vec3( 0, 0, 0 ) ),

};



var selectWaist = Fn( ( { waistSpan } )=>{

	return positionGeometry.y.smoothstep( waistSpan.x, waistSpan.y );

} ); // no .setLayout!



var selectNeck = Fn( ( { neckSpan } )=>{

	return positionGeometry.y.smoothstep( neckSpan.x, neckSpan.y );

} ); // no .setLayout!



var selectChest = Fn( ( { chestSpan } )=>{

	return positionGeometry.y.smoothstep( chestSpan.x, chestSpan.y );

} ); // no .setLayout!



var selectLeft = Fn( ( )=>{

	return positionGeometry.x.smoothstep( -2, 2 );

} ); // no .setLayout!



var selectRight = Fn( ( )=>{

	return positionGeometry.x.smoothstep( 2, -2 );

} ); // no .setLayout!



var selectKneeLeft = Fn( ( { kneeLeftSpan } )=>{

	return positionGeometry.y.smoothstep( kneeLeftSpan.x, kneeLeftSpan.y )
		.mul( selectLeft() );

} ); // no .setLayout!



var selectKneeRight = Fn( ( { kneeRightSpan } )=>{

	return positionGeometry.y.smoothstep( kneeRightSpan.x, kneeRightSpan.y )
		.mul( selectRight() );

} ); // no .setLayout!



var selectAnkleLeft = Fn( ( { ankleLeftSpan } )=>{

	return positionGeometry.y.smoothstep( ankleLeftSpan.x, ankleLeftSpan.y )
		.mul( selectLeft() );

} ); // no .setLayout!



var selectAnkleRight = Fn( ( { ankleRightSpan } )=>{

	return positionGeometry.y.smoothstep( ankleRightSpan.x, ankleRightSpan.y )
		.mul( selectRight() );

} ); // no .setLayout!



var selectLegLeft = Fn( ( { legLeftSpan } )=>{

	return positionGeometry.y.sub( positionGeometry.x.div( 2 ) ).smoothstep( legLeftSpan.x, legLeftSpan.y )
		.mul( positionGeometry.y.smoothstep( legLeftSpan.x, legLeftSpan.y ) )
		.mul( selectLeft() );

} ); // no .setLayout!



var selectLegRight = Fn( ( { legRightSpan } )=>{

	return positionGeometry.y.add( positionGeometry.x.div( 2 ) ).smoothstep( legRightSpan.x, legRightSpan.y )
		.mul( positionGeometry.y.smoothstep( legRightSpan.x, legRightSpan.y ) )
		.mul( selectRight() );

} ); // no .setLayout!
var selectElbowLeft = Fn( ( { elbowLeftSpan } )=>{

	return positionGeometry.x.smoothstep( elbowLeftSpan.x, elbowLeftSpan.y )
		.mul( selectLeft() );

} ); // no .setLayout!



var selectElbowRight = Fn( ( { elbowRightSpan } )=>{

	return positionGeometry.x.smoothstep( elbowRightSpan.x, elbowRightSpan.y )
		.mul( selectRight() );

} ); // no .setLayout!



var selectForearmLeft = Fn( ( { forearmLeftSpan } )=>{

	return positionGeometry.x.smoothstep( forearmLeftSpan.x, forearmLeftSpan.y )
		.mul( selectLeft() );

} ); // no .setLayout!



var selectForearmRight = Fn( ( { forearmRightSpan } )=>{

	return positionGeometry.x.smoothstep( forearmRightSpan.x, forearmRightSpan.y )
		.mul( selectRight() );

} ); // no .setLayout!



var selectWristLeft = Fn( ( { wristLeftSpan } )=>{

	return positionGeometry.x.smoothstep( wristLeftSpan.x, wristLeftSpan.y )
		.mul( selectLeft() );

} ); // no .setLayout!



var selectWristRight = Fn( ( { wristRightSpan } )=>{

	return positionGeometry.x.smoothstep( wristRightSpan.x, wristRightSpan.y )
		.mul( selectRight() );

} ); // no .setLayout!



var selectArmLeft = Fn( ( { armLeftSpan, armLeftPos } )=>{

	return positionGeometry.x
		.add( positionGeometry.y.sub( armLeftPos.y ).div( armLeftSpan.w ) )
		.mul( ( positionGeometry.y.smoothstep( armLeftSpan.z, armLeftPos.y ) ) )
		.smoothstep( armLeftSpan.x, armLeftSpan.y )
		.mul( selectLeft() );

} ); // no .setLayout!



var selectArmRight = Fn( ( { armRightSpan, armRightPos } )=>{

	return positionGeometry.x
		.add( positionGeometry.y.sub( armRightPos.y ).div( armRightSpan.w ) )
		.mul( ( positionGeometry.y.smoothstep( armRightSpan.z, armRightPos.y ) ) )
		.smoothstep( armRightSpan.x, armRightSpan.y )
		.mul( selectRight() );

} ); // no .setLayout!




// generate rotation matrix
const matRotYZX = Fn( ([ angles ])=>{

	var RX = matRotX( angles.x ),
		RY = matRotY( angles.y ),
		RZ = matRotZ( angles.z );

	return RY.mul( RZ ).mul( RX );

} );

matRotYXZ.setLayout( {
	name: 'matRotYXZ',
	type: 'mat4',
	inputs: [
		{ name: 'angles', type: 'vec3' },
	]
} );


var jointRotateMat= Fn( ([ center, angle, amount ])=>{

	var pivot = vec4( center, 0 ),
		R = matRotYXZ( angle.mul( amount ) ),
		T = matTrans( pivot ),
		TN = matTrans( pivot.negate() );

	return T.mul( R ).mul( TN );

} );



var jointRotateMat2= Fn( ([ center, angle, amount ])=>{

	var pivot = vec4( center, 0 ),
		R = matRotYZX( angle.mul( amount ) ),
		S = matScale( float( 1 ).sub( amount.mul( 2*Math.PI ).sub( Math.PI ).cos().add( 1 ).div( 2 ).div( 4 ).mul( angle.z.cos().oneMinus() ) ) ),
		T = matTrans( pivot ),
		TN = matTrans( pivot.negate() );

	return T.mul( R ).mul( S ).mul( TN );

} );



jointRotateMat.setLayout( {
	name: 'jointRotateMat',
	type: 'mat4',
	inputs: [
		{ name: 'center', type: 'vec3' },
		{ name: 'angle', type: 'vec3' },
		{ name: 'amount', type: 'float' },
	]
} );



jointRotateMat2.setLayout( {
	name: 'jointRotateMat2',
	type: 'mat4',
	inputs: [
		{ name: 'center', type: 'vec3' },
		{ name: 'angle', type: 'vec3' },
		{ name: 'amount', type: 'float' },
	]
} );



var tslPositionNode = Fn( ( posture )=>{

	var p = vec4( positionGeometry, 1 ).toVar();

	// left wrist
	p.assign( jointRotateMat( posture.wristLeftPos, posture.wristLeftTurn, selectWristLeft( posture ) ).mul( p ) );

	// right wrist
	p.assign( jointRotateMat( posture.wristRightPos, posture.wristRightTurn, selectWristRight( posture ) ).mul( p ) );

	// left forearm
	p.assign( jointRotateMat( posture.forearmLeftPos, posture.forearmLeftTurn, selectForearmLeft( posture ) ).mul( p ) );

	// right forearm
	p.assign( jointRotateMat( posture.forearmRightPos, posture.forearmRightTurn, selectForearmRight( posture ) ).mul( p ) );

	// left elbow
	p.assign( jointRotateMat( posture.elbowLeftPos, posture.elbowLeftTurn, selectElbowLeft( posture ) ).mul( p ) );

	// right elbow
	p.assign( jointRotateMat( posture.elbowRightPos, posture.elbowRightTurn, selectElbowRight( posture ) ).mul( p ) );

	// left arm
	p.assign( jointRotateMat2( posture.armLeftPos, posture.armLeftTurn, selectArmLeft( posture ) ).mul( p ) );

	// right arm
	p.assign( jointRotateMat2( posture.armRightPos, posture.armRightTurn, selectArmRight( posture ) ).mul( p ) );

	// neck
	p.assign( jointRotateMat( posture.neckPos, posture.neckTurn, selectNeck( posture ) ).mul( p ) );

	// chest
	p.assign( jointRotateMat( posture.chestPos, posture.chestTurn, selectChest( posture ) ).mul( p ) );

	// waist
	p.assign( jointRotateMat( posture.waistPos, posture.waistTurn, selectWaist( posture ) ).mul( p ) );

	// left ankle
	p.assign( jointRotateMat( posture.ankleLeftPos, posture.ankleLeftTurn, selectAnkleLeft( posture ) ).mul( p ) );

	// right ankle
	p.assign( jointRotateMat( posture.ankleRightPos, posture.ankleRightTurn, selectAnkleRight( posture ) ).mul( p ) );

	// left knee
	p.assign( jointRotateMat( posture.kneeLeftPos, posture.kneeLeftTurn, selectKneeLeft( posture ) ).mul( p ) );

	// right knee
	p.assign( jointRotateMat( posture.kneeRightPos, posture.kneeRightTurn, selectKneeRight( posture ) ).mul( p ) );

	// left leg
	p.assign( jointRotateMat( posture.legLeftPos, posture.legLeftTurn, selectLegLeft( posture ) ).mul( p ) );

	// right leg
	p.assign( jointRotateMat( posture.legRightPos, posture.legRightTurn, selectLegRight( posture ) ).mul( p ) );

	return p.xyz;

} );



var tslOpacityNode = Fn( ()=>{

	var s = noise( positionGeometry.div( 4 ) ).mul( 3 );
	var k = positionGeometry.x.mul( 1/2 ).add( s ).cos();
	var l = float( 0 ).add( selectWristLeft( posture ) )
		.add( selectWristRight( posture ) )
		.add( selectAnkleLeft( posture ) )
		.add( selectAnkleRight( posture ) );

	return k.smoothstep( 0.2, 0.5 ).add( time.div( 3 ).sin().add( 1 ).div( 2 ).mul( 7 ).sub( 3 ).clamp( 0, 1 ) ).add( l );

} );



var tslColorNode = Fn( ()=>{

	var s = noise( positionGeometry.div( 4 ) ).mul( 3 );
	var k = positionGeometry.x.mul( 1/2 ).add( s ).cos();
	var n = noise( positionGeometry.div( 0.3 ) ).pow( 3 ).div( 1 );

	return k.smoothstep( 0.5, 0.51 ).mul( vec3( 1.5, 0.5, 0 ) ).add( n );

} );



var tslEmissiveNode = Fn( ( posture )=>{

	var k = float( 0 )
		.add( selectWristLeft( posture ) )
		.add( selectWristRight( posture ) )
		.add( selectAnkleLeft( posture ) )
		.add( selectAnkleRight( posture ) );

	return vec3( k, k, k );

} );



function rigModel( time ) {

	posture.waistTurn.value.set(
		Math.sin( time )/3+0.2,
		Math.cos( time*1.2 )/3,
		Math.sin( time*3 )/2.5
	);

	posture.chestTurn.value.set(
		Math.cos( time*3 )/3,
		Math.sin( time*1.2*2 )/2,
		Math.cos( time*3*1.5 )/3
	);

	posture.neckTurn.value.set(
		Math.cos( time*3 )/2,
		Math.sin( time*1.2*2 )/2,
		Math.cos( time*3*1.5 )/3
	);

	posture.kneeLeftTurn.value.set(
		( Math.cos( time*3 )+1 )/1.5,
		0,
		0,
	);

	posture.kneeRightTurn.value.set(
		( Math.sin( time*2.4 )+1 )/1.5,
		0,
		0,
	);

	posture.ankleLeftTurn.value.set(
		Math.cos( time*3 )/2,
		Math.cos( time*2.8 )/2,
		Math.cos( time*2.2 )/4,
	);

	posture.ankleRightTurn.value.set(
		Math.sin( time*3.2 )/2,
		Math.cos( time*2.3 )/2,
		Math.sin( time*2.1 )/4,
	);


	posture.legLeftTurn.value.set(
		Math.cos( time*3 )/2-0.15,
		0*Math.cos( time*2.8 )/4,
		( Math.cos( time*2.2 )+1 )/4,
	);

	posture.legRightTurn.value.set(
		Math.sin( time*2.2 )/2-0.15,
		0*Math.sin( time*3.2 )/4,
		-( Math.sin( time*2.6 )+1 )/4,
	);

	posture.elbowLeftTurn.value.set(
		0,
		-( Math.cos( time*2-1 )+1 ),
		0,
	);

	posture.elbowRightTurn.value.set(
		0,
		( Math.sin( time*1.8 )+1 ),
		0,
	);

	posture.forearmLeftTurn.value.set(
		-( Math.cos( time*3.6-1 )*1.5+1 ),
		0,
		0,
	);

	posture.forearmRightTurn.value.set(
		-( Math.sin( time*1.8*3+1 )*1.5+1 ),
		0,
		0,
	);

	posture.wristLeftTurn.value.set(
		0,
		( Math.cos( time*3.6-1 )*0.5+0.1 ),
		( Math.cos( time*2.6+1 )*0.7 ),
	);

	posture.wristRightTurn.value.set(
		0,
		( Math.cos( time*3.6-1 )*0.5+0.1 ),
		-( Math.cos( time*2.6+1 )*0.7 ),
	);
	posture.armLeftTurn.value.set(
		0.7*( Math.cos( time*3 )/1.5-0.15 ),
		0.7*( Math.cos( time*2.8 )*1-0.6 ),
		0.7*( Math.cos( time*2.2 ) ),
	);

	posture.armRightTurn.value.set(
		0.7*( Math.sin( time*2.4 )/1.5-0.15 ),
		0.7*-( Math.cos( time*3.1 )*1-0.6 ),
		0.7*( Math.sin( time*2.7 ) ),
	);

}


function rigModel2( k ) {

	posture.waistTurn.value.lerp( new THREE.Vector3( 1.5, 0, 0 ), k );
	posture.chestTurn.value.lerp( new THREE.Vector3( 1, 0, 0 ), k );
	posture.neckTurn.value.lerp( new THREE.Vector3( 1, 0, 0 ), k );
	posture.kneeLeftTurn.value.lerp( new THREE.Vector3( 2.3, 0, 0 ), k );
	posture.kneeRightTurn.value.lerp( new THREE.Vector3( 2.3, 0, 0 ), k );
	posture.ankleLeftTurn.value.lerp( new THREE.Vector3( 1, 0, 0 ), k );
	posture.ankleRightTurn.value.lerp( new THREE.Vector3( 1, 0, 0 ), k );
	posture.legLeftTurn.value.lerp( new THREE.Vector3( -0.7, 0, 0 ), k );
	posture.legRightTurn.value.lerp( new THREE.Vector3( -0.7, 0, 0 ), k );
	posture.elbowLeftTurn.value.lerp( new THREE.Vector3( 0, -1.5, 0 ), k );
	posture.elbowRightTurn.value.lerp( new THREE.Vector3( 0, 1.8, 0 ), k );
	posture.forearmLeftTurn.value.lerp( new THREE.Vector3( -1, 0, 0 ), k );
	posture.forearmRightTurn.value.lerp( new THREE.Vector3( -1, 0, 0 ), k );
	posture.wristLeftTurn.value.lerp( new THREE.Vector3( 0, 0.5, -0.7 ), k );
	posture.wristRightTurn.value.lerp( new THREE.Vector3( 0, 0, 0.3 ), k );
	posture.armLeftTurn.value.lerp( new THREE.Vector3( 0, -1.2, 0 ), k );
	posture.armRightTurn.value.lerp( new THREE.Vector3( 0, 1.2, 0 ), k );

}



// veils

var canvas = document.createElement( 'CANVAS' );
canvas.width = 64;
canvas.height = 64;

var context = canvas.getContext( '2d' );

var gradient = context.createLinearGradient( 0, 0, 64, 0 );
gradient.addColorStop( 0.0, 'rgba(255,255,255,0)' );
gradient.addColorStop( 0.5, 'rgba(230,245,255,255)' );
gradient.addColorStop( 1.0, 'rgba(255,255,255,0)' );
context.fillStyle = gradient;

context.filter = "blur(5px)";
context.fillRect( 0, 16, 64, 32 );
context.filter = "blur(10px)";

var texture = new THREE.CanvasTexture( canvas );


var n = 40, // number of lines
	lines = [];

for ( var i=0; i<n; i++ ) {

	var line = new THREE.Mesh(
		new THREE.PlaneGeometry( 1, 1, 20, 1 ),
		new THREE.MeshPhysicalMaterial( {
			map: texture,
			side: THREE.DoubleSide,
			transparent: true,
			opacity: 0.8,
			depthWrite: false,
			roughness: 1,
			metalness: 0,
		} )
	);
	line.geo = line.geometry;
	line.pos = line.geometry.getAttribute( 'position' );
	line.rnda = 1+Math.random();
	line.rndb = 1+Math.random();
	line.rndc = 1+Math.random();
	line.rndd = 1+Math.random();
	lines.push( line );

}

scene.add( ...lines );

var simplex = new SimplexNoise( );

function flowLine( time, line ) {

	time = time/3000;
	for ( var i=0; i<42; i++ ) {

		var r = 0.2+2*line.rnda;
		var t = time - 1*( i%21 )/60,
			x = r*Math.sin( 5*line.rnda*t + 6*line.rndb ),
			y = r*Math.cos( 5*line.rnda*t + 6*line.rndb )/4,
			rad = 0.15,
			z = 1.15*simplex.noise( x/16+line.rnda, y/20+line.rndb ) + rad*( i>20?1:-1 )*Math.cos( ( i%21-10 )/7.5 );

		line.pos.setXYZ( i, x, z, -y );

	}

	line.pos.needsUpdate = true;
	line.geo.computeVertexNormals();

}


camera.position.z = 2;

var T1 = 3000; // embryo->dance
var dT1 = 1500;

//var T2 = 46000; // dance->embryo
//var dT2 = 3000;


function animationLoop( t ) {

	for ( var line of lines ) flowLine( t, line );

	var k = 0;
	if ( t<T1 ) {

		k = 1;

	} else
		if ( t<T1+dT1 ) {

			k = Math.cos( ( t-T1 )/dT1*Math.PI )/2+1/2;

		}
	//if (t>T2) {k = 1;} else
	//if (t>T2-dT2) {k = Math.cos((t-T2)/dT2*Math.PI)/2+1/2;}

	overModel.position.y = k/4-0.25;


	rigModel( t/1300/2 );
	rigModel2( k );
	overModel.rotation.set( Math.cos( t/700/2 )/1.5, 2*Math.sin( t/3200 ), Math.cos( t/900/2 )/1.5 );

	renderer.render( scene, camera );

}


renderer.setAnimationLoop( animationLoop );
