/* Arreglos o arrays  */
/* La intencion de un arreglo es de que o pueda almacenar mucha info en una sola variable  */
//ESTO NO ES ESCAABLE
/* const usuario1 = "MATIAS";
const usuario2 = "LEANDRO";
const usuario3 = "LUCENA";
 */
/* METODOS Q  MODIFICAN EL ARRAY ORIGINAL  */

//El array nos permite guardar los datos de forma acomodada. arranca desde la posicion 0
//De un array yo puedo obtner elementos q esten alojados ahi, pero hay veces q yo necesitare extraer un elemento
/* const usuarios = ["Matias", "Leandro", "Lucena", "Argentina", "tucson"];
 */
/* console.log(usuarios); */

//COMO OBTENGO UN ELEMENTO DEL ARRAY
//SERIA MEDIANTE LA POSICION DEL ELEMENTO ASI COMO ESTA ABAJO ESTO ES SABIENDO LA POSICION
/* console.log(usuarios[1]); */

/* esto es sin saber la posicion */
//si la posicion estaocupada devuelve -1
/* const buscar = prompt("Ingrese el nombre para buscar en la base de datos");
console.log(usuarios.indexOf("Leandro"));

console.log(usuarios.indexOf(buscar)); */
/* let resultadoDeBusqueda = buscar;
alert("el nombre q esta en esa posicion es " + resultadoDeBusqueda);
 */

/* METODOS PARA AGREGAR ELEMENTOS A UN ARRAY - PUSH - SPLICE-UNSHIFT */

/*  AGREGAR UN NUEVO ELEMENTO AL ARRAY  - Push */
/* usuarios.push(prompt("INGRESE UN NUEVO USUARIO"));
usuarios.push("casita ");
console.log(usuarios); */

/* Hay mas metodos para agregar elementos al array  */
/* El splice sirve para eliminar y agregarun nuevo elemento en esa posicion o tambien sirve para agregar un elemento en cierta posicion y si esta ocupado al elemento q este ahi lo corre de posicion y agregega al nuevo elemento */
//el primer numero q le pasamos es la posicion q queremos ocupar. el segundo es el queremos eliminar si le pasamos 0 le estamos diciendo q no lo queremos eliminar le decimos q corra de posicion al elemento q lo esta ocupand. Y lo ultimo seria lo que iria ahi.

//usuarios.splice(1, 0, "marcos paz"); //agrega unnuevo elemento en la posicion asignada
//usuarios.splice(1, 1); // borra un elemento en particular segun el index q le paso
//console.log(usuarios);

//para agregar un elemento al principio del array

/* usuarios.unshift("Tucumán");  */ //agrega este elemento en la posicion 0
//usuarios.unshift("Tucumán", "Argentina"); //tambien se púeden agregar varios elemnetos

/* console.log(usuarios);
 */

/* COMO ELIMINAR UN ELEMENTO */
/* usuarios.unshift("Tucumán"); */
/* pop -  siempre elimina el ultimo  elemento del array */
/* console.log(usuarios);
usuarios.pop();
console.log(usuarios); */

/* shift -  siempre elimina el primer elemento del array  */

/* console.log(usuarios);
usuarios.shift();
console.log(usuarios);
 */

//SORT -Para que sirven en el caso de sort ordena o acomoda alfabeticamente el aaray
//esto seria con letras
/* console.log(usuarios.sort()); */
//asi seria con numeros
const numeros = [1, 20, 10, 3, 2, 30, 15];
//si no le ponemos esa  funcion fecha asi como esta no lo acomoda bien
//hay q averiguar bien sobre callbaks
//con esa resta q esta ahi lo q hace es determinar cual es mayor y si dA 0 son iguales
//cuando el resultado queda positivo significa q b es menor y cuando a queda negativo significa q a es menor
/* console.log(numeros.sort((a, b) => a - b)); */

/*  REVERSE  */
/* lo que hace es dar vuelta el array osea me lo devuelve alreves*/

/* console.log(usuarios.reverse()); */

/* METODOS Q NO MODIFICAN EL ARRAY ORIGINAL  */

/* AHORA VEREMOS COMO TRABJAR CON EL ARRAY PERO SIN MODIFICARLO OSEA(TRABJAR ATRAVES DEUNA COPIA DEL ARRAY ) */

/* const usuarios = ["Matias", "Leandro", "Lucena", "Tucuman", "Argemtina"]; */

//EL METODO Q USAREMOS PARA HACER LA COPIA ES slice hace la copia y nos retorna un nuevo array
//el primner numero es para indicar el inico y el fin
/* const NuevoArray = usuarios.slice(0, 2);

console.log(usuarios);
console.log(NuevoArray); */
/* 
//FILTER filter es un metodo q adentro tiene una funcion
INVESTIGAR PARA ENTENDER 
MINUTO46
const obtenerNombresIguales = usuarios.filter(
  (usuario) => usuario === "Matias",
);
console.log(obtenerNombresIguales);
 */

/* DESPUES TENEMOS FIND Q ES LO MISMO Q FILTER PERO LA UNICA DIFERENCIA ES Q DEVUELVE LA PRIMERA COINCIDENCIA Y AHI CORTA  */

/* const obtenerNombresIguales = usuarios.find((usuario) => usuario === "Matias");
console.log(obtenerNombresIguales);
 */

/* MAP -Para q sirve le pasamos una funcion y el puede transformala segun el modelo q le pase 
NOS PERMITE HACER UNA TRANSFORMACION DE INFORMACION 
*/
/* MAP Toma la informacion del array y nos devuelve uno nuevo por esta en los q no modifica el array original */
/* //ejemplo de como usarlo
const saludoNuevoUsuarios = usuarios.map((usuario) => `Hola ${usuario}`);
console.log(saludoNuevoUsuarios); */

//para ver el indice de cada palabra q nos trae el map es asi

/* const saludoNuevoUsuarios = usuarios.map(
  (usuario, i) => `Hola ${i} ${usuario}`,
);
console.log(saludoNuevoUsuarios);
 */
/* INCLUDES */
/* includes sirve para buscar por ejemplo nombres q empiezen con tal letra se lo usa de la siguiente manera  */
/* const busquedaPorLetra = usuarios.filter((usuario) => usuario.includes("A"));

console.log(busquedaPorLetra); */
/* trabaja de la sigueinte manera filter trabja atraves de un booleano si retorna un verdaero el agarra ese elemento y lo guarda en un array nuevo  */

/* FOR - WHILE  ARRAY*/

const usuarios = ["Matias", "Leandro", "Lucena", "Tucuman", "Argemtina"];
//1.40  19 de enero
/* for (let i = 0; i < usuarios.length; i++) {
  const usuario = usuarios[i];
  console.log(usuario);
} */

//foreach es un metodo de los arrays en cambio el for comun no es un metodo
//con el foreach nos ahorramos de inicializar las varibales como con elfor

usuarios.forEach((usuario) => console.log(usuario));
