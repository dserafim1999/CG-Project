function init() {
	'use strict';
	
	renderer = new THREE.WebGLRenderer( {antialias: true } );
	
	renderer.setSize(window.innerWidth, window.innerHeight);
	
	document.body.appendChild(renderer.domElement);
	
	createScene();
	createCamera();
	
	render();
	
	window.addEventListener("resize", onResize);
}

function createScene() {
	'use strict';
	
	scene = new THREE.Scene();
	
	scene.add(new THREE.AxisHelper(10));
	
	//createRobot(0, 0, 0);
	//createTarget(0, 0, 0);
}

function render() {
	'use strict';
	renderer.render(scene, camera);
}