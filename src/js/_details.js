import {constants} from "./_const";

export function createDetails(id, arr) {

    let name = document.querySelector('.name'),
        descriptionWeight = document.querySelector(constants.descriptionWeight),
        descriptionHeight = document.querySelector(constants.descriptionHeight),
        descriptionExperience = document.querySelector(constants.descriptionExperience),
        image = document.querySelector('.image');

    name.innerText = arr[id].name;
    descriptionWeight.innerText = 'weight: ' + arr[id].weight;
    descriptionHeight.innerText = 'height: ' + arr[id].height;
    descriptionExperience.innerText = 'experience: ' + arr[id].base_experience;
    image.src = `./images/${id}.svg`;
    image.alt = arr[id];


}
