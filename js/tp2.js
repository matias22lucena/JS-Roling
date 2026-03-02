/* 
1- Escribir un programa que solicite la edad y si es mayor de 18 años mostrar un mensaje que ya puede conducir, si la edad ingresada no es un número válido indicarlo en un mensaje.
 */

/* const edad = prompt("Ingrese su edad para ver si cumple los requisitos para adquirir la licencia de conducir");

if(Number(edad)>= 18 && Number(edad) <= 75){
document.writeln(`Puede solcitar su licencia`)
}else{
    document.writeln(`No Puede solcitar su licencia`)
} */


/* 2- Escribir un programa que solicite una nota (número) de 0  a 10. Luego mostrar la calificación en un alert según los siguientes rangos de nota:

0-2: Muy deficiente
3-4: Insuficiente
5-6: Suficiente
7: Bien
8-9: Notable
10: Sobresaliente

Si ingreso un número que no esté dentro del rango de 0 a 10 mostrar un mensaje de “número erróneo”. Si el número ingresado no es válido mostrar el mensaje “Introduce un número válido”.

Ejemplo:



Input: 5
Input: 50
Input: hola10
Output: Suficiente
Output: Número erróneo
Output: Introduce un número válido
 */

/* const ingresoDeNota = prompt("Ingrese su nota");
switch(Number(ingresoDeNota)){
        case 0 :
        document.writeln(` Muy deficiente`);
         break;

        case 1 :
        document.writeln(` Muy deficiente`);
        break;

        case 2 :
        document.writeln(` Muy deficiente`);
        break;
        
        case 3 :
        document.writeln(`Insuficiente`);
        break;

        case 4 :
        document.writeln(`Insuficiente`);
        break;

        case 5 :
        document.writeln(`Suficiente`);
        break;

        case 6 :
        document.writeln(`Suficiente`);
        break;

        case 7 :
        document.writeln(`Bien`);
        break;

        case 8 :
        document.writeln(`Notable`);
        break;

        case 9 :
        document.writeln(`Notable`);
        break;

        case 10 :
        document.writeln(`Sobresaliente`);
        break;

        default:
        document.writeln(`La nota ingresada es incorrecta`);
        break;
}
 */

/* 3- Realiza un script que pida cadenas de texto  hasta que se pulse “cancelar”. Al salir con “cancelar” deben mostrarse todas las cadenas concatenadas con un guión -.

Nota: usar confirm() 
 */

let confirmarElArranqueDelPrograma = confirm("Presiona confirmar si quieres q el programa arranque");


let memoriaDeTexto = "";

if (confirmarElArranqueDelPrograma){
    
let CadenaDeTexto = prompt ("Ingrese palabras");
    while(CadenaDeTexto){
        if(!memoriaDeTexto){
            memoriaDeTexto += CadenaDeTexto;
        }
        
        memoriaDeTexto=memoriaDeTexto + "-" + CadenaDeTexto;
        CadenaDeTexto = prompt ("Ingrese palabras");
    }

    console.log(memoriaDeTexto);
}


/* 4- Realiza un script que pida números hasta que se pulse “cancelar”. Si no es un número deberá indicarse con un «alert» y seguir pidiendo números. Al salir con “cancelar” deberá indicarse la suma total de los números introducidos. */

/* let numero = prompt("ingrese un numero");
let resultado = 0;


while(numero!==null){
if(isNaN(numero)){
    alert("Ingrese un numero valido")
}else{
    resultado+= Number(numero);
}
 numero = prompt("ingrese un numero");


} 
console.log("el resultado de la suma es "+ resultado ) */