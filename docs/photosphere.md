<img class="logo" src="../assets/logo/logo.png">


# TSL Textures


## Photosphere
This texture renderes the convection cells of plasma on the
surface of a star. These granules are a phenomenon of the
[photosphere](https://en.wikipedia.org/wiki/Photosphere).
Click on a snapshot to open it online.

<p class="gallery">

	<a class="style-block nocaption" href="../online/photosphere.html?scale=2&color=16776960&background=16711680">
		<img src="images/photosphere-1.png">
	</a>

	<a class="style-block nocaption" href="../online/photosphere.html?scale=1.044&color=16777215&background=4686264">
		<img src="images/photosphere-2.png">
	</a>
	
	<a class="style-block nocaption" href="../online/photosphere.html?scale=2.932&color=15787747&background=11141120">
		<img src="images/photosphere-3.png">
	</a>

</p>


### Code example

Code template of parameters with their default values.

```js
import * as PET from "pet/patterns/photosphere.js";
:
model.material.map = PET.texture( );
PET.material( model.material );
```


### Parameters

The parameters of the texture generator are:

* `width` &ndash; texture width in pixels, default 1024
* `height` &ndash; texture height in pixels, default 512
* `scale` &ndash; pattern size [0,100], default 30
* `color` &ndash; color of hot areas, default 0xFFFF00 (yellow)
* `background &ndash; color of background, default 0xFF0000 (red)


### API

All texture modules share the same API.

* `pattern( x, y, z, color, options )` &ndash; pattern implementation
* `texture( {params} )` &ndash; generator for a texture with given parameters
* `defaults` &ndash; object with default parameters
* `material( ... )` &ndash; material shader patcher


### Online generator

[online/photosphere.html](../online/photosphere.html)


### Source

[src/patterns/photosphere.js](https://github.com/boytchev/texture-generator/blob/main/src/patterns/photosphere.js)


		
<div class="footnote">
	<a href="#" onclick="window.history.back(); return false;">Back</a>
</div>