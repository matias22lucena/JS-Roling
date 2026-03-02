/* JSON
JS - JavaScript
O - Object
N - Notation
*/



/* 🔁 Entonces… ¿para qué sirve JSON?

JSON (JavaScript Object Notation) se usa cuando necesitás transformar datos para enviarlos o guardarlos.

👉 Convierte:

Objeto JS ➜ Texto plano (string)

Texto plano ➜ Objeto JS

Esto es útil cuando:

enviás datos a un servidor (fetch, API)

guardás en localStorage

leés archivos externos */

/* const persona = {
  nombre: "Andres",
  apellido: "Perlo"
}

const personas = ["Andres", "Luis", "Angel"]

const nombre = "Andres"
const edad = 33
const tyc = true */

/* null - undefined */

/* const alumnos = [
  {

  },
  {

  },
  {

  }
] */


  const productos = [
  {
    id: 1,
    titulo: "Coca-Cola",
    imagen: "url",
    precio: 2000,
    descripcion: "la mejor del mundo",
    bloqueo: false,
  },
  {
    id: 2,
    titulo: "Pepsi",
    imagen: "url",
    precio: 1500,
    descripcion: "la segunda mejor del mundo",
    bloqueo: false,
  },
  {
    id: 3,
    titulo: "Manaos",
    imagen: "url",
    precio: 1000,
    descripcion: "la mejor de argentina",
    bloqueo: false,
  },

];

console.log(productos)


//TRANSFORMAR DE JSON A STRING Y DE STRING A JSON 
/* 
.json
.json()
JSON 
- parse - transforma un string a objeto
-stringify - transforma un objeto a string

*/
 const transformarUnObjetoAString = JSON.stringify(productos)
console.log(transformarUnObjetoAString)
const transformarUnStringAObjeto = JSON.parse(transformarUnObjetoAString)
console.log(transformarUnStringAObjeto) 