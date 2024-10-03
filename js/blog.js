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