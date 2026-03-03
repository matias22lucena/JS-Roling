(
  async () => {
    const divProductos = document.getElementById("divFilaProducto")
    const tituloProducto = document.getElementById("tituloProducto")
    const idProducto = new URLSearchParams(location.search).get("id")//con este buscamos el id
    const productoFakeStore = await fetch(`https://fakestoreapi.com/products/${idProducto}`)//con este traemos el producto
    const objetoDelProducto = await productoFakeStore.json()//aqui lo convertimos en objeto
    console.log(objetoDelProducto)
    tituloProducto.textContent = `${objetoDelProducto.title}`
    divProductos.innerHTML = `

    <div class="col-12 col-md-6  div-imagen  text-center">
        <img src="${objetoDelProducto.image}" alt="">
      </div>
      <div class="col-12 col-md-6">

        <h3>$${objetoDelProducto.price}</h3>
        <div class="w-75">
        <p>${objetoDelProducto.description}</p>
        </div>
        <div class="w-75 text-center">      
        <button class="btn btn-success mx-2" id="botonAgregarProductoAlCarrito">Añadir al carrito</button>
        <button class="btn btn-danger mx-2">Añadir a favoritos</button>
        </div>
      </div>
    `
    //esto asi no nos toma porque esta siendo creado desde js. lo q tenemos q hacer es crear un evento desde html (que seria el ON ya sea onclick etc.  ese click invoca una funcion q se la crea en aqui en js)
    const botonCarrito = document.getElementById("botonAgregarProductoAlCarrito")
    console.log(botonCarrito)
  }
)()
//clase 23 de febrero 49minutosss