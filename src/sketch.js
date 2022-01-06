import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls.js'
import GUI from 'lil-gui';

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

  const gui = new GUI()
  const params = {
    backgroundColor: 0xffffff,
    color: 0xff00ff,
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

    initGui()
    bindEvents();
    addObjects();
    render();
  };

  const initGui = () => {
    gui.addColor(params, 'backgroundColor').onChange(v => renderer.setClearColor(v));
    gui.addColor(params, 'color').onChange(v => material.setValues({ color: v }));
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
    const geometry = new THREE.BoxGeometry(1, 1, 1);

    material = new THREE.MeshBasicMaterial({ color: params.color });

    mesh = new THREE.Mesh(geometry, material);

    scene.add(mesh);
  };

  const render = () => {
    
    controls.update();

    camera.updateProjectionMatrix();

    renderer.render(scene, camera);
    
    window.requestAnimationFrame(render);
  };

  init();
}; 