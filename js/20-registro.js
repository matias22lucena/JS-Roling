const inputUsuario = document.getElementById("inputUsuario")
const botonRegistro = document.getElementById("botonRegistro") 
const mensajeErrorUsuario=document.getElementById("idMensajeErrorUsuario")
const inputContrasenia=document.getElementById("inputContrasenia")
const inputRepContrasenia=document.getElementById("inputRepContrasenia")


idMensajeErrorUsuario.classList.add("d-none")
//LOS EVENTOS SON ACCIONES 

//UN EVENTO DE ESCUCHA ES addEventListener  

//aca en la funcion recibe dos  parametros el priemero es una clave y la clave q nosotros queremos utilizar es cuando alguein escriba. hay dos formas. para los formularios los eventos de escucha son INPUT O CHANGE
inputUsuario.addEventListener("change", (e)=>{
    if(e.target.value){
        inputUsuario.classList.remove("is-invalid")
        idMensajeErrorUsuario.classList.add("d-none")

    }else{
        inputUsuario.classList.add("is-invalid")
    }
})
//este es el evento para clickear 
botonRegistro.addEventListener("click",(e)=>{
    //lo q hace esto es sacar el reload automatico
    e.preventDefault()
    console.log(inputUsuario.value)
    if(!inputUsuario.value){
        inputUsuario.classList.add("is-invalid")
        idMensajeErrorUsuario.classList.remove("d-none")
    }
    if(inputContrasenia===inputRepContrasenia){
        setTimeout(() => {
            location.href="../paginas/iniciar-sesion.html"
        }, 2000);
    }else{
        alert("contraseñas no coinciden ")
    }
})

//empezar clase 25 feb