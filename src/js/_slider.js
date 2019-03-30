import {constants} from './_const'



export  function multiItemSlider() {

     return  function () {
         console.log('PLEASE END OF STACK!!!');

        let sliderWrapper = document.querySelector(constants.sliderWrapper),
            sliderItems = document.querySelectorAll(constants.sliderItem),
            sliderControls = document.querySelectorAll(constants.sliderControl),

            wrapperWidth = parseFloat(getComputedStyle(sliderWrapper).width),
            itemWidth = parseFloat(getComputedStyle(sliderItems[0]).width),
            positionLeftItem = 0,
            transform = 0,
            step = itemWidth / wrapperWidth * 100,
            items = [];

        sliderItems.forEach(function (item, index) {
            items.push({item: item, position: index, transform: 0});
        });

        const position = {
            getItemMin: function () {
                let indexItem = 0;
                items.forEach(function (item, index) {
                    if (item.position < items[indexItem].position) {
                        indexItem = index;
                    }
                });
                return indexItem;
            },
            getItemMax: function () {
                let indexItem = 0;
                items.forEach(function (item, index) {
                    if (item.position > items[indexItem].position) {
                        indexItem = index;
                    }
                });
                return indexItem;
            },
            getMin: function () {
                return items[position.getItemMin()].position;
            },
            getMax: function () {
                return items[position.getItemMax()].position;
            }
        };

        const transformItem = function (direction) {
            let nextItem;
            if (direction === 'right') {
                positionLeftItem++;
                if ((positionLeftItem + wrapperWidth / itemWidth - 1) > position.getMax()) {
                    nextItem = position.getItemMin();
                    items[nextItem].position = position.getMax() + 1;
                    items[nextItem].transform += items.length * 100;
                    items[nextItem].item.style.transform = 'translateX(' + items[nextItem].transform + '%)';
                }
                transform -= step;
            }
            if (direction === 'left') {
                positionLeftItem--;
                if (positionLeftItem < position.getMin()) {
                    nextItem = position.getItemMax();
                    items[nextItem].position = position.getMin() - 1;
                    items[nextItem].transform -= items.length * 100;
                    items[nextItem].item.style.transform = 'translateX(' + items[nextItem].transform + '%)';
                }
                transform += step;
            }
            sliderWrapper.style.transform = 'translateX(' + transform + '%)';
        };

        const controlClick = function (e) {
            const direction = this.classList.contains(constants.sliderControlRight1) ? 'right' : 'left';
            e.preventDefault();
            transformItem(direction);
        };

        const setUpListeners = function () {
            sliderControls.forEach(function (item) {
                item.addEventListener('click', controlClick);
            });
        };

        setUpListeners();
    }
}


