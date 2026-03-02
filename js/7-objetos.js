/* Objetos */
/* Atraves de un modelo voy creando cosas. para q se respete ese modelo */
/* nombre - apellido - domicilio - usuario - contraseña   */
//un objeto tiene lo q le llamamos claves:valores se los conoce como propiedades del objeto una propiedad tiene una clave y un valor.
//una clave podria ser nombre y un valor podria ser matias
//Nombre:"Matias"
//esta clave luego servira para poder acceder al nombre q en este caso sera matias
/* Para q nos sirve esto de los objetos
es una forma de abstraccion lo del mundo real pasarlo a programacion 
*/
/* clase21 22min */
/* const auto = {
  marca: "fiat",
  modelo: "toro",
  anio: 2020,
  puertas: 4,
  baul: true,
  ruedas: 4,
  dueños: 1,
};
 */
const persona = {
  nombre: "matias",
  apellido: "lucena",
  edad: 22,
  tyc: true,
  domicilio: {
    pais: "Argentina",
    provincia: "Tucuman",
    localidad: "San miguel de tucuman",
    cp: 4000,
    barro: "ciudad del parque",
  },
  pasatiempos: ["jugar videos juegos", "tomar mate"],
};
/* console.log(persona); */

/*Obtener una propiedad*/
//unas de las formas mas comunes de obtenr
//objeto[clave]
/* console.log(persona["apellido"]);
//objeto.clave
console.log(persona.pasatiempos);
 */

/* Agrego o editar una nueva propiedad  */
//si existe lo remplaza sino lo crea
/* objeto.clave=nuevovalor   */

/* persona.nombre="leandro";
persona.sexo="masculino";

console.log(persona) */

/* eliminar una propiedad  */
/* delete objeto.clave  */
/* delete persona.nombre;
console.log(persona)
 */
/* el objeto algunas veces nmecesitara acciones, esas  acciones son funcionesy esas funciones en los objetos se le llama metodos.
metodo es lo mismo q una funcion pero como esta envuelta en un objeto se le dice metodo
*/

const auto = {
  marca: "fiat",
  modelo: "toro",
  anio: 2020,
  puertas: 4,
  /* metodo = funcion */
  encendido: false,

  /* esto asi con auto.encendido no es una buena pracrica 
  no se puede invocan un objeto dentro de si mismo porque puededar problemas 
  */

  /* esto se soluciona usando una palabra reservada q se llama this.
  lo que hace es como colocar el nombre del objeto pero esto es una buena practica 
  this invoca al objeto q lo envuelve 
  */
  encenderApagar: function () {
    if (this.encendido) {
      this.encendido = false;
      console.log("auto apagado");
    } else {
      this.encendido = true;
      console.log("auto encendido");
    }
  },
};

/* esto nos servira para recorrer un objeto */
/* For In  */
//el typeoff sirve para saber que es cada valor q me devuelve osea number, string, booleano etc
//objeto
/* for (const clave in persona) {
if(typeof persona[clave] !== "object" &&
typeof persona[clave] !== "boolean"
){
  console.log(persona[clave])
}  
}
 */

/* Array de Objetos */
/* const productos =[
  {
    id:1,
    titulo:"coca-cola",
    img:"url",
    precio:2000,
    descripcion:"la mejor del mundo",
  },
    {
    id:2,
    //id:crypto.randomUUID(),
    titulo:"Pepsi",
    img:"url",
    precio:1500,
    descripcion:"la segunda  mejor del mundo",
  },
      {
    id:3,
    titulo:"Pepsi",
    img:"url",
    precio:1000,
    descripcion:"la  mejor de argentina",
  },
]; */

/* para sacar la fecha de hoy JS tiene un recurso q se llama
new Date()
*/

/* console.log(new Date())

const meses=[
  "enero",
  "febrero",
  "marzo",
  "abril",
  "mayo",
  "junio",
  "julio",
  "agosto",
  "septiembre",
  "octubre",
  "noviembre",
  "diciembre"
];
const dias=[
  "domingo",
  "lunes",
  "martes",
  "miercoles",
  "jueves",
  "viernes",
  "sabado"
];
const fechaActual= new Date();
const Diadehoy = fechaActual.getDay();
console.log(dias[Diadehoy]);
const mesActual=fechaActual.getMonth();
console.log(meses[mesActual]);
const diaDelAlmanaque=fechaActual.getDate();
console.log(diaDelAlmanaque);
const anioActual=fechaActual.getFullYear();
console.log(anioActual);
const hora=fechaActual.getHours()
console.log(hora);
const minutos=fechaActual.getMinutes();
console.log(minutos);
const segundos = fechaActual.getSeconds();
console.log(segundos);

 */

const productos = [
  {
    id: 1,
    titulo: "coca-cola",
    img: "url",
    precio: 2000,
    descripcion: "la mejor del mundo",
  },
  {
    id: 2,
    //id:crypto.randomUUID(),
    titulo: "Pepsi",
    img: "url",
    precio: 1500,
    descripcion: "la segunda  mejor del mundo",
  },
  {
    id: 3,
    titulo: "Pepsi",
    img: "url",
    precio: 1000,
    descripcion: "la  mejor de argentina",
  },
];

/* CRUD O ABM */

/* 
C - create - crear 
R - read - leer
U - update - actualizar
D - delate - eliminar - logica - fisica - CONFIRMACION

A - Alta
B - Baja - logica - fisica - CONFIRMACION
M - Modificaion 

*/

/* Tienen que crear 5 funciones para el CRUD COMPLETO */

const crearNuevoProduto = () => {
  const titulo = prompt("Ingrese el nombre del producto ");
  const img = prompt("Ingrese la imagen del producto ");
  const precio = prompt("Ingrese el precio del producto ");
  const descripcion = prompt("Ingrese la descripcion del producto ");
  const nuevoProducto = {
    //esto lo que hace es obtner el ultimo producto dentro de objeto y al id le suma 1
    //ese signo de pregunta es q lo q hace es lo que esta a la izquerda tiene un valor distinto de nulo o undefined, si tiene el distonto valor hace lo q esta a la derecha
    id: productos[productos.length - 1]?.id + 1 || 1,
    /* id: productos.length ? productos[productos.length - 1].id + 1 : 1, */
    titulo,
    img,
    precio,
    descripcion,
  };
  productos.push(nuevoProducto);
};
const obtenerTodosLosProductos = () => {
  productos.forEach((productos) => console.log(productos));
};
const obtenerInfoProducto = (idProducto) => {};

const actualizarProducto = (idProducto) => {};

const eliminarFisicamenteUnProducto = (idProducto) => {
  const confirmarEliminarUnProducto = confirm(
    "¿Estas seguro de que quieres eliminar este producto? Ten en cuenta que una vez realizada la operacion no tendras marcha atras.",
  );

  if (confirmarEliminarUnProducto) {
    /*  const nuevoArraySinElProducto = productos.filter((producto) => producto.id !== idProducto)
 
     productos = nuevoArraySinElProducto
 
     console.log(nuevoArraySinElProducto) */

    productos.forEach((producto, i) => {
      if (producto.id === idProducto) {
        productos.splice(i, 1);
      }
    });
  }
};

const eliminarLogicamenteUnProducto = (idProducto) => {};

//1;4826de ener

//------------------------------------------------------------

//Practicaremos un crud q creemos un listado de autos q hay en una consesionaria

const autos = [
  {
    id: 1,
    marca: "Fiat",
    modelo: "toro",
    anio: 2020,
    tipoDemotor: "Diesel",
    descripcion: "Camioneta",
    precio: 6000,
    bloqueo: true,
  },
    {
        id: 2,
    marca: "Fiat",
    modelo: "uno",
    anio: 2020,
    tipoDemotor: "Nafta",
    descripcion: "auto",
    precio: 6000,
    bloqueo: true,
  },
];

const AgrearUnNuevoAuto = () => {
  const marca = prompt("Ingrese la marca del vehiculo");
  const modelo = prompt("Ingrese el modelo del vehiculo");
  const anio = prompt("Ingrese el año del vehiculo");
  const tipoDemotor = prompt("Ingrese el tipo de motor del vehiculo");
  const descripcion = prompt("Ingrese una descripcion del vehiculo");
  const precio = prompt("Ingrese el precio del vehiculo");

  const nuevoAuto = {
    id: autos[autos.length-1]?.id+1||1,
    marca,
    modelo,
    anio,
    tipoDemotor,
    descripcion,
    precio,
  };
  autos.push(nuevoAuto)
};

const obtenerTodosLosAutos = ()=>{
  autos.forEach((auto)=>console.log(auto))
}

const obtenerUnAuto= (idAuto)=>{
autos.forEach((auto)=>{
  if(auto.id===idAuto){
    console.log(auto)
  }
})
}

const eliminarFisicamenteUnAuto=(idAuto)=>{
  const confirmacionDeEliminacion=confirm("estas seguro que quieres eliminar este producto")
  if(confirmacionDeEliminacion){
autos.forEach((auto,i)=>{
  if(auto.id===idAuto){
    autos.splice(i,1)
  }
})
}
}