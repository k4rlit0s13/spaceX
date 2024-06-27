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
    export const getAllData = async() =>{
        let res = await fetch(API_URL_ROCKETS)
        let data = await res.json()
        return data
    }
    console.log(await getAllData());


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
            <p><strong>Altura pies:</strong>${alturaPies}</p>
            <p><strong>Diámetro (metros):</strong> ${diametroMetros}</p>
            <p><strong>Diametro en pies:</strong>${diametroPies}</p>
            <p><strong>Masa (kg):</strong> ${masaKG}</p>
            <p><strong>Masa LB:</strong>${masaLB}</p>
            <p><strong>Empuje nivel mar:</strong>${empujeNivelMar}</p>
            <p><strong>Empuje nivel mar Lbf:</strong>${empujeNivelMarLbf}</p>
            <p><strong>Reutilizable:</strong>${reutilizablePrimeraEtapa}</p>
            <p><strong>cantidad Motores</strong>${cantidadMotores}</p>
            <p><strong>cantidadCombustible</strong>${cantidadCombustible}</p>
            <p><strong>tiempoQuemadoPrimeraEtapa</strong>${tiempoQuemadoPrimeraEtapa}</p>
            <p><strong>empujeSegundaEtapa</strong>${empujeSegundaEtapa}</p>
            <p><strong>alturaCofia</strong>${alturaCofia}</p>
            <p><strong>empujeVacio</strong>${empujeVacio}</p>
            <p><strong>diametroCofia</strong>${diametroCofia}</p>
            <p><strong>reutilizableSegundaEtapa</strong>${reutilizableSegundaEtapa}</p>
            <p><strong>motoresSegundaEtapa</strong>${motoresSegundaEtapa}</p>
            <p><strong>cantidadCombustibleSegundaEtapa</strong>${cantidadCombustibleSegundaEtapa}</p>
            <p><strong>tiempoQuemadoSegundaEtapa</strong>${tiempoQuemadoSegundaEtapa}</p>
            <p><strong>empujeNivelMarMotor</strong>${empujeNivelMarMotor}</p>
            <p><strong>empujeVacíoMotor</strong>${empujeVacíoMotor}</p>
            <p><strong>tipoMotor</strong>${tipoMotor}</p>
            <p><strong>versiónMotor</strong>${versiónMotor}</p>
            <p><strong>diseñoMotor</strong>${diseñoMotor}</p>
            <p><strong>propulsante1</strong>${propulsante1}</p>
            <p><strong>propulsante2</strong>${propulsante2}</p>
            <p><strong>pesoCargaLEO</strong>${pesoCargaLEO}</p>
            <p><strong>Éxito en el lanzamiento (%):</strong> ${tasaÉxito}</p>
            <p><strong>Enlace a Wikipedia:</strong> <a href="${enlaceWikipedia}" target="_blank">Link</a></p>
            <img src="${imagenFlickr1}"alt="Imagen del cohete ${nombreCohete}" referrerpolicy="no-referrer">
            <img src="${imagenFlickr2}"alt="Imagen del cohete ${nombreCohete}" referrerpolicy="no-referrer">
            <p><strong>tipoCohete</strong>${tipoCohete}</p>
            <p><strong>activo</strong>${activo}</p>
            <p><strong>etapas</strong>${etapas}</p>
            <p><strong>impulsores</strong>${impulsores}</p>
            <p><strong>costoLanzamiento</strong>${costoLanzamiento}</p>
            <p><strong>primerVuelo</strong>${primerVuelo}</p>
            <p><strong>idCohete</strong>${idCohete}</p>
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

        // Invocar la información del primer cohete automáticamente
        if (data.length > 0) {
            obtenerDatosCohete(data[0].id); // Invocamos la información del primer cohete
        }
    } else {
        console.error('Elemento con ID "buttons-container" no encontrado.');
    }
};
crearGaleriaBotones();




