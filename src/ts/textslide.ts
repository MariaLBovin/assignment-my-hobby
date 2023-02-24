import { textArray } from "./arrays/textarray";

const textPlacement : HTMLElement = document.querySelector('.section__do') as HTMLElement;

function createAboutText () {
    for (let i = 0; i < textArray.length; i++){
        textPlacement.innerHTML += `
        <div class="obstacle">
        <div class = "obstc${[i]} obstacle_name">
        <h2 class="section__about-btn obstc${[i]}">${textArray[i].obstacle}</h2>
        </div>
        <div class="section__about-article text-div${[i]}   obstc${[i]} ">${textArray[i].description}</div>
        </div>
        `
    }
}
createAboutText();

