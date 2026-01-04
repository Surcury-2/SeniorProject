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
const loader = new THREE.GLTFLoader();

loader.load(
  '660cylinderReduced.gltf',
  function (gltf) {
    scene.add(gltf.scene);
  },
  undefined,
  function (error) {
    console.error('Error loading model:', error);
  }
);

