var FrontCamera, SideCamera, TopCamera;

function createFrontCamera() {
	'use strict';
	
	FrontCamera = new THREE.OrthographicCamera(-window.innerWidth /  8, window.innerWidth / 8, window.innerHeight / 8, -window.innerHeight /  8, 1, 1000);
	FrontCamera.position.x = 0;
	FrontCamera.position.y = 0;
	FrontCamera.position.z = 50;
	FrontCamera.lookAt(scene.position);
}

function createSideCamera() {
	'use strict';
	
	SideCamera = new THREE.OrthographicCamera(-window.innerWidth /  8, window.innerWidth / 8, window.innerHeight / 8, -window.innerHeight /  8, 1, 1000);
	SideCamera.position.x = 50;
	SideCamera.position.y = 0;
	SideCamera.position.z = 0;
	SideCamera.lookAt(scene.position);
}

function createTopCamera() {
	'use strict';
	
	TopCamera = new THREE.OrthographicCamera(-window.innerWidth /  8, window.innerWidth / 8, window.innerHeight / 8, -window.innerHeight /  8, 1, 1000);
	TopCamera.position.x = 0;
	TopCamera.position.y = 50;
	TopCamera.position.z = 0;
	TopCamera.lookAt(scene.position);
}