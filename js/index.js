const pricingLabel = document.querySelectorAll('.pricing__label')
const pricingCard = document.querySelectorAll('.pricing-card')

pricingLabel.forEach(function(item){
    item.addEventListener('click',function(e){
        const filterClass = item.dataset['tab']
        pricingCard.forEach(function(item){
            item.classList.remove('pricing-card--active')
            if(item.classList.contains(filterClass)){
                item.classList.add('pricing-card--active')
            }
        })
    })
})

/////////////////////////////////////////////////////////////////

const feedbackImg = document.querySelectorAll('.feedback-swiper__user-img');
const feedbackUserInfo = document.querySelectorAll('.feedback-swiper__user-info');
const feedbackArrows = document.querySelector('.feedback-swiper__arrows')
feedbackImg.forEach(function(item){
    let feedbackImgHeight = item.offsetHeight;
    feedbackUserInfo.forEach(function(item){
        let feedbackUserInfoHeight = item.offsetHeight;
        let summHeight = (feedbackImgHeight/2) + feedbackUserInfoHeight
        feedbackArrows.style.bottom = summHeight +'px';
    })
    
})

/////////////////////////////////////////////////////////////////

const swiper = new Swiper('.swiper', {
    loop: true,
    navigation: {
        nextEl: '.feedback-swiper__next',
        prevEl: '.feedback-swiper__prev',
    },
});

/////////////////////////////////////////////////////////////////

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







