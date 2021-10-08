const listaNumber = [3,6,2,1,5,6,3,2];
const number = parseInt(prompt('Introduce el numero a buscar: '));
function encontrarNumero(number, collection){

return collection.findIndex(w => w === number );

}
document.write(`${encontrarNumero(number, listaNumber)}`);

    
   