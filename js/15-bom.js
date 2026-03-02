/* 
/* 
B - Browser
O - Object
M - Model
*/
/* sirve para hacer una redireccion 
 location.assign("https://google.com")    
    
*/

/* setTimeout(() => {
  location.assign("https://google.com")
}, 2000); */
//LA DIFERENCIA Q HAY ENTRE LOS DOS ES QUE HREF ES UN ATRIBUTO COMO SE Q ES UN ATRIBUTO PORQUE NO LLEVA PARENTESIS 
//Y EL HREF ES UN POCO  MAS RAPIDO 
/* setTimeout(() => {
  location.href = "https://google.com"
}, 2000); */

/* LA DIFERENCIA DE ESTE ES Q NO DEJA HISTORIAL OSEA NO PUEDO VOLVER ATRAS  */
/* setTimeout(() => {
  location.replace("https://google.com")
}, 2000); */


//recarga la pagina infinita veces si no se lo usa bien 
/* location.reload() */
//lo que hace este .go(-1) vuelve hacia atras una posicion y si es un positivo va hacia adelante hay mas opciones 
/* history.go(-1) */
//31 minutos clase13


//metodo para sacar el numero de id de un parametro estos son las distintas formas de hacerlo 

/* const idSplit = location.search.split("=")[1]
const idURLSearchParams = new URLSearchParams(location.search).get("id")
const idURL = new URL(location.href).searchParams.get("id")
console.log(idSplit)
console.log(idURLSearchParams)
console.log(idURL)
 */

/*  navigator.geolocation.getCurrentPosition((position) => {
  const latitude = position.coords.latitude
  const longitude = position.coords.longitude

  console.log(latitude, longitude)
}) 
 */
//devuelve las dimensiones de la pantalla 
/* console.log(screen) */
/* 
1hora2minu */