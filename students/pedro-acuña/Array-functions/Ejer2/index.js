const listaNumber = [3,6,2,1,5,6,3,2];
function listaOrdenada(array){
    return  array.sort((a,b) => a-b );
}
document.write(`La lista ordenada es: ${listaOrdenada(listaNumber)}`);