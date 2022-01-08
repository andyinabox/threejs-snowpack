// find default uniforms/attributes here:
// https://threejs.org/docs/index.html?q=shader#api/en/renderers/webgl/WebGLProgram

#pragma glslify: snoise4 = require(glsl-noise/simplex/4d) 

varying vec3 vPos;
varying vec3 vNorm;

uniform float tweak;
uniform float time;

void main() {
  vPos = position;
  vNorm = (normal * snoise4(vec4(position, time)) * tweak);
  vec3 wiggle = position + vNorm;
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4( wiggle, 1.0 );
}