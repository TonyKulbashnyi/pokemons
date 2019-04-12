import {constants} from "./_const";
import {createDetails} from "./_details";
import {show} from "./_show";


const sliderWrapper = document.querySelector(constants.sliderWrapper);


export function createSliderItem(id, arr) {
    let sliderItem = document.createElement('div'),
        sliderImage = document.createElement('img'),
        sliderName = document.createElement('span'),
        favoriteItem = document.createElement('i');

    sliderItem.classList.add(constants.sliderItems);
    sliderImage.classList.add(constants.sliderImage);
    sliderName.classList.add(constants.sliderName);
    favoriteItem.classList.add(constants.far, constants.faStar, constants.favoriteItem);
    favoriteItem.id = `${id}`;

    sliderImage.src = `./images/${id}.svg`;
    sliderImage.alt = `pokemon${id}`;
    sliderName.innerText = arr[id].name;

    sliderItem.appendChild(sliderImage);
    sliderItem.appendChild(sliderName);
    sliderItem.appendChild(favoriteItem);

    sliderWrapper.appendChild(sliderItem);


    sliderImage.onclick = () => {
        createDetails(id, arr);
        show();
    };

    favoriteItem.onclick = () => {

        let check = favoriteItem.classList.toString().split(' ');

        if (check.includes(constants.favoriteItemSelected)) {
            // if (i === localStorage.key(id)) {
            favoriteItem.classList.add(constants.far);
            favoriteItem.classList.remove(constants.fas);
            favoriteItem.classList.remove(constants.favoriteItemSelected);

            localStorage.removeItem(id);

        } else {

            favoriteItem.classList.remove(constants.far);
            favoriteItem.classList.add(constants.fas);
            favoriteItem.classList.add(constants.favoriteItemSelected);

            localStorage.setItem(id, arr[id]);
        }


    }
}
