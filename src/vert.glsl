// find default uniforms/attributes here:
// https://threejs.org/docs/index.html?q=shader#api/en/renderers/webgl/WebGLProgram

varying vec3 vNorm;

void main() {
  vNorm = normal;
  gl_Position = projectionMatrix * viewMatrix * modelMatrix * vec4( position, 1.0 );
}