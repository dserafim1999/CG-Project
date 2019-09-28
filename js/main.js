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
		/*nao esquecer pecas individuais
		case 65: //A
		case 97: //a
			robot.movement.anticlockwise = true;
			break;
		case 83: //S
		case 115: //s
			robot.movement.clockwise = true;
			break;
		case 81: //Q
		case 113: //q
			robot.movement.anticlockwise = true;
			break;
		case 87: //W
		case 119: //w
			robot.movement.clockwise = true;
			break;*/
	}
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
	renderer.render(scene, camera);
}

function animate(){
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
	scene.setActiveCamera = 

	
	render();
	
	window.addEventListener("resize", onResize);
	window.addEventListener("keydown", onKeyDown);
}
