// Step 3: Set up scene, camera, and renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(
  75, window.innerWidth / window.innerHeight, 0.1, 1000
);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth, window.innerHeight);
renderer.setClearColor(0x000000); // black background
document.body.appendChild(renderer.domElement);

// Step 4: Create a page (plane geometry with texture)
const geometry = new THREE.PlaneGeometry(1, 1.5);
const texture = new THREE.TextureLoader().load('page1.jpg'); // replace with your image
const material = new THREE.MeshBasicMaterial({ map: texture, side: THREE.DoubleSide });
const page = camera and page
camera.position.z = 3;
page.position.x = 0;

// Step 5: Animate the page flip
function animate() {
  requestAnimationFrame(animate);
  page.rotation.y += 0.01; // slow rotation for flip effect
  renderer.render(scene, camera);
}
animate();

// Step 6: Add interactivity (optional)
document.addEventListener('click', () => {
  page.rotation.y += Math.PI; // flip 180 degrees on click
});