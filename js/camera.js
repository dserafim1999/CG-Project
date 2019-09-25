var camera;

function createFrontCamera() {
	'use strict';
	
	camera = new THREE.OrthographicCamera(-window.innerWidth /  2, window.innerWidth / 2, window.innerHeight / 2, -window.innerHeight /  2, 1, 1000);
	camera.position.x = 0;
	camera.position.y = 0;
	camera.position.z = 50;
	camera.lookAt(scene.position);
}

function createSideCamera() {
	'use strict';
	
	camera = new THREE.OrthographicCamera(-window.innerWidth /  2, window.innerWidth / 2, window.innerHeight / 2, -window.innerHeight /  2, 1, 1000);
	camera.position.x = 50;
	camera.position.y = 0;
	camera.position.z = 0;
	camera.lookAt(scene.position);
}

function createTopCamera() {
	'use strict';
	
	camera = new THREE.OrthographicCamera(-window.innerWidth /  2, window.innerWidth / 2, window.innerHeight / 2, -window.innerHeight /  2, 1, 1000);
	camera.position.x = 0;
	camera.position.y = 50;
	camera.position.z = 0;
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