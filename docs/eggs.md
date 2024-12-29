<img class="logo" src="../assets/logo/logo.png">


# TSL Textures


## Eggs

This texture imitates raw or soft-boiled eggs. The calculation of this texture is heavy,
so a WebGPU support in the brouser is essential. There are three texture functions -
for the color, for the normal vector and for the roughness.

Click on a snapshot to open it online.

<p class="gallery">

	<a class="style-block nocaption" href="../online/eggs.html?scale=0.8&sizeYolk=0.2&sizeWhite=0.7&colorYolk=16753920&colorWhite=16777215&colorBackground=13882323&seed=0">
		<img src="images/eggs-1.png">
	</a>

	<a class="style-block nocaption" href="../online/eggs.html?scale=0.6&sizeYolk=0.41&sizeWhite=0.7&colorYolk=16753920&colorWhite=16777215&colorBackground=47183&seed=4733">
		<img src="images/eggs-2.png">
	</a>

	<a class="style-block nocaption" href="../online/eggs.html?scale=2.64&sizeYolk=0.24&sizeWhite=0.43&colorYolk=0&colorWhite=12007&colorBackground=12238581&seed=4733">
		<img src="images/eggs-3.png">
	</a>

</p>


### Code template

```js
import { eggs } from "tsl-textures/eggs.js";

var options = {
	scale: 2,
	sizeYolk: 0.2,
	sizeWhite: 0.7,
	colorYolk: new THREE.Color(16753920),
	colorWhite: new THREE.Color(16777215),
	colorBackground: new THREE.Color(13882323),
	seed: 0
};

model.material.colorNode = eggs( options );
model.material.normalNode = eggs.normal( options );
model.material.roughnessNode = eggs.roughness( options );
```



### Parameters

* `scale` &ndash; level of details of the pattern, higher value generates finer details, [0, 4]
* `sizeYolk` &ndash; size of the eggs yolks, [0, 1]
* `sizeWhite` &ndash; size of the eggs whites, [0, 1]
* `colorYolk` &ndash; yolk color
* `colorWhite` &ndash; egg whites' color
* `colorBackground` &ndash; color of background under the eggs
* `seed` &ndash; number for the random generator, each value generates specific pattern


### Online generator

[online/eggs.html](../online/eggs.html)


### Source

[src/eggs.js](https://github.com/boytchev/tsl-textures/blob/main/src/eggs.js)


		
<div class="footnote">
	<a href="../">Home</a>
</div>