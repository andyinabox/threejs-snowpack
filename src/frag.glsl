// find default uniforms/attributes here:
//  https://threejs.org/docs/index.html?q=shader#api/en/renderers/webgl/WebGLProgram

varying vec3 vNorm;

void main() {
  gl_FragColor = vec4(vNorm, 1.0);
}
