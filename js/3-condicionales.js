/* Comdicionales */
/* 
const edad = prompt("Ingrese su edad")
 */
/* if (condicion es verdadera ){
se ejecuta el bloque
} si la condicion es falsa hago algo o no hago nada 
*/

/* condicion simple  */
/* 
if (edad>= 18 ){
console.log("tenes tu licencia");
}
*/  

/* condicion doble  */
/* if (edad>= 18 ){
console.log("tenes tu licencia");
}else{
    si no cumple la condicion ejecuta este bloque
    }

*/

/* condicion multiple */
//else if 
/* 
if (edad>=18 && edad <=75){
   console.log("tenes tu licencia"); 
}else if (Number(edad) === 16 ){
    console.log("podes tener tu licencia si tus padres quieren");
}else{
    console.log("No tenes la edad para tu licencia");
} */
/* TRATAR DE ENTENDER MEJOR ESTA PARTE */
/* isNaN 
true → si no es un número (NaN = “Not a Number”)

false → si sí es un número
*/
/* if(!isNaN(Number(edad))){
        if (edad>=18 && edad <=75){
   console.log("tenes tu licencia"); 
}else if (Number(edad) === 16 ){
    console.log("podes tener tu licencia si tus padres quieren");
}else{
    console.log("No tenes la edad para tu licencia");
}
}else{
    console.log("lo q ingresaste no es un numero puro");
}
 */


/* switch */

const fruta = prompt ("Ingrese una Fruta");


switch (fruta){
    case "pera":
    console.log("El kilo de pera vale $1000");
    break;
        case "banana":
    console.log("El kilo de banana vale $1000");
    break;
        case "sandia":
    console.log("El kilo de sandia vale $1000");
    break;
        case "manzana":
    console.log("El kilo de manzana vale $1000");
    break;
    default:
        console.log("No hay esa fruta o verdura en la verduleria");
        break;
}

/* const nota = prompt("ingresa una nota");
const nota = Number(prompt("ingresa una nota")); */

/* 

0 - 2 desastre
3 - 5 tenes chance
6 - 7 aprobaste
8 - 9 notable
10 - excelente
*/

/* switch (Number(nota)) {
  case 0:
    console.log("desastre");
    break;
  case 1:
    console.log("desastre");
    break;
  case 2:
    console.log("desastre");
    break;
  case 3:
    console.log("tenes chance");
    break;
  case 4:
    console.log("tenes chance");
    break;
  case 5:
    console.log("tenes chance");
    break;
  case 6:
    console.log("aprobaste");
    break;
  case 7:
    console.log("aprobaste");
    break;
  case 8:
    console.log("notable");
    break;
  case 9:
    console.log("notable");
    break;
  case 10:
    console.log("excelente");
    break;

  default:
    console.log("La nota ingresada no es valida");
    break;
} */

/* if (nota >= 0 && nota <= 2) {
  console.log("desastre");
} else if (nota === 3 || nota === 4 || nota === 5) {
  console.log("tenes chance");
} else if (nota === 6 || nota === 7) {
  console.log("aprobaste");
} else if (nota === 8 || nota === 9) {
  console.log("notable");
} else if (nota === 10) {
  console.log("excelente");
} else {
  console.log("La nota ingresada no es valida");
} */

//const nota = Number(prompt("ingresa una nota")); /* 2 */

/* switch (true) {
  case nota >= 0 && nota <= 2:
    console.log("desastre");
    break;
  case nota === 3 || nota === 4 || nota === 5:
    console.log("tenes chance");
    break;
  case nota === 6 || nota === 7:
    console.log("aprobaste");
    break;
  case nota === 8 || nota === 9:
    console.log("notable");
    break;
  case nota === 10:
    console.log("excelente");
    break;

  default:
    console.log("La nota ingresada no es valida");
    break;
} */
/* IF anidados - IF/ELSE HELL */
/* 
if(){
  if(){
    if(){
      if(){

      }
    }
  }
} */