/*
D - document
O - object
M - model

*/

//Obtner un elemento HTML como se lo obtiene con el id 
// q quiere decir esto es obtner elemento por id del documento
/* const tituloPrincipal= document.getElementById("tituloPrincipal") */

//para cambiar un texto del html con js desde .js es asi
/* tituloPrincipal.innerText=  "cualquiercosa"
 *//* setTimeout(() => {
    tituloPrincipal.innerText=  "cualquiercosa"
},2000); */
/* console.log(tituloPrincipal);
 */

//este es para obtner por clase 

/* const parrafoPrincial= document.getElementsByClassName("clase-parrafo")
console.log(parrafoPrincial)

const imagenPrincipal = document.getElementsByTagName("img")
console.log(imagenPrincipal)
 */

//querySelector busca por defecto el nombre de las etiquetas pero si lepaso el simbolo de  (.) punto busca por clase. y si le paso el simbolo (#) busca por id 
/* const tituloPrincipal = document.querySelector("p") */
/* 
const tituloPrincipal = document.querySelectorAll("p")  */


/* const divPadredelTituloPrincipal = document.getElementById("divTituloPrincipal")
 *///con esto creamos un elemento desde js ahi le decimos q etiqueta queremos usar 
/* const etiquetaNuevaH1=document.createElement("h1") */
//aqui le agregamos contenido a esa etiqueta 
/* etiquetaNuevaH1.textContent="elemento creado desde js "
console.log(etiquetaNuevaH1)
 */
//ahora con esto hacemos q aparezca en la pagina 
//con esto nos tira ese h1 al final
/* document.body.appendChild(etiquetaNuevaH1)
 */
//con este donde este posicionado el div q creamos en el html 
/* divPadredelTituloPrincipal.appendChild(etiquetaNuevaH1) */

(
    async()=>{
    const divPadredelTituloPrincipal = document.getElementById("divTituloPrincipal")
    const productosFakeStore = await fetch('https://fakestoreapi.com/products')
    const arrayDeProductos = await productosFakeStore.json()
    divPadredelTituloPrincipal.innerHTML=arrayDeProductos.map((producto)=>

        
    `
    <div class="col-12 col-md-6 col-lg-4 my-3">
        <div class="card  img-class-propio">
    <img src="${producto.image}" class="card-img-top" alt="...">
            <div class="card-body">
    <h5 class="card-title text-truncate">${producto.title}</h5>
    <p class="card-text">$${producto.price}</p>
    <p class="card-text text-truncate">${producto.description}</p>
    <a href="../paginas/detalleDelProducto.html?id=${producto.id}" class="btn btn-primary">Ver Mas</a>
            </div>
        </div>
    </div>
    ` 

    ).join("")//esto sirve para sacar las comas(,)
    
    }
)()