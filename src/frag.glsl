// find default uniforms/attributes here:
//  https://threejs.org/docs/index.html?q=shader#api/en/renderers/webgl/WebGLProgram

#pragma glslify: snoise4 = require(glsl-noise/simplex/4d) 

varying vec3 vPos;
varying vec3 vNorm;

uniform vec3 color;
uniform float time;

void main() {
  float noise = snoise4(vec4(vPos, time));
  gl_FragColor = vec4( mix(vNorm, color, noise), 1.0);
}
