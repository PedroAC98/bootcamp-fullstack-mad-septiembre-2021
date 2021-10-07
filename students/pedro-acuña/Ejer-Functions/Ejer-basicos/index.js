// Ejer 1

const A = parseFloat(prompt('Introduce el primer numero '));
const B = parseFloat(prompt('Introduce el segundo numero ')); 
multiplicacion(A,B);

function multiplicacion(a, b){
   let resultado = a * b;
    document.write(`<p>El resultado de la multiplicacion es: ${resultado}</p>`);
    return 0;
}

//Ejer 2

const SALUDO = 'Hola ';
const FRASE = prompt('Escribe la frase a concatenar:');
concatenacion(SALUDO, FRASE)

function concatenacion(a,b){
    let string = a + b;   
    document.write(`<p>${string}</p>`);
    return 0;

}

// Ejer 3

const BOOL1 = prompt('Introduce el primer booleano (true , false) ');
const BOOL2 = prompt('Introduce el segundo booleano (true , false');

let isTrue1 = BOOL1.toLowerCase() === 'true';
let isTrue2 = BOOL2.toLowerCase() === 'true';

AND(isTrue1, isTrue2);

function AND(bool1, bool2){
    let resultado = bool1&&bool2;
    document.write(`<p>La operación AND de estos booleanos es: ${resultado}</p>`);
    return 0;

}

//Ejer 4

const N_ASTERISCOS = parseInt(prompt('Introduce el número de asteriscos  a representar: '));
representacionAsteriscos(N_ASTERISCOS);

function representacionAsteriscos(N_ASTERISCOS){
    for (let i = 0; i < N_ASTERISCOS; i++){
        document.write(`*`);
    }
    return 0;

}

//Ejer 5

multiplicacion_especial(A, B);

function multiplicacion_especial(a,b){
    let resultado = 0;
    for(i = 0; i< b; i++){
     resultado = resultado + a;

    }
    document.write(`<p> El resultado es: ${resultado} `);
    return 0;


}