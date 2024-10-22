
/**
 * Creates an ETC menu.
 *
 * @param {HTMLElement} menu - The menu HTMLElement.
 * @param {string} topMenuClass - The class of the top menu.
 * @param {Function} switchToSub - IndicatesHelper function that switches to sub menu.
 * @return {HTMLElement} The wrapper element of the ETC menu.
 */
export default function createETC(menu, topMenuClass, dropdownMenuClass, switchToSub){
    const wrapperLi = getETCwrapperLi();
    const ul = getETCul();
    const maxInRow = 6;
    
    /**Получаем список всех элементов класса topMenuClass */
    const topElements = menu.querySelectorAll(`.${topMenuClass}`);
    if(!topElements) return;
    //2. если максимальное количество элементов более 6, то
    if(topElements.length > maxInRow){
        /**
         * @type {Array.<Element>}
         */
        const elements = Array.from(topElements);
        
        //3. перебираем элементы и через вспомогательную фунцию переключаем классы
        for(let i = 0; i < elements.length; i++){
            let element = elements[i];
            if(i >= maxInRow){
                const elementString = switchToSub(element) /**@return {string} */;
                ul.insertAdjacentHTML('afterbegin', elementString);
                element.remove();
            } 
        }

        wrapperLi.append(ul);
        return wrapperLi;
    }
    return wrapperLi;


    function getETCwrapperLi(){
        const liInner = `<a href="#" rel="nofollow"><i class="icon-etc"><span></span><span></span><span></span></i>
        </a>`;
        const li = document.createElement("li");
        
        li.classList.add("dropdown", "etc", "top-menu__list-item");
        li.innerHTML = liInner;
        li.setAttribute("data-menu","etc");
        return li;
    }

    function getETCul(){
        const eliminate = 'eliminate_list';
        const element = document.createElement("ul");
        element.classList.add(dropdownMenuClass, eliminate);
        element.setAttribute("data-sublist", "etc-list");
        return element;
    }
}