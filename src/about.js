import { newElement } from "./newElement.js";

export const about = () => {
  const mainContent = document.querySelector('.main-content');
  // *** ELEMENT CREATION
  // SYNTAX:
  // const x = newElement(elementName, textContent, attribute, attributeValue, ...classNames);
  const aboutContainer = newElement("div", "", "", "", "about-container");
  const contentContainer = newElement("div", "", "", "", "content-container");
  const about = newElement("div", "", "", "", "about-item", "about-us");
  const historyContainer = newElement("div", "", "", "", "about-item", "history-container")
  const aboutImageContainer = newElement("div", "", "", "", "about-item", "about-image-container");
  const orderContainer = newElement("div", "", "", "", "order-container");
  const order = newElement("div", "", "", "", "order");
  const orderButtonContainer = newElement("div", "", "", "", "order-button-container");

  const aboutImage = newElement("img", "", "src", "https://arquitecturaviva.com/assets/uploads/obras/43429/av_imagen_vertical.jpeg?h=1410ee69", "");

  const aboutUs = newElement("h3", "ABOUT US", "", "", "");
  const history = newElement("h3", "HISTORY", "", "", "");
  const orderNow = newElement("h3", "ORDER NOW", "", "", "");

  const paragraph1 = newElement("p", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui beatae nulla, minus debitis sint veniam. Doloremque, praesentium ea? Repudiandae nesciunt numquam culpa rerum iure neque repellendus doloribus eum quia se.", "", "", "");
  const paragraph2 = newElement("p", "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque incidunt architecto, est dignissimos dolorum eos accusantium.", "", "", "");
  const paragraph3 = newElement("p", "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui beatae nulla, minus debitis sint veniam. Doloremque, praesentium ea? Repudiandae nesciunt numquam culpa rerum iure neque repellendus doloribus eum quia sed laboriosam, temporibus, deleniti voluptatem atque error quae dolore molestiae aliquid maxime esse! Quo ut tempore distinctio necessitatibus perspiciatis alias facilis vitae.", "", "", "");
  const paragraph4 = newElement("p", "Lorem ipsum dolor!", "", "", "");
  const paragraph5 = newElement("p", "Fresh pizza, straight from the oven, delivered right to your house.");
  const paragraph6 = newElement("p", "Isn't that fantastic? What are you waiting for? Call us!");


  const orderButton = newElement("button", "I'M IN!", "", "", "order-button");

  // ***


  // APPENDING DOM ELEMENTS
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

  aboutContainer.appendChild(contentContainer);
  mainContent.appendChild(aboutContainer);

  order.appendChild(orderNow);
  order.appendChild(paragraph5);
  order.appendChild(paragraph6);
  orderButtonContainer.appendChild(orderButton);
  order.appendChild(orderButtonContainer);
  orderContainer.appendChild(order);
  mainContent.appendChild(orderContainer);
};
