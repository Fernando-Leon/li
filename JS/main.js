const $ = selector => document.querySelector(selector);

const wrapper = $('.wrapper');
const ticket = $('.ticket');

const { width, height } = wrapper.getBoundingClientRect();
const halfWidth = width / 2;
const halfHeight = height / 2;

wrapper.addEventListener('mousemove', event => {
    ticket.style.transition = 'none';

    const  {offsetX, offsetY} = event;
    
    const rotationX = ((offsetX - halfWidth) / halfWidth) * 10;
    const rotationY = ((offsetY - halfHeight) / halfHeight) * 10;

    ticket.style.transform  = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`
    //srcImgCard.style.transform  = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`
})

wrapper.addEventListener('mouseleave', () => {
    ticket.style.transition = 'transform .3s ease-in-out';
    ticket.style.transform = 'rotateX(0deg) rotateY(0deg)';
})

const button1 = $("#btn-1");
const button2 = $("#btn-2");
const button3 = $("#btn-3");
const button4 = $("#btn-4");


const title = $('#title');
const srcImgCard = $('#img-card');
const text = $('#frase');
const foodCard = $('#footer-card');

button1.addEventListener('click', () => {//Pastel
    title.innerHTML = "Feliz Cumpleños";
    text.innerHTML = "Texto 1";
    foodCard.innerHTML = "Pie Pagina 1";
    srcImgCard.src = 'SVGS/pastel.svg';
    srcImgCard.style.animation =  'radiance .8s alternate-reverse infinite';
    screen.style.backgroundImage = 'linear-gradient(to bottom, #ff6242, #ff8298, #ffb0d8, #f7dbfa, #ffffff)';
})

button2.addEventListener('click', () => {//Girasol
    title.innerHTML = "Titulo de la carta 2";
    text.innerHTML = "Texto 2";
    foodCard.innerHTML = "Pie Pagina 2";
    srcImgCard.src = 'SVGS/girasol2.svg';
    srcImgCard.style.animation =  'rotation-item 4s alternate-reverse infinite';
    screen.style.backgroundImage = 'linear-gradient(to bottom, #fabe3a, #ffb88f, #ffcad9, #ffe7ff, #ffffff)';
})

button3.addEventListener('click', () => {//Regalo
    title.innerHTML = "Titulo de la carta 3";
    text.innerHTML = "Texto 3";
    foodCard.innerHTML = "Pie Pagina 3";
    srcImgCard.src = 'SVGS/regalo.svg';//shake-item
    srcImgCard.style.animation =  'shake-item 1s alternate-reverse infinite';
    screen.style.backgroundImage = 'linear-gradient(to bottom, #ec7bb0, #eaa0d2, #e8c3eb, #eee2f9, #ffffff)';
})

button4.addEventListener('click', () => {//Corazon
    title.innerHTML = "Titulo de la carta 4";
    text.innerHTML = "Texto 3";
    foodCard.innerHTML = "Pie Pagina 4";
    srcImgCard.src = 'SVGS/corazon2.svg';
    srcImgCard.style.animation =  'pulsations .7s alternate-reverse infinite';
    screen.style.backgroundImage = 'linear-gradient(to bottom, #b71c1c, #d85774, #e193bb, #e6cce9, #ffffff)';
})

const screen = $('.main-container');
const list = ['pastel', 'girasol2', 'regalo', 'corazon2'];

const randomPosition = () => {
    return [Math.floor(Math.random() * (95 - 5) + 0), Math.floor(Math.random() * (95 - 40) + 40)];   
}

const randomIcon = () => {
    return Math.floor(Math.random() * (list.length - 0) + 0);
}

const animation = (time) => {
    let randomTop = Math.floor(Math.random() * (95 - 10) + 40);
    let timeSecond = time/1000; 
    let itemNew = document.createElement("IMG");
    let position = randomPosition();
    itemNew.src = `SVGS/${list[randomIcon()]}.svg`;
    itemNew.setAttribute("class", 'item');
    itemNew.setAttribute("id", 'item-1');
    itemNew.style.bottom = '0';
    itemNew.style.left = `${position[0]}%`; //Posición en X
    itemNew.style.top = `${position[1]}%`;//Posición en Y
    itemNew.style.animation = `floating ${timeSecond}s`
    screen.appendChild(itemNew);
    document.documentElement.style.setProperty('--topAnimation', `${randomTop}`);
    setTimeout(function()  {
        screen.removeChild(itemNew);
    },time);
};

setInterval(animation, 6000, 6000);//3 seconds 
setInterval(animation, 5000, 5000);//5 seconds
setInterval(animation, 9000, 9000);//6 seconds
setInterval(animation, 10000, 10000);//8 seconds
setInterval(animation, 7000, 7000);//7 seconds 
setInterval(animation, 8000, 8000);//8 seconds
setInterval(animation, 4000, 4000);//9 seconds
setInterval(animation, 3000, 3000);//8 seconds
setInterval(animation, 11000, 11000);//9 seconds
