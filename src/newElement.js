export const newElement = (elementName, textContent, attribute, attributeValue, ...classNames) => {
    const element = document.createElement(elementName);
    for(let i = 0; i < classNames.length; i++) {
        if(classNames[i] != "") {
            element.classList.add(classNames[i]);
        }
    }
    if(attribute != "") {
        element.setAttribute(attribute, attributeValue);
    }
    element.textContent = textContent;

    return element;
}

