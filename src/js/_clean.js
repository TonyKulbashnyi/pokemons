import {constants} from "./_const";

export function clean() {
    const wrapper = document.querySelector(constants.sliderWrapper);
    while (wrapper.firstChild) {
        wrapper.removeChild(wrapper.firstChild);
    }
}
