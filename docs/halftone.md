<img class="logo" src="../assets/logo/logo.png">


# TSL Textures


## Halftone

This texture enforces halftone pattern by keeping some part of the object surface
and discarding other parts. With the attunuation parameter it is possible to 
adjust pattern size to distance from the screen. To combine the texture with
a model coloring, it must be added to the color node. Click on a snapshot to open it online.

<p class="gallery">

	<a class="style-block nocaption" href="../online/halftone.html?scale=2&radius=0.5&pattern=1&attenuation=0&near=6&far=14">
		<img src="images/halftone-1.png">
	</a>

	<a class="style-block nocaption" href="../online/halftone.html?scale=1.008&radius=0.14&pattern=10&attenuation=0&near=6&far=14">
		<img src="images/halftone-2.png">
	</a>

	<a class="style-block nocaption" href="../online/halftone.html?scale=3.06&radius=1.7&pattern=8&attenuation=1&near=5.4&far=10.6">
		<img src="images/halftone-3.png">
	</a>

</p>


### Code example

```js
import { halftone } from "tsl-textures";

model.material.colorNode = halftone ( {
	scale: 2,
	radius: 0.5,
	pattern: 1,
	attenuation: 0,
	near: 6,
	far: 14
} );
```


### Parameters

* `position` &ndash; coordinates used to map texture, default is TSL `screenCoordinate` node
* `scale` &ndash; level of details of the pattern, higher value generates finer details, [0, 4]
* `radius` &ndash; size of dots in the pattern , [0,2]
* `pattern` &ndash; an index of the pattern to use, [0,10]
* `attenuation` &ndash; in integer flag whether dot size attenuates with distance [0 or 1]
* `near` &ndash; distance at which the pattern starts to appear, valid only if attenuation is 1
* `far` &ndash; distance at which the pattern makes the model disappear, valid only if attenuation is 1
* `color` &ndash; main color of the texture, default is TSL `vertexColor()`
* `positionView` &ndash; screen-based coordinates, default is TSL `positionView` node


### Notes

When `attenuation` is 0, the pattern is regular and the size is independent on depth.

When `attenuation` is 1, the `radius` of the pattern is multiplied by the relative
location with in the interval [`near`,`far`]. If `near`<`far` then the objects
disappear if they are too far. If `near`>`far` then the objects disappear if they
are too close.

Currently supported are these patterns (white parts are transparent). Patterns
marked by \* require specific value of the `radius`, otherwise they diverge too
circles.

| Index  | Name | Snapshot |
| --- | --- | --- |
| 0  | grid  | <img src="docsimages/halftone-pattern-0.png"> |
| 1  | diagonal  | <img src="docsimages/halftone-pattern-1.png"> |
| 2\*  | checkerboard  | <img src="docsimages/halftone-pattern-2.png"> |
| 3\*  | diagonal/x  | <img src="docsimages/halftone-pattern-3.png"> |
| 4\*  | grid/x  | <img src="docsimages/halftone-pattern-4.png"> |
| 5  | square  | <img src="docsimages/halftone-pattern-5.png"> |
| 6  | square/n  | <img src="docsimages/halftone-pattern-6.png"> |
| 7  | vertical  | <img src="docsimages/halftone-pattern-7.png"> |
| 8  | horizontal  | <img src="docsimages/halftone-pattern-8.png"> |
| 9\*  | grid/xn  | <img src="docsimages/halftone-pattern-9.png"> |
| 10\*  | diagonal/xn  | <img src="docsimages/halftone-pattern-10.png"> |


### Online generator

[online/halftone.html](../online/halftone.html)


### Source

[src/halftone.js](https://github.com/boytchev/tsl-textures/blob/main/src/halftone.js)


		
<div class="footnote">
	<a href="../">Home</a>
</div>