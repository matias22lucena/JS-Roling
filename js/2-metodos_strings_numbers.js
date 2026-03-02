/* strings  */
/* const nombreDeUsuario ="MaTuTe2026"; */
/* length lo que hace es contar tanto caracteres especiales como comunes */
/* trim() lo quehace esquitar los espacios en blanco del comienzo y del final. los del medio no  */
/* console.log( nombreDeUsuario.trim().length ) */
/* numbers */

/* toLowerCase - transforma el string a minuscula  */

/* toUpperCase - transforma el string a mayuscula */

/* console.log(nombreDeUsuario.toUpperCase());  */

/* JS Posiciones  */
/* 
H - O - L - A
0 - 1 - 2 - 3
se arranca contando desde 0

*/
/* charAT */
/* el charAt sirve para traer una letra especifica del string  */
/* console.log(nombreDeUsuario.charAt(9)); */

/* substings */
/* primer numero seria elindice de donde arranca y el segundo donde termina arranca contando desde 0  */
/* console.log(nombreDeUsuario.substring(1,8)) */

/* promot */

/* const nombre = prompt("ingrese su nombre")

console.log(nombre)

const edad = prompt("ingrese su edad") */

/* console.log(Number(edad))
console.log(parseFloat(edad))
console.log(parseInt(edad))
 */
/*sirve para escribir en el html del navegador  */
/* document.write("Hello World"); */


/* Numbers */

/* Math */
/* const num1= 10.69848 */

/* const numeroDecimalRedondeado = (12.844838383838).toFixed(2); *//*para lo q se usa es para recortar un decimal */
/* para saber el tipo de dato q es una const osea q tipo de dato tiene adentro */
/* console.log(typeof numeroDecimalRedondeado)
console.log("resultado del toFixed", Number(numeroDecimalRedondeado))
 */
/* Redondear un numero decimal */

/* 
ceil -  10 obtiene el numero entero del decimal osea antes de la  , o . pone el numero q sigue   
floor-  10 obtiene el numero entero del decimal. pero no redondea ni para arriba ni abajo. si tengo 10.999 me dara 10
round - redondea segun el valor decimal 
*/
/* 
console.log("ceil ",Math.ceil( num1));
console.log("floor ",Math.floor( num1));
console.log("round " ,Math.round(num1)); */

/* const num1 = 10;
const num2 = 30;
const num3 = 60;
const num4 = 90;

console.log("El numero mayor es: ",Math.max(num1,num2,num3,num4 ));
console.log("El numero menor es: ",Math.min(num1,num2,num3,num4 )); */

/* numero aleatorio */
/* el multiplicador hace q los denumeros del 1 al 100 tambien puede ser el 1al10 como uno quiera 
y el math round hace q sea un numero entero 
*/
/* console.log("tu numuero random es:", Math.round( Math.random() * 100) ); */