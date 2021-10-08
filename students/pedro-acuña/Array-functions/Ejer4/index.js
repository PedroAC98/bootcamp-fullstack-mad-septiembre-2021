const listaGoles = [11,42,52,32,521,32,53,64,23,12];
const listaKilos = [2,5,2,1,53,6,3,12,6,74];

function baremo(lista){
   let listaMayor;
   listaMayor = lista.find(v => v<10 );
   if (listaMayor === undefined){
       return true;
   }
   return false;

}

document.write(`<p>${baremo(listaGoles)}</p>`);
document.write(`<p>${baremo(listaKilos)}</p>`);
