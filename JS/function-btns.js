const screenMain = document.body;

const button1 = $("#btn-1");
const button2 = $("#btn-2");
const button3 = $("#btn-3");
const button4 = $("#btn-4");
const title = $('#title');
const srcImgCard = $('#img-card');
const text = $('#frase');
const foodCard = $('#footer-card');

button1.addEventListener('click', () => {//Pastel
    title.innerHTML = "Tirulo de carta 1";
    text.innerHTML = "Texto 1";
    foodCard.innerHTML = "Pie Pagina 1";
    srcImgCard.src = 'SVGS/pastel.svg';
    srcImgCard.style.animation =  'radiance .8s alternate-reverse infinite';
    screenMain.style.backgroundImage = 'linear-gradient(to bottom, #ff6242, #ff8298, #ffb0d8, #f7dbfa, #ffffff)';
})

button2.addEventListener('click', () => {//Girasol
    title.innerHTML = "Titulo de la carta 2";
    text.innerHTML = "Texto 2";
    foodCard.innerHTML = "Pie Pagina 2";
    srcImgCard.src = 'SVGS/girasol2.svg';
    srcImgCard.style.animation =  'rotation-item 4s alternate-reverse infinite';
    screenMain.style.backgroundImage = 'linear-gradient(to bottom, #fabe3a, #ffb88f, #ffcad9, #ffe7ff, #ffffff)';
})

button3.addEventListener('click', () => {//Regalo
    title.innerHTML = "Titulo de la carta 3";
    text.innerHTML = "Texto 3";
    foodCard.innerHTML = "Pie Pagina 3";
    srcImgCard.src = 'SVGS/regalo.svg';
    srcImgCard.style.animation =  'shake-item 1s alternate-reverse infinite';
    screenMain.style.backgroundImage = 'linear-gradient(to bottom, #ec7bb0, #eaa0d2, #e8c3eb, #eee2f9, #ffffff)';
})

button4.addEventListener('click', () => {//Corazon
    title.innerHTML = "Titulo de la carta 4";
    text.innerHTML = "Texto 3";
    foodCard.innerHTML = "Pie Pagina 4";
    srcImgCard.src = 'SVGS/corazon2.svg';
    srcImgCard.style.animation =  'pulsations .7s alternate-reverse infinite';
    screenMain.style.backgroundImage = 'linear-gradient(to bottom, #b71c1c, #d85774, #e193bb, #e6cce9, #ffffff)';
})