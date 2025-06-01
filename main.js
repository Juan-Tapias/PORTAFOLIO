window.addEventListener("DOMContentLoaded", () => {
    const saludoDiv = document.querySelector(".saludo");
    saludoDiv.classList.add("activo");
    const btnCerrar = document.querySelector(".cerrar")

    const saludo = document.getElementById("saludo");
    const hora = new Date().getHours();
    if (hora < 12) saludo.textContent = "Buenos días, Hola, soy Juan. Este portafolio es una muestra de mi crecimiento, pasión y compromiso con la tecnología.";
    else if (hora < 18) saludo.textContent = "Buenas tardes, Hola, soy Juan. Este portafolio es una muestra de mi crecimiento, pasión y compromiso con la tecnología.";
    else saludo.textContent = "Buenas noches. Hola, soy Juan. Este portafolio es una muestra de mi crecimiento, pasión y compromiso con la tecnología.";

    btnCerrar.addEventListener("click", () => {
        saludoDiv.classList.remove("activo");
        saludoDiv.classList.add("cerrar-animacion");
    });
});
document.addEventListener('DOMContentLoaded', function() {
    particlesJS('particles-js', {
        "particles": {
            "number": {
                "value": 200,  
                "density": {
                    "enable": true,
                    "value_area": 800
                }
            },
            "color": {
                "value": ["#9C27B0", "#7B1FA2", "#BA68C8", "#E1BEE7"]
            },
            "shape": {
                "type": "circle",
                "stroke": {
                    "width": 0,
                    "color": "#000000"
                }
            },
            "opacity": {
                "value": 0.8,  
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 1,
                    "opacity_min": 0.2,
                    "sync": false
                }
            },
            "size": {
                "value": 3,
                "random": true,
                "anim": {
                    "enable": true,
                    "speed": 2,
                    "size_min": 0.5,
                    "sync": false
                }
            },
            "line_linked": {
                "enable": false 
            },
            "move": {
                "enable": true,
                "speed": 1.5, 
                "direction": "none",
                "random": true,
                "straight": false,
                "out_mode": "out",
                "bounce": false,
                "attract": {
                    "enable": false,
                    "rotateX": 600,
                    "rotateY": 1200
                }
            }
        },
        "interactivity": {
            "detect_on": "canvas",
            "events": {
                "onhover": {
                    "enable": true,
                    "mode": "bubble" 
                },
                "onclick": {
                    "enable": true,
                    "mode": "repulse"  
                },
                "resize": true
            },
            "modes": {
                "bubble": {
                    "distance": 100,
                    "size": 6,
                    "duration": 2,
                    "opacity": 0.8,
                    "speed": 3,
                    "color": "#CE93D8" 
                },
                "repulse": {
                    "distance": 100,
                    "duration": 0.4
                }
            }
        },
        "retina_detect": true
    });
});