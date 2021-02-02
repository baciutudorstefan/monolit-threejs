// import * as THREE from 'https://unpkg.com/three/build/three.module.js';

import { OrbitControls } from 'https://unpkg.com/three/examples/jsm/controls/OrbitControls.js';

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75,
  window.innerWidth / window.innerHeight,
  0.1,
  1000,
);

const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

const geometry = new THREE.CylinderGeometry(5, 5, 20, 32);
const material = new THREE.MeshNormalMaterial({ wireframe: true });
const cylinder = new THREE.Mesh(geometry, material);
scene.add(cylinder);

camera.position.z = 35;

var controls = new OrbitControls(camera, renderer.domElement);
controls.minDistance = 1;
controls.maxDistance = 1000;

const animate = () => {
  requestAnimationFrame(animate);
  cylinder.rotation.y += 0.01;
  controls.update();
  renderer.render(scene, camera);
};

animate();
