//1)
/* Crear un array llamado meses y que almacene el nombre de los doce meses del año. Mostrar por pantalla en forma de lista los doce nombres del arreglo.
 */

/* const meses = [
  "Enero",
  "Febrero",
  "Marzo",
  "Abril",
  "Mayo",
  "Junio",
  "Julio",
  "Agosto",
  "Septiembre",
  "Octubre",
  "Noviembre",
  "Diciembre",
];
document.writeln(`Lista Meses </br>`);
const imprimirMeses = (mes) => {
  for (let i = 0; i < mes.length; i++) {
    document.writeln(mes[i] + `</br>`);
  }
};

imprimirMeses(meses);
 */

/* 2-  Crear un script que solicite al usuario mediante un prompt el nombre de ciudades y almacenarlas en un arreglo, cuando el usuario selecciona cancelar se debe mostrar el arreglo generado, luego realizar las siguientes acciones:

Mostrar la longitud del arreglo.
Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
Añade en última posición la ciudad de París.
Escribe por pantalla el elemento que ocupa la segunda posición.
Sustituye el elemento que ocupa la segunda posición por la ciudad de 'Barcelona'.

Ejemplo
Input:
[‘Nueva York, Estados Unidos’, ‘Barcelona, España’, ‘Tokio, Japón’, ‘Londres, Reino Unido’, ‘Roma, Italia’, ‘Pekín, China’, ‘Río de Janeiro, Brasil’, ‘Ámsterdam, Países Bajos’, ‘Sídney, Australia’, ‘El Cairo, Egipto’]

*/

/* const ciudades = [];

const agregarCiudadAlArray = () => {
  let ciudadUser = prompt("Agrege una ciudad");
  while (ciudadUser !== null) {
    ciudades.push(ciudadUser);
    ciudadUser = prompt("Agregue una ciudad");
  }
};

const datos = () => {
  //Mostrar la longitud del arreglo.
  document.writeln(`La longitud del arreglo es ${ciudades.length}` + "<br>");
  //Mostrar en el documento web los ítems de las posiciones primera, tercera y última.
  document.writeln(`En la posicion 1 tenemos ${ciudades[0]}` + "<br>");
  document.writeln(`En la posicion 3 tenemos ${ciudades[2]}` + "<br>");
  document.writeln(
    `En la ultima posicion  tenemos ${ciudades[ciudades.length - 1]}` + "<br>",
  ); */
/* Añade en última posición la ciudad de París. */
/*   ciudades.push("Paris");
};
agregarCiudadAlArray();
datos(); */

/* 
3- Escribir un script que simule el lanzamiento de dos dados. Hacer uso de la función Math.random para obtener números aleatorios entre 1 y 6 para cada uno de los lanzamientos de los dados. Sumar el resultado de lanzar dos dados y anotar en un array el número de apariciones de dicha suma, repitiendo 50 veces esta operación.
 */

/* const dado1 = () => {
  let resultadoDado1 = Math.floor(Math.random() * 6) + 1;
  console.log(resultadoDado1);
  return resultadoDado1;
};
const dado2 = () => {
  let resultadoDado2 = Math.floor(Math.random() * 6) + 1;
  console.log(resultadoDado2);
  return resultadoDado2;
};

const resultadoDeLosDosDados = () => {
  sumaDeLosDados = Number(resultadoDado1) + Number(resultadoDado2);
  console.log(sumaDeLosDados);
  return sumaDeLosDados;
};

const mostarResultado = () => {
  console.log("resultado dado1 " + resultadoDado1);
  console.log("resultado dado2 " + resultadoDado2);
  console.log("resultado de la suma de los dados " + sumaDeLosDados);
};
mostarResultado();
 */

/* 4- Escribir el código de una función a la que se pasa como parámetro un número entero y devuelve como resultado una cadena de texto que indica si el número es par o impar. Mostrar por pantalla el resultado devuelto por la función. */
