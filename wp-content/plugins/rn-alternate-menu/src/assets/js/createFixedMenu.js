import createTopMenuController from './top-menu.js';
import { animate } from "motion";

(function createFixedMenu(){
    createTopMenuController('alternate_menu');

    //0. создать константу величину прокрутки, равна высоте хедора, чуть меньше
    const headerHeight = document.querySelector('header')?.offsetHeight;
    //1. получить доступ к элементу alternate_menu__wrapper / 2. если нет, то не исполнять функцию
    const alternateMenuWrapper = document.querySelector('#alternate_menu__wrapper');
    if(!alternateMenuWrapper || isNaN(headerHeight) ) return;

    //3. создать слушателя на событий скоролл. функция должны быть freezed
    window.addEventListener('scroll', freezed(headerHeight, alternateMenuWrapper));

    function freezed(headerHeight, alternateMenuWrapper){
        var freezed = false;

        return function createFreezedScrollListener(){
            if(freezed) return;
            if(alternateMenuWrapper.style.display === "none") return;
            freezed = true;
            setTimeout( () => freezed = false, 20);

            if(window.scrollY > headerHeight){
                //4.2. если меню показывается то вовзрат.
                if(alternateMenuWrapper.style.opacity === "1") return;
                /**создаем анимацию выезда меню сверху, через translateY и opacity. используем библиотику motionone */
                animate(alternateMenuWrapper, {translateY: 0, opacity: 1}, {duration: 0.4, easing: "ease"});
            } else  {
                //4.4 если текущая величина прокрутки меньше константной величины, проверяем виден ли верхнее меню
                if (window.scrollY <= headerHeight) {
                    if (alternateMenuWrapper.style.opacity === "0") return;
                    /** создаем анимацию скрытия меню сверху, через translateY и opacity. используем библиотеку motionone */
                    animate(alternateMenuWrapper, {translateY: "-100%", opacity: 0}, {duration: 0.4, easing: "ease"});
                }
            }
        }
    }
    
})();