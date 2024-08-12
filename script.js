
let input = document.querySelector('.input');
let buttonTry = document.querySelector('.boton1');
let buttonNewGame = document.querySelector('.boton2');
let buttonPressHere = document.querySelector('.reiniciar');
let parrafo = document.querySelector('.texto');
let titulo = document.querySelector('.titulo')

let array = [];
let numeroSecreto;
let intentos = 0;
let maxNum = 10;

function generateRandomNum ( ) {

    let numeroAleatorio = Math.floor(Math.random()*10)+1;

    if (array.includes(numeroAleatorio)){

        return generateRandomNum ();

    } else {

        console.log(array);
        if (array.length < maxNum) {
            
            array.push(numeroAleatorio);

        };

        return numeroAleatorio;
        
    }

}

function newGame () {
    
    input.value = '';
    parrafo.textContent = 'indica un número entre el 1 y el 10';
    numeroSecreto = generateRandomNum();
    console.log(numeroSecreto);
    intentos = 0;
    
    if (array.length === maxNum) {
        array = [];
        buttonNewGame.classList.add('none');
        buttonTry.classList.add('none');
        buttonPressHere.classList.remove('none');
        parrafo.textContent = 'se ha alcanzado el máximo de intentos comenzae para volver a iniciar de nuevo';
    }
    buttonNewGame.setAttribute('disabled',true);
    buttonNewGame.classList.add('display');
    buttonNewGame.classList.remove('second');

}

function tryAgain () {
    
    
    
    if (parseInt(input.value) === numeroSecreto) {
        
        parrafo.textContent = `Felicidades, el número secreto es ${numeroSecreto} te ha tomado ${intentos + 1} ${intentos + 1 === 1 ? 'intento' : 'intentos'}`;
        
        buttonNewGame.removeAttribute('disabled',true);
    buttonNewGame.classList.remove('display');
    buttonNewGame.classList.add('second');

    } else {

        buttonNewGame.setAttribute('disabled',true);
        buttonNewGame.classList.add('display');
        buttonNewGame.classList.remove('second');

        intentos++;

        if (parseInt(input.value) > numeroSecreto) {

            parrafo.textContent = `El número secreto es menor que ${input.value}`;

        } else {

        parrafo.textContent = `El número secreto es mayor que ${input.value}`;
        
    };

};
};

function VuelveAEmpezar ( ) {

    buttonNewGame.classList.remove('none');
    buttonTry.classList.remove('none');
    buttonPressHere.classList.add('none');

}



buttonTry.addEventListener('click', tryAgain);

buttonNewGame.addEventListener('click', newGame);

buttonPressHere.addEventListener('click', VuelveAEmpezar);
