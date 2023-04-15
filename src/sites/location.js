import { newElement } from "../newElement";

export const location = () => {
    const mainContent = document.querySelector('.main-content');
    const textContainer = newElement('div', '', '', '', 'text-container');
    const mapContainer = newElement('div', '', '', '', 'map-container');

    const locationHeader = newElement('h3', 'OUR LOCATION', '', '', '');
    const locationText = newElement('p', "Pay us a visit! We're open 24/7.", '', '', '');

    textContainer.appendChild(locationHeader);
    textContainer.appendChild(locationText);
    mapContainer.innerHTML += '<iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d229620.79658545903!2d-74.16796418157318!3d40.87211261357002!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2spl!4v1681574407950!5m2!1sen!2spl" width="70%" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>';
    mainContent.appendChild(textContainer);
    mainContent.appendChild(mapContainer);
}
