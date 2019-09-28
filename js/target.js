
var target;

function createSupport(x, y, z) {
	'use strict';
	var support = new THREE.Object3D();
	material = new THREE.MeshBasicMaterial({ color: 0x9999ff, wireframe: true });
	geometry = new THREE.CylinderGeometry(7, 7, 30, 30);
	mesh = new THREE.Mesh(geometry, material);
	support.add(mesh);
	support.position.set(x, y, z);
	return support;
}

function createTorus(x, y, z) {
	'use strict';
	var torus = new THREE.Object3D();
	material = new THREE.MeshBasicMaterial({ color: 0xff9933, wireframe: true });
	geometry = new THREE.TorusGeometry(6, 3, 30, 30);
	mesh = new THREE.Mesh(geometry, material);
	mesh.rotation.y = Math.PI / 2;
	torus.add(mesh);
	torus.position.set(x, y, z);
	return torus;
}

function createTarget(x, y, z) {
	'use strict';

	target = new THREE.Object3D();
	material = new THREE.MeshBasicMaterial({ color: 0xff0000, wireframe: true });

	target.support = createSupport(0,15,0);
	target.add(target.support);

	target.torus = createTorus(0,39,0);
	target.add(target.torus);

	target.position.set(x, y, z);
	scene.add(target);

}
