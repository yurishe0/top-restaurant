import { newElement } from "./newElement.js";

export const pageLoad = () => {
  const content = document.querySelector("#content");

  // *** ELEMENT CREATION
  // SYNTAX:
  // const x = newElement(elementName, textContent, attribute, attributeValue, ...classNames);
  const mainContainer = newElement("div", "", "", "", "main-container");
  const heroImageContainer = newElement("div", "", "", "", "hero-image__container")
  const contentContainer = newElement("div", "", "", "", "content-container");
  const navbar = newElement("div", "", "", "", "navbar");
  const about = newElement("div", "", "", "", "about-item", "about-us");
  const historyContainer = newElement("div", "", "", "", "about-item", "history-container")
  const aboutImageContainer = newElement("div", "", "", "", "about-item", "aboutImageContainer");

  const aboutImage = newElement("img", "", "src", "https://arquitecturaviva.com/assets/uploads/obras/43429/av_imagen_vertical.jpeg?h=1410ee69", "");

  const pizzarioBig = newElement("h1", "PIZZARIO", "", "", "");
  const pizzarioSmall = newElement("h2", "Pizzario", "", "", "");
  const aboutUs = newElement("h3", "ABOUT US", "", "", "");
  const history = newElement("h3", "history", "", "", "");

  const paragraph1 = newElement("p", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui beatae nulla, minus debitis sint veniam. Doloremque, praesentium ea? Repudiandae nesciunt numquam culpa rerum iure neque repellendus doloribus eum quia se.", "", "", "");
  const paragraph2 = newElement("p", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque incidunt architecto, est dignissimos dolorum eos accusantium.", "", "", "");
  const paragraph3 = newElement("p", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui beatae nulla, minus debitis sint veniam. Doloremque, praesentium ea? Repudiandae nesciunt numquam culpa rerum iure neque repellendus doloribus eum quia sed laboriosam, temporibus, deleniti voluptatem atque error quae dolore molestiae aliquid maxime esse! Quo ut tempore distinctio necessitatibus perspiciatis alias facilis vitae.", "", "", "");
  const paragraph4 = newElement("p", "Lorem ipsum dolor!", "", "", "");

  const link1 = newElement("a", "MENU", "", "", "");
  const link2 = newElement("a", "LOCATION", "", "", "");
  const link3 = newElement("a", "CONTACT", "", "", "");

  // ***


  // APPENDING DOM ELEMENTS
  heroImageContainer.appendChild(pizzarioBig);
  mainContainer.appendChild(heroImageContainer);
  navbar.appendChild(pizzarioSmall);
  navbar.appendChild(link1);
  navbar.appendChild(link2);
  navbar.appendChild(link3);
  mainContainer.appendChild(navbar);

  about.appendChild(aboutUs);
  about.appendChild(paragraph1);
  about.appendChild(paragraph2);
  contentContainer.appendChild(about);

  aboutImageContainer.appendChild(aboutImage);
  contentContainer.appendChild(aboutImageContainer);

  historyContainer.appendChild(history);
  historyContainer.appendChild(paragraph3);
  historyContainer.appendChild(paragraph4);
  contentContainer.appendChild(historyContainer);

  mainContainer.appendChild(contentContainer);
  content.appendChild(mainContainer);
};
