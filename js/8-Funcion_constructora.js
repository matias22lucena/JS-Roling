/* La funcion constructora es una funcion declarativa osea tiene un nombre */
/* lo que hace la funcion constructora es q yo lo paso datos y me devuelve objetos armados */
function Productos(titulo, imagen, precio, descripcion) {
  this.id = productos[productos.length - 1]?.id + 1 || 1;
  this.titulo = titulo;
  this.imagen = imagen;
  this.precio = precio;
  this.descripcion = descripcion
  //Ocupa mas memoria
  /*   this.obtenerStock = function () {
      console.log(productos.length)
    } */
}

/* Instanciar */
/* const producto1 = new Productos("titulo", "imagen", "precio", "descripcion")
const producto2 = new Productos("titulo2", "imagen2", "precio2", "descripcion2")
console.log(producto1)
console.log(producto2) */
/* const producto2 = new Productos("jugo2", "url2", "1000", "juego2")
const producto3 = new Productos("jugo3", "url3", "1000", "juego3")
console.log(producto1)
console.log(producto2)
console.log(producto3) */
/*  entender bien el prototype para q se lo usa 
CUANDO USAMOS PROTOTYPE ES COMO SI ESTUVIERAMOS DENTRO DEL OBJETO

Productos.prototype.obtenerTituloProducto = function () {
  console.log(this.titulo)
}  
  */