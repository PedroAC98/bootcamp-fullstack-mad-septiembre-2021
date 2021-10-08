const listaIncidentes = [5,6,10,32,1,2,6,98,2,43];

function cantidadIncidentes(incidentes){
    return incidentes.filter(v => v>10);
    
}
document.write(`${cantidadIncidentes(listaIncidentes)}`);