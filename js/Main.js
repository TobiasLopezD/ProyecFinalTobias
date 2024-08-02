import { MostrarHTML } from "/js/CrearHTML.js";

// Componentes 
document.addEventListener('DOMContentLoaded', ev => {
    MostrarHTML()
    MostrarDatosConfiguracion()
})

function MostrarDatosConfiguracion() {
    // Truco (Fetch)
    let url ;
    fetch(url)
    
        .then(response => response.json())
    
        .then(data => console.log(data));
    
        
}
