/* 1) Día de la semana

Pedí un número del 1 al 7 y mostrás el día correspondiente.
Si es otro número, mostrás “Número inválido”. */

/* let numeroDelusuario = prompt("Ingrese un numero ")

switch(Number (numeroDelusuario)){
    case 1 :
        document.writeln(`Lunes`);
        break;



    case 2 :
        document.writeln(`Martes`);
        break;



    case 3 :
        document.writeln(`Miercoles`);
        break;


    case 4 :
        document.writeln(`jueves`);
        break;



    case 5 :
        document.writeln(`Viernes`);
        break;



    case 6 :
        document.writeln(`Sabado`);
        break;



    case 7 :
        document.writeln(`Domingo`);
        break;

    default:

        document.writeln(`el numero ingresado es incorrecto`);
        break;
}
 */

/* 2) Calculadora

Pedí 2 números y después pedí una operación: + - * /
Mostrá el resultado.
Si la operación no existe, avisá. */

/* let num1 = prompt("Ingrese el primer numero");
let num2 = prompt("Ingrese el segundo numero");

let Calculadora = prompt ("diagamos que calculo quiere hacer");

let resultado =0;

switch (Calculadora.toLowerCase()){
    case "suma":
       resultado= Number(num1)+Number(num2);
       document.writeln(`La suma de los dos numeros da ${resultado}`);
       break;

           case "resta":
       resultado= Number(num1) - Number(num2);
       document.writeln(`La resta de los dos numeros da ${resultado}`);
       break;
           case "division":
       resultado= Number(num1)/Number(num2);
       document.writeln(`La division de los dos numeros da ${resultado}`);
       break;
           case "multiplicacion":
       resultado= Number(num1) * Number(num2);
       document.writeln(`La multiplicacion de los dos numeros da ${resultado}`);
       break;

       default:
        document.writeln(`La operacion q elegiste no existe `);
        break;
} */

/* 3) Menú de opciones

Mostrá un menú:

1-Saludar

2-Mostrar un mensaje motivador

3-Salir

El usuario elige una opción y se ejecuta. */

/* let  opciones = prompt("Elige una opcion 1-saludar- 2-Mostrar un mensaje motivador- 3-Salir ")

switch (Number(opciones)){
    case 1: 
    document.writeln(`HOLA`);
    break;

    case 2: 
    document.writeln(`Tu puedes`);
    break;
    case 3:
        
    break;
}
 */
/* 4) Tabla de multiplicar

Pedí un número y mostrás su tabla del 1 al 10. */

/* let numIngresadoPorElusuario=Number (prompt("Ingrese un numero y le daremos la su tabla de multiplicacion del 1 al 10"));

for (let i = 1; i<=10; i++){
    console.log(numIngresadoPorElusuario +  "x" + i + "=" + (numIngresadoPorElusuario*i))
}
 */

/* 5) Suma de 1 a N

Pedí un número N y mostrás el resultado de sumar desde 1 hasta N. */
/* 
let numIngresadoPorElusuario =Number( prompt("ingrese numero"));

for(let i = 1; i<=numIngresadoPorElusuario; i++){

console.log(numIngresadoPorElusuario + "+" + i + "=" +  (i+numIngresadoPorElusuario))

} */

//FUNCIONES
/* 1)saludar()
Función que muestre: "Hola! Bienvenido". */
/* 
function saludar() {
  alert("Hola! Bienvenido");
}
saludar();
 */

/* 2)mostrarNombre(nombre)
Recibe un nombre y lo muestra en consola. */
/* 
const nombre = prompt("Ingrese su nombre");

function mostrarNombre(nombre) {
  console.log(nombre);
}
mostrarNombre(nombre); */

/* 3) sumar(a, b)
Recibe 2 números y devuelve la suma. */

/* const num1 = Number(prompt("ingrese el primer numero"));
const num2 = Number(prompt("ingrese el segundo numero"));

function sumar(a, b) {
  let resultado = a + b;
  console.log("la suma de los dos numeros da " + resultado);
}

sumar(num1, num2);
 */

/* 4)restar(a, b)
Devuelve la resta. */
/* 
const num1 = Number(prompt("ingrese el primer numero"));
const num2 = Number(prompt("ingrese el segundo numero"));

function resta(a, b) {
  let resultado = a + b;
  console.log("la resta de los dos numeros da " + resultado);
}

resta(num1, num2);
 */
/* 19 */

/* ARRAYS Y FUNCIONES  */
/* const arrayDeNumeros = [];

const PedirNumerosAlUsuario = () => {
  let numUser = prompt("Ingres numeros");
  while (numUser !== null) {
    arrayDeNumeros.push(numUser);
    numUser = prompt("Ingres numeros");
  }
};
const mostarCantidad = () =>
  console.log("El tamaño del array es" + arrayDeNumeros.length);

const suma = () => {
  let suma = 0;
  for (i = 0; i < arrayDeNumeros.length; i++) {
    suma += Number(arrayDeNumeros[i]);
  }
  console.log("la suma de todos los numeros da " + suma);
};

PedirNumerosAlUsuario();
mostarCantidad();
suma();
 */

/* 🟡 NIVEL 2 – como los del campus
3️⃣ Ciudades (MUY parecido al tuyo)

Cargar ciudades en un array

Mostrar:

longitud

primera, tercera y última

Agregar una ciudad fija al final

Reemplazar la segunda por otra */
/* 
ArrayDeCiudades = [];

const AgregarCiudadesAlArray = () => {
  let ciudadIngresadaPorElusuario = prompt("ingrese una ciudad");
  while (ciudadIngresadaPorElusuario !== null) {
    ArrayDeCiudades.push(ciudadIngresadaPorElusuario);
    ciudadIngresadaPorElusuario = prompt("ingrese una ciudad");
  }
};

const MostrarcCdudadesEspecificas = () => {
  document.writeln(
    `La ciudad q esta en la primer posicion es ${ArrayDeCiudades[0]}` + "<br>",
  );
  document.writeln(
    `La ciudad q esta en la tercera posicion es ${ArrayDeCiudades[2]}` + "<br>",
  );
  document.writeln(
    `En la ultima posicion  tenemos ${ArrayDeCiudades[ArrayDeCiudades.length - 1]}` +
      "<br>",
  );
};


const agregarCiudadFijaAlFinal = () => {
  ArrayDeCiudades.push("Bali");
};

const remplazarSegundaPosicion = () => {
  ArrayDeCiudades.splice(1, 0, "Lima");
};

const ejecutarTodasLasfunciones = () => {
  AgregarCiudadesAlArray();
  MostrarcCdudadesEspecificas();
  agregarCiudadFijaAlFinal();
  remplazarSegundaPosicion();
};
ejecutarTodasLasfunciones();
 */

/* 4️⃣ Números pares e impares

Pedir números hasta cancelar

Guardarlos en un array

Crear una función que:

cuente cuántos son pares

cuántos impares

💡 Usar: %, if, for */

/* const arrayDeNumeros = [];

const pedirNumeros = () => {
  let pedirNumeros = prompt("ingrese un numero");

  while (pedirNumeros !== null) {
    if (pedirNumeros === "" || isNaN(pedirNumeros)) {
      alert("ingrese un numero valido");
    } else {
      arrayDeNumeros.push(pedirNumeros);
    }

    pedirNumeros = prompt("ingrese un numero nuevamente");
  }
};

const NumerosParesYImpares = () => {
  let pares = 0;
  let impares = 0;
  for (let i = 0; i < arrayDeNumeros.length; i++) {
    if (Number(arrayDeNumeros[i]) % 2 === 0) {
      pares++;
    } else {
      impares++;
    }
  }
  console.log("La cantidad de numeros pares es:" + pares);
  console.log("La cantidad de numeros impares es:" + impares);
};

pedirNumeros();
NumerosParesYImpares();
console.log(arrayDeNumeros);
 */
/* 🟠 NIVEL 3 – acá el campus empieza a apretar
5️⃣ Mayor y menor

Cargar números en un array

Crear una función que devuelva:

el mayor

el menor

💡 Usar: for, if */

/* 6️⃣ Buscar un valor

Cargar números

Pedir otro número

Crear una función que diga:

si existe en el array

en qué posición está */

const arrayDeNumeros = [];

let pedirNumeros = prompt("Ingrese un numero");
const agregarNumeros = () => {
  while (pedirNumeros !== null) {
    if ((pedirNumeros = "" || isNaN(pedirNumeros))) {
      alert("ingrese un numero valido");
    } else {
      arrayDeNumeros.push(pedirNumeros);
    }
    pedirNumeros = prompt("Ingrese un numero nuevamente");
  }
};
