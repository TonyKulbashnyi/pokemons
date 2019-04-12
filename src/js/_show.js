import {constants} from "./_const";


let //items = document.getElementsByClassName(constants.sliderItems),
    details = document.querySelector(constants.details),
    close = document.querySelector(constants.detailsClose),
    description = document.querySelector(constants.detailsDescription),
    name = document.querySelector(constants.detailsName);



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


close.addEventListener('click', closeDetails);
