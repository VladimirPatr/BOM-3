// import'./modules/acc.js'


const btnAdd = document.querySelectorAll('.header__btn');
const overlayModal= document.querySelectorAll('.overlay');
const btnClose = document.querySelectorAll('.close-modal');
const modalForm = document.querySelector('.wrapper-add');
const overlayForm = document.querySelector('.overlay-form')

const items = document.querySelectorAll('.questions__item');
const btns = document.querySelectorAll('.btn-questions');
const textWrapper = document.querySelectorAll('.questions__text-wrapper');
let heightWrapper = 0;

// модальное окно
btnAdd.forEach(item => {
    item.addEventListener('click', () => {
        overlayForm.classList.remove('unvisible');
        overlayForm.classList.add('visible');
        
    })      
});

overlayModal.forEach(item => {
    item.addEventListener('click', e => {
        const target = e.target;
        console.log(target)
        if (target === item || target.closest('.close')) {

            item.classList.remove('visible');
            item.classList.add('unvisible');
        }
    });
}) 


// Аккардеон
textWrapper.forEach(elem => {
    if (heightWrapper < elem.scrollHeight) {
        heightWrapper = elem.scrollHeight
    }
})


btns.forEach((btn, index) => {
    btn.addEventListener('click', () => {
        for (let i = 0; i < items.length; i += 1 ) {  
            if (index === i) {
                textWrapper[i].style.height = items[i].classList.contains('questions__item-activ') ? '' : `${heightWrapper}px`;
                items[i].classList.toggle('questions__item-activ');
            } else {
                items[i].classList.remove('questions__item-activ');
                textWrapper[i].style.height = '';
            }
        };   
    });
});