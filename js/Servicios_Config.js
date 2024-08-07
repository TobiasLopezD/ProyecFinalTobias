
export const ObtenerDatosConfiguracion = async () => {


    const url = "/js/Configuraciones.json"

    try {

        const response = await fetch(url);
        if (response.status == "200") {
            const data = await response.json();

            console.table(data); 
            return data
        } else {

            console.log("Error al consultar el API")

        }
       

    } catch (error) {

        console.log("Error en la red" + error);

    }

};