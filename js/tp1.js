/* 1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”. */
/* alert("hola"); */

/* 2.- Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write). */
/* document.write("Hello World"); */
/* 3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5. */
/* alert(3+5); */

/* document.write(3+5);
 */

/* 4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»
Ejemplo: 

input: Coder 
Output: Hola Coder
 */

/*  const nombreDeUsuario = prompt  ("ingrese su nombre de usuario");
alert("holA " + nombreDeUsuario )
document.writeln(`hola ${nombreDeUsuario}`) */

/* Dificultad:  🟢
5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números.
Nota: Tener en cuenta la siguiente función: parseInt
https://developer.mozilla.org/es/docs/Web/JavaScript/Referencia/Objetos_globales/parseInt
 */

/* const num1 = prompt("ingrese el primer numero ");
const num2 = prompt("ingrese el segundo numero ");
alert(parseInt(num1)+parseInt(num2);
*/
/* 
const num1 = parseInt(prompt("Ingrese el primer número"));
const num2 = parseInt(prompt("Ingrese el segundo número"));
alert(num1 + num2); */

/* 6- Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
Ejemplo: 

input: 15 , 3


Output: El 15 es el número más grande
 */
/*  const num1 = prompt("Ingrese un numero");
const num2 = prompt("Ingrese un numero");

if(num1 > num2){
        document.writeln(`El numero mayor es ${num1}`)
}else if(num1 < num2){
document.writeln(`El numero mayor es ${num2}`)
}else{
    document.writeln(`los numeros son iguales`)
}  */


/* 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres. */

/*  const num1 = prompt("Ingrese un numero");
const num2 = prompt("Ingrese un numero");
const num3 = prompt("Ingrese un numero");

document.writeln(`el numero mayor es ${Math.max(num1, num2, num3)}`) */

/* 8.- Escribe un programa que pida un número y diga si es divisible por 2
Ejemplo: 

input: 10
input: 15
Output: El 10 es divisible por 2.
Output: El 15 no es divisible por 2.
 */

/* const num1 = prompt("Ingrese un numero");

if (parseInt(num1) %     2 === 0){
    document.writeln(`El numero es divisible en 2`)
}else{
    document.writeln(`El numero NO es divisible en 2`)
}
 */
  /* 9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
Nota: Tener en cuenta la función length y substring o charAt (developer mozilla)
Ejemplo:



input: Hola mundo
Output: oauo
 */