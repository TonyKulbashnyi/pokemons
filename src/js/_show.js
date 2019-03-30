import {constants} from "./_const";
import {createDetails} from "./_details";

let items = document.getElementsByClassName(constants.sliderItems),
    details = document.querySelector(constants.details),
    close = document.querySelector(constants.detailsClose),
    description = document.querySelector(constants.detailsDescription),
    name = document.querySelector(constants.detailsName);

close.addEventListener('click', closeDetails);

    //
    // for (let i = 0; i < items.length; i++) {
    //      items[i].addEventListener('click', show);
    // }


export function show() {
    details.classList.add(constants.detailsOpen);
    description.classList.add(constants.detailsHeight);
    name.classList.add(constants.detailsHeight)
}

function closeDetails() {
    details.classList.remove(constants.detailsOpen);
    description.classList.remove(constants.detailsHeight);
    name.classList.remove(constants.detailsHeight)
}


