import {constants} from "./_const";

let storage = localStorage;
delete storage['loglevel:webpack-dev-server'];
export let storageArr = Object.getOwnPropertyNames(storage);

export function markStar() {
    let favoriteItem = document.querySelectorAll(constants.favorItem);

    for (let i in favoriteItem) {
        if (storageArr.includes(favoriteItem[i].id)) {
            favoriteItem[i].classList.remove(constants.far);
            favoriteItem[i].classList.add(constants.fas);
            favoriteItem[i].classList.add(constants.favoriteItemSelected);
        }
    }
}


setTimeout(markStar, 200);
