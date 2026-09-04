// Esperamos a que el documento cargue
document.addEventListener("DOMContentLoaded", function () {

    // Obtener elementos HTML
    const boton = document.getElementById("boton");
    const mensaje = document.getElementById("mensaje");
    const titulo = document.getElementById("titulo");


    // Evento del botón
    boton.addEventListener("click", function () {

        mensaje.textContent = "¡Gracias por visitar mi página!";

        // Cambiar el título
        titulo.textContent = "¡Qué gusto tenerte aquí!";

        // Animación del mensaje
        mensaje.style.transform = "scale(1.1)";

        setTimeout(function () {
            mensaje.style.transform = "scale(1)";
        }, 300);

    });

});