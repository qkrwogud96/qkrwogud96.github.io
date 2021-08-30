const bgElem = document.querySelector('.bg');
const IMAGES = [
    {'img' : 'image_1.jpg'},
    {'img' : 'image_2.jpg'},
    {'img' : 'image_3.jpg'},
    {'img' : 'image_4.jpg'},
    {'img' : 'image_5.jpg'}
];


const setBG = () =>{
    const INDEX = Math.floor(Math.random(0,1) * IMAGES.length);
    const bg = IMAGES[INDEX].img;
    bgElem.style.backgroundImage = `url(images/${bg})`;
};
setBG();