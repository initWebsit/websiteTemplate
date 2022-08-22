import ReactDOM from 'react-dom';
export function renderToBody(element) {
    var container = document.createElement('div');
    document.body.appendChild(container);

    function unmount() {
        var unmountResult = ReactDOM.unmountComponentAtNode(container);

        if (unmountResult && container.parentNode) {
            container.parentNode.removeChild(container);
        }
    }

    ReactDOM.render(element, container);
    return unmount;
}