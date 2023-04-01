export const pageLoad = () => {
    const content = document.querySelector('#content');
    const mainContainer = document.createElement('div');
    const heroImageContainer = document.createElement('div');
    const contentContainer = document.createElement('div');
    const navbar = document.createElement('div');
    const about = document.createElement('div');
    const historyContainer = document.createElement('div');
    const aboutImageContainer = document.createElement('div');
    const aboutImage = document.createElement('img');


    const pizzarioBig = document.createElement('h1');
    const pizzarioSmall = document.createElement('h2');
    const aboutUs = document.createElement('h3');
    const history = document.createElement('h3');
    const paragraph1 = document.createElement('p');
    const paragraph2 = document.createElement('p');
    const paragraph3 = document.createElement('p');
    const paragraph4 = document.createElement('p');
    const link1 = document.createElement('a');
    const link2 = document.createElement('a');
    const link3 = document.createElement('a');

    mainContainer.classList.add("main-container");
    heroImageContainer.classList.add("hero-image__container");
    contentContainer.classList.add("content-container");
    navbar.classList.add("navbar");
    about.classList.add("about-item")
    about.classList.add("about-us");

    aboutImage.setAttribute('src', 'https://arquitecturaviva.com/assets/uploads/obras/43429/av_imagen_vertical.jpeg?h=1410ee69');
    aboutImageContainer.classList.add('about-item');
    aboutImageContainer.classList.add('about-image-container');
    historyContainer.classList.add('about-item');
    historyContainer.classList.add('history-container');


    pizzarioBig.textContent = "PIZZARIO";
    pizzarioSmall.textContent = "Pizzario";
    aboutUs.textContent = "ABOUT US";
    history.textContent = "HISTORY";
    link1.textContent = "MENU";
    link2.textContent = "LOCATION";
    link3.textContent = "CONTACT";
    paragraph1.textContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui beatae nulla, minus debitis sint veniam. Doloremque, praesentium ea? Repudiandae nesciunt numquam culpa rerum iure neque repellendus doloribus eum quia se.";
    paragraph2.textContent = "Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloremque incidunt architecto, est dignissimos dolorum eos accusantium.";
    paragraph3.textContent = "Lorem ipsum dolor sit, amet consectetur adipisicing elit. Qui beatae nulla, minus debitis sint veniam. Doloremque, praesentium ea? Repudiandae nesciunt numquam culpa rerum iure neque repellendus doloribus eum quia sed laboriosam, temporibus, deleniti voluptatem atque error quae dolore molestiae aliquid maxime esse! Quo ut tempore distinctio necessitatibus perspiciatis alias facilis vitae.";
    paragraph4.textContent = "Lorem ipsum dolor!";


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
}



