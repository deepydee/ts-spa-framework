const getElement = <T extends Element>(parent: ParentNode, selector: string): T => {
    const element = parent.querySelector<T>(selector);
    if (!element) {
        throw new TypeError();
    }

    return element;
};

export default getElement;
