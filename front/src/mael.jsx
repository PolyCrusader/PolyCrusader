import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './Router.jsx'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
)

// ThreeJS
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const width = window.innerWidth;
const height = window.innerHeight;

// Renderer
const canvas = document.querySelector('canvas.webgl')
const renderer = new THREE.WebGL1Renderer({
    canvas: canvas
})
renderer.setSize(width, height);
renderer.setPixelRatio(window.devicePixelRatio);

//Camera
const camera = new THREE.PerspectiveCamera( 75, width / height, 0.1, 1000 );
camera.position.setZ(10);

//Scene
const scene = new THREE.Scene();

//Light
const light = new THREE.PointLight(0xffffff, 10);
light.position.set(3, 3, 3);
scene.add(light);

//Mesh 2
const geometry2 = new THREE.SphereGeometry(1, 20);
const material2 = new THREE.MeshBasicMaterial({color: 0xfff000, wireframe: true});
const sphere = new THREE.Mesh(geometry2, material2)
sphere.position.x = 0;
scene.add(sphere);

//Orbit 2
const moonOrbit = new THREE.Group();
moonOrbit.add(sphere);
scene.add(moonOrbit);
sphere.position.set(0, 0, 8);

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

animate();