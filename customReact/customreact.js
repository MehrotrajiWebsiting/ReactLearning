function customRender(reactElement, mainContainer){
    const domElement = document.createElement(reactElement.type);
    domElement.innerHTML = reactElement.children;
    for (const prop in reactElement.props) {
        if (prop === 'children') continue;
        domElement.setAttribute(prop, reactElement.props[prop]);
    }
    mainContainer.appendChild(domElement);
}

const reactElement = {
    // tag name
    type : 'a',
    // attributes
    props : {
        href : 'https://google.com',
        target : '_blank'
    },
    // text
    children : 'Google'
};

const mainContainer = document.getElementById('root');

customRender(reactElement, mainContainer)