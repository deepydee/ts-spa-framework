import { IComponent } from "./interfaces/IComponent";
import { IComponentConfig } from "./interfaces/IComponentConfig";
import getElement from "./utils/getEment";

abstract class Component implements IComponent {
    #template: string;
    #selector: string;

    constructor(config: IComponentConfig) {
        this.#template = config.template;
        this.#selector = config.selector;
    }

    render() {
        const element = getElement<HTMLElement>(document, this.#selector);
        element.innerHTML = this.#template;
    }
}

export {
    Component,
}
