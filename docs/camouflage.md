<img class="logo" src="../assets/logo/logo.png">


# TSL Textures


## Camouflage

This texture immitates the design of camouflage patters in
military clothes and vehicles. It overlaps four-color spots.
Click on a snapshot to open it online.

<p class="gallery">

	<a class="style-block nocaption" href="../online/camouflage.html">
		<img src="images/camouflage-1.png">
	</a>

	<a class="style-block nocaption" href="../online/camouflage.html?">
		<img src="images/camouflage-2.png">
	</a>

	<a class="style-block nocaption" href="../online/camouflage.html?">
		<img src="images/camouflage-3.png">
	</a>

</p>


### Code template

Code template of parameters with their default values.

```js
import { camouflage } from "tsl-textures/camouflage.js";

model.material.colorNode = camouflage ( {
	scale: 2,
	colorA: new THREE.Color(12762792),
	colorB: new THREE.Color(10258782),
	colorC: new THREE.Color(9610101),
	colorD: new THREE.Color(7435617),
	seed: 0
} );
```


### Parameters

The parameters of the texture generator are:

* `scale` &ndash; level of details of the pattern, higher value generates finer details, suggested range [0, 4]
* `colorA` &ndash; top color
* `colorB` &ndash; second color
* `colorC` &ndash; third color
* `colorD` &ndash; bottom color
* `seed` &ndash; number for the random generator, each value generates specific pattern



### Online generator

[online/camouflage.html](../online/camouflage.html)

### Source

[src/patterns/camouflage.js](https://github.com/boytchev/tsl-textures/blob/main/src/patterns/camouflage.js)


		
<div class="footnote">
	<a href="./">Home</a>
</div>	