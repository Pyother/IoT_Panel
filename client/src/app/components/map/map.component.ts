import { Component, OnInit } from '@angular/core';
import * as THREE from 'three';

@Component({
  selector: 'app-map',
  template: `<div id="map"></div>`,
  styleUrls: ['./map.component.css'],
  standalone: true
})

export class MapComponent {

  public scene = new THREE.Scene();
  public renderer = new THREE.WebGLRenderer();
  public camera: any;
  public mapElement: any;

  ngOnInit() {
    this.mapElement = document.getElementById('map');
    this.camera = new THREE.PerspectiveCamera(75, this.mapElement.clientWidth / this.mapElement.clientHeight, 0.1, 1000);
    this.renderer.setSize(this.mapElement.clientWidth, this.mapElement.clientHeight);

    // Styling: 
    this.scene.background = new THREE.Color( 0xffffff );
    this.renderer.domElement.style.borderRadius = '0.5em';
    this.mapElement.appendChild(this.renderer.domElement);

    console.log(this.renderer.domElement);

    const geometry = new THREE.BoxGeometry( 1, 1, 1 );
    const material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
    const cube = new THREE.Mesh( geometry, material );

    cube.rotation.x += 0.01;
    cube.rotation.y += 0.01;

    this.scene.add( cube );

    this.camera.position.z = 7;
    this.camera.position.y = 1;
    this.camera.position.x = 1;

    this.animate();
  }

  animate() {
    requestAnimationFrame(() => this.animate());
    this.renderer.render(this.scene, this.camera);
  }
}