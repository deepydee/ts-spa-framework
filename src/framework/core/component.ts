import { IComponent } from "./interfaces/IComponent";
import { IComponentConfig } from "./interfaces/IComponentConfig";
import getElement from "./utils/getEment";

abstract class Component implements IComponent {
    #template: string;
    #selector: string;
    #element: HTMLElement = document.createElement('div');

    constructor(config: IComponentConfig) {
        this.#template = config.template;
        this.#selector = config.selector;
    }

    render() {
        this.#element = getElement<HTMLElement>(document, this.#selector);
        this.#element.innerHTML = this.#template;
    }
}

export {
    Component,
}
