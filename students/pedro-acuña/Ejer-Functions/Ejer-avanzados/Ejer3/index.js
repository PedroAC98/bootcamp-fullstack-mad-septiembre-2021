let numero = 0;
let string = 'hola';
let bool = true;



  let dato = tipoDato(numero) ;
document.write(`El tipo de dato es: ${dato}`);

function tipoDato (dato){
    let resultado = typeof dato;
    return resultado;
}