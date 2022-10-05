const screenMain = document.body;
var listTitles = ["¡FELIZ CUMPLEAÑOS INDRA!", "¡FELICES 18 PRIMAVERAS!", "¡PIDE UN DESEO!", "GRACIAS BONITA"];
var listText = ["Disfruta de tu día bonita, te deseo que todas tus metas se hagan realidad, que nunca te falte la salud ni a las personas que más amas, pero sobre todo que seas lo más feliz posible en esta vida.", "18 años, <br>216 meses,<br>864 semanas,<br>6,574 días,<br>157,785 horas,<br>9,467,086 minutos,<br>568,025,136 segundos.", "Cierra tus ojos, piensa en algo que deses cumplir, imagínalo, pide tu deseo y házmelo saber.", "Te quiero mucho Indra &#128149 de verdad. Gracias por ser mi compañera por casi 12 años, como me gustaría tener una foto contigo desde el kínder hasta la universidad. Recuerda que si algún día me llegas a necesitar búscame ahí estaré, no te imaginas lo mucho que me importas y deseo lo mejor para ti."];
var listFood = ["¡Feliz día Li!", "Gracias por existir", "Yo te lo cumpliré", "Te llevo en mi corazón"];
const card = $('.wrapper')

var button1 = $("#btn-1");
var button2 = $("#btn-2");
var button3 = $("#btn-3");
var button4 = $("#btn-4");
const title = $('#title');
const srcImgCard = $('#img-card');
const text = $('#frase');
const foodCard = $('#footer-card');


const efectDelay = () =>{
    card.style.animation = 'fade 1s';
    setTimeout(function() {
        card.style.animation = 'none';
    }, 1000);
} 

button1.addEventListener('click', () => {//Pastel
    title.innerHTML = listTitles[0];
    text.innerHTML = listText[0];
    foodCard.innerHTML = listFood[0];
    srcImgCard.src = 'SVGS/pastel.svg';
    srcImgCard.style.animation =  'radiance .8s alternate-reverse infinite';
    screenMain.style.backgroundImage = 'linear-gradient(to bottom, #ff6242, #ff8298, #ffb0d8, #f7dbfa, #ffffff)';
    efectDelay();
    button2.classList.remove('selected');
    button3.classList.remove('selected');
    button4.classList.remove('selected');

    button1.setAttribute('class', 'selected');

})

button2.addEventListener('click', () => {//Girasol
    title.innerHTML = listTitles[1];
    text.innerHTML = listText[1];
    foodCard.innerHTML = listFood[1];
    srcImgCard.src = 'SVGS/girasol2.svg';
    srcImgCard.style.animation =  'rotation-item 4s alternate-reverse infinite';
    screenMain.style.backgroundImage = 'linear-gradient(to bottom, #fabe3a, #ffb88f, #ffcad9, #ffe7ff, #ffffff)';
    efectDelay();
    button1.classList.remove('selected');
    button3.classList.remove('selected');
    button4.classList.remove('selected');
    
    button2.setAttribute('class', 'selected');
}) 

button3.addEventListener('click', () => {//Regalo
    title.innerHTML = listTitles[2];
    text.innerHTML = listText[2];
    foodCard.innerHTML = listFood[2];
    srcImgCard.src = 'SVGS/regalo.svg';
    srcImgCard.style.animation =  'shake-item 1s alternate-reverse infinite';
    screenMain.style.backgroundImage = 'linear-gradient(to bottom, #ec7bb0, #eaa0d2, #e8c3eb, #eee2f9, #ffffff)';
    efectDelay();
    button1.classList.remove('selected');
    button2.classList.remove('selected');
    button4.classList.remove('selected');
    
    button3.setAttribute('class', 'selected');
})

button4.addEventListener('click', () => {//Corazon
    title.innerHTML = listTitles[3];
    text.innerHTML = listText[3];
    foodCard.innerHTML = listFood[3];
    srcImgCard.src = 'SVGS/corazon2.svg';
    srcImgCard.style.animation =  'pulsations .7s alternate-reverse infinite';
    screenMain.style.backgroundImage = 'linear-gradient(to bottom, #b71c1c, #d85774, #e193bb, #e6cce9, #ffffff)';
    efectDelay();
    button1.classList.remove('selected');
    button2.classList.remove('selected');
    button3.classList.remove('selected');
    
    button4.setAttribute('class', 'selected');
})