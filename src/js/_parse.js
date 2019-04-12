import {createSliderItem} from "./_slider-item";
import {multiItemSlider} from "./_slider";
import {constants} from "./_const";
import {clean} from "./_clean";
import {markStar, storageArr} from "./_markStart";


let arr = [];
let sortingArr = [];
let n = 13;

let sort = document.querySelector(constants.sortButton);
let favorite = document.querySelector(constants.favoriteButton);

function getPokemon(id) {
    fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
        .then(function (response) {
                response.json()
                    .then(function (pokemon) {
                        arr[id] = pokemon;
                        createSliderItem(id, arr);

                        sort.addEventListener('click', () => {
                            sortingArr.push(arr[id]);
                            sortingArr.sort(function (a, b) {
                                if (a.name > b.name) {
                                    return 1;
                                } else if (a.name < b.name) {
                                    return -1;
                                }
                            });

                            setTimeout(() => {
                                clean();
                                for (let i = 1; i < n - 1; i++) {
                                    createSliderItem(i, sortingArr);
                                }
                                markStar()
                            }, 500);
                        });


                    })
            }
        )
}


function getAllItems() {
    for (let i = 1; i < n; i++) {
        getPokemon(i);
    }

}

getAllItems();
setTimeout(multiItemSlider(), 500);


favorite.addEventListener('click', () => {
    clean();
    setTimeout(() => {
        for (let i in storageArr) {
            getPokemon(storageArr[i]);
        }
        setTimeout(markStar, 200);
    },200);
    // setTimeout(markStar, 250);
});


