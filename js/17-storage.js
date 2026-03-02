/* storage  = MEMORIA  
local - grabar informacion hasta que yo la borre
sesion - grabar informacion hasta que cierro la pestaña o el navegador
*/

/* const productos = [
  {
    id: 1,
    titulo: "Coca-Cola",
    imagen: "url",
    precio: 2000,
    descripcion: "la mejor del mundo",
    bloqueo: false,
  },
  {
    id: 2,
    titulo: "Pepsi",
    imagen: "url",
    precio: 1500,
    descripcion: "la segunda mejor del mundo",
    bloqueo: false,
  },
  {
    id: 3,
    titulo: "Manaos",
    imagen: "url",
    precio: 1000,
    descripcion: "la mejor de argentina",
    bloqueo: false,
  },

];
 */
/* const crearNuevoProduto = () => {

  const titulo = prompt("Ingrese el nombre del producto")
  const imagen = prompt("Ingrese la imagen del producto")
  const precio = prompt("Ingrese el precio del producto")
  const descripcion = prompt("Ingrese la descripcion del producto") */

//buscar diferencia entre esos dos id 
  /* id: productos.length ? productos[productos.length - 1].id + 1 : 1, */
/*   const nuevoProducto = {
    id: productos[productos.length - 1]?.id + 1 || 1,
    titulo,
    imagen,
    precio,
    descripcion,
    bloqueo: true,
  }

  productos.push(nuevoProducto)
};

const mostrarProductos = () => {
  productos.forEach((producto) => console.log(producto))
}
 */
/* setItem - creo o modifico 
   getItem - obtener de la memoria (local o sesion) el elemento que necesito
   removeitem - elimina de la memoria (local o sesion) el elemento que no necesito

   clear - borra todos los elementos de la memoria.-
*/
/* localStorage.setItem("nombre", "andres")
sessionStorage.setItem("nombre", "andres") */


/* const convertirArrayDeProductosAString = JSON.stringify(productos)
const nuevoProducto = localStorage.setItem("productos", convertirArrayDeProductosAString)

const obtenerProductoLocalSt = localStorage.getItem("productos")
const convertirStringObjeto = JSON.parse(obtenerProductoLocalSt)
console.log(obtenerProductoLocalSt) */

/* const nuevoProducto = localStorage.setItem("productos", JSON.stringify(productos))
const obtenerProductoLocalSt = JSON.parse(localStorage.getItem("productos"))  

31miniu*/

/* CREAR CRUD */

const productos = [
  {
    id: 1,
    titulo: "Coca-Cola",
    imagen: "url",
    precio: 2000,
    descripcion: "la mejor del mundo",
    bloqueo: false,
  },
  {
    id: 2,
    titulo: "Pepsi",
    imagen: "url",
    precio: 1500,
    descripcion: "la segunda mejor del mundo",
    bloqueo: false,
  },
  {
    id: 3,
    titulo: "Manaos",
    imagen: "url",
    precio: 1000,
    descripcion: "la mejor de argentina",
    bloqueo: false,
  },

];

//base de datos simulada con el storage 
let productosGuardadosEnLaMemoriaLocal = JSON.parse(localStorage.getItem("productos")) || null

if (!productosGuardadosEnLaMemoriaLocal) {
  localStorage.setItem("productos", JSON.stringify(productos))
  productosGuardadosEnLaMemoriaLocal = JSON.parse(localStorage.getItem("productos"))
}
/* localStorage.setItem("productos", JSON.stringify(productos))

const productosGuardadosEnlaMemoriaLocal = JSON.parse(localStorage.getItem(productos))
 */

const crearNuevoProdutoDelStorage = () => {

  const titulo = prompt("Ingrese el nombre del producto")
  const imagen = prompt("Ingrese la imagen del producto")
  const precio = prompt("Ingrese el precio del producto")
  const descripcion = prompt("Ingrese la descripcion del producto") 

//buscar diferencia entre esos dos id 
  /* id: productos.length ? productos[productos.length - 1].id + 1 : 1, */
  const nuevoProducto = {
    id: productos[productos.length - 1]?.id + 1 || 1,
    titulo,
    imagen,
    precio,
    descripcion,
    bloqueo: true,
  }

  productosGuardadosEnLaMemoriaLocal.push(nuevoProducto)
  localStorage.setItem("productos", JSON.stringify(productosGuardadosEnLaMemoriaLocal))
};

const mostrarProductosDelStorage = () => {
  productosGuardadosEnLaMemoriaLocal.forEach((productos) => console.log(productos));
};
const mostrarProductosDelStorageHabilitados = () => {
  productosGuardadosEnLAMemoriaLocal.forEach((producto) => {
    if (!producto.bloqueo) {
      console.log(producto)
    }
  })
}

const mostrarProductosDelStorageDeshabilitados = () => {
  productosGuardadosEnLaMemoriaLocal.forEach((producto) => {
    if (producto.bloqueo) {
      console.log(producto)
    }
  })
}
const mostrarUnProductosDelStorage = (idProducto) => {

    if (!idProducto) {
    alert("ID Incorrecto")
    return
  }


  const productoAMostrar=productosGuardadosEnLaMemoriaLocal.find((productos) => productos.id===idProducto);

  console.log(productoAMostrar)
};

//45min

const actualizarProductoEnElStorage = (idProducto) => {


  if (!idProducto) {
    alert("ID Incorrecto")
    return
  }


  const obtenerProductoActualizar = productosGuardadosEnLaMemoriaLocal.find((producto) => producto.id === idProducto)
  
  const obtnerIndexDelProductoActualizar = productosGuardadosEnLaMemoriaLocal.findIndex ((producto)=>producto.id===idProducto)

  console.log(obtnerIndexDelProductoActualizar)

  const infoActualizar = Number(
    prompt(`Ingresa el numero de lo que quieres actualizar:
    1- Nombre del Producto: ${obtenerProductoActualizar.titulo}
    2- Imagen: ${obtenerProductoActualizar.imagen}
    3- Precio: ${obtenerProductoActualizar.precio}
    4- Descripcion: ${obtenerProductoActualizar.descripcion}
    5- Cambiar la opcion de bloqueo: ${obtenerProductoActualizar.bloqueo ? "Visible" : "No Visible"}
    `
    )
  )

  switch (infoActualizar) {
    case 1:
      const nuevoNombre = prompt("Ingrese un nuevo titulo para el producto")
      obtenerProductoActualizar.titulo = nuevoNombre
      break
    case 2:
      const nuevaImagen = prompt("Ingrese una nueva url para la imagen del producto")
      obtenerProductoActualizar.imagen = nuevaImagen
      break
    case 3:
      const nuevoPrecio = prompt("Ingrese un nuevo precio para el producto")
      obtenerProductoActualizar.precio = nuevoPrecio
      break
    case 4:
      const nuevaDescripcion = prompt("Ingrese una nueva descripcion para el producto")
      obtenerProductoActualizar.descripcion = nuevaDescripcion
      break
    case 5:
      const nuevaOpcionDeBloqueo = prompt("Ingrese la opcion de:'Visible' o 'No Visible' para el producto")
      obtenerProductoActualizar.bloqueo = nuevaOpcionDeBloqueo
      break

    default:
      console.log("Esta opcion no esta disponible")
      break
  }


  //bueno q eslo q hace esto del array le paso el index de donde se encuentra el producto la posicion, eso medevuelve el producto como esta en memoria y a ese lo remplazo con la nueva info q seria obtner producto actualizar. 
  productosGuardadosEnLaMemoriaLocal[obtnerIndexDelProductoActualizar ]=obtenerProductoActualizar
//una vez actualizado el array lo mando completo al local storage asi y ahi piso el array con otro array 
  localStorage.setItem("productos", JSON.stringify(productosGuardadosEnLaMemoriaLocal))



};

const eliminarFisicamenteUnProductoDelStorage = (idProducto) => {

  if (!idProducto) {
    alert("ID Incorrecto")
    return
  }



  const confirmarEliminarUnProducto = confirm("¿Estas seguro de que quieres eliminar este producto? Ten en cuenta que una vez realizada la operacion no tendras marcha atras.")


  if (confirmarEliminarUnProducto) {
    productosGuardadosEnMemoriaLocal.forEach((producto, i) => {
      if (producto.id === idProducto) {
        productosGuardadosEnMemoriaLocal.splice(i, 1)
        localStorage.setItem("productos", JSON.stringify(productosGuardadosEnMemoriaLocal))
      }
    })
  }
}

const eliminarLogicamenteUnProductoDelStorage = (idProducto) => {

  if (!idProducto) {
    alert("ID Incorrecto")
    return
  }


  const confirmarBloqueoLogicoProducto = confirm("¿Estas seguro de que quieres bloquear a este producto?")

  if (confirmarBloqueoLogicoProducto) {
    productosGuardadosEnMemoriaLocal.forEach((producto, i) => {
      if (producto.id === idProducto) {
        producto.bloqueo = true
        localStorage.setItem("productos", JSON.stringify(productosGuardadosEnMemoriaLocal))
      }
    })
  }
};


const activarLogicamenteUnProductoDelStorage = (idProducto) => {

  if (!idProducto) {
    alert("ID Incorrecto")
    return
  }

  const confirmarActivacionLogicaDelProducto = confirm("¿Estas seguro de que quieres activar a este producto?")

  if (confirmarActivacionLogicaDelProducto) {
    productosGuardadosEnMemoriaLocal.forEach((producto, i) => {
      if (producto.id === idProducto) {
        producto.bloqueo = false
        localStorage.setItem("productos", JSON.stringify(productosGuardadosEnMemoriaLocal))
      }
    })
  }
};