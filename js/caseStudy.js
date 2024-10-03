const galleryFilterBtns = document.querySelectorAll('.gallery__filter-btn')

galleryFilterBtns.forEach(function(item){
    item.addEventListener('click',function(){
        let currentBtnId = this.dataset.tab;
        let currentBtn = item;
        currentContentItem = document.querySelectorAll(`[data-content='${currentBtnId}']`)
        
        document.querySelectorAll('.gallery__item').forEach(function(item){
            item.classList.add('visible')
        })

        currentContentItem.forEach(function(item){
            item.classList.remove('visible')
        })

        document.querySelectorAll('.gallery__filter-btn').forEach(function(item){
            item.classList.remove('gallery__filter-btn--active')
        })

        if(currentBtnId == 'All'){
            document.querySelectorAll('.gallery__item').forEach(function(item){
                item.classList.remove('visible')
            })
        }

        currentBtn.classList.add('gallery__filter-btn--active')
    })
})

////////////////////////////////////////////////////////////////

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