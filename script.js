// Three.js setup
let scene, camera, renderer;

function initThreeJS() {
  // Create scene
  scene = new THREE.Scene();

  // Create camera
  camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
  camera.position.set(0, 0, 100);

  // Create renderer
  renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(window.innerWidth, window.innerHeight);
  renderer.setClearColor(0x000000);

  // Add renderer to page
  const container = document.createElement('div');
  container.id = 'threejs-container';
  container.style.position = 'fixed';
  container.style.top = '0';
  container.style.left = '0';
  container.style.width = '100%';
  container.style.height = '100%';
  container.style.zIndex = '-1';
  container.appendChild(renderer.domElement);
  document.body.appendChild(container);

  // Add lighting
  const ambientLight = new THREE.AmbientLight(0x404040, 0.6);
  scene.add(ambientLight);

  const directionalLight = new THREE.DirectionalLight(0xffffff, 0.8);
  directionalLight.position.set(1, 1, 1);
  scene.add(directionalLight);

  // Load GLTF model
  const loader = new THREE.GLTFLoader();

  loader.load(
    './660cylinderReduced.gltf', // Use relative path with ./
    function (gltf) {
      console.log('Model loaded successfully');
      scene.add(gltf.scene);

      // Center and scale the model
      const box = new THREE.Box3().setFromObject(gltf.scene);
      const center = box.getCenter(new THREE.Vector3());
      const size = box.getSize(new THREE.Vector3());

      // Move model to center
      gltf.scene.position.sub(center);

      // Scale to fit view
      const maxDim = Math.max(size.x, size.y, size.z);
      const scale = 50 / maxDim;
      gltf.scene.scale.setScalar(scale);

      // Position camera to view the model
      camera.position.set(0, 0, maxDim * scale * 2);
      camera.lookAt(0, 0, 0);
    },
    function (progress) {
      console.log('Loading progress:', (progress.loaded / progress.total * 100) + '%');
    },
    function (error) {
      console.error('Error loading model:', error);
      // Fallback: show error message
      const errorDiv = document.createElement('div');
      errorDiv.innerHTML = 'Error loading 3D model. Check console for details.';
      errorDiv.style.position = 'fixed';
      errorDiv.style.top = '50%';
      errorDiv.style.left = '50%';
      errorDiv.style.transform = 'translate(-50%, -50%)';
      errorDiv.style.color = 'red';
      errorDiv.style.fontSize = '20px';
      document.body.appendChild(errorDiv);
    }
  );

  // Animation loop
  function animate() {
    requestAnimationFrame(animate);
    renderer.render(scene, camera);
  }
  animate();

  // Handle window resize
  window.addEventListener('resize', function() {
    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(window.innerWidth, window.innerHeight);
  });
}

// Initialize Three.js when page loads
window.addEventListener('load', initThreeJS);

// Original scroll functionality
window.addEventListener('scroll', function() {
    const footer = document.querySelector('.footer');

    // Check if the user has scrolled to the very bottom of the page
    footer.classList.add('show');
    if ((window.innerHeight + window.scrollY) >= document.body.offsetHeight) {
        footer.classList.add('show'); // Add 'show' class to reveal the footer
    } else {
        footer.classList.remove('show'); // Remove 'show' class to hide it
    }
});

