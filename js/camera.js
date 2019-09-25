var camera;

function createCamera() {
	'use strict';
	
	camera = new THREE.PerspectiveCamera(70, window.innerWidth / window.innerHeight, 1, 1000);
	camera.position.x = 50;
	camera.position.y = 50;
	camera.position.z = 50;
	camera.lookAt(scene.position);
}

function onResize() {
	'use strict';
	
	renderer.setSize(window.innerWidth, window.innerHeight);
	
	if (window.innerHeight > 0 && window.innerWidth > 0) {
		camera.aspect = renderer.getSize().width / renderer.getSize().height;
		camera.updateProjectionMatrix();
	}
}