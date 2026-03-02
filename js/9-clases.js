/* Una clase es la evolucion de la funcion constructora 
las clases js internamente hace muchas cosas q a mi nme ahorran tiempo y me genera un mejor manejo de la informacion */
class Productos {
  constructor(titulo, imagen, precio, descripcion) {
    this.titulo = titulo;
    this.imagen = imagen;
    this.precio = precio;
    this.descripcion = descripcion
  }

  obtenerTituloProducto() {
    console.log(this.titulo)
  }
}

const producto1 = new Productos("titulo", "imagen", "precio", "descripcion")
console.log(producto1)