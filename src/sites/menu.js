import  { newElement } from "../newElement";

export const menu = () => {
    const mainContent = document.querySelector('.main-content');

    const menuContainer = newElement('div', '', '', '', 'menu-container');

    for(let i = 1; i <= 10; i++) {
        // let menuItem = newElement('img', '', 'src', `../img/${i}.jpeg`, 'menu-item');
        let menuItem = newElement('div', '', '', '', 'menu-item');
        let image = newElement('img', '', 'src', `../img/${i}.jpeg`, '');
        let name = newElement('h3', 'LOREM IPSUM', '', '', '');
        let price = newElement('p', '19,99$', '', '', '');
        menuItem.appendChild(image);
        menuItem.appendChild(name);
        menuItem.appendChild(price);
        menuContainer.appendChild(menuItem);
    }

    mainContent.appendChild(menuContainer);
}
