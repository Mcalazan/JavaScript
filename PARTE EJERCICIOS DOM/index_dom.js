import scrollTopButton from "./js/botton_scroll.js";
import slider from "./js/carrusel.js";
import countdown from "./js/cuenta_regresiva.js";
import userDeviceinfo from "./js/deteccion_dispositivos.js";
import networkStatus from "./js/deteccion_red.js";
import webCam from "./js/deteccion_webcam.js";
import searchFilters from "./js/filtro_busqueda.js";
import getGeolocation from "./js/geolocalizacion.js";
import hamburgerMenu from "./js/menu_hamburguesa.js";
import speechReader from "./js/narrador.js";
import responsiveMedia from "./js/objeto_responsive.js";
import responsiveTester from "./js/prueba_responsive.js";
import { digitalClock, alarm } from "./js/reloj.js";
import scrollSpy from "./js/scroll_espia.js";
import draw from "./js/sorteo.js";
import { shortcuts, moveBall } from "./js/teclado.js";
import darkTheme from "./js/tema_oscuro.js";
import contactFormValidations from "./js/validaciones_formulario.js";
import smartVideo from "./js/video_inteligente.js";


const d = document;


d.addEventListener("DOMContentLoaded", e=>{
    hamburgerMenu(".panel-btn",".panel",".menu a");
    digitalClock("#reloj", "#activar-reloj","#desactivar-reloj")
    alarm("assets/alarma.mp3", "#activar-alarma", "#desactivar-alarma");
    countdown("countdown", "Aug 26, 2022 21:37:19","feliz cumpleanos");
    scrollTopButton(".scroll-top-btn");
    responsiveMedia("youtube",
    "(min-width: 1024px)",
    `<a href ="https://www.youtube.com/watch?v=2SetvwBV-SU&list=PLvq-jIkSeTUZ6QgYYO3MwG9EMqC-KoLXA&index=1" target = "_blank" rel="noopener">Ver video</a>`,
    `<iframe width="560" height="315" src="https://www.youtube.com/embed/2SetvwBV-SU" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`)
    responsiveMedia("gmaps",
    "(min-width: 1024px)",
    `<a href ="https://goo.gl/maps/rBzMTqm8JSS3chuF8" target = "_blank" rel="noopener">Ver mapa</a>`,
    `<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3876.2052783914883!2d-89.19716738585745!3d13.70601360204722!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8f63317f0d718a27%3A0x647fb2a3abe0c3ee!2ssalvador%20del%20mundo!5e0!3m2!1sen!2ssv!4v1660537014579!5m2!1sen!2ssv" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>`)

    responsiveTester("responsive-tester");
    userDeviceinfo("user-device");
    webCam("webcam");
    getGeolocation("geolocation");
    draw("#winner-btn", ".player")
    slider();
    scrollSpy();
    smartVideo();
    contactFormValidations();
    searchFilters(".card-filter",".card");
})

d.addEventListener("keydown", e=>{
    shortcuts(e);
    moveBall(e,".ball",".stage")
})

darkTheme(".dark-theme-btn","dark-mode")
networkStatus();
speechReader();