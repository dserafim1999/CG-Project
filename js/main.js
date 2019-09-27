function onKeyDown(e) {
	'use strict';
	
	switch (e.keyCode) {
		
		case 49: //1
			scene.activeCamera = TopCamera;
			break;
		
		case 50: //2
			scene.activeCamera = FrontCamera;
			break;
		
		case 51: //3
			scene.activeCamera = SideCamera;
			break;
		
		case 52: //4
			scene.traverse(function (node) {
				if (node instanceof THREE.Mesh) {
					node.material.wireframe = !node.material.wireframe;
				}
			});
			break;
	}
}

function onResize() {
	'use strict';
	
	scene.activeCamera.aspect = renderer.getSize().width / renderer.getSize().height;
	scene.activeCamera.updateProjectionMatrix();
	renderer.setSize(window.innerWidth, window.innerHeight);
}


function createScene() {
	'use strict';
	
	scene = new THREE.Scene();
	
	scene.add(new THREE.AxisHelper(10));
	
	createRobot(0, 0, 0);
	//createTarget(0, 0, 0);
}

function render() {
	'use strict';
	renderer.render(scene, scene.activeCamera);
}

function animate() {
	'use strict';

	render();
	
	requestAnimationFrame(animate);
}

function init() {
	'use strict';
	
	renderer = new THREE.WebGLRenderer( {antialias: true } );
	
	renderer.setSize(window.innerWidth, window.innerHeight);
	
	document.body.appendChild(renderer.domElement);
	
	createScene();
	createFrontCamera();
	createTopCamera();
	createSideCamera();
	scene.activeCamera = TopCamera;

	render();

	window.addEventListener("resize", onResize);
	window.addEventListener("keydown", onKeyDown);	



}
