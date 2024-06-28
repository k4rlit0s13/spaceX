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
const getAllDetailDataRockets = async (rocketId) => {
    try {
        const response = await fetch(API_URL_ROCKETS); // formules lanza su encantamiento para buscar información mágica sobre cohetes
        const data = await response.json(); // formules decodifica la respuesta mágica en un pergamino JSON

        // Asignación de valores mágicos a las variables
        const rocket = data.find(rocket => rocket.id === rocketId);
        if (rocket) {
            const {
                height: {
                    meters: meters_height,
                    feet: feet_height
                },
                diameter: {
                    meters: meters_diameter,
                    feet: feet_diameter
                },
                mass: {
                    kg: kg_mass,
                    lb: lb_mass
                },
                first_stage: {
                    thrust_sea_level: {
                        kN: kN_first_stage,
                        lbf: lbf_first_stage
                    },
                    thrust_vacuum: {
                        kN: kN_thrust_vacuum,
                        lbf: lbf_thrust_vacuum
                    },
                    reusable: reusable_reusable,
                    engines: engines_reusable,
                    fuel_amount_tons: fuel_amount_tons_reusable,
                    burn_time_sec: burn_time_sec_reusable
                },
                second_stage: {
                    thrust: {
                        kN: kN_second_stage,
                        lbf: lbf_second_stage
                    },
                    payloads: {
                        composite_fairing: {
                            height: {
                                meters: meters_height_composite_fairing,
                                feet: feet_height_composite_fairing
                            },
                            diameter: {
                                meters: meters_diameter_second_stage,
                                feet: feet_diameter_second_stage
                            }
                        },
                        option_1: option_1
                    },
                    reusable: reusable,
                    engines: engines,
                    fuel_amount_tons: fuel_amount_tons,
                    burn_time_sec: burn_time_sec
                },
                landing_legs: {
                    number: number_landing_legs,
                    material: material_landing_legs
                },
                payload_weights: [
                    {
                        id: payloadId,
                        name: payloadName,
                        kg: Kg_payload_weights,
                        lb: lb_payload_weights
                    }
                ],
                engines: {
                    isp: {
                        sea_level: sea_level,
                        vacuum: vacuum
                    },
                    thrust_sea_level: {
                        kN: kN_sea,
                        lbf: lbf_sea
                    },
                    thrust_vacuum: {
                        kN: kN_vacuum,
                        lbf: lbf_vacuum
                    },
                    number: number_engines,
                    type: type_engine,
                    version: version_engine,
                    layout: single,
                    engine_loss_max: engine_loss_max,
                    propellant_1: propellant_1,
                    propellant_2: propellant_2,
                    thrust_to_weight: thrust_to_weight
                },
                flickr_images: [
                    imagenFlickr1, 
                    imagenFlickr2
                ],
                name: nameRocket,
                type: typeRocket,
                active: active,
                stages: stages,
                boosters: boosters,
                cost_per_launch: cost_per_launch,
                success_rate_pct: success_rate_pct,
                first_flight: first_flight,
                country: country,
                company: company,
                wikipedia: wikipedia,
                description: description,
                id: idRocket
            } = rocket;

            console.log('Datos del cohete:', rocket); // Verifica los datos obtenidos

            // Contar la cantidad de propelentes
            const propellantCount = [propellant_1, propellant_2].filter(Boolean).length;
// ______________________________________________________________________________________________________________________________________________________________________________//

            // Imprimir dinámicamente en HTML usando innerHTML
            const rocketDetails = document.getElementById('rocket-details');
            if (rocketDetails) {
                rocketDetails.innerHTML = /*html*/

                `
                <section class='up'>
                <h2>${nameRocket}</h2>
                </section>

                <section class='down'>
                <section class='down_left'>
                <p><strong>description:</strong> ${description}</p>
                <p><strong>ID:</strong> ${idRocket}</p>
                <p><strong>country:</strong> ${country}</p>
                <p><strong>cost_per_launch:</strong> ${cost_per_launch}</p>
                <p><strong>company:</strong> ${company}</p>
                <p><strong>meters_height:</strong> ${meters_height}</p>
                <p><strong>feet_height:</strong> ${feet_height}</p>
                <p><strong>first_flight:</strong> ${first_flight}</p>
                <p><strong>kg_mass:</strong> ${kg_mass}</p>
                <p><strong>lb_mass:</strong> ${lb_mass}</p>
                <p><strong>meters_diameter:</strong> ${meters_diameter}</p>
                <p><strong>feet_diameter:</strong> ${feet_diameter}</p>
                <p><strong>Wikipedia:</strong> <a href="${wikipedia}">Link</a></p>
                </section>

                <section class='down_middle'>
                <section class='down_middle_up'>
                <section class='down_middle_up_left'>
                <p><strong>kN_first_stage:</strong> ${kN_first_stage}</p>
                <p><strong>lbf_first_stage:</strong> ${lbf_first_stage}</p>
                </section>
                <section class='down_middle_up_right'>
                <p><strong>kN_thrust_vacuum:</strong> ${kN_thrust_vacuum}</p>
                <p><strong>lbf_thrust_vacuum:</strong> ${lbf_thrust_vacuum}</p>
                </section>
                </section>


                <section class='down_middle_down'>
                <section class='down_middle_left'>
                <p><strong>typeRocket:</strong> ${typeRocket}</p>
                <p><strong>active:</strong> ${active}</p>
                <p><strong>propellantCount:</strong> ${propellantCount}</p>
                <p><strong>number_landing_legs:</strong> ${number_landing_legs}</p>
                <p><strong>material_landing_legs:</strong> ${material_landing_legs}</p>
                </section>
                <section class='down_middle_middle'>
                <img src="${imagenFlickr1}" alt="${nameRocket}" referrerpolicy="no-referrer">
                <img src="${imagenFlickr2}" alt="${nameRocket}" referrerpolicy="no-referrer">
               </section>
                <section class='down_middle_right'>
                <p><strong>type_engine:</strong> ${type_engine}</p>
                <p><strong>engine_loss_max:</strong> ${engine_loss_max}</p>
                <p><strong>number_engines:</strong> ${number_engines}</p>
                <p><strong>propellant_1:</strong> ${propellant_1}</p>
                <p><strong>propellant_2:</strong> ${propellant_2}</p>
                </section>
                </section>
                </section>

                <section class='down_right'>
                <p><strong>kg_mass:</strong> ${kg_mass}</p>
                <p><strong>lb_mass:</strong> ${lb_mass}</p>
                <p><strong>Kg_payload_weights:</strong> ${Kg_payload_weights}</p>
                <p><strong>lb_payload_weights:</strong> ${lb_payload_weights}</p>
                <p><strong>meters_height:</strong> ${meters_height}</p>
                <p><strong>feet_height:</strong> ${feet_height}</p>
                <p><strong>meters_diameter:</strong> ${meters_diameter}</p>
                <p><strong>feet_diameter:</strong> ${feet_diameter}</p>
                <p><strong>meters_diameter_second_stage:</strong> ${meters_diameter_second_stage}</p>
                <p><strong>feet_diameter_second_stage:</strong> ${feet_diameter_second_stage}</p>
                <p><strong>meters_height_composite_fairing:</strong> ${meters_height_composite_fairing}</p>
                <p><strong>feet_height_composite_fairing:</strong> ${feet_height_composite_fairing}</p>
                </section>
                </section>
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
            button.onclick = () => getAllDetailDataRockets(rocket.id);
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
            getAllDetailDataRockets(data[0].id); // Invocamos la información del primer cohete
        }
    } else {
        console.error('Elemento con ID "buttons-container" no encontrado.');
    }
};
crearGaleriaBotones();




