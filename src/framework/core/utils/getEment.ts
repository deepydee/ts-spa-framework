const getElement = <T extends Element>(parent: ParentNode, selector: string): T => {
    const element = parent.querySelector<T>(selector);
    if (!element) {
        throw new TypeError(`Component with selector '${selector}' has not been found`);
    }

    return element;
};

export default getElement;
