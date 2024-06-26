//Portal de Conexión
const API_URL="https://api.spacexdata.com/v4/launches";


// ______________________________________________________________________________________________________________________________________________________________________________//

// HECHIZOS DE INVOCACION DE INFORMACION PARA EL HOGAR ROCKETS (TODOS LOS ALGORITMOS PARA EL html ROCKETS)
// ______________________________________________________________________________________________________________________________________________________________________________//


// HECHIZO DE INVOCACION DE TODOS LOS LANZAMIENTOS EN LA (API)
    export const getAllLaunches = async() =>{
        let res = await fetch(API_URL)
        let data = await res.json()
        return data
    }
    console.log(getAllLaunches());

