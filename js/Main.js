import { MostrarHTML } from "/js/CrearHTML.js";
import { MostrarDatosEnConsola } from "/js/ConsultarJson.js";
import { Mostrarbanners } from "/js/Banners.js";
import { Mostrartabla } from "/js/Tabla.js";
// Componentes 
document.addEventListener('DOMContentLoaded', ev => {
    MostrarHTML()
    MostrarDatosEnConsola()
    Mostrarbanners()
    Mostrartabla ()
})


