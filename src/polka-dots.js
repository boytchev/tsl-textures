
//	TSL-Textures: Polka Dots



import { Color } from "three";
import { acos, add, distance, exp, float, Fn, If, Loop, mat2, max, min, mix, mod, mul, oneMinus, positionGeometry, pow, smoothstep, } from 'three/tsl';
import { spherical } from './tsl-utils.js';



var defaults = {
	$name: 'Polka dots',

	position: positionGeometry,
	count: 2,
	size: 0.5,
	blur: 0.25,

	color: new Color( 0x000000 ),
	background: new Color( 0xFFFFFF ),

	flat: 0,
};



var goldenRatio = ( 1+5**0.5 )/2;



var polkaDotsRaw = Fn( ([ position, count, size, blur, color, background, xflat ]) => {

	var dist = float( 1 ).toVar();

	If( xflat.equal( 1 ), ()=>{

		var cnt = count.pow( 2 ).sub( 0.5 ).toVar();
		var pos = position.xy.mul( cnt ).mul( mat2( 1, 1, -1, 1 ) );
		var posTo = pos.round().toVar();

		dist.assign( pos.distance( posTo ).div( cnt ) );

	} ).Else( ()=>{

		var cnt = pow( 10, count ).toVar();
		var vec = position.normalize().toVar();

		var besti = oneMinus( vec.y ).mul( cnt ).sub( 1 ).div( 2 );

		var span = max( 10, cnt.pow( 0.5 ) );

		var mini = besti.sub( span ).floor().clamp( 0, cnt );
		var maxi = besti.add( span ).floor().clamp( 0, cnt );

		dist.assign( 1 ).toVar();

		Loop( maxi.sub( mini ), ( { i } )=> {

			var j = add( i, mini );
			var theta = mod( mul( 2*Math.PI/goldenRatio, j ), 2*Math.PI );
			var phi = acos( oneMinus( float( j ).mul( 2 ).add( 1 ).div( cnt ) ) );
			var pnt = spherical( phi, theta );//.normalize();
			dist.assign( min( dist, distance( vec, pnt ) ) );

		} ); // Loop

	} ); // Else

	var xsize = exp( size.mul( 5 ).sub( 5 ) ).toVar();
	var xblur = blur.pow( 4 ).toVar();
	var k = smoothstep( xsize.sub( xblur ), xsize.add( xblur ), dist );

	return mix( color, background, k );

} ).setLayout( {
	name: 'polkaDotsRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'count', type: 'float' },
		{ name: 'size', type: 'float' },
		{ name: 'blur', type: 'float' },
		{ name: 'color', type: 'vec3' },
		{ name: 'background', type: 'vec3' },
		{ name: 'xflat', type: 'int' },
	] }
);



function polkaDots( params={} ) {

	var { position, count, size, blur, color, background, flat } = { ...defaults, ...params };

	return polkaDotsRaw( position, count, size, blur, color, background, flat );

}



polkaDots.defaults = defaults;



export { polkaDots };
