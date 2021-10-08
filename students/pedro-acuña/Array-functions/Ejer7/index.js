const cadena = prompt('Escribe una cadena que cortar: ');

function cortarCadena(string){
    return string.substr(0,3);
}
document.write(`${cortarCadena(cadena)}`);