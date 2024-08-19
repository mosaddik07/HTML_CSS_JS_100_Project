const grayHeart = document.querySelector('.gray_heart');
const redHeart = document.querySelector('.red_heart');

grayHeart.addEventListener('click', () => {
    redHeart.classList.add('animation');
    grayHeart.classList.add('fill_color');
})

redHeart.addEventListener('click', () => {
    redHeart.classList.remove('animation');
    grayHeart.classList.add('fill_color');
})