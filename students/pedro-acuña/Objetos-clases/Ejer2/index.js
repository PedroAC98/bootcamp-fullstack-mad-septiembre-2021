class Almuerzo {
    constructor(primerPlato, segundoPlato, bebida, postre, precio){
        this.primerPlato = primerPlato;
        this.segundoPlato = segundoPlato;
        this.bebida = bebida;
        this.postre = postre;
        this.precio = precio;

    }

    mostrarPrecio(){
        return this.precio;

    }


}

class MenuVegetariano extends Almuerzo{
    constructor(primerPlato, segundoPlato, bebida, postre,  precio);
    super(primerPlato, segundoPlato, bebida, postre,  precio);
    mostrarPrecio(){
        return this.precio;

    }

}

class MenuBajasCalorias extends Almuerzo{
    constructor(primerPlato, segundoPlato, bebida, postre,  precio);
    super(primerPlato, segundoPlato, bebida, postre,  precio);
    mostrarPrecio(){
        return this.precio;

    }

}

class MenuCarnivoro extends Almuerzo{
    constructor(primerPlato, segundoPlato, bebida, postre, precio);
    super(primerPlato, segundoPlato, bebida, postre,  precio);
    mostrarPrecio(){
        return this.precio;

    }

}

let vegetariano = new MenuVegetariano('Lechuga', 'Brocoi', 'Agua', 'Manzana', 18 );

let bajoCal = new MenuBajasCalorias('Filetes de pollo','Ensalada campera', 'Trina','Yogur' ,22 );

let carnivoro = new MenuCarnivoro('Chuletones', 'Solomillo','Cerveza', 'Tarta de queso', 52 );


