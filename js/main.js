$('.header-burger').click(function(event) {
    $('.header-burger,.header-menu').toggleClass('active');
    $('body').toggleClass('lock');
});



$('.header-list-item').click(function(event) {
    $('.header-burger,.header-menu').toggleClass('active');
    $('body').toggleClass('lock');
});



document.addEventListener('click', function (e) {
    if (e.target !== document.querySelector('.header-menu') & e.target !== document.querySelector('.hedaer-top') & e.target !== document.querySelector('.header-burger')) {
        document.querySelector('.header-menu').classList.remove('active')
        document.querySelector('.header-burger').classList.remove('active')
        document.querySelector('body').classList.remove('lock')
    }
})


$('.slider').slick({
    arrows: false,
    dots: false, 
    slidesToShow: 1,
    slidesToScroll: 1,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 3000,
    pauseOnFocus: true,
    pauseOnHover: true,
    pauseOnDotsHover: true,
    centerMode: true,
    variableWidth: true,



    
    // АДАПТИВНОСТЬ СЛАЙДЕРА
    responsive: [
        {
            breakpoint: 1100,
            settings: {
                variableWidth: false,
                centerMode: false,
            }
        },
    ]
});
