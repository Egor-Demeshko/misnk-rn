import {animate} from "motion";
/**
 * @param {string} anchorElement - айди элемента
 */
export default function createMobileMenuController(anchorElement){
    if(!anchorElement) return;
    /**флаг определить, открыто или закрыто меню */
    var globalOpenCloseState = false;
    const menu = document.getElementById(anchorElement);
    if(!menu) return;

    if(!connectAllButtons()) return; 

    /**класс, флаг открытия подменю, добавляет когда подменю открывается*/
    const buttonOpenClass = "mobile_menu__button--open";
    const listMenuOpen = "mobile_menu--list-open";
    const mobileButtonClass = "mobile_menu__button";
    const upListItemSelector = `li[data-list="anchor"]`;
    var button = null;

    //1. на якорный элемент вешаем событие на клик.Общий на все меню
    menu.addEventListener("click", eventClick);

    function connectAllButtons(){
        const menuButton = document.getElementById(`open_mobile_menu`);
        if(!menuButton) return false;
        const closeButtons = createCloseButtons(menu);
        if(!closeButtons || closeButtons.length === 0) return false;

        menuButton.addEventListener("click", openCloseMobileMenu);

        Array.from(closeButtons).forEach( (button) => {
            button.addEventListener('click', openCloseMobileMenu);
        });
        return true;

        function openCloseMobileMenu(){
            if(!menu) return;


            if(globalOpenCloseState){
                document.documentElement.style.overflow = "auto";
                globalOpenCloseState = false;
                menu.style.transform = "translateX(-100%)";   
            } else if(!globalOpenCloseState){
                document.documentElement.style.overflow = "hidden";
                globalOpenCloseState = true;
                menu.style.transform = "translateX(0%)";
            }
        }
    }


    function createCloseButtons(menu){
        if(!menu) return;

        const onButtonLittetal = `<button data-menu="close" class="mobile_menu__close_button">Закрыть</button>`;

        menu.insertAdjacentHTML("beforeend", onButtonLittetal);
        menu.insertAdjacentHTML("afterbegin", onButtonLittetal);

        return menu.querySelectorAll('[data-menu="close"]');
    }

    //2. если все ок, то если в класслисте кнопки, есть класс buttonOpenClass, то вызываем функцию закрыть меню.
    // если в кнопке класса нет, то открываем меню. разные функции. 
    function eventClick(e){
        const target = e.target;
        
        //1.1. получаем таргет. нас интересовать будет button с классом  mobile_menu__button
        //1.2 таргетом может быть как сама эта кнопка, так и svg в ней. надо проверить на два эти условия.
        if(target.tagName === "svg" || target.tagName === "path"){
            let maybeButton = target.closest(`.${mobileButtonClass}`);
            if(!maybeButton) return;
            button = maybeButton;
        } else if(target.tagName === "BUTTON" && target.classList.contains(mobileButtonClass)){
            button = target;
        } else {
            /**если button не нашелся */
            return;
        }
        if(button.classList.contains(buttonOpenClass)){
            closeMenu();
        } else {
            openMenu();
        }
    }


    function openMenu(){
        button.classList.add(buttonOpenClass);

        //находим ближайшего родителя li с upListItemSelector
        const parentLI = button.closest(upListItemSelector);
        if(!parentLI) {
            button = null;
        }
        // в нем находим ul 
        var ul = parentLI.querySelector("ul");
        if(!ul) return;
        ul.style.display = 'flex';
        ul.style.height = '100%';
        ul.classList.add(listMenuOpen);

        {
            let ULoffsetHeight = ul.getBoundingClientRect().height;
            ul.style.height = '0';
            ul.style.display = 'flex';
            animate(ul, {height: ['0', `${ULoffsetHeight}px`]}, {duration: 0.7, easing: "ease-in-out"});
        }
        button = null;
    }

    function closeMenu(){
        const duration = .7;
        button.classList.remove(buttonOpenClass);

        //находим ближайшего родителя li с upListItemSelector
        const parentLI = button.closest(upListItemSelector);
        if(!parentLI) {
            button = null;
        }
        // в нем находим ul 
        var ul = parentLI.querySelector("ul");
        if(!ul) return;
        animate(ul, {height: 0}, {duration, easing: "ease-in"});
        ul.classList.remove(listMenuOpen);
        setTimeout( () => ul.style.display = 'none' , duration * 1000);
        // в ul добавляем флаг listMenuOpen
        button = null;
    }
};