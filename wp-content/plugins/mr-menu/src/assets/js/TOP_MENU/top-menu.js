import cleanHTML from "../cleanFromScripts.js";
import createETC from "./createETC.js";


export default function topMenu(anchor){

    /**классы меню верхнего уровня */
    const topMenuClass = "top-menu__list-item";
    const dropdownMenuClass = "dropdown-menu";
    const rightClass = "right";

    /**классы подменю */
    const leftClass = "left";
    /**классы добавляются для LI элементов которые входят в выпадающее меню etc <ul> */
    const etcListItemClass ="etc-list-item";
    const dropdownSub = "dropdown-sub";
    const dropdownSubMenu = "dropdown-sub-menu";

    /**айди элементов контейнеров <ul> */;
    const ETC = 'ul[data-sublist="etc-list"]';
    const menu = anchor;
    
    /**постоянная добавка к ширине, гарантирующая свободное добавление элементов */
    const INNERMENUGAP = 250;
    //1. Получаем доступ к топ меню по айди #menu это будет элемент UL
    const menuDomElement = document.getElementById(menu);
    if(!menuDomElement) {
        console.error("НЕ НАШЛИ МЕСТО ДЛЯ МЕНЮ", {anchor});
        return;
    }
    const ETCListItemMain = createETC(menuDomElement, topMenuClass, dropdownMenuClass, switchToSub);
    const etcDomElementUl = ETCListItemMain.querySelector(ETC);
    /**элемент nav */
    const menuTopWrapper = menuDomElement.closest('.top-menu');
    
    if(!menuTopWrapper || !etcDomElementUl) return;
    
    menuDomElement.insertAdjacentElement("beforeend", ETCListItemMain);
    var menuInnerWidth = calculateMenuInnerWidth(menuDomElement);
    if(isNaN(menuInnerWidth)){
        console.error("Ширина главного меню не существует");
        return;
    } else if(menuInnerWidth === 0){
        return;
    }

    
    shrinkIfNeeded(menuDomElement);
    growIfNeeded(menuDomElement);

    if(window){
        window.addEventListener("resize", freezed());
    }


    function freezed(){
        var freezed = false;

        return function resizeHandler(){
            if(menuTopWrapper.style.display === "none") return;
            if(freezed) return;
            freezed = true;
            setTimeout( () => freezed = false, 100);
            shrinkIfNeeded(menuDomElement);
            growIfNeeded(menuDomElement);
        }
    }



    //5. создаем слушателя событий для resize который будет запускать логику выша, а также крутить ее в обратную сторону

    //6. обратная функция будет брать первые элеметь <li> dropdown-sub.
    //6.1 превращать все содержимое в строку.
    //6.2 удалять из ДОМ
    //6.3 в строке менять классы

    function calculateMenuInnerWidth(){
        //2. Бежим по li вернхнего уровня, с классом "top-menu__list-item", считаем ширину элементов в сумму
        const elements = getTopMenuElements();
        var width = 0;
        if(!elements || !elements.length || elements.length === 0) return;

        elements.forEach(element => {
            width += element.offsetWidth;
        });

        return width;
    }

    
    function getTopMenuElements(){
        const elements = menuDomElement.querySelectorAll(`.${topMenuClass}`);
        return elements;
    }

    function getEtcFirstElement(){
        /** у элемента etcDomElementUl получаем первый <li> элемент */
        const element = etcDomElementUl.querySelector(`${ETC}>.${etcListItemClass}`);
        
        return element;
    }


    function growMenu(){
        const elementToMove = getEtcFirstElement();

        if(!elementToMove) return;

        const subMenuStr = switchToMain(elementToMove);
        elementToMove.remove();

        /**необходимо вставить htmlstring перед последним элементом меню, так как последний элемент меню
         * это три точки.
         */

        const lastElementInMenu = menuDomElement.lastElementChild;
        if(lastElementInMenu.dataset.menu === 'etc'){
            lastElementInMenu.insertAdjacentHTML("beforebegin", subMenuStr);
        }
    }

    /**сравниваем ширину внутренних элементов видимой части верхнего меню, с общим треком верхнего меню,    */
    function growIfNeeded(menuDomElement){
        
        if(menuDomElement.offsetWidth > menuInnerWidth + INNERMENUGAP){
            while(menuDomElement.offsetWidth > menuInnerWidth + INNERMENUGAP){
                
                growMenu();
                menuInnerWidth = calculateMenuInnerWidth();
            }
        }
    }

    /**сравниваем ширину внутренних элементов видимой части верхнего меню, с общим треком меню */
    function shrinkIfNeeded(menuDomElement){
        
        if(menuDomElement.offsetWidth < menuInnerWidth){
            while(menuDomElement.offsetWidth < menuInnerWidth){
                shrinkMenu();
                menuInnerWidth = calculateMenuInnerWidth();
            }
        } 
    }

    //   2.1 если ширина элементов превосходит ширину #menu, то хватаем последний элемент с классом "top-menu__list-item"
    //   и превращаем  его в строку. Удаляем в дом. 
    //   2.2 меняем классы "right" и "left" и остальные
    //3. Добавляем новую строку в дом, в список etc, в начало.
    function shrinkMenu(){
        const topElements = getTopMenuElements();
        /**-2 так как последний элемент это "etc" */
        const lastElement = topElements[topElements.length - 2];
        
        if(!lastElement) return;

        const newtopElementSTR = switchToSub(lastElement);
        lastElement.remove();

        etcDomElementUl.insertAdjacentHTML("afterbegin", newtopElementSTR);
    }


    function switchToMain(domElement){
        {
            const ul = domElement.querySelectorAll("ul");
            if(ul.length > 0){
                for(let i = 0; i < ul.length; i++){
                    const ulElement = ul[i];
                    ulElement.classList.remove(leftClass);
                    ulElement.classList.add(rightClass);    
                }
            }
        }

        let outerHTML = cleanHTML(domElement.outerHTML);
        if(outerHTML.length === 0) return;
        /**меняем классы верхнего элемента li в меню */
        outerHTML = outerHTML.replace(etcListItemClass, topMenuClass);
        outerHTML = outerHTML.replace(dropdownSub, "");
        /**меняем классы вложенного ul элемента */
        outerHTML = outerHTML.replace(dropdownSubMenu, dropdownMenuClass);
        return outerHTML;
    }

    /**
     * Switches the classes of the right and left directions in the given element.
     *
     * @param {HTMLElement} lastElement - The element to switch the classes for.
     * @return {string} The modified HTML of the element.
     */
    function switchToSub(lastElement){
        /**меняем классы направлений право на лево */
        {
            const ul = lastElement.querySelectorAll("ul");
            if(ul.length > 0){
                for(let i = 0; i < ul.length; i++){
                    const ulElement = ul[i];
                    ulElement.classList.remove(rightClass);
                    ulElement.classList.add(leftClass);    
                }
            }
        }
    
        let outerHTML = cleanHTML(lastElement.outerHTML);
        if(outerHTML.length === 0) return;
        /**меняем классы верхнего элемента li в меню */
        outerHTML = outerHTML.replace(topMenuClass, `${dropdownSub} ${etcListItemClass}`);
        /**меняем классы вложенного ul элемента */
        outerHTML = outerHTML.replaceAll(dropdownMenuClass, dropdownSubMenu);
        return outerHTML;
    }

    
    
}