export function createDetails(id, arr) {

    let name = document.querySelector('.name'),
        descriptionWeight = document.querySelector(constants.descriptionWeight),
        descriptionHeight = document.querySelector(constants.descriptionHeight),
        descriptionExperience = document.querySelector(constants.descriptionExperience),
        descriptionImage = document.querySelector(constants.detailsImage),
        image = document.createElement('img');

    image.classList.add('image');

    name.innerText = arr[id].name;
    descriptionWeight.innerText = 'weight: ' + arr[id].weight;
    descriptionHeight.innerText = 'height: ' + arr[id].height;
    descriptionExperience.innerText = 'experience: ' + arr[id].base_experience;
    image.src = `./images/${id}.svg`;
    image.alt = arr[id];
    descriptionImage.appendChild(image);

}
