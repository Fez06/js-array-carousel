'use strict';



{/* <div class="boximg show"><img src="img/01.webp" alt="img"></div>

<div class="boximg"><img src="img/02.webp" alt="img"></div>

<div class="boximg"><img src="img/03.webp" alt="img"></div>

<div class="boximg"><img src="img/04.webp" alt="img"></div>

<div class="boximg"><img src="img/05.webp" alt="img"></div> */}


const imgs = ["img/01.webp", "img/02.webp", "img/03.webp", "img/04.webp", "img/05.webp"];

let itemsContent = '';

const slider = document.querySelector('.container');

for (let i = 0; i < imgs.length; i++) {

    console.log(imgs[i]);

    itemsContent += '<div class="boximg"><img src="img/01.webp" alt="img"></div>'


};

slider.innerHTML += itemsContent;
document.querySelector(".boximg").classList.add('show');

const pageup = document.querySelector('.fa-angle-up');
const pagedown = document.querySelector('.fa-angle-down');

pageup.addEventListener('click', function(){
    alert('you go up');
});

pagedown.addEventListener('click', function(){
    alert('you go down');
});
