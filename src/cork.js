
//	TSL-Textures: Cork



import { Color } from 'three';
import { exp, float, Fn, If, Loop, mix, positionGeometry, vec3 } from 'three/tsl';
import { noise, prepare, TSLFn, vnoise } from './tsl-utils.js';



var defaults = {
	$name: 'Cork',

	scale: 1,
	straight: 1,
	noise: 0.3,

	color: new Color( 0xfff0c0 ),
	background: new Color( 0xd08060 ),

	seed: 0,
};



var cellCenter = Fn( ([ cell ])=>{

	return cell.add( vnoise( cell ) );

} );


var cork = TSLFn( ( params )=>{

	params = prepare( params, defaults );

	var pos = positionGeometry.mul( exp( params.scale.div( 1.5 ).add( 1 ) ) ).add( params.seed ).toVar( );

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
		dist.assign( pos.distance( cellCenter( cell ) ) );

		dist.addAssign( noise( pos.add( cell ) ).div( params.straight.exp() ) );

		If( dist.lessThan( minDist ), ()=>{

			minDist.assign( dist );
			minCell.assign( cell );

		} );
		i.addAssign( 1 );

	} );

	var n = noise( minCell.mul( Math.PI ) ).toVar();
	var r = noise( pos.mul( 12 ) ).toVar();
	r.assign( r.sign().mul( r.abs().pow3() ) );
	r.addAssign( noise( pos.mul( 40 ) ).div( 3 ) );
	var k = n.add( 1 ).div( 2 );

	var color = mix( params.color, params.background, k.add( r.mul( params.noise ) ) ).toVar();

	return color;

}, defaults );



export { cork };
