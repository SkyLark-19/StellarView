// Create the scene
const scene = new THREE.Scene();

// Create the camera (FOV, Aspect Ratio, Near, Far)
const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
camera.position.z = 50;  // Initial zoom level

// Create the WebGL renderer
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

// Create spheres for the Sun and planets
const createPlanet = (size, color, xPosition) => {
    const geometry = new THREE.SphereGeometry(size, 32, 32);
    const material = new THREE.MeshBasicMaterial({ color });
    const planet = new THREE.Mesh(geometry, material);
    planet.position.x = xPosition;
    return planet;
};

// Add Sun and planets to the scene
const sun = createPlanet(5, 0xffff00, 0);  // Sun at the center
scene.add(sun);

const mercury = createPlanet(0.5, 0xa9a9a9, 8);
const venus = createPlanet(1, 0xffd700, 12);
const earth = createPlanet(1.2, 0x0000ff, 16);
const mars = createPlanet(0.8, 0xff4500, 20);

scene.add(mercury);
scene.add(venus);
scene.add(earth);
scene.add(mars);

// Animation loop
function animate() {
    requestAnimationFrame(animate);

    // Rotations (simulate orbits)
    sun.rotation.y += 0.001;
    mercury.rotation.y += 0.005;
    venus.rotation.y += 0.004;
    earth.rotation.y += 0.003;
    mars.rotation.y += 0.002;

    renderer.render(scene, camera);
}
animate();


// Add event listener for zooming
window.addEventListener('wheel', (event) => {
    // Zoom in (scroll up) or zoom out (scroll down)
    if (event.deltaY < 0) {
        camera.position.z -= 2;  // Zoom in
    } else {
        camera.position.z += 2;  // Zoom out
    }
});


window.addEventListener('resize', () => {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
});


