//let elemento = document;
//elemento = document.head;
//console.log(elemento);

//let elementoW = window;
//console.log(`Elementos de Windows ${elementoW}`);

//let elementoE = document.styleSheets;
//console.log(elementoE);

//let elementoId = document.getElementById('tituloDOM');
//console.log(elementoId);

//Asignar un valor en el front con innerHTML
/*
let opId = document.getElementById('p1');
opId.innerHTML = 'JavaScript';
*/

//Asignar un valor en el front con innerHTML
/*
let opId1 = document.getElementById('p2');
opId1.innerHTML = 'Kotlin';
*/

//Asignar un valor en el front con innerHTML
/*
let opId2 = document.getElementById('p3');
opId2.innerHTML = 'c++'; //Imprimir esto en pantalla
*/
/*
let elementoClase = document.getElementsByClassName('lista');
console.log(elementoClase);
*/
/*
let elementoTag = document.getElementsByTagName('p');
console.log(elementoTag);
*/
/*
let elementoQ = document.querySelector('ul');
console.log(elementoQ.childElementCount);
console.log(elementoQ.children);
console.log(elementoQ.children[2]);
console.log(elementoQ.firstElementChild);
console.log(elementoQ.lastElementChild);

let elementoClase = document.querySelector('#p1'); //Con #numeral nos referimos al ID y con .punto nos referimos a la clase
console.log(elementoClase);
*/
/*
let elementosP = document.getElementsByTagName('p');
console.log(elementosP.length);

for(let i=0; i<elementosP.length; i++){
    console.log(elementosP[i].textContent);
}

elementosP[2].innerHTML = 'Prueba';

let opId = document.getElementById('p1');

opId.style.background = 'blue';
opId.style.color = 'white';
opId.style.borderRadius = '8px';
opId.style.width = '250px';
opId.style.height = '20px';
opId.style.textAlign = 'center';
*/

//Función Ver fecha
function verFecha(){
    let fec = document.getElementById('resultado');
    fec.innerHTML = Date();
}

//Función Quitar fecha
function quitarFecha(){
    let Qfech = document.getElementById('resultado');
    Qfech.innerHTML = "Fecha";
}

//Temperatura
function temperatura(){
    let numero = parseFloat(document.getElementById('dato1').value);
    let calculo = numero-273.5;
    let res1 = document.getElementById('res');
    res1.innerHTML = (`Resultado: ${calculo}`);
    alert(`La conversión es: ${calculo}`);
}