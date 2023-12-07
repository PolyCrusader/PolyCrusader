import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './Router.jsx'
import './index.scss'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>,
)

import * as THREE from 'three';

const canvas = document.querySelector('canvas.webgl')

const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera( 75, 700 / 700, 0.1, 1000 );

const geo = new THREE.BoxGeometry(1, 1, 1);
const geoS = new THREE.SphereGeometry(2, 30);
const material = new THREE.MeshBasicMaterial({color: 0xfff000, wireframe: true});
const mesh = new THREE.Mesh(geo, material)
const meshS = new THREE.Mesh(geoS, material)

camera.position.z = 3;
meshS.position.x = 2;

scene.add(mesh);
scene.add(meshS);

const renderer = new THREE.WebGL1Renderer({
    canvas: canvas
})
renderer.setSize(700, 700);

renderer.render(scene, camera)