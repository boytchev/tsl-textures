
//	TSL-Textures: Halftone



import { Discard, float, Fn, If, min, positionView, screenCoordinate, Switch, vec2, vec3, vertexColor } from 'three/tsl';



var defaults = {
	$name: 'Halftone',

	position: screenCoordinate,
	scale: 2,
	radius: 0.5,
	pattern: 1,

	attenuation: 0,
	near: 6,
	far: 14,

	color: vertexColor(),

	positionView: positionView,

};



// square grid of circles
var halftoneGridRaw = Fn( ([ position, scale, radius, attenuation, far, near, color, positionView ]) => {

	var xscale = float( 5 ).sub( scale ).exp().toVar(),
		pos = position.toVar(),
		xradius = radius.div( Math.sqrt( 2 ) ).toVar();

	var center = pos.div( xscale ).round().mul( xscale );


	If( attenuation.notEqual( 0 ), ()=>{

		xradius.mulAssign( positionView.z.mul( -1 ).smoothstep( far, near ).pow( 1/2 ) );

	} );

	If( pos.distance( center ).greaterThan( xscale.mul( xradius ) ), ()=>Discard() );

	return color;

} ).setLayout( {
	name: 'halftoneGridRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'radius', type: 'float' },
		{ name: 'attenuation', type: 'int' },
		{ name: 'far', type: 'float' },
		{ name: 'near', type: 'float' },
		{ name: 'color', type: 'vec3' },
		{ name: 'positionView', type: 'vec3' },
	] }
);



// diagonal geid of circles
var halftoneDiagRaw = Fn( ([ position, scale, radius, attenuation, far, near, color, positionView ]) => {

	var xscale = float( 5 ).sub( scale ).exp().toVar(),
		pos = position.toVar(),
		xradius = radius.div( Math.sqrt( 2 ) ).toVar();

	var shift = pos.y.div( xscale ).round().mod( 2 );

	var centerA = pos.div( xscale ).round().mulAssign( xscale ).toVar();

	If( shift.equal( 0 ), ()=>{

		centerA.x.addAssign( xscale.mul( 0.5 ) );

	} );
	var centerB = vec2( centerA.x.sub( xscale ), centerA.y ).toVar();


	If( attenuation.notEqual( 0 ), ()=>{

		xradius.mulAssign( positionView.z.mul( -1 ).smoothstep( far, near ).pow( 1/2 ) );

	} );

	If( min( pos.distance( centerA ), pos.distance( centerB ) ).greaterThan( xscale.mul( xradius ) ), ()=>Discard() );

	return color;

} ).setLayout( {
	name: 'halftoneDiagRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'radius', type: 'float' },
		{ name: 'attenuation', type: 'int' },
		{ name: 'far', type: 'float' },
		{ name: 'near', type: 'float' },
		{ name: 'color', type: 'vec3' },
		{ name: 'positionView', type: 'vec3' },
	] }
);



// trigonetric pattern
var halftoneTrigRaw = Fn( ([ position, scale, radius, pattern, attenuation, far, near, color, positionView ]) => {

	var pos = position.mul( scale.sub( 3.5 ).exp() ).sin().add( 1 ).div( 2 ).toVar(),
		x = pos.x,
		y = pos.y,
		xradius = radius.div( Math.sqrt( 2 ) ).toVar();

	var dist = float( 0 );

	Switch( pattern )
		.Case( 2, ()=>{

			dist.assign( x.add( y ).div( 2 ) );

		} )
		.Case( 3, ()=>{

			dist.assign( x.sub( y ).abs().oneMinus() );

		} )
		.Case( 10, ()=>{

			dist.assign( x.sub( y ).abs() );

		} )
		.Case( 4, ()=>{

			dist.assign( x.mul( y ).oneMinus() );

		} )
		.Case( 9, ()=>{

			dist.assign( x.mul( y ) );

		} )
		.Case( 5, ()=>{

			dist.assign( x.max( y ) );

		} )
		.Case( 6, ()=>{

			dist.assign( x.min( y ) );

		} )
		.Case( 7, ()=>{

			dist.assign( x );

		} )
		.Case( 8, ()=>{

			dist.assign( y );

		} );

	If( attenuation.notEqual( 0 ), ()=>{

		xradius.mulAssign( positionView.z.mul( -1 ).smoothstep( far, near ).pow( 1/2 ) );

	} );

	If( dist.greaterThan( xradius ), ()=>Discard() );

	return color;

} ).setLayout( {
	name: 'halftoneTrigRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'radius', type: 'float' },
		{ name: 'pattern', type: 'int' },
		{ name: 'attenuation', type: 'int' },
		{ name: 'far', type: 'float' },
		{ name: 'near', type: 'float' },
		{ name: 'color', type: 'vec3' },
		{ name: 'positionView', type: 'vec3' },
	] }
);



var halftoneRaw = Fn( ([ position, scale, radius, pattern, attenuation, far, near, color, positionView ]) => {

	var result = vec3( 0 ).toVar();

	Switch( pattern )
		.Case( 0, ()=>{

			result.assign( halftoneGridRaw( position, scale, radius, attenuation, far, near, color, positionView ) );

		} )
		.Case( 1, ()=>{

			result.assign( halftoneDiagRaw( position, scale, radius, attenuation, far, near, color, positionView ) );

		} )
		.Default( ()=>{

			result.assign( halftoneTrigRaw( position, scale, radius, pattern, attenuation, far, near, color, positionView ) );

		} );

	return result;

} ).setLayout( {
	name: 'halftoneRaw',
	type: 'vec3',
	inputs: [
		{ name: 'position', type: 'vec3' },
		{ name: 'scale', type: 'float' },
		{ name: 'radius', type: 'float' },
		{ name: 'pattern', type: 'int' },
		{ name: 'attenuation', type: 'int' },
		{ name: 'far', type: 'float' },
		{ name: 'near', type: 'float' },
		{ name: 'color', type: 'vec3' },
		{ name: 'positionView', type: 'vec3' },
	] }
);


function halftone( params={} ) {

	var { position, scale, radius, pattern, attenuation, far, near, color, positionView } = { ...defaults, ...params };

	return halftoneRaw( position, scale, radius, pattern, attenuation, far, near, color, positionView );

}



halftone.defaults = defaults;



export { halftone };
