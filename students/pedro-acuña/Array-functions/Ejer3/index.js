const array1 = ['hey', 'me' ,'si', 'creas'];
const array2 = ['hola', 'como' ,'te ', 'llamas'];

function concatenarArray(conjunto1, conjunto2){

let string1 = conjunto1.toString();
let string2 = conjunto2.toString();
return conjunto1 + conjunto2;
}
document.write(`${concatenarArray(array1,array2)}`);