import React from 'react'
import ReactDOM from 'react-dom/client'
import AppRouter from './Router.jsx'
import { useEffect } from 'react'
import './index.scss'


// ThreeJS
import * as THREE from 'three';
import { GLTFLoader } from 'three/addons/loaders/GLTFLoader.js';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';


function Mael(){

useEffect(() => {
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
    const material2 = new THREE.MeshBasicMaterial({color: 0xfff0f0, wireframe: true});
    const sphere = new THREE.Mesh(geometry2, material2)
    sphere.position.x = 0;
    scene.add(sphere);
    
    //Import models
    let earthModel;
    const loader = new GLTFLoader();

    loader.load( '../public/the_earth.gltf', function ( gltf ) {
        earthModel = gltf.scene;
        earthModel.scale.set(1,1,1);
        scene.add(gltf.scene);
    }, undefined, function ( error ) {
        console.error( error );
    } );

    //Orbit 2
    const moonOrbit = new THREE.Group();
    moonOrbit.add(sphere);
    scene.add(moonOrbit);
    sphere.position.set(0, 0, 8);

    const target = new THREE.Vector2();
    const windowHalf = new THREE.Vector2(window.innerWidth / 2, window.innerHeight / 2);
    document.addEventListener('mousemove', onMouseMove, false);
    const mouse = new THREE.Vector2();
    
    function onMouseMove(event) {
        mouse.x = (event.clientX - windowHalf.x)
        mouse.y = (event.clientY - windowHalf.y)
    }
    
    function animate() {
      requestAnimationFrame(animate);
      renderer.render(scene, camera);
      sphere.rotation.x += 0.01;

      target.x = (1 - mouse.x) * 0.001;
      target.y = (1 - mouse.y) * 0.001;

      camera.rotation.x += 0.01 * (target.y - camera.rotation.x);
      camera.rotation.y += 0.01 * (target.x - camera.rotation.y);
    }

    animate();
    }, []);


    return (
        <canvas class="webgl"></canvas>
    )

}

export default Mael;