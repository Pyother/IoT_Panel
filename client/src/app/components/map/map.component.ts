import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';

@Component({
  selector: 'app-map',
  template: `<div id="map"></div>`,
  styleUrls: ['./map.component.css'],
  standalone: true
})

export class MapComponent implements OnInit {

  public scene = new THREE.Scene();
  public renderer = new THREE.WebGLRenderer();
  public camera: any;
  public mapElement: any;
  public controls: any;
  public cube: any;

  ngOnInit() {

    this.mapElement = document.getElementById('map');
    this.camera = new THREE.PerspectiveCamera(75, this.mapElement.clientWidth / this.mapElement.clientHeight, 0.1, 1000);
    this.renderer.setSize(this.mapElement.clientWidth, this.mapElement.clientHeight);

    // Styling:
    this.scene.background = new THREE.Color(0xffffff);
    this.renderer.domElement.style.borderRadius = '0.5em';
    this.mapElement.appendChild(this.renderer.domElement);

    // Load texture
    const textureLoader = new THREE.TextureLoader();
    const texture = textureLoader.load('../../../assets/textures/material_texture.jpg');

    // Create material with texture
    const material = new THREE.MeshBasicMaterial({ map: texture });

    const geometry = new THREE.BoxGeometry(1, 1, 1);
    this.cube = new THREE.Mesh(geometry, material);
    this.cube.castShadow = true; // Enable shadow casting for the cube
    this.scene.add(this.cube);

    // Position the cube
    this.cube.position.set(0, 0, 0);

    // Add lights and shadows (code omitted for brevity)

    // Add controls
    this.controls = new OrbitControls(this.camera, this.renderer.domElement);
    this.controls.update();

    // Position the camera
    this.camera.position.z = 5;
    this.camera.position.y = 5;
    this.camera.position.x = 0;

    this.animate();
  }

  animate() {
    requestAnimationFrame(() => this.animate());

    // Rotate the cube
    this.cube.rotation.y += 0.005;

    // Update controls
    this.controls.update();
    this.renderer.render(this.scene, this.camera);
  }

  createLine(startPosition: any, endPosition: any) {
    const lineGeometry = new THREE.BufferGeometry();
    const positions = new Float32Array([
        startPosition.x, startPosition.y, startPosition.z,
        endPosition.x, endPosition.y, endPosition.z
    ]);
    lineGeometry.setAttribute('position', new THREE.BufferAttribute(positions, 3));

    const lineMaterial = new THREE.LineBasicMaterial({ color: 0x0000ff });

    const line = new THREE.Line(lineGeometry, lineMaterial);

    this.scene.add(line);
  }

  moveUp() {
    const startPosition = this.cube.position.clone();
    this.cube.position.z += 0.5;
    const endPosition = this.cube.position.clone();
    this.createLine(startPosition, endPosition);
  }

  moveUpLeft() {
    const startPosition = this.cube.position.clone();
    this.cube.position.z += 0.5;
    this.cube.position.x -= 0.5;
    const endPosition = this.cube.position.clone();
    this.createLine(startPosition, endPosition);
  }

  moveUpRight() {
    const startPosition = this.cube.position.clone();
    this.cube.position.z += 0.5;
    this.cube.position.x += 0.5;
    const endPosition = this.cube.position.clone();
    this.createLine(startPosition, endPosition);
  }

  moveDown() {
    const startPosition = this.cube.position.clone();
    this.cube.position.z -= 0.5;
    const endPosition = this.cube.position.clone();
    this.createLine(startPosition, endPosition);
  }

  moveDownLeft() {
    const startPosition = this.cube.position.clone();
    this.cube.position.z -= 0.5;
    this.cube.position.x -= 0.5;
    const endPosition = this.cube.position.clone();
    this.createLine(startPosition, endPosition);
  }

  moveDownRight() {
    const startPosition = this.cube.position.clone();
    this.cube.position.z -= 0.5;
    this.cube.position.x += 0.5;
    const endPosition = this.cube.position.clone();
    this.createLine(startPosition, endPosition);
  }

  moveLeft() {
    const startPosition = this.cube.position.clone();
    this.cube.position.x -= 0.5;
    const endPosition = this.cube.position.clone();
    this.createLine(startPosition, endPosition);
  }

  moveRight() {
    const startPosition = this.cube.position.clone();
    this.cube.position.x += 0.5;
    const endPosition = this.cube.position.clone();
    this.createLine(startPosition, endPosition);
  }
}
