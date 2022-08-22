import { createPortal } from 'react-dom';
import { resolveContainer } from './get-container';
export function renderToContainer(getContainer, node) {
    if (getContainer) {
        var container = resolveContainer(getContainer);
        return /*#__PURE__*/createPortal(node, container);
    }

    return node;
}