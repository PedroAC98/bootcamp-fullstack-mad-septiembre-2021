const BASE = parseInt(prompt('Introduce la base del rectangulo: '));
const ALTURA = parseInt(prompt('Introduce la altura del rectangulo: '));
const LADO = parseInt(prompt('Introduce el lado del cuadrado: '));
const BASE_TRIANGULO = parseInt(prompt('Introduce la base del triangulo: '));
const ALTURA_TRIANGULO = parseInt(prompt('Introduce la altura del triangulo: '));

const AREA_RECTANGULO= areaRectangulo(BASE, ALTURA);
document.write(`<p>El area del rectangulo es: ${AREA_RECTANGULO}</p>`);

const PERIMETRO_RECTANGULO = perimetroRectangulo(BASE, ALTURA)
document.write(`<p>El perimetro del rectangulo es: ${PERIMETRO_RECTANGULO}</p>`);

const AREA_CUADRADO = areaCuadrado(LADO);
document.write( `<p>El area del cuadrado es: ${AREA_CUADRADO}</p>`);

const PERIMETRO_CUADRADO = perimetroCuadrado(LADO);
document.write( `<p>El perimetro del cuadrado es: ${PERIMETRO_CUADRADO}</p>`);

const AREA_TRIANGULO = areaTriangulo(BASE_TRIANGULO, ALTURA_TRIANGULO);
document.write( `<p>El area del triangulo es: ${AREA_TRIANGULO}</p>`);

const PERIMETRO_TRIANGULO = perimetroTriangulo()


