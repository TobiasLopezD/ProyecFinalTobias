
export const ObtenerDatosConfiguracion = async () => {


    const url = "/js/Configuraciones.json"

    try {

        const response = await fetch(url);
        if (response.status == "200") {
            const data = await response.json();

            console.log(data); 
        } else {

            console.log("Error al consultar el API")

        }
       

    } catch (error) {

        console.log(error);

    }

};