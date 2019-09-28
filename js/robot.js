var scene, renderer;

var geometry, material, mesh;

var robot;

var speed = 0.5, rotationSpeed = 0.05;


function robotMovement(){
	'use strict';

	if(robot.movement.up)
		robot.position.x += speed;
	if(robot.movement.down)
		robot.position.x -= speed;
	if(robot.movement.left)
		robot.position.z -= speed;
	if(robot.movement.right)
		robot.position.z += speed;
	if(robot.base.mainJoint.rotating.anticlockwise)
		robot.arm.rotation.y += rotationSpeed;
	if(robot.base.mainJoint.rotating.clockwise)
		robot.arm.rotation.y -= rotationSpeed;
	if(robot.arm.rotating.anticlockwise)
		robot.arm.rotation.z += rotationSpeed;
	if(robot.arm.rotating.clockwise)
		robot.arm.rotation.z -= rotationSpeed;
}

function createRobot(x, y, z) {
	'use strict';

	robot = new THREE.Object3D();
	material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });

	// This should be used to control the movement of the robot
	robot.movement = {
		up: false,
		down: false,
		left: false,
		right: false
	};

	// Theese are saved so they can be used later to move the correct parts of the robot
	robot.base = createBase();
	robot.arm = createArm();

	robot.base.add(robot.arm);
	robot.add(robot.base);
	robot.position.set(-50, 0, 0);

	scene.add(robot);
}

function createBase() {
	'use strict';

	var base = new THREE.Object3D();

	material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });

	createTableTop(base, 0, 0, 0);
	createWheels(base);
	base.mainJoint = createMainJoint(base, 0, 4, 0);

	// With this we will control the rotation of the mainJoint.
	base.mainJoint.rotating = {
		clockwise: false,
		counterclockwise: false
	};

	return base;
}

function createTableTop(base, x, y, z) {
	'use strict';
	material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
	geometry = new THREE.CubeGeometry(40, 2, 20);
	mesh = new THREE.Mesh(geometry, material);

	mesh.position.set(x, y, z);
	base.add(mesh);
}

function createWheels(base) {
	'use strict';
	createWheel(base, -20, -3, 10);
	createWheel(base, 20, -3, -10);
	createWheel(base, -20, -3, -10);
	createWheel(base, 20, -3, 10);
}

function createWheel(base, x, y, z) {
	'use strict';
	material = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true });
	geometry = new THREE.SphereGeometry(2, 10, 10);
	mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(x, y, z);
	base.add(mesh);
}

function createMainJoint(base, x, y, z) {
	'use strict';
	var mainJoint = new THREE.Object3D();
	var points = [];
	for (var i = 0; i < 10; i++) {
		points.push(new THREE.Vector2(Math.sin(i * 0.2) * 10 + 5, (i - 5) * 2));
	}
	material = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true });
	geometry = new THREE.LatheGeometry(points);
	mesh = new THREE.Mesh(geometry, material);
	mainJoint.add(mesh);
	mainJoint.scale.set(0.4, 0.4, 0.4);
	mainJoint.rotation.x = Math.PI;
	mainJoint.position.set(x, y, z);
	base.add(mainJoint);

	return mainJoint;
}

function createArm() {
	'use strict';

	material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });

	var arm = new THREE.Object3D();
	var lowerStick = createStick(0, 11, 0);
	var lowerArmJoint = createArmJoint(0, 12.5, 0);
	var upperStick = createStick(12.5, 0, 0);
	var upperArmJoint = createArmJoint(0, -12.5, 0);
	var hand = createHand(0, -4, 0);

	// Making the lower stick longer
	//lowerStick.scale.y = 1.5;

	upperStick.rotation.z = Math.PI / 2;

	upperArmJoint.add(hand);
	upperStick.add(upperArmJoint);
	lowerArmJoint.add(upperStick);
	lowerStick.add(lowerArmJoint);
	arm.add(lowerStick);

	// This is not in use, but it could be in use for later use of moving all the parts of the robot
	arm.parts = {
		lowerStick: lowerStick,
		lowerArmJoint: lowerArmJoint,
		upperStick: upperStick,
		upperArmJoint: upperArmJoint,
		hand: hand
	};

	// With this we will control the rotation of the arm.
	arm.rotating = {
		clockwise: false,
		counterclockwise: false
	};

	return arm;
}

function createStick(x, y, z) {
	'use strict';
	var stick = new THREE.Object3D();
	material = new THREE.MeshBasicMaterial({ color: 0xf0000f, wireframe: true });
	geometry = new THREE.CubeGeometry(3, 20, 3);
	mesh = new THREE.Mesh(geometry, material);
	stick.add(mesh);
	stick.position.set(x, y, z);
	return stick;
}

function createArmJoint(x, y, z) {
	'use strict';
	var armJoint = new THREE.Object3D();
	material = new THREE.MeshBasicMaterial({ color: 0xea00af, wireframe: true });
	geometry = new THREE.SphereGeometry(3, 10, 10);
	mesh = new THREE.Mesh(geometry, material);
	armJoint.add(mesh);

	armJoint.position.set(x, y, z);
	return armJoint;
}

function createHand(x, y, z) {
	var hand = new THREE.Object3D();
	material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });

	createPalm(hand, 0, 0, 0);
	createFingers(hand);

	hand.position.set(x, y, z);

	return hand;
}

function createPalm(hand, x, y, z) {
	'use strict';
	material = new THREE.MeshBasicMaterial({ color: 0xaaaa00, wireframe: true });
	geometry = new THREE.CubeGeometry(15, 2, 15);
	mesh = new THREE.Mesh(geometry, material);

	mesh.position.set(x, y, z);
	hand.add(mesh);
}

function createFingers(hand) {
	createFinger(hand, 4, -6, 0);
	createFinger(hand, -4, -6, 0);
}

function createFinger(hand, x, y, z) {
	'use strict';
	material = new THREE.MeshBasicMaterial({ color: 0xbbddcc, wireframe: true });
	geometry = new THREE.CubeGeometry(2, 10, 2);
	mesh = new THREE.Mesh(geometry, material);

	mesh.position.set(x, y, z);
	hand.add(mesh);
}
