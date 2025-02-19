
//	TSL-Textures: Polka Dots



import { Color } from "three";
import { acos, add, distance, exp, float, Fn, Loop, max, min, mix, mod, mul, oneMinus, positionGeometry, pow, smoothstep, } from 'three/tsl';
import { prepare, spherical } from 'tsl-textures/tsl-utils.js';



var goldenRatio = ( 1+5**0.5 )/2;



var polkaDots = Fn( ( params ) => {

	params = prepare( { ...polkaDots.defaults, ...params } );

	var cnt = pow( 10, params.count ).toVar();
	var vec = positionGeometry.normalize().toVar();

	var besti = oneMinus( vec.y ).mul( cnt ).sub( 1 ).div( 2 );

	var span = max( 10, cnt.pow( 0.5 ) );

	var mini = besti.sub( span ).floor().clamp( 0, cnt );
	var maxi = besti.add( span ).floor().clamp( 0, cnt );

	var dist = float( 1 ).toVar();
 	Loop( maxi.sub( mini ), ( { i } )=> {

		var j = add( i, mini );
		var theta = mod( mul( 2*Math.PI/goldenRatio, j ), 2*Math.PI );
		var phi = acos( oneMinus( float( j ).mul( 2 ).add( 1 ).div( cnt ) ) );
		var pnt = spherical( phi, theta );//.normalize();
		dist.assign( min( dist, distance( vec, pnt ) ) );

	} );

	var size = exp( params.size.mul( 5 ).sub( 5 ) ).toVar();
	var blur = params.blur.pow( 4 ).toVar();
	var k = smoothstep( size.sub( blur ), size.add( blur ), dist );

	return mix( params.color, params.background, k );

} );



polkaDots.defaults = {
	$name: 'Polka dots',

	count: 2,
	size: 0.5,
	blur: 0.25,

	color: new Color( 0x000000 ),
	background: new Color( 0xFFFFFF ),
};



export { polkaDots };
