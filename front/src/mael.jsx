import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './Router.jsx'
import { useEffect } from 'react'
import './index.scss'


import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

function Mael() {
  useEffect(() => {
    const width = window.innerWidth;
    const height = window.innerHeight;

    // Renderer
    const canvas = document.querySelector('canvas.webgl');
    const renderer = new THREE.WebGL1Renderer({
      canvas: canvas,
    });
    renderer.setSize(width, height);
    renderer.setPixelRatio(window.devicePixelRatio);

    // Camera
    const camera = new THREE.PerspectiveCamera(75, width / height, 0.1, 1000);
    camera.position.setZ(10);

    // Scene
    const scene = new THREE.Scene();

    // Light
    const light = new THREE.PointLight(0xffffff, 1000);
    light.position.set(-7, 7, 7);
    scene.add(light);

    // Import models
    let earthModel;
    const loader = new GLTFLoader();

    loader.load('../public/the_earth.gltf', function (gltf) {
      earthModel = gltf.scene;
      earthModel.scale.set(1, 1, 1);
      scene.add(earthModel);

      // Call animate here to start animation after the model is loaded
      animate();
    }, undefined, function (error) {
      console.error(error);
    });

    // Orbit
    const orbit = new THREE.Group();
    orbit.add(camera);
    scene.add(orbit);
    camera.position.set(0, 0, 8);
    camera.lookAt(0, 0, 0);

    const target = new THREE.Vector2();
    const windowHalf = new THREE.Vector2(window.innerWidth / 2, window.innerHeight / 2);
    document.addEventListener('mousemove', onMouseMove, false);
    const mouse = new THREE.Vector2();

    function onMouseMove(event) {
      mouse.x = event.clientX - windowHalf.x;
      mouse.y = event.clientY - windowHalf.y;
    }

    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      if (earthModel) {
        earthModel.rotation.y += 0.01;
      }

      target.x = (1 - mouse.x) * 0.005;
      target.y = (1 - mouse.y) * 0.001;

      orbit.rotation.x += 0.01 * (target.y - orbit.rotation.x);
      orbit.rotation.y += 0.01 * (target.x - orbit.rotation.y);
    }

    // animate(); // Don't call animate here, as it should be triggered after the model is loaded

  }, []);

  return <canvas className="webgl"></canvas>;
}

export default Mael;
