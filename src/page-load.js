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
  const aboutImageContainer = newElement("div", "", "", "", "about-item", "about-image-container");
  const orderContainer = newElement("div", "", "", "", "order-container");
  const order = newElement("div", "", "", "", "order");
  const orderButtonContainer = newElement("div", "", "", "", "order-button-container");
  const footerContainer = newElement("div", "", "", "", "footer-container");

  const aboutImage = newElement("img", "", "src", "https://arquitecturaviva.com/assets/uploads/obras/43429/av_imagen_vertical.jpeg?h=1410ee69", "");

  const pizzarioBig = newElement("h1", "PIZZARIO", "", "", "");
  const pizzarioSmall = newElement("h2", "Pizzario", "", "", "");
  const aboutUs = newElement("h3", "ABOUT US", "", "", "");
  const history = newElement("h3", "HISTORY", "", "", "");
  const orderNow = newElement("h3", "ORDER NOW", "", "", "");

  const paragraph1 = newElement("p", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui beatae nulla, minus debitis sint veniam. Doloremque, praesentium ea? Repudiandae nesciunt numquam culpa rerum iure neque repellendus doloribus eum quia se.", "", "", "");
  const paragraph2 = newElement("p", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque incidunt architecto, est dignissimos dolorum eos accusantium.", "", "", "");
  const paragraph3 = newElement("p", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui beatae nulla, minus debitis sint veniam. Doloremque, praesentium ea? Repudiandae nesciunt numquam culpa rerum iure neque repellendus doloribus eum quia sed laboriosam, temporibus, deleniti voluptatem atque error quae dolore molestiae aliquid maxime esse! Quo ut tempore distinctio necessitatibus perspiciatis alias facilis vitae.", "", "", "");
  const paragraph4 = newElement("p", "Lorem ipsum dolor!", "", "", "");
  const paragraph5 = newElement("p", "Fresh pizza, straight from the oven, delivered right to your house.");
  const paragraph6 = newElement("p", "Isn't that fantastic? What are you waiting for? Call us!");

  const link1 = newElement("a", "MENU", "", "", "");
  const link2 = newElement("a", "LOCATION", "", "", "");
  const link3 = newElement("a", "CONTACT", "", "", "");

  const link4 = newElement("a", "Privacy policy", "", "", "");
  const link5 = newElement("a", "Terms of use", "", "", "");
  const link6 = newElement("a", "Customer support", "", "", "");
  const link7 = newElement("a", "Job offers", "", "", "");

  const orderButton = newElement("button", "I'M IN!", "", "", "order-button");

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


  order.appendChild(orderNow);
  order.appendChild(paragraph5);
  order.appendChild(paragraph6);
  orderButtonContainer.appendChild(orderButton);
  order.appendChild(orderButtonContainer);
  orderContainer.appendChild(order);
  content.appendChild(orderContainer);

  footerContainer.appendChild(link4);
  footerContainer.appendChild(link5);
  footerContainer.appendChild(link6);
  footerContainer.appendChild(link7);
  content.appendChild(footerContainer);
};
