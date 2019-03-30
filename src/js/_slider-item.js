import {constants} from "./_const";
import {createDetails} from "./_details";

const sliderWrapper = document.querySelector(constants.sliderWrapper);


export function createSliderItem(id, arr) {

    let sliderItem = document.createElement('div'),
        sliderImage = document.createElement('img'),
        sliderName = document.createElement('span'),
        favorite = document.createElement('i');

    sliderItem.classList.add(constants.sliderItems);
    sliderImage.classList.add(constants.sliderImage);
    sliderName.classList.add(constants.sliderName);
    favorite.classList.add(constants.far, constants.faStar, constants.favoriteItem);

    sliderImage.src = `./images/${id}.svg`;
    sliderImage.alt = `pokemon${id}`;
    sliderName.innerText = arr[id].name;

    sliderItem.appendChild(sliderImage);
    sliderItem.appendChild(sliderName);
    sliderName.appendChild(favorite);

    sliderWrapper.appendChild(sliderItem);



}

