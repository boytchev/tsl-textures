<img class="logo" src="../assets/logo/logo.png">


# Procedural Equirectangular Textures


## concrete
<img src="images/concrete.jpg">

This texture immitates the grains of a rough concrete 
surface. It is designed to be used as bump map. Click on a
snapshot to open it online.

<p class="gallery">

	<a class="style-block nocaption" href="../online/concrete.html?width=1024&height=512&scale=40&density=100&bump=100">
		<img src="images/concrete-1.png">
	</a>

	<a class="style-block nocaption" href="../online/concrete.html?width=1024&height=512&scale=89&density=55&bump=100">
		<img src="images/concrete-2.png">
	</a>

</p>


### Code example

Code template of parameters with their default values.

```js
import * as PET from "pet/patterns/concrete.js";
:
model.material.map = PET.texture( );
PET.material( model.material );
```



### Parameters

The parameters of the texture generator are:

* `width` &ndash; texture width in pixels, default 512
* `height` &ndash; texture height in pixels, default 256
* `scale` &ndash; pattern size [0,100], default 50
* `density` &ndash; pattern density [0,100], default 100
* `bump` &ndash; bump height [0,100], default 100



### API

All texture modules share the same API.

* `pattern( x, y, z, color, options )` &ndash; pattern implementation
* `texture( {params} )` &ndash; generator for a texture with given parameters
* `defaults` &ndash; object with default parameters
* `material( ... )` &ndash; material shader patcher



### Online generator

[online/concrete.html](../online/concrete.html)



### Source

[src/patterns/concrete.js](https://github.com/boytchev/texture-generator/blob/main/src/patterns/concrete.js)


		
<div class="footnote">
	<a href="#" onclick="window.history.back(); return false;">Back</a>
</div>