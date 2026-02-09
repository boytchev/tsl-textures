
//	TSL-Textures: Cork



import { Color } from 'three';
import { exp, float, Fn, If, int, Loop, mix, positionGeometry, vec3 } from 'three/tsl';
import { noise, vnoise } from './tsl-utils.js';



var defaults = {
	$name: 'Cork',

	position: positionGeometry,
	scale: 1,
	straight: 1,
	noise: 0.3,

	color: new Color( 0xfff0c0 ),
	background: new Color( 0xd08060 ),

	seed: 0,
};



var corkRaw = Fn( ([ position, scale, straight, xnoise, color, background, seed ])=>{

	var pos = position.mul( exp( scale.div( 1.5 ).add( 1 ) ) ).add( seed ).toVar( 'pos' );

	var midCell = pos.round().toConst( 'midCell' );

	var minCell = midCell.toVar( 'minCell' ),
		minDist = float( 1 ).toVar( 'minDist' );

	var cell = vec3().toVar( 'cell' ),
		dist = float().toVar( 'dist' );

	var strtaightness = straight.exp().reciprocal().toVar( 'strtaightness' );

	var i=int( 0 ).toVar( 'i' ),
		j=int( 0 ).toVar( 'j' ),
		k=int( 0 ).toVar( 'k' );

	// Loop uses hard-coded i, j, k as indices
	Loop( 3, 3, 3, () => {

		cell.assign( midCell.add( vec3( i, j, k ).sub( 1 ) ) );
		var cellCenter = cell.add( vnoise( cell ) );
		dist.assign( pos.distance( cellCenter ) );

		dist.addAssign( noise( pos.add( cell ), strtaightness ) );

		If( dist.lessThan( minDist ), ()=>{

			minDist.assign( dist );
			minCell.assign( cell );

		} );

	} );

	var n = noise( minCell.mul( Math.PI ), 0.5, 0.5 ).toVar( 'n' );

	var r = noise( pos.mul( 12 ) ).toVar( 'r' );
	r.mulAssign( r, r );
	r.addAssign( noise( pos.mul( 40 ), 1/3 ) );

	var result = mix( color, background, n.add( r.mul( xnoise ) ) );

	return result;

} ).setLayout( {
	name: 'camouflageRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'straight', type: 'float' },
		{ name: 'xnoise', type: 'float' },
		{ name: 'color', type: 'vec3' },
		{ name: 'background', type: 'vec3' },
		{ name: 'seed', type: 'float' },
	] }
);



function cork( params={} ) {

	var { position, scale, straight, noise, color, background, seed } = { ...defaults, ...params };

	return corkRaw( position, scale, straight, noise, color, background, seed );

}



cork.defaults = defaults;



export { cork };
