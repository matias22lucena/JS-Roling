(
    async()=>{
    const divProductos = document.getElementById("divFilaProducto")
    const idProducto = new URLSearchParams(location.search).get("id")//con este buscamos el id
    const productoFakeStore = await fetch(`https://fakestoreapi.com/products/${idProducto}`)//con este traemos el producto
    const objetoDelProducto = await productoFakeStore.json()//aqui lo convertimos en objeto
    console.log(objetoDelProducto)    

    divProductos.innerHTML = `

    <div class="col-12 col-md-6">
        <img src="${objetoDelProducto.image}" alt="">
      </div>
      <div class="col-12 col-md-6">
        <p>$${objetoDelProducto.price}</p>
        <p>${objetoDelProducto.description}</p>    
        <button class="btn btn-success">Añadir al carrito</button>
        <button class="btn btn-danger">Añadir a favoritos</button>
      </div>
    `


    }
)()
//clase 23 de febrero 24minutoss