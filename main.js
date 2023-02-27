'use strict';



/* <div class="boximg show"><img src="img/01.webp" alt="img"></div>

<div class="boximg"><img src="img/02.webp" alt="img"></div>

<div class="boximg"><img src="img/03.webp" alt="img"></div>

<div class="boximg"><img src="img/04.webp" alt="img"></div>

<div class="boximg"><img src="img/05.webp" alt="img"></div> */


const imgs = ['img/01.webp', 'img/02.webp', 'img/03.webp', 'img/04.webp', 'img/05.webp'];

let content = '';
let active = 0;


const slider = document.querySelector('.container');



for (let i = 0; i < imgs.length; i++) {

    console.log(imgs[i]);
    content += `<div class="boximg"><img src="${imgs[i]}" alt="img"></div>`
}


slider.innerHTML += content;
document.querySelector('.boximg').classList.add('show');


const pageup = document.querySelector('.fa-angle-up');
const pagedown = document.querySelector('.fa-angle-down');
const allBoxImg = document.querySelectorAll('.boximg');
console.log(allBoxImg);





pageup.addEventListener('click', function(){

    if(active > 0) {
        allBoxImg[active].classList.remove('show');
        active--;
        allBoxImg[active].classList.add('show');
        console.log(active);
    } 
        
    
    
});



pagedown.addEventListener('click', function(){
    
    if(active < allBoxImg.length - 1) {
        allBoxImg[active].classList.remove('show');
        active++;
        allBoxImg[active].classList.add('show');
        console.log(active);
    }

});
