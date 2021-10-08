const mascotas = ['pErrO', 'gaTO'];

function capitalizarString(cadena){
    let capitalizada = cadena.map((v, i, arr) => {
      
         v[0].toUpperCase();
        
       

        
    });
    return capitalizada;
    
}
document.write(capitalizarString(mascotas));