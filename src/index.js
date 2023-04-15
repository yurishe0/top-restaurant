import { mainPage } from "./main-page.js";
import { about } from "./sites/about.js";
import { menu } from "./sites/menu.js";
import { location } from "./sites/location.js";
import { contact } from "./sites/contact.js";

mainPage();

const mainContent = document.querySelector('.main-content');
const navbarLinks = document.querySelectorAll('.navbar a');

navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
        let linkName = link.textContent;
        changePage(linkName);
    });
})

function changePage(page) {
    clearPage();
    switch(page) {
        case "ABOUT US":
            about();
            break;
        case "MENU":
            menu();
            break;
        case "LOCATION":
            location();
            break;
        case "CONTACT":
            break;
    }
}

const clearPage = () => {
    mainContent.innerHTML = '';
}

about();

