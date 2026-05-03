/*document.addEventListener("DOMContentLoaded", function() {
    let botonRegistrar = document.getElementById("Enviar");
}*/
/*

    botonRegistrar.addEventListener("mouseover", function() { 
        botonRegistrar.style.backgroundColor = "#198754";
    });

    botonRegistrar.addEventListener("mouseout", function() { 
        botonRegistrar.style.backgroundColor = "";
    });
});*/

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