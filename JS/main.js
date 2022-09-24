const $ = selector => document.querySelector(selector);

const wrapper = $('.main-container');
const ticket = $('.ticket');

const { width, height } = wrapper.getBoundingClientRect();
const halfWidth = width / 2;
const halfHeight = height / 2;

wrapper.addEventListener('mousemove', event => {
    ticket.style.transition = 'none';

    const  {offsetX, offsetY} = event;
    
    const rotationX = ((offsetX - halfWidth) / halfWidth) * 12;
    const rotationY = ((offsetY - halfHeight) / halfHeight) * 12;

    ticket.style.transform  = `rotateX(${rotationX}deg) rotateY(${rotationY}deg)`

})

wrapper.addEventListener('mouseleave', () => {
    ticket.style.transition = 'transform .3s ease-in-out';
    ticket.style.transform = 'rotateX(0deg) rotateY(0deg)';
})