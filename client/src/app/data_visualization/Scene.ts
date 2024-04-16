import * as THREE from 'three';

export class Scene {

    public scene = new THREE.Scene();
    public camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    public renderer = new THREE.WebGLRenderer();

    constructor() {

        const mapElement = document.getElementById('map');

        console.log("Scene constructor - map: ", document.getElementById('root'));

        // Check if mapElement exists
        if (mapElement) {
            // Set renderer size
            this.renderer.setSize(mapElement.clientWidth, mapElement.clientHeight);

            // Append renderer DOM element to map element
            mapElement.appendChild(this.renderer.domElement);
        } else {
            console.error("Map element with id 'map' not found in the DOM.");
        }
    }
}
