export const getAllLaunches = async() =>{
    let res = await fetch("https://api.spacexdata.com/v4/launches")
    let data = await res.json()
    return data
}
console.log(getAllLaunches());