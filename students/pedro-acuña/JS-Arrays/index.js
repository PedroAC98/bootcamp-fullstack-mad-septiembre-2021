let servicios = [];
let i = 0;
let cont = 0;
let isTrue;
let isFalse;
for (i = 0; i < 10; i++) {

    let respuesta = prompt('¿Ha salido el tren de la estación?');
    if (respuesta === 'si') {
        isTrue = respuesta.toLowerCase() === 'true';
        cont++;
        document.write(`<p>true</p>`);
        servicios[i] = isTrue;

    }
    else if (respuesta === 'no') {
        let isFalse = respuesta.toLowerCase() === 'false';
        document.write(`<p>false</p>`);
        servicios[i] = isFalse;
    }
    else {
        document.write('<p>No has escrito un parámetro valido,(si o no)</p>');
    }



}
if (cont >= 8) {
    document.write(`Si se están cumpliendo.`);

}
else {
    document.write(` No se están cumpliendo. `);
}


