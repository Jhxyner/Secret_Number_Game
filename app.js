let numeroSecreto = 0; //No importa si la función se crea despues, por defecto las funciones se leen primero
let intentos = 0;
let listaNumerosSorteados = [];
let numeroMaximo = 10;

/*let titulo = document.querySelector('h1');
titulo.innerHTML = 'Juego del número secreto!';

let parrafo = document.querySelector('p');
parrafo.innerHTML = 'Indica un número del 1 al 10';*/

function asignarTextoElemento(elemento, texto) {
    let elementoHTML = document.querySelector(elemento);
    elementoHTML.innerHTML = texto;
    return;
}

function verificarIntento() { //creación de funciones
    //let numeroDeUsuario = document.querySelector('input');
    let numeroDeUsuario = parseInt(document.getElementById('valorUsuario').value); //se agrega un id a input en el codigo html

    if(numeroDeUsuario==numeroSecreto){
        asignarTextoElemento('p',`Acertaste el número en ${intentos} ${intentos > 1 ? 'intentos' : 'intento' }!`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    }else{ 
        if(numeroDeUsuario>numeroSecreto){
            asignarTextoElemento('p','El número secreto es menor');
        }else{
            asignarTextoElemento('p','El número secreto es mayor');
        }
        intentos++;
        cleanBox();
    }
    return;
}

function cleanBox(){
    //let boxValue = document.querySelector('#valorUsuario');
    //boxValue.value = '';
    document.querySelector('#valorUsuario').value = '';
}

function secretNumGenerator() {
    let numeroGenerado =  Math.floor(Math.random()*numeroMaximo) + 1;

    console.log(numeroGenerado);
    console.log(listaNumerosSorteados);

    //Preguntar si ya sorteamos todos los números
    if(listaNumerosSorteados.length == numeroMaximo){
        asignarTextoElemento('p','Ya se sortearon todos los números posibles!')
    }else{
        if(listaNumerosSorteados.includes(numeroGenerado)){
            return secretNumGenerator();  
        }else{
            listaNumerosSorteados.push(numeroGenerado);
            return numeroGenerado;
        }
    }

    
}

function condicionesIniciales(){
    asignarTextoElemento('h1','Juego del número secreto!');
    asignarTextoElemento('p',`Indica un número del 1 al ${numeroMaximo}`);
    intentos = 1;
    numeroSecreto = secretNumGenerator();
}

function reiniciarJuego(){
    cleanBox(); //Limpiar la caja de input
    condicionesIniciales();
    document.getElementById('reiniciar').setAttribute('disabled',true);
}

condicionesIniciales();

