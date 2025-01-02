# tsl-textures
A collection of Three.js Shading Language (TSL) textures &ndash;
these are online real-time procedural generators of 3D textures.

Pick a texture from the [Project home page](https://boytchev.github.io/tsl-textures/).


#### Example "Planet"

Uses [planet.js](https://boytchev.github.io/tsl-textures/docs/planet.html)
for both the planet and its moon; and [stars.js](https://boytchev.github.io/tsl-textures/docs/stars.html)
for the stars. Click on the image for a live demo.

[<img src="https://boytchev.github.io/tsl-textures/examples/example-planet.jpg">](https://boytchev.github.io/tsl-textures/examples/example-planet.html)


#### Example "Normal map"

Uses tsl-utils.js to generate two normal maps and the transition between them.
The normal are created directly without using any of the TSL texture generators.
Click on the image for a live demo.

[<img src="https://boytchev.github.io/tsl-textures/examples/example-normal-map.jpg">](https://boytchev.github.io/tsl-textures/examples/example-normal-map.html)


#### Example "Wooden toys"

Uses [wood.js](https://boytchev.github.io/tsl-textures/docs/wood.html) texture
to convert flat-color 3D models (an ambulance, a race car and a luxury SUV from
Car Kit (1.4) by Kenney [www.kenney.nl](https://www.kenney.nl/)) into wooden toys.
All the wood textures are procedurally generated in real-time. Click on the image
for a live demo. (Note: non-WebGPU browsers might need 30+ seconds to start up.)

[<img src="https://boytchev.github.io/tsl-textures/examples/example-wooden-toys.jpg">](https://boytchev.github.io/tsl-textures/examples/example-wooden-toys.html)


#### Example "Protozoa"

Uses [protozoa.js](https://boytchev.github.io/tsl-textures/docs/protozoa.html)
texture to create a dynamic blob with microorganisms floating innside. A space
station is constructed arounnd the blob. The surface of the station is made of
a Dyson sphere texture from [dyson-texture.js](https://boytchev.github.io/tsl-textures/docs/dyson-sphere.html).
Click on the image for a live demo.

[<img src="https://boytchev.github.io/tsl-textures/examples/example-protozoa.jpg">](https://boytchev.github.io/tsl-textures/examples/example-protozoa.html)


#### Example "Neck massage"

Uses [rotator.js](https://boytchev.github.io/tsl-textures/docs/rotator.html)
texture that applies soft matrices on model vertices. This allows to make
gradual rotation that looks like stretching skin and flexing muscles. The
animation does not use skinning or morphing, the model is not preprocessed
in any way, and no additional vertex data is added. Click on the image
for a live demo. 

[<img src="https://boytchev.github.io/tsl-textures/examples/example-neck-massage.jpg">](https://boytchev.github.io/tsl-textures/examples/example-neck-massage.html)


#### Example "Watermelon supersphere"

Uses [supersphere.js](https://boytchev.github.io/tsl-textures/docs/supersphere.html)
texture to generate the shape of a [supersphere](https://mathworld.wolfram.com/Supersphere.html)
and [watermelon.js](https://boytchev.github.io/tsl-textures/docs/watermelon.html)
texture to color the surface in a watermelon pattern. Both the shape and the pattern
are continuously changing. Click on the image for a live demo.

[<img src="https://boytchev.github.io/tsl-textures/examples/example-watermelon-supersphere.jpg">](https://boytchev.github.io/tsl-textures/examples/example-watermelon-supersphere.html)


#### Example "Texture in motion"

Uses [dyson-sphere.js](https://boytchev.github.io/tsl-textures/docs/dyson-sphere.html),
[camouflage.js](https://boytchev.github.io/tsl-textures/docs/camouflage.html),
[dalmatian-spots.js](https://boytchev.github.io/tsl-textures/docs/dalmatian-spots.html) and
[planet.js](https://boytchev.github.io/tsl-textures/docs/planet.html) textures
and applies them on the elements of an animated GLTF model. Textures are blended
via a TSL function. Click on the image for a live demo. (Note: non-WebGPU browsers
might need 30+ seconds to start up.)

[<img src="https://boytchev.github.io/tsl-textures/examples/example-texture-in-motion.jpg">](https://boytchev.github.io/tsl-textures/examples/example-texture-in-motion.html)
