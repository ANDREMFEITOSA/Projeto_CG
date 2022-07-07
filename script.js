import {OrbitControls} from "https://threejsfundamentals.org/threejs/resources/threejs/r110/examples/jsm/controls/OrbitControls.js";

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);

camera.position.z = 20;

camera.position.y = 15;

const renderer = new THREE.WebGLRenderer();

renderer.shadowMap.enabled = true;

renderer.setSize(window.innerWidth, window.innerHeight);

document.body.appendChild(renderer.domElement);

const controlador = new OrbitControls(camera, renderer.domElement);

var loader = new THREE.TextureLoader();

var geometria = new THREE.BoxGeometry();

var material = new THREE.MeshPhongMaterial({map:loader.load('https://raw.githubusercontent.com/ANDREMFEITOSA/Projeto_CG/master/textura-de-a%C3%A7o.jpg')});

//Criar o plano base da cena

function CriarPiso(x, y, z, c, l){
	var g = new THREE.PlaneGeometry(c, l);
	var t = loader.load('https://raw.githubusercontent.com/ANDREMFEITOSA/Projeto_CG/master/Texturas_de_concreto.jpg');
	t.wrapS = THREE.RepeatWrapping;
	t.wrapT = THREE.RepeatWrapping;
	t.magFilter = THREE.NearestFilter;
	t.repeat.set(12, 12);
	var ma =new THREE.MeshPhongMaterial({map: t, side: THREE.DoubleSide});
	var p = new THREE.Mesh(g, ma);
	p.rotation.x = Math.PI * -.5;
 // p.castShadow = true;
  p.receiveShadow = true;
	scene.add(p);
  p.position.x = x;
	p.position.y = y;
  p.position.z = z;
}

//Criar pista

function CriarPista(x, y, z, c, l){
	var g = new THREE.PlaneGeometry(c, l);
  //var loader1 = new THREE.TextureLoader();
	var t = loader.load('https://raw.githubusercontent.com/ANDREMFEITOSA/Projeto_CG/master/textura-da-estrada-do-asfalto.jpg');
	t.wrapS = THREE.RepeatWrapping;
	t.wrapT = THREE.RepeatWrapping;
	t.magFilter = THREE.NearestFilter;
	t.repeat.set(1, 1);

	//var ma = new THREE.MeshPhongMaterial({color: 'green', side: THREE.DoubleSide});
	var ma = new THREE.MeshPhongMaterial({map: t, side: THREE.DoubleSide});
	var p = new THREE.Mesh(g, ma);
	p.rotation.x = Math.PI * -.5;
 // p.castShadow = true;
  p.receiveShadow = true;
	scene.add(p);
  p.position.x = x;
	p.position.y = y;
  p.position.z = z;
}

//Criar estrada

function CriarEstrada(x, y, z, c, l){
	var g = new THREE.PlaneGeometry(c, l);
	var t = loader.load('https://raw.githubusercontent.com/ANDREMFEITOSA/Projeto_CG/master/estrada.jpg');
	t.wrapS = THREE.RepeatWrapping;
	t.wrapT = THREE.RepeatWrapping;
	t.magFilter = THREE.NearestFilter;
	t.repeat.set(1, 1);
	var ma = new THREE.MeshPhongMaterial({map: t, side: THREE.DoubleSide});
	var p = new THREE.Mesh(g, ma);
	p.rotation.x = Math.PI * -.5;
 // p.castShadow = true;
  p.receiveShadow = true;
	scene.add(p);
  p.position.x = x;
	p.position.y = y;
  p.position.z = z;
}

//Criar grama

function CriarGrama(x, y, z, c, l){
	var g = new THREE.PlaneGeometry(c, l);
	var t = loader.load('https://raw.githubusercontent.com/ANDREMFEITOSA/Projeto_CG/master/textura-de-campo-de-grama.jpg');
	t.wrapS = THREE.RepeatWrapping;
	t.wrapT = THREE.RepeatWrapping;
	t.magFilter = THREE.NearestFilter;
	t.repeat.set(12, 12);
	var ma =new THREE.MeshPhongMaterial({map: t, side: THREE.DoubleSide});
	var p = new THREE.Mesh(g, ma);
	p.rotation.x = Math.PI * -.5;
 // p.castShadow = true;
  p.receiveShadow = true;
	scene.add(p);
  p.position.x = x;
  p.position.y = y;
  p.position.z = z;
}

//Criar prédio paralelepipedo tijolo

function predioParalelepipedo(c, h, p, x, y, z){

  var t = loader.load('https://raw.githubusercontent.com/ANDREMFEITOSA/Projeto_CG/master/textura_predio_janelas.jpg');
	t.wrapS = THREE.RepeatWrapping;
	t.wrapT = THREE.RepeatWrapping;
	t.magFilter = THREE.NearestFilter;
	t.repeat.set(4, 4);

  var geometria = new THREE.BoxGeometry(c, h, p);
  
  var material = new THREE.MeshPhongMaterial({map:t});
  
  var predio = new THREE.Mesh(geometria, material);
  
  predio.position.x = x;
  
  predio.position.y = y;
  
  predio.position.z = z;
  
  predio.castShadow = true;
  
  predio.receiveShadow = true;
  
  scene.add(predio);
}

//Criar prédio paralelepipedo Espelhado

function predioParalelepipedoE(c, h, p, x, y, z){
  var t = loader.load('https://raw.githubusercontent.com/ANDREMFEITOSA/Projeto_CG/master/pr%C3%A9dio_espelhado_01.jpg');
	t.wrapS = THREE.RepeatWrapping;
	t.wrapT = THREE.RepeatWrapping;
	t.magFilter = THREE.NearestFilter;
	t.repeat.set(2, 2);
  var geometria = new THREE.BoxGeometry(c, h, p);
  
  var material = new THREE.MeshPhongMaterial({map:t});
  
  var predio = new THREE.Mesh(geometria, material);
  
  predio.position.x = x;
  
  predio.position.y = y;
  
  predio.position.z = z;
  
  predio.castShadow = true;
  
  predio.receiveShadow = true;
  
  scene.add(predio);
}

//Criar prédio cilíndrico

function predioCilindro(r1, r2, h, x, y, z){
  var t = loader.load('https://raw.githubusercontent.com/ANDREMFEITOSA/Projeto_CG/master/vitrage-reflechissant-pour-controle-solaire.jpg');
	t.wrapS = THREE.RepeatWrapping;
	t.wrapT = THREE.RepeatWrapping;
	t.magFilter = THREE.NearestFilter;
	t.repeat.set(5, 5);
  var geometria = new THREE.CylinderGeometry(r1, r2, h);
  
  var material = new THREE.MeshPhongMaterial({map:t});
  
  var predio = new THREE.Mesh(geometria, material);
  
  predio.position.x = x;
  
  predio.position.y = y;
  
  predio.position.z = z;
  
  predio.castShadow = true;
  
  predio.receiveShadow = true;
  
  scene.add(predio);
}

//Criar muro

function criarMuro(c, h, p, x, y, z){

  var t = loader.load('https://raw.githubusercontent.com/ANDREMFEITOSA/Projeto_CG/master/muro_tijolo.jpg');
	t.wrapS = THREE.RepeatWrapping;
	t.wrapT = THREE.RepeatWrapping;
	t.magFilter = THREE.NearestFilter;
	t.repeat.set(20, 20);

  var geometria = new THREE.BoxGeometry(c, h, p);
  
  var material = new THREE.MeshPhongMaterial({map:t});
  
  var muro = new THREE.Mesh(geometria, material);
  
  muro.position.x = x;
  
  muro.position.y = y;
  
  muro.position.z = z;
  
  muro.castShadow = true;
  
  muro.receiveShadow = true;
  
  scene.add(muro);
}

//Carro 01

var geometria = new THREE.BoxGeometry(0.4, 0.4, 2);

var material = new THREE.MeshPhongMaterial({map:loader.load('https://raw.githubusercontent.com/ANDREMFEITOSA/Projeto_CG/master/carro_policia.jpg')});

var carro1 = new THREE.Mesh(geometria, material);

carro1.position.x = -1;

carro1.position.y = -2.5;

carro1.position.z = 7;

carro1.castShadow = true;

carro1.receiveShadow = true;

scene.add(carro1);

var geometria = new THREE.BoxGeometry(0.4, 0.4, 2);

var material = new THREE.MeshPhongMaterial({map:loader.load('https://raw.githubusercontent.com/ANDREMFEITOSA/Projeto_CG/master/ferro_01.jpg')});

//Carro 02
  
var carro2 = new THREE.Mesh(geometria, material);

carro2.position.x = 1;

carro2.position.y = -2.5;

carro2.position.z = 7;

carro2.castShadow = true;

carro2.receiveShadow = true;

scene.add(carro2);

//Carro 03

var geometria = new THREE.BoxGeometry(2, 0.4, 0.4);

var material = new THREE.MeshPhongMaterial({map:loader.load('https://raw.githubusercontent.com/ANDREMFEITOSA/Projeto_CG/master/bus_escolar.jpg')});

var carro3 = new THREE.Mesh(geometria, material);

carro3.position.x = -10;

carro3.position.y = -2.5;

carro3.position.z = 10;

carro3.castShadow = true;

carro3.receiveShadow = true;

scene.add(carro3);

//Carro 04

var geometria = new THREE.BoxGeometry(2, 0.4, 0.4);

var material = new THREE.MeshPhongMaterial({map:loader.load('https://raw.githubusercontent.com/ANDREMFEITOSA/Projeto_CG/master/bus_escolar.jpg')});

var carro4 = new THREE.Mesh(geometria, material);

carro4.position.x = 10;

carro4.position.y = -2.5;

carro4.position.z = 12;

carro4.castShadow = true;

carro4.receiveShadow = true;

scene.add(carro4);

//Cabine do helicóptero

var geometria = new THREE.BoxGeometry();

var material = new THREE.MeshPhongMaterial({map:loader.load('https://raw.githubusercontent.com/ANDREMFEITOSA/Projeto_CG/master/bope.jpg')});

var helicoptero = new THREE.Mesh(geometria, material);

helicoptero.position.x = -25;

helicoptero.position.y = 7;

helicoptero.position.z = 1;

helicoptero.castShadow = true;

helicoptero.receiveShadow = true;

scene.add(helicoptero);

//cauda do helicóptero

var geometria = new THREE.BoxGeometry(2, 0.4, 0.4);

var material = new THREE.MeshPhongMaterial({map:loader.load('https://raw.githubusercontent.com/ANDREMFEITOSA/Projeto_CG/master/textura-de-a%C3%A7o.jpg')});

var cauda = new THREE.Mesh(geometria, material);

cauda.position.x = -26;

cauda.position.y = 7;

cauda.position.z = 1;

cauda.castShadow = true;

cauda.receiveShadow = true;

scene.add(cauda);

//hélice maior 1

var geometria = new THREE.BoxGeometry(3, 0.1, 0.1);

var material = new THREE.MeshPhongMaterial({map:loader.load('https://raw.githubusercontent.com/ANDREMFEITOSA/Projeto_CG/master/textura-de-a%C3%A7o.jpg')});

var helice1 = new THREE.Mesh(geometria, material);

helice1.position.x = -25;

helice1.position.y = 7.6;

helice1.position.z = 1;

helice1.castShadow = true;

helice1.receiveShadow = true;

scene.add(helice1);

//hélice maior 2

var geometria = new THREE.BoxGeometry(0.1, 0.1, 3);

var material = new THREE.MeshPhongMaterial({map:loader.load('https://raw.githubusercontent.com/ANDREMFEITOSA/Projeto_CG/master/textura-de-a%C3%A7o.jpg')});

var helice2 = new THREE.Mesh(geometria, material);

helice2.position.x = -25;

helice2.position.y = 7.6;

helice2.position.z = 1;

helice2.castShadow = true;

helice2.receiveShadow = true;

scene.add(helice2);

//hélice menor 1

var geometria = new THREE.BoxGeometry(0.7, 0.1, 0.1);

var material = new THREE.MeshPhongMaterial({map:loader.load('https://raw.githubusercontent.com/ANDREMFEITOSA/Projeto_CG/master/textura-de-a%C3%A7o.jpg')});

var helice3 = new THREE.Mesh(geometria, material);

helice3.position.x = -27;

helice3.position.y = 7;

helice3.position.z = 1.3;

helice3.castShadow = true;

helice3.receiveShadow = true;

scene.add(helice3);

//hélice menor 2

var geometria = new THREE.BoxGeometry(0.1, 0.7, 0.1);

var material = new THREE.MeshPhongMaterial({map:loader.load('https://raw.githubusercontent.com/ANDREMFEITOSA/Projeto_CG/master/textura-de-a%C3%A7o.jpg')});

var helice4 = new THREE.Mesh(geometria, material);

helice4.position.x = -27;

helice4.position.y = 7;

helice4.position.z = 1.3;

helice4.castShadow = true;

helice4.receiveShadow = true;

scene.add(helice4);

//Criar luz e sombra

function luzESombra(){
  
  //var light = new THREE.AmbientLight(new THREE.Color(0xffffff), 1);

  var light = new THREE.DirectionalLight(new THREE.Color(0xffffff), 3);
  
  light.position.x = 4;
  
  light.position.y = 4;
  
  light.position.z = 10;
  
  light.castShadow = true;
  
  light.target.position.set(0, 0, 0);

  scene.add(light);
  
  scene.add(light.target);
  
  light.shadow.camera.zoom = 1;
  
  light.shadow.mapSize.width = 1024;
  
  light.shadow.mapSize.height = 1024;
  
  //var ajudante = new THREE.PointLightHelper(light);
  
  //scene.add(ajudante);
  
  //var ajudante2 = new THREE.CameraHelper(light.shadow.camera);
  
  //scene.add(ajudante2);
}

//Criar animação

function animacao(){

	requestAnimationFrame(animacao);
  
  carro1.position.z -= 0.01;
  
  carro2.position.z -= 0.02;
  
  carro3.position.x += 0.01;
  
  carro4.position.x -= 0.02;
  
  helicoptero.position.x +=0.05;
  
  cauda.position.x +=0.05;
  
  helice1.position.x +=0.05;
  
  helice2.position.x +=0.05;
  
  helice3.position.x +=0.05;
  
  helice4.position.x +=0.05;
  
  helicoptero.position.z -=0.01;
  
  cauda.position.z -=0.01;
  
  helice1.position.z -=0.01;
  
  helice2.position.z -=0.01;
  
  helice3.position.z -=0.01;
  
  helice4.position.z -=0.01;
  
  helice1.rotation.y += 0.1;
  
  helice2.rotation.y += 0.1;

  helice3.rotation.z += 0.1;
  
  helice4.rotation.z += 0.1;
  
  controlador.update();
  
	renderer.render(scene, camera);
}

luzESombra();

CriarPiso(0, -3, -15, 25, 50);
  
CriarEstrada(0, -2.9, -15, 4, 50);

CriarPista(0, -2.9, 11, 25, 4);

CriarGrama(-7, -2.9, 7, 8, 2);

CriarGrama(7, -2.9, 7, 8, 2);

CriarGrama(10, -2.9, -15, 2, 45);

CriarGrama(-10, -2.9, -15, 2, 45);

predioParalelepipedo(1, 7, 1, 4, -3, 4);
predioParalelepipedo(1, 5, 1, 4, -3, 0);
predioParalelepipedo(1, 10, 1, 6, -3, 0);
predioParalelepipedo(1, 4, 1, 4, -3, 2);
predioParalelepipedoE(2, 20, 2, 4,-3,-10);
predioParalelepipedo(1, 5, 1, -4, -3, 1);
predioParalelepipedo(1, 5, 1, -4, -3, -5);
predioParalelepipedo(1, 15, 1, -4, -3,-2);
predioCilindro(1, 1, 14, 6, -3, 2);
predioCilindro(1.5, 1.5, 7, 4, -3, -5);
predioCilindro(1, 1, 7, -4, -3, 3);
predioCilindro(1, 1, 14, -6, -3, 2);

criarMuro(0.1, 2, 25, 9, -3, -7);
criarMuro(4, 2, 0.1, 7, -3, 5.5);
criarMuro(0.1, 2, 25, -9, -3, -7);
criarMuro(4, 2, 0.1, -7, -3, 5.5);

animacao();

/*
geometria = new THREE.CylinderGeometry(1, 1, 2, 40);

var material = new THREE.MeshPhongMaterial({map:loader.load('https://raw.githubusercontent.com/ANDREMFEITOSA/Projeto_CG/master/parede-de-tijolo.jpeg')});

var cilindro = new THREE.Mesh(geometria, material);

cilindro.castShadow = true;

cilindro.receiveShadow = true;

cilindro.position.x = 5;

scene.add(cilindro);

geometria = new THREE.ConeGeometry(1, 2, 25); // argumentos => raio inferior, altura e nível de detalhe do cone

material = new THREE.MeshPhongMaterial({color: 0xff007f});

var cone = new THREE.Mesh(geometria, material);

cone.castShadow = true;

cone.receiveShadow = true;

cone.position.x = -5;

scene.add(cone);

geometria = new THREE.SphereGeometry(1, 25, 25); // argumentos => raio, nível de detalhe horizontal, nível de detalhe vertical da esfera

material = new THREE.MeshPhongMaterial({color: 0xffffff});

var esfera = new THREE.Mesh(geometria, material);

esfera.castShadow = true;

esfera.receiveShadow = true;

esfera.position.x = -10;

scene.add(esfera);

geometria = new THREE.PlaneGeometry(1, 2); // argumentos => largura, altura

material = new THREE.MeshPhongMaterial({color: 0x0f0});

var plano = new THREE.Mesh(geometria, material);

plano.castShadow = true;

plano.receiveShadow = true;

plano.position.x = -10;

plano.position.y = -2;

plano.position.z = -3;

scene.add(plano);
*/
//rotação
//cubo.rotation.x = 60;
//cubo.rotation.y =35;
//cubo.rotation.z =45;

//escala
//cubo.scale.x = 2;
//cubo.scale.y = 3;
//cubo.scale.z = 4;

//posicionamento
//cubo.position.x = -5;
//cubo.position.y = 2;
//cubo.position.z = -2;

//cubo.position.set(0, 2, -3);
//cubo.rotation.set(0, 0, 0);
//cubo.scale.set(3, 3, 3);

//animação

/*function animacao(){

	requestAnimationFrame(animacao);
	cubo.rotation.z += 0.1;
  cubo.scale.x += 0.01;
	cubo.position.z -= 0.01;
	renderer.render(scene, camera);
}

animacao();*/

//renderer.render(scene, camera);