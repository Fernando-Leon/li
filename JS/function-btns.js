const screenMain = document.body;

const button1 = $("#btn-1");
const button2 = $("#btn-2");
const button3 = $("#btn-3");
const button4 = $("#btn-4");
const title = $('#title');
const srcImgCard = $('#img-card');
const text = $('#frase');
const foodCard = $('#footer-card');

const changeDelay = () => {
    wrapper.style.animation = "fade 1s"
    setTimeout(function() {wrapper.style.animation = "none"}, 1000);
}

button1.addEventListener('click', () => {//Pastel
    title.innerHTML = "Tirulo de carta 1";
    text.innerHTML = "Texto 1";
    foodCard.innerHTML = "Pie Pagina 1";
    srcImgCard.src = 'SVGS/pastel.svg';
    ticket.style.border = "solid 1px rgba(255, 98, 66, 0.4)";
    srcImgCard.style.animation =  'radiance .8s alternate-reverse infinite';
    screenMain.style.backgroundImage = 'linear-gradient(to bottom, #ff6242, #ff8298, #ffb0d8, #f7dbfa, #ffffff)';
    changeDelay();
})

button2.addEventListener('click', () => {//Girasol
    title.innerHTML = "Titulo de la carta 2";
    text.innerHTML = "Texto 2";
    foodCard.innerHTML = "Pie Pagina 2";
    srcImgCard.src = 'SVGS/girasol2.svg';
    ticket.style.border = "solid 1px rgba(250, 190, 58, 0.4)";
    srcImgCard.style.animation =  'rotation-item 4s alternate-reverse infinite';
    screenMain.style.backgroundImage = 'linear-gradient(to bottom, #fabe3a, #ffb88f, #ffcad9, #ffe7ff, #ffffff)';
    changeDelay();
})

button3.addEventListener('click', () => {//Regalo
    title.innerHTML = "Titulo de la carta 3";
    text.innerHTML = "Texto 3";
    foodCard.innerHTML = "Pie Pagina 3";
    srcImgCard.src = 'SVGS/regalo.svg';
    ticket.style.border = "solid 1px rgba(236, 123, 176, 0.4)";
    srcImgCard.style.animation =  'shake-item 1s alternate-reverse infinite';
    screenMain.style.backgroundImage = 'linear-gradient(to bottom, #ec7bb0, #eaa0d2, #e8c3eb, #eee2f9, #ffffff)';
    changeDelay();
})

button4.addEventListener('click', () => {//Corazon
    title.innerHTML = "Titulo de la carta 4";
    text.innerHTML = "Texto 3";
    foodCard.innerHTML = "Pie Pagina 4";
    srcImgCard.src = 'SVGS/corazon2.svg';
    ticket.style.border = "solid 1px rgba(183, 28, 28, 0.4)";
    srcImgCard.style.animation =  'pulsations .7s alternate-reverse infinite';
    screenMain.style.backgroundImage = 'linear-gradient(to bottom, #b71c1c, #d85774, #e193bb, #e6cce9, #ffffff)';
    changeDelay();
})


var spa = 250;//Velocidad 
var spt = 150;//Velocidad 2

const speedRandom = () => {
    return Math.floor(Math.random() *(400 - 10) + 10);
}

function dataId(id, speeded){
    var text = document.getElementById(id);
    var str = text.innerHTML;
    text.innerHTML = "";
    var speed = speeded;
    var i = 0;
   
    function typeWrite(){
        if(i < str.length){
            text.innerHTML += str.charAt(i);
            i++;
            setTimeout(typeWrite, speedRandom());
        }
    }
    setTimeout(typeWrite, speedRandom());
}

dataId("title", spt);