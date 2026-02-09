
//	TSL-Textures: Voronoi Cells



import { Color } from 'three';
import { exp, float, Fn, If, int, Loop, mix, positionGeometry, vec3 } from 'three/tsl';
import { noise, vnoise } from './tsl-utils.js';



var defaults = {
	$name: 'Voronoi cells',

	position: positionGeometry,
	scale: 2,
	variation: 0,
	facet: 0,

	color: new Color( 0 ),
	background: new Color( 0xc0d0ff ),

	seed: 0,
};



var voronoiCellsRaw = Fn( ([ position, scale, variation, facet, color, background, seed ])=>{

	var pos = position.mul( exp( scale.div( 2 ).add( 0.5 ) ) ).add( seed ).toVar( );

	var midCell = pos.round().toVar();

	var minCell = midCell.toVar();
	var minDist = float( 1 ).toVar();

	var cell = vec3().toVar();
	var dist = float().toVar();

	var i=int( 0 ).toVar( 'i' ),
		j=int( 0 ).toVar( 'j' ),
		k=int( 0 ).toVar( 'k' );

	// Loop uses hard-coded i, j, k as indices
	Loop( 3, 3, 3, () => {

		cell.assign( midCell.add( vec3( i, j, k ).sub( 1 ) ) );
		//var cellCenter = cell.add( noise( cell.mul( Math.PI ) ) ); // too slow on WebGL2
		var cellCenter = cell.add( vnoise( cell.mul( Math.PI*2 ) ).div( 2 ) );
		dist.assign( pos.distance( cellCenter ) );

		If( dist.lessThan( minDist ), ()=>{

			minDist.assign( dist );
			minCell.assign( cell );

		} );

	} );

	var n = noise( minCell.mul( Math.PI ) ).toVar();
	var m = mix( minDist, n.add( 1 ).div( 2 ), facet );

	var color = mix( color, background, m ).toVar();
	var randomColor = vec3( n.mul( 16.8 ), n.mul( 31.4159 ), n.mul( 27.1828 ) ).sin().add( 1 ).div( 2 );

	return mix( color, mix( color, randomColor, variation ), variation );

} ).setLayout( {
	name: 'voronoiCellsRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'variation', type: 'float' },
		{ name: 'facet', type: 'float' },
		{ name: 'color', type: 'vec3' },
		{ name: 'background', type: 'vec3' },
		{ name: 'seed', type: 'float' },
	] }
);



function voronoiCells( params={} ) {

	var { position, scale, variation, facet, color, background, seed } = { ...defaults, ...params };

	return voronoiCellsRaw( position, scale, variation, facet, color, background, seed );

}



voronoiCells.defaults = defaults;



export { voronoiCells };
