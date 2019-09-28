var scene, renderer;

var geometry, material, mesh;

var robot;

function createRobot(x, y, z) {
	'use strict';

	robot = new THREE.Object3D();
	material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });

	robot.movement = {
		up: true,
		down: true,
		left: true,
		right: true
	};

	var base = createBase(robot);
	var arm = createArm(robot);

	base.add(arm);
	base.position.set(7, 7, 7);

	robot.add(base);
	robot.position.set(8, 8, 8);

	robot.arm = arm;

	scene.add(robot);
}

function createBase(robot) {
	'use strict';

	var base = new THREE.Object3D();

	material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });

	createTableTop(base, 0, 0, 0);
	createWheels(base);

	return base;
	robot.add(base);
}

function createTableTop(base, x, y, z) {
	'use strict';
	material = new THREE.MeshBasicMaterial({ color: 0x00ff00, wireframe: true });
	geometry = new THREE.CubeGeometry(40, 1.5, 20);
	mesh = new THREE.Mesh(geometry, material);

	mesh.position.set(x, y, z);
	base.add(mesh);
}

function createWheels(base) {
	'use strict';
	createWheel(base, -20, -1.5, 10);
	createWheel(base, 20, -1.5, -10);
	createWheel(base, -20, -1.5, -10);
	createWheel(base, 20, -1.5, 10);
}

function createWheel(base, x, y, z) {
	'use strict';
	material = new THREE.MeshBasicMaterial({ color: 0x0000ff, wireframe: true });
	geometry = new THREE.SphereGeometry(2, 10, 10);
	mesh = new THREE.Mesh(geometry, material);
	mesh.position.set(x, y, z);
	base.add(mesh);
}

function createArm(robot) {
	'use strict';

	material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });

	var arm = new THREE.Object3D();
	var shoulder = createMainJoint(arm, 0, 3, 0);
	var lowerStick = createStick(arm, 0, 6.5, 0);
	var lowerArmJoint = createArmJoint(arm, 0, 26.5, 0);
	var upperStick = createStick(arm, 0, 30.5, 0);
	var upperArmJoint = createArmJoint(arm, 0, 40.5, 0);
	var hand = createHand(arm);

	upperArmJoint.add(hand);
	upperArmJoint.position.set(1, 1, 1);

	upperStick.add(upperArmJoint);
	upperStick.position.set(2, 2, 2);

	lowerArmJoint.add(upperStick);
	lowerArmJoint.position.set(3, 3, 3);

	lowerStick.add(lowerArmJoint);
	lowerStick.position.set(4, 4, 4);

	shoulder.add(lowerStick);
	shoulder.position.set(5, 5, 5);

	arm.add(shoulder);
	arm.position.set(6, 6, 6);

	arm.parts = {
		shoulder: shoulder,
		lowerStick: lowerStick,
		lowerArmJoint: lowerArmJoint,
		upperStick: upperStick,
		upperArmJoint: upperArmJoint,
		hand: hand
	};

	return arm;
	robot.add(arm);
}

function createMainJoint(arm, x, y, z) {
	'use strict';
	var mainJoint = new THREE.Object3D();
	material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });
	geometry = new THREE.LatheGeometry(5, 5, 5);
	mesh = new THREE.Mesh(geometry, material);
	mainJoint.add(mesh);
	return mainJoint;

	mesh.position.set(x, y, z);
	base.add(mesh);
}

function createStick(arm, x, y, z) {
	'use strict';
	var stick = new THREE.Object3D();
	material = new THREE.MeshBasicMaterial({ color: 0xf0000f, wireframe: true });
	geometry = new THREE.CubeGeometry(3, 20, 3);
	mesh = new THREE.Mesh(geometry, material);
	stick.add(mesh);
	return stick;
	mesh.position.set(x, y, z);
	arm.add(mesh);
}

function createArmJoint(arm, x, y, z) {
	'use strict';
	var armJoint = new THREE.Object3D();
	material = new THREE.MeshBasicMaterial({ color: 0xea00af, wireframe: true });
	geometry = new THREE.SphereGeometry(2, 10, 10);
	mesh = new THREE.Mesh(geometry, material);
	armJoint.add(mesh);
	return armJoint;
	mesh.position.set(x, y, z);
	arm.add(mesh);
}

function createHand(arm) {
	var hand = new THREE.Object3D();
	material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });

	createPalm(hand, 0, 40, 0);
	createFingers(hand);

	return hand;
	arm.add(hand);
}

function createPalm(hand, x, y, z) {
	'use strict';
	material = new THREE.MeshBasicMaterial({ color: 0xaaaa00, wireframe: true });
	geometry = new THREE.CubeGeometry(10, 2, 10);
	mesh = new THREE.Mesh(geometry, material);

	mesh.position.set(x, y, z);
	hand.add(mesh);
}

function createFingers(hand) {
	createFinger(hand, 4, 42, 5);
	createFinger(hand, -4, 42, 5);
}

function createFinger(hand, x, y, z) {
	'use strict';
	material = new THREE.MeshBasicMaterial({ color: 0xbbddcc, wireframe: true });
	geometry = new THREE.CubeGeometry(2, 10, 2);
	mesh = new THREE.Mesh(geometry, material);

	mesh.position.set(x, y, z);
	hand.add(mesh);
}
