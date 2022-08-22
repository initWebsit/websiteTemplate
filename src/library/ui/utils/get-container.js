export function resolveContainer(getContainer) {
    var container = typeof getContainer === 'function' ? getContainer() : getContainer;
    return container || document.body;
}