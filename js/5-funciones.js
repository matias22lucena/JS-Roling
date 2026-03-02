/* funciones - metodos */

/* Tipos de funciones */

/* declarativas- porque tiene un nombre */
/* esto seria crear una funcion declarativa. para que son los parentesis sirven para recibir parametros o argumentos, no necesariamente lo recibe dependera de lo q la funcion haga   */
/* function nombreDeLaFuncion(parametros o  argumentos){

} */

function mostrarMensaje() {
  alert("Bienvenidos");
  /* las declarativas tiene sus pro y contra, la positiva es que la podemos llamar de donde queremos.
 y la negativa

*/
  /* Y LA FUNCION DECLARATIVA AL NO GUARDARSE EN UNA VARIBALE ES MUTABLE PUEDE CAMBIAR  */
}
/* sirve para mostrar el alert de la funcion aqui la llamamos a la funcion   */
/* mostrarMensaje() */ /* se la invoca */

/* funcion anonima - no tiene nombre */
/* una funcion anonima se guarda en una variable const por ende su valor no cambia  */

/* la contra de esta funcion es q no puede ser llamada desde cualquier lado primero debe existir para ser llamada  */
/* const mostrarMensajeAnonimo = function(){
    alert("hola desde  una funcion anonima");
}; */

const sumar = function () {
  return (
    3 + 3
  ); /* Las funciones para poder mostar algo tiene q devolverlo  tiene q retornarlo y eso se lo hace con la palabra reservada return LO QUE HACE ES RETORNAR EL RESULTADO DE ALGO. LO QUE HACE RETURN ES LO QUE TIENE A LA PAR LO DEVUELVE A LA VARIBALE EN ESTE CASO SUMAR. SI NO LE PONEMOS ESA PALABRA LA INFORMACION NO SALE DE LA FUNCION QUEDA ADENTRO   */
};

//console.log(sumar())

/* lo que tambien hace return es un corte de codigo como el break(INVESTIGAR LA DIFERENCIAS ENTRE LOS DOS ) */

/* Arrow function - funcion flecha - anonima */

/* cuando nuestra funcion es de una sola linea no hace flata las {} ni el return pero cuado tiene mas de una linea si hace falta */

/* const resta = () => 8-7;
console.log(resta( ))      */

/*  const resta = () => {
    return 8-7;

 }
 console.log(resta( ))  */

//IIF - funciones q se auto invocan. funciones q se llaman asi mismas
/* se usa mayormente cuando quiero  q algun producto o informacion o lo que sea se precarge en la pagina 
 INVESTIGAR SOBRE MEMORIAS LOCALES y memorias de sesiones 
    */
/*  (
    ()=>{
        console.log("Hola desde una IIFE");
    }
 )(); */

/*  (
    //bloque de codigo puede ser cualquier funcion 
 )(/* y este va solo hace q se ejecute el la funcion ); */

/* cuando es una funcion ? cuando es un metodo?Una funcion y un metodo va depender de ambiente en donde yo lo estoy ejecutando o llamando   */

/* LO QUE ESTA EN EL AMBIENTE GLOBAL YO LO PUEDO UTILIZAR EN EL AMBIENTE LOCAL. PERO LO QUE ESTA EN EL LOCAL NO DEBE Y NO PUEDE SALIER AL AMBIENTE GLOBAL   */
/* ambiente global */
/*  const numero1=10;

const division = ()=>{
    // ambiente local 
    console.log(numero1)
} */

/* LOS PARAMETROS SON LA INFORMACION DINAMICA Y EL  ARGUMENTO ES ALGO ESTATICO  */

const nombre = prompt("ingrese su nombre ");
const apellido = prompt("ingrese su apellido ");
const dni = prompt("ingrese su DNI ");
const domicilio = prompt("ingrese su domicilio ");
const usuario = prompt("ingrese su usuario ");
const email = prompt("ingrese su email ");
const contrasenia = prompt("ingrese su contraseña ");
//parametros (es informacion de una funcion, q require una funcion para poder hacer algo )
//a los parametros tambien se le puede dar un valor predefinido osea q si no le mandandan nada ahi toma el valor q le damos nosostros seria un valor por defecto
//se puede inicializar por defecto todo
const registro = (
  nombre,
  apellido,
  dni,
  domicilio,
  usuario,
  email,
  contrasenia,
) => {
  console.log(nombre);
  console.log(apellido);
  console.log(dni);
  console.log(domicilio);
  console.log(usuario);
  console.log(email);
  console.log(contrasenia);
};

//argumentos estaticos
/*         registro("matias","leandro","44742694","marcos paz","usuario","usuario@usuario.com", "12345")

 */

//parametros dinamicos
/* AQUI RESIVIMOS LA INFORMACION, LE PASAMOS ESTO A LA FUNCION OSEA LA INFO Y LA FUNCION HACE LO QUE ELLA QUIERA CON ESTA INFO OSEA LO QUE NOSTROS LE ORDENEMOS  */
registro(nombre, apellido, dni, domicilio, usuario, email, contrasenia);

/* CallBacks */

const saludar = () => {
  alert("hola");
};
//aqui la pasamos como parametro a la funcion saludar
const iniciarSesion = (funcionSaludar) => {
  //aqui la ejecuto a la funcion osea seria el parametro
  funcionSaludar();
};

iniciarSesion(saludar);
/* EL CALLBACKS ES CUANDO A LA FUNCION LA PASO POR PARAMETRO Y LA RECIBO EN OTRA FUNCION COMO PARAMETRO SE LE LLAMA CALLBACKS */

const reinicioDeJuego = () => {
  comienzoDeJuego();
};

const obtenerNumeroAleatorio = () => {
  const numeroAleatorio = Math.round(Math.random() * 1000);
  console.log(numeroAleatorio);
  return numeroAleatorio;
};

const obtenerNumeroDelUsuario = () => {
  const numeroUsuario = prompt("ingrese un numero del 1 al 1000");
  return Number(numeroUsuario);
};

const comienzoDeJuego = () => {
  const numeroMaquina = obtenerNumeroAleatorio();
  const numeroPersona = obtenerNumeroDelUsuario();

  if (numeroMaquina === numeroPersona) {
    alert("Ganaste sos un genio. Adivinaste el numero");
  } else {
    alert("Sos un perdedor. Das lastima");
  }

  const inicioDeJuego = confirm("Quieres volver a jugar?");

  if (inicioDeJuego) {
    reinicioDeJuego();
  } else {
    alert("Muchas gracias por haber jugado");
  }
};
