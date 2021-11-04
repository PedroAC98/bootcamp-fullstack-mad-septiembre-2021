// 1.- Crear un componente de función CharacterCard que reciba por props el nombre, color de ojos ,  año de nacimiento y género. Dar un estilo de card y mostrar todos los personajes del API en el navegador.
// 2.- Crear un componente de función FilmCard que reciba por props el título, id de episodio, fecha de creación y opening_crawl. De nuevo darle un estilo apropiado para mostrar la información requerida.
// 3.-Crear en la página un buscador de personajes y otro de planetas. El de personajes mostrará los cambios en vivo con cada input del usuario mientras que el de planetas no mostrará nada hasta que el usuario haga click en el botón de buscar. En ambos casos si la búsqueda no encuentra nada mostraremos un mensaje de error en rojo.
// 4.-Crear cards tal como hemos hecho en el ejercicio 1 y 2 para: Naves, vehículos, species y planetas. Debeis vosotros mismos decidir la información que vais a mostar de cada una de las entidades anteriores, pero deben ser al menos 4 campos.
// 5.- Si alguien llega a este punto, deberá montar una página completa con un header que tenga 6 links. Cada link será la página propia de cada una de las entidades (personajes, películas, naves, especies, etc.) y tendrán su buscador. Debemos implementar las páginas con React Router.

function App() {
    return (
        <React.Fragment>
            <ListPeople></ListPeople>
        </React.Fragment>

    )
}
ReactDOM.render(<App></App>, document.getElementById('root'));