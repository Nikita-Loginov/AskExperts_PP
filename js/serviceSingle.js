const swiper = new Swiper('.swiper', {
    loop: true,
    slidesPerView: 1,
    spaceBetween:43,
    navigation: {
        nextEl: '.box__btn-next',
        prevEl: '.box__btn-prev',
    },
    pagination: {
        el: '.swiper-pagination',
    },
    breakpoints:{
        1100:{
            slidesPerView: 3,
        },
        850:{
            slidesPerView: 2.3,
        },
        650:{
            slidesPerView: 1.6,
        },
        500:{
            slidesPerView: 1.1,
        }
    }
});

///////////////////////////////////////////////////////////////

const fagBtn = document.querySelectorAll('.fag__item ')

fagBtn.forEach(function(item){
    item.addEventListener('click',function(e){
        item.classList.toggle('open')
    })
})

///////////////////////////////////////////////////////////////

Fancybox.bind("[data-fancybox]", {
});

///////////////////////////////////////////////////////////////


const menu = document.querySelector('.menu')
const menuBurger = document.querySelector('.menu__burger')
const menuItem = document.querySelectorAll('.menu__item')

menuBurger.addEventListener('click',function(){
    menu.classList.toggle('open-menu');
    document.querySelector('body').classList.toggle('open-menu');
    menuItem.forEach(function(item){
        item.addEventListener('click',function(e){
            menu.classList.remove('open-menu');
        })
    })
    document.addEventListener('click',function(item){
        let currentClick = item.composedPath().includes(menu);
        if (!currentClick){
            menu.classList.remove('open-menu');
        }
    })
})

/////////////////////////////////////////////////////////////////