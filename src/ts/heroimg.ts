import { imgArray } from "./imgArray";

const nextBtn : HTMLElement = document.querySelector('.button-next') as HTMLElement;
const prevBtn : HTMLElement = document.querySelector('.button-prev') as HTMLElement;

const img : HTMLImageElement =document.querySelector('#img') as HTMLImageElement ;

let currentImage = 0;

window.addEventListener('DOMContentLoaded', showImage);

function showImage() {
    img.src = imgArray[currentImage];
  }

nextBtn.addEventListener('click', nextImage);    
prevBtn.addEventListener('click', prevImage); 

  function nextImage (){
    currentImage++
    if(imgArray.length <= currentImage){
      currentImage=0
    }
    showImage()
  }
  
  function prevImage (){
    currentImage--;
    currentImage--;
    if (currentImage < 0) {
      currentImage = imgArray.length - 1;
    }
    showImage();
  };
  