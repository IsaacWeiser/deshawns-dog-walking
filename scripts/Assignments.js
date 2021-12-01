import { getPets, getWalkers, getCities } from "./database.js"

// Get copy of state for use in this module
const pets = getPets()
const walkers = getWalkers()
const cities = getCities();


// Function whose responsibility is to find the walker assigned to a pet
const findWalker = (pet, allWalker) => {
    let petWalker = null

    for (const walker of allWalker) {
        if (walker.id === pet.walkerId) {
            petWalker = walker
        }
    }

    return petWalker
}

export const Assignments = () => {
    let assignmentHTML = ""
    assignmentHTML = "<ul>"

    for (const currentPet of pets) {
//find walker id then from walker id match the city
const walkerMan = walkers.find((walker) => walker.id === currentPet.walkerId);
const cityPlace =  cities.find(city => city.id === walkerMan.cityId);

        const currentPetWalker = findWalker(currentPet, walkers)
        assignmentHTML += `
            <li>
                ${currentPet.name} is being walked by
                ${currentPetWalker.name} in ${cityPlace.name}
            </li>
        `
    }

    assignmentHTML += "</ul>"

    return assignmentHTML
}

//add event listener to display who is walking the pet when clicked on
document.addEventListener("click", (event)=> {
    //capture target id
    const target = event.target.id;
    //verify that you have clicked the correct thing
    if (target.startsWith("pet")) {
        // isolate the pet id number
        const [,petId] = target.split("--");
        //match the element to the correct pet
        for (const pet of pets) {
            if (parseInt(petId)=== pet.id) {
                // find the walker for the pet
               const proWalker = walkers.find((walker)=> walker.id === pet.walkerId);
               window.alert(`
               ${pet.name} is being walked by ${proWalker.name}
               `)
            }
        }
    }

})
