window.addEventListener("DOMContentLoaded", () => {
    const saludoDiv = document.querySelector(".saludo");
    saludoDiv.classList.add("activo");
    const btnCerrar = document.querySelector(".cerrar")

    const saludo = document.getElementById("saludo");
    const hora = new Date().getHours();
    if (hora < 12) saludo.textContent = "Buenos días, bienvenido a mi portafolio";
    else if (hora < 18) saludo.textContent = "Buenas tardes, bienvenido a mi portafolio";
    else saludo.textContent = "Buenas noches. bienvenido a mi portafolio";

    btnCerrar.addEventListener("click", () => {
        saludoDiv.classList.remove("activo");
        saludoDiv.classList.add("cerrar-animacion");
    });
});
  