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
		case 38: //up
			robot.movement.up = true;
			break;
		case 40: //down
			robot.movement.down = true;
			break;
		case 37: //left
			robot.movement.left = true;
			break;
		case 39: //right
			robot.movement.right = true;
			break;
		case 65: //A
		case 97: //a
			robot.base.mainJoint.rotating.anticlockwise = true;
			break;
		case 83: //S
		case 115: //s
			robot.base.mainJoint.rotating.clockwise = true;
			break;
		case 81: //Q
		case 113: //q
			robot.arm.rotating.anticlockwise = true;
			break;
		case 87: //W
		case 119: //w
			robot.arm.rotating.clockwise = true;
			break;
	}
}


function onKeyUp(e) {
	'use strict';

	switch(e.keyCode){
		case 38: //up
			robot.movement.up = false;
			break;
		case 40: //down
			robot.movement.down = false;
			break;
		case 37: //left
			robot.movement.left = false;
			break;
		case 39: //right
			robot.movement.right = false;
			break;
		case 65: //A
		case 97: //a
			robot.base.mainJoint.rotating.anticlockwise = false;
			break;
		case 83: //S
		case 115: //s
			robot.base.mainJoint.rotating.clockwise = false;
			break;
		case 81: //Q
		case 113: //q
			robot.arm.rotating.anticlockwise = false;
			break;
		case 87: //W
		case 119: //w
			robot.arm.rotating.clockwise = false;
			break;

	}
}

function onResize() {
	'use strict';
	renderer.setSize(window.innerWidth, window.innerHeight);
	scene.activeCamera.aspect = (renderer.getSize().width / renderer.getSize().height);
	scene.activeCamera.updateProjectionMatrix();
}


function createScene() {
	'use strict';
	
	scene = new THREE.Scene();
	
	scene.add(new THREE.AxisHelper(10));
	
	createRobot(0, 0, 0);
	createTarget(50, -5, 0);
}

function render() {
	'use strict';
	renderer.render(scene, scene.activeCamera);
}

function animate() {
	'use strict';

	robotMovement();

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
	window.addEventListener("keyup", onKeyUp);	



}
