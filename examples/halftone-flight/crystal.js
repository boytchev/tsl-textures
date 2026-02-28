import * as THREE from "three";



var crystalGeometry = new THREE.IcosahedronGeometry( 8, 3 ),
	crystalMaterial = new THREE.MeshStandardMaterial( {
		color: 'crimson',
		flatShading: true,
		metalness: 0.8,
		roughness: 0.4,
	} );



var logoGeometry = new THREE.IcosahedronGeometry( 8, 3 ),
	logoMaterial = new THREE.MeshStandardMaterial( {
		color: 'white',
		wireframe: true,
	} );

logoGeometry.setDrawRange( 0, 48 );



class Crystal extends THREE.Mesh {

	constructor( center ) {


		super( crystalGeometry, crystalMaterial );

		this.add( new THREE.Mesh( logoGeometry, logoMaterial ) );
		this.position.set( center.x, 0, center.z );

	} // Crystal.constructor



	update( t ) {

		var { x, z } = this.position;

		this.position.y = Math.max(
			65*( 0.5 + 1.3*Math.max( 0, Math.sin( 2*x+2*10*t+1 ) )**1.5 )+7,
			65*( 1.3 - 0.6*Math.abs( Math.sin( x+10*t ) )**0.5 )+7,
		);

		this.rotation.x = z - 10*t + Math.sin( z-10*t );
		this.rotation.y = x + 10*t + Math.sin( x+10*t );

	} // Pillar.update

} // Pillar



export { Crystal };
