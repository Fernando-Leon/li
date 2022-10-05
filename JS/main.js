var $ = selector => document.querySelector(selector);

var number = 0;
const index = $("#index");
const contenido = $(".main-container");
const counter = $("#counter");
const counterContent = $("#counter-content");
contenido.style.display = "none";

setInterval(function() {
    number += 1;
    counter.innerHTML = `${number}`;
    if(number == 1 || number == 5 || number == 9 || number == 13 || number == 17){
        counterContent.style.backgroundImage = 'linear-gradient(to bottom, #ff6242, #ff8298, #ffb0d8, #f7dbfa, #ffffff)';
    }
    if(number == 2 || number == 6 || number == 10 || number == 14 || number == 18){
        counterContent.style.backgroundImage = 'linear-gradient(to bottom, #fabe3a, #ffb88f, #ffcad9, #ffe7ff, #ffffff)';
    }
    if(number == 3 || number == 7 || number == 11 || number == 15 || number == 19){
        counterContent.style.backgroundImage = 'linear-gradient(to bottom, #ec7bb0, #eaa0d2, #e8c3eb, #eee2f9, #ffffff)';
    }
    if(number == 4 || number == 8 || number == 12 || number == 16 || number == 20){
        counterContent.style.backgroundImage = 'linear-gradient(to bottom, #b71c1c, #d85774, #e193bb, #e6cce9, #ffffff)';
    }
    if(number === 19){
        index.style.display = "none";
        index.style.zIndex = '-100';
        contenido.style.display = "grid";
        card3D();
        title.innerHTML = listTitles[0];
        text.innerHTML = listText[0];
        foodCard.innerHTML = listFood[0];
        srcImgCard.src = 'SVGS/pastel.svg';
        srcImgCard.style.animation =  'radiance .8s alternate-reverse infinite';
        screenMain.style.backgroundImage = 'linear-gradient(to bottom, #ff6242, #ff8298, #ffb0d8, #f7dbfa, #ffffff)';
        button1.setAttribute('class', 'selected');
    }
}, 1000);

const card3D = () => {
    const wrapper = $('.wrapper');
    const ticket = $('.ticket');

    //Para Escritorio
    const { width, height } = wrapper.getBoundingClientRect();
    const halfWidth = width / 2;
    const halfHeight = height / 2;

    wrapper.addEventListener('mousemove', event => {
        ticket.style.transition = 'none';
        const  {offsetX, offsetY} = event;
        const rotationX = ((offsetX - halfWidth) / halfWidth) * 25;
        const rotationY = ((offsetY - halfHeight) / halfHeight) * 25;
        console.log(rotationY);
        ticket.style.transform  = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`
    })

    wrapper.addEventListener('mouseleave', () => {
        ticket.style.transition = 'transform .3s ease-in-out';
        ticket.style.transform = 'rotateX(0deg) rotateY(0deg)';
    })

    //Para dispositivos moviles
    window.addEventListener("deviceorientation",function(event) {
        const rotationX = Math.round(event.beta);
        const rotationY = Math.round(event.gamma);
        ticket.style.transform  = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`;
    }, true);
}