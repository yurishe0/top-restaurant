import { mainPage } from "./main-page.js";
import { about } from "./about.js";

mainPage();

// const link1 = document.querySelector('#about-us');
// link1.addEventListener('click', () => {
    //     console.log('a');
    // });

    const mainContent = document.querySelector('.main-content');
    const navbarLinks = document.querySelectorAll('.navbar a');

navbarLinks.forEach(link => {
    link.addEventListener('click', () => {
        let linkName = link.textContent;
        changePage(linkName);
    });
})

function changePage(page) {
    switch(page) {
        case "ABOUT US":
            clearPage();
            about();
            break;
        case "MENU":
            clearPage();
            break;
        case "LOCATION":
            clearPage();
            break;
        case "CONTACT":
            clearPage();
            break;
    }
}

const clearPage = () => {
    mainContent.innerHTML = '';
}

about();

