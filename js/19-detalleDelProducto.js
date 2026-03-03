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
        <button class="btn btn-success">Añadir al carrito</button>
        <button class="btn btn-danger">Añadir a favoritos</button>
        </div>
      </div>
    `


  }
)()
//clase 23 de febrero 43minutosss