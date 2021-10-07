const numero = prompt('Introduce un numero para averiguar su capicua:');

capicua(numero);

function capicua(numero){
    let contador = 0;
    let resultado = '';
    for(contador = numero.length; contador> 0;contador--){
        resultado += numero.substring(contador, contador-1);
    
    }
    if(resultado === numero){
        document.write(`El numero ${numero} es capicua.`);
    }
    else{
        document.write(`El numero ${numero} no es capicua.`);
    }
    return 0;

}