// main.js

import * as THREE from 'https://cdnjs.cloudflare.com/ajax/libs/three.js/r128/three.module.js';

// Variables globales para Three.js
let scene, camera, renderer, cube;

// Función principal
function init() {
  // Configurar la escena
  scene = new THREE.Scene();

  // Configurar la cámara
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.z = 5;

  // Crear un cubo
  const geometry = new THREE.BoxGeometry();
  const material = new THREE.MeshBasicMaterial({ color: 0x00ff00 });
  cube = new THREE.Mesh(geometry, material);
  scene.add(cube);

  // Configurar el renderizador
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
  document.getElementById('threejs-container').appendChild(renderer.domElement);

  // Evento de clic para cambiar el color del cubo
  document.getElementById('colorChangeBtn').addEventListener('click', changeCubeColor);

  // Animar la escena
  animate();
}

// Función para animar la escena
function animate() {
  requestAnimationFrame(animate);

  // Rotar el cubo
  cube.rotation.x += 0.01;
  cube.rotation.y += 0.01;

  // Renderizar la escena
  renderer.render(scene, camera);
}

// Función para cambiar el color del cubo
function changeCubeColor() {
  const newColor = new THREE.Color(Math.random(), Math.random(), Math.random());
  cube.material.color = newColor;
}

// Inicializar la aplicación
init();
