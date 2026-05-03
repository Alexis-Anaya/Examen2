//Evento click
/*
let botonSaludar = document.getElementById("Enviar");
botonSaludar.addEventListener("click", function() { 
document.getElementById("mensaje").textContent = "Hola, bienvenido al sistema"; 
});*/


//Evento mouseover y mouseout

let botonRegistrar = document.getElementById("Enviar"); 
botonRegistrar.addEventListener("mouseover", function() { 
    botonRegistrar.style.backgroundColor = "green"; }); 
    botonRegistrar.addEventListener("mouseout", function() { 
        botonRegistrar.style.backgroundColor = ""; });


//Evento keyup

/*let inputNombre = document.getElementById("nombre");
inputNombre.addEventListener("keyup", function() { 
    document.getElementById("mensaje").textContent = "Escribiendo: " + inputNombre.value; 
});*/

//Evento change

/*let selectPais = document.getElementById("servicio"); 
selectPais.addEventListener("change", function() { 
    document.getElementById("mensaje").textContent = "Seleccionaste: " + selectPais.value; 
});*/

//Evento submit

let formulario = document.getElementById("formulario"); 
formulario.addEventListener("submit", function(event) { 
    event.preventDefault(); // evita recargar 
    let nombre = document.getElementById("nombre").value.trim(); 
    let mail = document.getElementById("correo").value.trim(); 
    let mensajeUsuario = document.getElementById("Message").value.trim(); 
    if (nombre === "" || mail === "" || mensajeUsuario === "") { 
        document.getElementById("mensaje").textContent = "Datos inválidos: Nombre, Correo y el mensaje son obligatorios."; 
    } else { 
        document.getElementById("mensaje").textContent = "¡Mensaje enviado con exito!"; 
    } 
});