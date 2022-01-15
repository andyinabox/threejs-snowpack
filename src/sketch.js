import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import GUI from 'lil-gui';

import vert from './vert.glsl'
import frag from './frag.glsl'

export const Sketch = function(options) {
  const container = options.dom;
  const size = {
    width: window.innerWidth,
    height: window.innerHeight
  };
  
  let scene;
  let camera;
  let renderer;
  let mesh;
  let material;
  let controls;

  const clock = new THREE.Clock()
  const gui = new GUI()

  const params = {
    backgroundColor: 0xffffff,
    color: [1.0, 0.0, 1.0],
    tweak: 0.5,
  }

  const init = () => {
    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(75, size.width / size.height, 1, 1000);
    camera.position.x = 2;
    camera.position.y = 1;
    camera.position.z = 4;
    
    scene.add(camera);

    renderer = new THREE.WebGLRenderer({ 
      antialias: true
    });

    renderer.setSize(size.width, size.height);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.setClearColor(params.backgroundColor)
    container.appendChild(renderer.domElement);

    controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.autoRotate = true;

    bindEvents();
    addObjects();
    initGui()
    render();
  };

  const initGui = () => {
    gui.addColor(params, 'backgroundColor').onChange(v => renderer.setClearColor(v));
    gui.addColor(params, 'color');
    gui.add(params, 'tweak', 0, 1).onChange(v => material.uniforms.tweak.value = v);

  }

  const bindEvents = () => {
    window.addEventListener('resize', () => {
      // set width / height
      size.width = window.innerWidth;
      size.height = window.innerHeight;

      // update camera
      camera.aspect = size.width / size.height;
      camera.updateProjectionMatrix();

      // update renderer
      renderer.setSize(size.width, size.height);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    });
  };

  const addObjects = () => {
    const geometry = new THREE.BoxGeometry(1, 1, 1, 16, 16);

    material = new THREE.ShaderMaterial( {
      uniforms: {
        color: { value: params.color },
        time: { value: 0.0 },
        tweak: { value: params.tweak }
      },
      vertexShader: vert,
      fragmentShader: frag,
    });

    mesh = new THREE.Mesh(geometry, material);

    scene.add(mesh);
  };

  const render = () => {
    
    material.uniforms.time.value = clock.getElapsedTime()

    controls.update();

    camera.updateProjectionMatrix();

    renderer.render(scene, camera);
    
    window.requestAnimationFrame(render);
  };

  init();
}; 