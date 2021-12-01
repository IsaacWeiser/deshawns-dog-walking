import { getWalkers, getCities } from "./database.js"

const cities = getCities();

// click event listener
document.addEventListener(
    "click",
    (clickEvent) => {
        const itemClicked = clickEvent.target
        if (itemClicked.id.startsWith("walker")) {
            const [,walkerId] = itemClicked.id.split("--")

            for (const walker of walkers) {
                if (walker.id === parseInt(walkerId)) {
                    //match city id to city
                    let cityName = cities.find(city => city.id === walker.id).name;
                    window.alert(`${walker.name} services ${cityName}`)
                }
            }
        }
    }
)



const walkers = getWalkers()


export const Walkers = () => {
    let walkerHTML = "<ul>"

    for (const walker of walkers) {
        walkerHTML += `<li id="walker--${walker.id}">${walker.name}</li>`


    }

    walkerHTML += "</ul>"
    return walkerHTML;

}

