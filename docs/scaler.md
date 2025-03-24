<img class="logo" src="../assets/logo/logo.png">


# TSL Textures


## Scaler

This texture deforms a shape by scaling the coordinates of part of its vertices.
The scaling is relative to a 3D pivot point used as scaling center.

The selection of affected vertices is set by a imaginary thick planar
layer. Vertices "below" the layer are not affected, vertices above the layer are
fully affected. Vertices inside the layer are gradually affected depending on
how close they are to the "bottom" or the "top" of the layer. The layer is
defined by its own pivot point, rotation agles and width.

Hint: use the `show` checkbox of the online generator to visualize the layer.

<p class="gallery">

	<a class="style-block nocaption" href="../online/scaler.html?scales=0.01,1.25,0.01&center=0,0,0&selectorCenter=0,0,0&selectorAngles=0,0&selectorWidth=2">
		<img src="images/scaler-1.png">
	</a>

	<a class="style-block nocaption" href="../online/scaler.html?scales=0.01,0.01,1.49&center=0,0,0&selectorCenter=-0.112,-0.024,0.936&selectorAngles=1.56,0&selectorWidth=1.6965">
		<img src="images/scaler-2.png">
	</a>

	<a class="style-block nocaption" href="../online/scaler.html?scales=0.01,0.77,1.7&center=0,0,0&selectorCenter=0,0,0&selectorAngles=0.77,6.283185307179586&selectorWidth=1.3104">
		<img src="images/scaler-3.png">
	</a>

</p>


### Code template

```js
import * as THREE from "three";
import { scaler } from "tsl-textures";

model.material.positionNode = scaler ( {
	scales: new THREE.Vector3(0.01,0.9,1.7),
	center: new THREE.Vector3(0,0,0),
	selectorCenter: new THREE.Vector3(0,0,0),
	selectorAngles: new THREE.Vector2(0,0),
	selectorWidth: 2
} );

model.material.normalNode = scaler.normal ( {
	scales: new THREE.Vector3(0.01,0.9,1.7),
	center: new THREE.Vector3(0,0,0),
	selectorCenter: new THREE.Vector3(0,0,0),
	selectorAngles: new THREE.Vector2(0,0),
	selectorWidth: 2
} );

```


### Parameters

* `scales(x,y,z)` &ndash; scale factors of vertices along local X, Y and Z axes
* `center(x,y,z)` &ndash; 3D pivot point used for scaling
* `selectorAngles(φ,θ)` &ndash; spherical coordinates angles for rotation of the selection layer, φ=[0, &pi;], θ=[-2&pi;, 2&pi;]
* `selectorCenter(x,y,z)` &ndash; 3D pivot point for the selection layer
* `selectorWidth` &ndash; number for the selection layer width, [0.1, 4]


### Online generator

[online/scaler.html](../online/scaler.html)


### Source

[src/scaler.js](https://github.com/boytchev/tsl-textures/blob/main/src/scaler.js)


		
<div class="footnote">
	<a href="../">Home</a>
</div>