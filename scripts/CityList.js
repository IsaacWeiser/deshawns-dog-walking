import { getWalkers, getCities } from "./database.js"

const walkers = getWalkers()
const cities= getCities();


export const CityList = () => {
    let citiesHTML = "<ol>"

    for (const walker of walkers) {
        const citD = walker.cityId;
        let cityName = cities.find(city=> citD === city.id).name;
        citiesHTML += `<li>${cityName}</li>`
    }

    citiesHTML += "</ol>"

    return citiesHTML
}

