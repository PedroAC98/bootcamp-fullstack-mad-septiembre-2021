let numero = prompt('Introduce el numero a voltear');

voltear(numero);

function voltear(numero){
    let contador = 0;
    let resultado = '';
    for(contador = numero.length; contador> 0;contador--){
        resultado += numero.substring(contador, contador-1);
        

    }
    document.write(`${resultado}`);
    return 0;

}
