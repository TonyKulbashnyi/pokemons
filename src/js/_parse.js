import { createSliderItem } from "./_slider-item";
import { multiItemSlider } from "./_slider";
import {constants} from "./_const";
import {show } from "./_show";
import {createDetails} from "./_details";


let arr = [];

let items = document.getElementsByClassName(constants.sliderItems);

function getPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(function (response) {
                response.json()
                    .then(function (pokemon) {
                        //createDetails(id, pokemon);
                        arr[id] = pokemon;
                        createSliderItem(id, arr);
                        // items[id].addEventListener('click', show);
                        //createDetails(id, arr);

                    })
            }
        )
}


function getAllItems() {
    for (let i = 1; i < 13; i++) {
        getPokemon(i);
    }

}

getAllItems();
setTimeout(multiItemSlider(),200);


// function asd(id, arr) {
//   items[id].addEventListener('click', show);
//   createDetails(id, arr);
// }
setTimeout(open, 500);

function open() {
     for (let i = 1; i < items.length; i++) {
         items[i].addEventListener('click', show);
         //createDetails(i);
         console.log(items[i]);
     }
}

open();
