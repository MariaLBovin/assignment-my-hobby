import { textArray } from "./arrays/textarray";

const textPlacement : HTMLElement = document.querySelector('.section__about') as HTMLElement;

function createAboutText () {
    for (let i = 0; i < textArray.length; i++){
        textPlacement.innerHTML += `
        <div class = "obstc$[i]}">
        <button class="section__about-btn obstc${[i]}">${textArray[i].obstacle}</button>
        </div>
        <div class="section__about-article obstc${[i]}">${textArray[i].description}</div>
        `
    }
}
createAboutText();
