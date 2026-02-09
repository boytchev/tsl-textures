
//	TSL-Textures: Grid



import { Color } from "three";
import { abs, add, div, equirectUV, exp2, Fn, max, min, mix, mul, oneMinus, positionGeometry, pow, remapClamp, round, screenSize, screenUV, sin, smoothstep, sub } from 'three/tsl';



var defaults = {
	$name: 'Grid',
	$replaceExportUVS: screenUV,
	$replaceExportASP: screenSize.x.div( screenSize.y ).log2(),

	uvs: equirectUV( positionGeometry.normalize() ),

	countU: 32,
	countV: 16,

	aspect: 1,
	thinness: 0.8,
	equirectangular: true,

	color: new Color( 0x000000 ),
	background: new Color( 0xFFFFFF ),

};



var gridRaw = Fn( ([ uvs, countU, countV, aspect, thinness, equirectangular, color, background ]) => {

	var xaspect = max( exp2( aspect ), 1 );

	var a = mul( uvs.x, xaspect, Math.PI ).toVar(),
		b = mul( uvs.y, Math.PI ).toVar();

	var uTo = div( round( mul( uvs.x, countU ) ), countU ),
		vTo = div( round( mul( uvs.y, countV ) ), countV ),
		aTo = mul( uTo, xaspect, Math.PI ),
		bTo = mul( vTo, Math.PI );

	var angleU = abs( sub( a, aTo ) ).mul( mix( 1, sin( b ), equirectangular ) ),
		angleV = abs( sub( b, bTo ) ),
		angle = min( angleU, angleV );

	var treshold = mul( min( div( xaspect.mul( Math.PI ), countU ), div( Math.PI, countV ) ), remapClamp( pow( thinness, 0.5 ), 0, 1, 0.9, 0.04 ), 0.5 );
	var k = oneMinus( smoothstep( sub( treshold, 0.002 ), add( treshold, 0.002 ), angle ) );

	return mix( background, color, k );

} ).setLayout( {
	name: 'gridRaw',
	type: 'vec3',
	inputs: [
		{ name: 'uvs', type: 'vec2' },
		{ name: 'countU', type: 'float' },
		{ name: 'countV', type: 'float' },
		{ name: 'aspect', type: 'float' },
		{ name: 'thinness', type: 'float' },
		{ name: 'equirectangular', type: 'int' },
		{ name: 'color', type: 'vec3' },
		{ name: 'background', type: 'vec3' },
	] }
);



function grid( params={} ) {

	var { uvs, countU, countV, aspect, thinness, equirectangular, color, background } = { ...defaults, ...params };

	return gridRaw( uvs, countU, countV, aspect, thinness, equirectangular, color, background );

}



grid.defaults = defaults;



export { grid };
