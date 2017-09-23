require('./App/index.jsx');
require('./App/component/events/onload_window.js');
var mySwiper = new Swiper ('.swiper-container', {
    
    direction: 'horizontal',
    loop: true,
    
    
    pagination: '.swiper-pagination',
    

    nextButton: '.swiper-button-next',
    prevButton: '.swiper-button-prev',
    
})   
