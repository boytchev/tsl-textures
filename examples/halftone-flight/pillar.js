import * as THREE from "three";



class Pillar extends THREE.Mesh {

	constructor( center, material ) {

		var height = center.y;

		center = new THREE.Vector3( center.x, 0, center.z );

		var spline = new THREE.QuadraticBezierCurve(
			new THREE.Vector3( Math.max( 1 + height / 1.5, 10 ), 0, 0 ),
			new THREE.Vector3( -3, 0, 0 ),
			new THREE.Vector3( 2, height - 4, 0 ),
		);

		var points = [];

		for ( var i = 0; i <= 32; i++ ) {

			var p = spline.getPoint( i / 32 );
			points.push( new THREE.Vector2( p.x, p.y ) );

		}

		var spline = new THREE.CubicBezierCurve(
			new THREE.Vector3( 2, height - 4, 0 ),
			new THREE.Vector3( 2 + 6 * 4 / ( height - 4 ), height, 0 ),
			new THREE.Vector3( 16, height + 5, 0 ),
			new THREE.Vector3( 0.01, height + 5, 0 )
		);

		for ( var i = 0 + 1; i <= 20; i++ ) {

			var p = spline.getPoint( i / 20 );
			points.push( new THREE.Vector2( p.x, p.y ) );

		}

		super( new THREE.LatheGeometry( points, 32 ), material );

		this.position.copy( center );

	} // Pillar.constructor



	update( t ) {

		this.scale.y = 1.3 - 0.6*Math.abs( Math.sin( this.position.x+10*t ) )**0.5;

	} // Pillar.update

} // Pillar



export { Pillar };
