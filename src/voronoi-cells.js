
//	TSL-Textures: Voronoi Cells



import { Color } from 'three';
import { exp, float, Fn, If, Loop, mix, positionGeometry, vec3 } from 'three/tsl';
import { noise, prepare } from 'tsl-textures/tsl-utils.js';



var cellCenter = Fn( ([ cell ])=>{

	return cell.add( noise( cell.mul( Math.PI ) ) );

} );


var voronoiCells = Fn( ( params )=>{

	params = prepare( { ...voronoiCells.defaults, ...params } );

	var pos = positionGeometry.mul( exp( params.scale.div( 2 ).add( 0.5 ) ) ).add( params.seed ).toVar( );

	var midCell = pos.round().toVar();

	var minCell = midCell.toVar();
	var minDist = float( 1 ).toVar();

	var cell = vec3().toVar();
	var dist = float().toVar();

	var i = float( 0 ).toVar();

	Loop( 27, () => {

		var ix = i.mod( 3 ).sub( 1 );
		var iy = i.div( 3 ).floor().mod( 3 ).sub( 1 );
		var iz = i.div( 9 ).floor().sub( 1 );
		cell.assign( midCell.add( vec3( ix, iy, iz ) ) );
		dist.assign( pos.distance( cellCenter( cell ) ).add( noise( pos ).div( 5 ) ) );

		If( dist.lessThan( minDist ), ()=>{

			minDist.assign( dist );
			minCell.assign( cell );

		} );
		i.addAssign( 1 );

	} );


	var n = noise( minCell.mul( Math.PI ) ).toVar();
	var k = mix( minDist, n.add( 1 ).div( 2 ), params.flat );

	var color = mix( params.color, params.background, k ).toVar();
	var randomColor = vec3( n.mul( 16.8 ), n.mul( 31.4159 ), n.mul( 27.1828 ) ).sin().add( 1 ).div( 2 );

	return mix( color, mix( color, randomColor, params.variation ), params.variation );

} );



voronoiCells.defaults = {
	$name: 'Voronoi cells',

	scale: 2,
	variation: 0,
	flat: 0,

	color: new Color( 0 ),
	background: new Color( 0xc0d0ff ),

	seed: 0,
};



export { voronoiCells };
