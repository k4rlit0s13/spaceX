// ______________________________________________________________________________________________________________________________________________________________________________//

//PORTALES DE CONEXION
// ______________________________________________________________________________________________________________________________________________________________________________//

const API_URL_ROCKETS="https://api.spacexdata.com/v4/rockets";
const API_URL_CAPSULES="https://api.spacexdata.com/v4/capsules";
const API_URL_CREW="https://api.spacexdata.com/v4/crew";
const API_URL_LAUNCHES="https://api.spacexdata.com/v4/launches";
const API_URL_CORES="https://api.spacexdata.com/v4/cores";
const API_URL_LANDPADS="https://api.spacexdata.com/v4/landpads";
const API_URL_SHIPS="https://api.spacexdata.com/v4/ships";
const API_URL_COMPANY="https://api.spacexdata.com/v4/company";
const API_URL_DRAGONS="https://api.spacexdata.com/v4/dragons";
const API_URL_HISTORY="https://api.spacexdata.com/v4/history";
const API_URL_LAUNCHPADS="https://api.spacexdata.com/v4/launchpads";
const API_URL_PAYLOADS="https://api.spacexdata.com/v4/payloads";
const API_URL_ROADSTER="https://api.spacexdata.com/v4/roadster";
const API_URL_STARLINK="https://https://api.spacexdata.com/v4/starlink";

// ______________________________________________________________________________________________________________________________________________________________________________//

// HECHIZOS DE INVOCACION DE INFORMACION PARA EL HOGAR ROCKETS (TODOS LOS ALGORITMOS PARA EL html ROCKETS)
// ______________________________________________________________________________________________________________________________________________________________________________//


// HECHIZO DE INVOCACION DE TODOS LOS LANZAMIENTOS EN LA (API) ejemplo con rockets
    export const getAllLaunches = async() =>{
        let res = await fetch(API_URL_ROCKETS)
        let data = await res.json()
        return data
    }
    console.log(await getAllLaunches());


// ______________________________________________________________________________________________________________________________________________________________________________//



//HECHIZO DE INVOCACION DE TODOS LOS NOMBRES DE LOS ROCKETS 
    export const getAllRocketNames = async () => {
        try {
            let response = await fetch(API_URL_ROCKETS);
            let data = await response.json();
            
            // Extraer solo los nombres de los cohetes
            let rocketNames = data.map(rocket => rocket.name);
            
            return rocketNames;
        } catch (error) {
            console.error("Error al obtener los nombres de los cohetes:", error);
            throw error;
        }
    };
    
    console.log(await getAllRocketNames());


// ______________________________________________________________________________________________________________________________________________________________________________//


//HECHIZO PODEROSO DE INVOCACION DE LA INFO DE LOS ROCKETS EN BOTONES QUE AL PRESIONAR INVOCAS 
const obtenerDatosCohete = async (rocketId) => {
    try {
        const response = await fetch(API_URL_ROCKETS); // formules lanza su encantamiento para buscar información mágica sobre cohetes
        const data = await response.json(); // formules decodifica la respuesta mágica en un pergamino JSON

        // Asignación de valores mágicos a las variables
        const rocket = data.find(rocket => rocket.id === rocketId);
        if (rocket) {
            const {
                height: { meters: alturaMetros, feet: alturaPies },
                diameter: { meters: diametroMetros, feet: diametroPies },
                mass: { kg: masaKG, lb: masaLB },
                first_stage: {
                    thrust_sea_level: { kN: empujeNivelMar, lbf: empujeNivelMarLbf },
                    reusable: reutilizablePrimeraEtapa,
                    engines: cantidadMotores,
                    fuel_amount_tons: cantidadCombustible,
                    burn_time_sec: tiempoQuemadoPrimeraEtapa
                },
                second_stage: {
                    thrust: { kN: empujeSegundaEtapa, lbf: empujeVacio },
                    payloads: { composite_fairing: { height: { meters: alturaCofia, feet: diametroCofia } } },
                    reusable: reutilizableSegundaEtapa,
                    engines: motoresSegundaEtapa,
                    fuel_amount_tons: cantidadCombustibleSegundaEtapa,
                    burn_time_sec: tiempoQuemadoSegundaEtapa
                },
                engines: {
                    isp: { sea_level: empujeNivelMarMotor, vacuum: empujeVacíoMotor },
                    type: tipoMotor,
                    version: versiónMotor,
                    layout: diseñoMotor,
                    propellant_1: propulsante1,
                    propellant_2: propulsante2
                },
                payload_weights: [{ kg: pesoCargaLEO }],
                flickr_images: [imagenFlickr1, imagenFlickr2],
                name: nombreCohete,
                type: tipoCohete,
                active: activo,
                stages: etapas,
                boosters: impulsores,
                cost_per_launch: costoLanzamiento,
                success_rate_pct: tasaÉxito,
                first_flight: primerVuelo,
                country: país,
                company: compañía,
                wikipedia: enlaceWikipedia,
                description: descripción,
                id: idCohete
            } = rocket;

            console.log('Datos del cohete:', rocket); // Verifica los datos obtenidos
// ______________________________________________________________________________________________________________________________________________________________________________//



// Imprimir dinámicamente en HTML usando innerHTML
            const rocketDetails = document.getElementById('rocket-details');
            if (rocketDetails) {
                rocketDetails.innerHTML = `
                    <h2>${nombreCohete}</h2>
                    <p><strong>Descripción:</strong> ${descripción}</p>
                    <p><strong>País:</strong> ${país}</p>
                    <p><strong>Compañía:</strong> ${compañía}</p>
                    <p><strong>Altura (metros):</strong> ${alturaMetros}</p>
                    <p><strong>Diámetro (metros):</strong> ${diametroMetros}</p>
                    <p><strong>Masa (kg):</strong> ${masaKG}</p>
                    <p><strong>Éxito en el lanzamiento (%):</strong> ${tasaÉxito}</p>
                    <p><strong>Enlace a Wikipedia:</strong> <a href="${enlaceWikipedia}" target="_blank">Link</a></p>
                    <img src="${imagenFlickr1}" alt="Imagen del cohete ${nombreCohete}" referrerpolicy="no-referrer">
                `;
            } else {
                console.error('Elemento con ID "rocket-details" no encontrado.');
            }
        } else {
            console.error('No se encontró el cohete con la ID proporcionada en los datos obtenidos.');
        }
    } catch (error) {
        console.error('Error al obtener los datos del cohete:', error);
    }
};


// ______________________________________________________________________________________________________________________________________________________________________________//


// HECHIZO para obtener todas las IDs de los cohetes y crear botones dinámicos
const crearGaleriaBotones = async () => {
    try {
        const response = await fetch(API_URL_ROCKETS); // formules lanza su encantamiento para buscar información mágica sobre cohetes
        const data = await response.json(); // formules decodifica la respuesta mágica en un pergamino JSON

        console.log('Datos obtenidos para crear botones:', data); // Verifica los datos obtenidos

        // Crear botones dinámicamente
        const buttonsContainer = document.getElementById('buttons-container');
        if (buttonsContainer) {
            data.forEach((rocket, index) => {
                const button = document.createElement('button');
                button.textContent = `${index + 1}`;
                button.onclick = () => obtenerDatosCohete(rocket.id);
                buttonsContainer.appendChild(button);
            });

            // Actualizar el conteo de botones
            const buttonCountContainer = document.querySelector('#button_container_counts_ID');
            if (buttonCountContainer) {
                buttonCountContainer.innerHTML = `Cantidad de botones: ${data.length}`;
            } else {
                console.error('Elemento con ID "button_container_counts_ID" no encontrado.');
            }
        } else {
            console.error('Elemento con ID "button_container_counts_ID" no encontrado.');
        }
    } catch (error) {
        console.error('Error al obtener las IDs de los cohetes:', error);
    }
};
crearGaleriaBotones();




