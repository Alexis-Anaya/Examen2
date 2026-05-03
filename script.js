document.addEventListener("DOMContentLoaded", function() {
    let botonRegistrar = document.getElementById("Enviar");

    botonRegistrar.addEventListener("mouseover", function() { 
        botonRegistrar.style.backgroundColor = "#198754";
    });

    botonRegistrar.addEventListener("mouseout", function() { 
        botonRegistrar.style.backgroundColor = "";
    });
});