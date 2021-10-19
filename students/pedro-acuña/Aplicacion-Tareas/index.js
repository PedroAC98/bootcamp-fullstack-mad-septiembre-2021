const listaDes = document.getElementById('listaDes');

document.querySelector('.form__container').addEventListener('submit', e=> {

    e.preventDefault();
    let listaTareas = document.createElement('li');
    let textoTarea = e.target.tarea.value;
    let textoDescripcion = e.target.descripcion.value;
    let pTarea = document.createElement('p');
    let pDescripcion = document.createElement('p');
    pTarea.textContent = textoTarea;
    pDescripcion.textContent = textoDescripcion; 

    listaDes.appendChild(listaTareas);
    listaTareas.appendChild(pTarea);
    pTarea.appendChild(pDescripcion);




})