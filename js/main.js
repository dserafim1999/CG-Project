function onKeyDown(e) {
	'use strict';
	
	switch (e.keyCode) {
		case 49://1
			createTopCamera();
			break;

		case 50://2
			createFrontCamera();
			break;

		case 51://3
			createSideCamera();
			break;

		case 52://4
			scene.traverse(function (node) {
				if (node instanceof THREE.Mesh) {
					node.material.wireframe = !node.material.wireframe;
				}
			});
			break;
	}
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

function init() {
	'use strict';
	
	renderer = new THREE.WebGLRenderer( {antialias: true } );
	
	renderer.setSize(window.innerWidth, window.innerHeight);
	
	document.body.appendChild(renderer.domElement);
	
	createScene();
	createTopCamera();
	
	render();
	
	window.addEventListener("resize", onResize);
	window.addEventListener("keydown", onKeyDown);
}
