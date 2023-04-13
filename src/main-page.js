import { newElement } from "./newElement.js";

export const mainPage = () => {
    const content = document.querySelector("#content");
    const heroImageContainer = newElement("div", "", "", "", "hero-image__container")
    const navbar = newElement("div", "", "", "", "navbar");
    const mainContent = newElement("div", "", "", "", "main-content");
    const footerContainer = newElement("div", "", "", "", "footer-container");


    const pizzarioBig = newElement("h1", "PIZZARIO", "", "", "");
    const pizzarioSmall = newElement("h2", "Pizzario", "", "", "");
    const link1 = newElement("a", "ABOUT US", "", "", "");
    const link2 = newElement("a", "MENU", "", "", "");
    const link3 = newElement("a", "LOCATION", "", "", "");
    const link4 = newElement("a", "CONTACT", "", "", "");
    const link5 = newElement("a", "Privacy policy", "", "", "");
    const link6 = newElement("a", "Terms of use", "", "", "");
    const link7 = newElement("a", "Customer support", "", "", "");
    const link8 = newElement("a", "Job offers", "", "", "");


    heroImageContainer.appendChild(pizzarioBig);
    content.appendChild(heroImageContainer);
    navbar.appendChild(pizzarioSmall);
    navbar.appendChild(link1);
    navbar.appendChild(link2);
    navbar.appendChild(link3);
    navbar.appendChild(link4);
    content.appendChild(navbar);

    content.appendChild(mainContent);

    footerContainer.appendChild(link5);
    footerContainer.appendChild(link6);
    footerContainer.appendChild(link7);
    footerContainer.appendChild(link8);
    content.appendChild(footerContainer);
}



