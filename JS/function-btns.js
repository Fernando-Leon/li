const screenMain = document.body;


var listTitles = ["Titulo 1", "Titulo 2", "Titulo 3", "Titulo 4"];
var listText = ["Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nihil architecto saepe cum earum vero amet, laboriosam nesciunt! Perferendis earum nulla mollitia blanditiis quidem vero. Velit dolore aliquid ipsum.."];
var listFood = ["Feliz dia!"];
const card = $('.wrapper')

const button1 = $("#btn-1");
const button2 = $("#btn-2");
const button3 = $("#btn-3");
const button4 = $("#btn-4");
const title = $('#title');
const srcImgCard = $('#img-card');
const text = $('#frase');
const foodCard = $('#footer-card');


const efectDelay = () =>{
    card.style.animation = 'fade 1s';
    setTimeout(function() {
        card.style.animation = 'none';
    }, 1000)
} 

button1.addEventListener('click', () => {//Pastel
    title.innerHTML = listTitles[0];
    text.innerHTML = listText[0];
    foodCard.innerHTML = listFood[0];
    srcImgCard.src = 'SVGS/pastel.svg';
    srcImgCard.style.animation =  'radiance .8s alternate-reverse infinite';
    screenMain.style.backgroundImage = 'linear-gradient(to bottom, #ff6242, #ff8298, #ffb0d8, #f7dbfa, #ffffff)';
    efectDelay();
})

button2.addEventListener('click', () => {//Girasol
    title.innerHTML = listTitles[1];
    text.innerHTML = listText[0];
    foodCard.innerHTML = listFood[0];
    srcImgCard.src = 'SVGS/girasol2.svg';
    srcImgCard.style.animation =  'rotation-item 4s alternate-reverse infinite';
    screenMain.style.backgroundImage = 'linear-gradient(to bottom, #fabe3a, #ffb88f, #ffcad9, #ffe7ff, #ffffff)';
    efectDelay();
})

button3.addEventListener('click', () => {//Regalo
    title.innerHTML = listTitles[2];
    text.innerHTML = listText[0];
    foodCard.innerHTML = listFood[0];
    srcImgCard.src = 'SVGS/regalo.svg';
    srcImgCard.style.animation =  'shake-item 1s alternate-reverse infinite';
    screenMain.style.backgroundImage = 'linear-gradient(to bottom, #ec7bb0, #eaa0d2, #e8c3eb, #eee2f9, #ffffff)';
    efectDelay();
})

button4.addEventListener('click', () => {//Corazon
    title.innerHTML = listTitles[3];
    text.innerHTML = listText[0];
    foodCard.innerHTML = listFood[0];
    srcImgCard.src = 'SVGS/corazon2.svg';
    srcImgCard.style.animation =  'pulsations .7s alternate-reverse infinite';
    screenMain.style.backgroundImage = 'linear-gradient(to bottom, #b71c1c, #d85774, #e193bb, #e6cce9, #ffffff)';
    efectDelay();
})