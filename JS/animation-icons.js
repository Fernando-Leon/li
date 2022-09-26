const $ = selector => document.querySelector(selector);
const screen = $('.main-container');
const list = ['pastel', 'girasol2', 'regalo', 'corazon2'];

const randomPosition = () => {
    return [Math.floor(Math.random() * (95 - 5) + 0), Math.floor(Math.random() * (95 - 40) + 40)];   
}

const randomIcon = () => {
    return Math.floor(Math.random() * (list.length - 0) + 0);
}

const animation = (time) => {
    let randomTop = Math.floor(Math.random() * (95 - 40) + 40);
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