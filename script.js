// Obtener el botón que cambia el tema
const botonCambiarTema = document.getElementById("cambiarTema");

// Obtener el header
const header = document.querySelector("header");

// Agregar un evento al botón para cambiar el color del header
botonCambiarTema.addEventListener("click", () => {
  // Cambiar el color del header cuando se hace clic
  header.style.backgroundColor = header.style.backgroundColor === "rgb(26, 26, 26)" ? "#333333" : "#1e1e1e";
});
