<img class="logo" src="../assets/logo/logo.png">


# Procedural Equirectangular Textures


## Fordite
<img src="images/fordite.jpg">

This texture generates [fordite stones](https://en.wikipedia.org/wiki/Fordite).
These are buildups of layers of paints cut across the layers. The generated texture
is intended for color maps. Click on a snapshot to open it online.

<p class="gallery">

	<a class="style-block nocaption" href="../online/fordite.html?width=1024&height=512&scale=90&color=0">
		<img src="images/fordite-1.png">
	</a>

	<a class="style-block nocaption" href="../online/fordite.html?width=1024&height=512&scale=100&color=16722217">
		<img src="images/fordite-2.png">
	</a>

	<a class="style-block nocaption" href="../online/fordite.html?width=2048&height=1024&scale=8&color=12564678">
		<img src="images/fordite-3.png">
	</a>

</p>


### Code example

Code template of parameters with their default values.

```js
import * as PET from "pet/patterns/fordite.js";
:
model.material.map = PET.texture( );
PET.material( model.material );
```


### Parameters

The parameters of the texture generator are:

* `width` &ndash; texture width in pixels, default 1024
* `height` &ndash; texture height in pixels, default 512
* `scale` &ndash; pattern size [0,100], default 50
* `color` &ndash; color added to colors of paint, default 0x000000 (black)


### API

All texture modules share the same API.

* `pattern( x, y, z, color, options )` &ndash; pattern implementation
* `texture( {params} )` &ndash; generator for a texture with given parameters
* `defaults` &ndash; object with default parameters
* `material( ... )` &ndash; material shader patcher


### Online generator

[online/fordite.html](../online/fordite.html)


### Source

[src/patterns/fordite.js](https://github.com/boytchev/texture-generator/blob/main/src/patterns/fordite.js)


		
<div class="footnote">
	<a href="#" onclick="window.history.back(); return false;">Back</a>
</div>