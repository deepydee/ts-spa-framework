import { Component } from "./component";
import { IModule } from "./interfaces/IModule";
import { IModuleConfig } from "./interfaces/IModuleConfig";

abstract class Module implements IModule {
    public components: Component[];

    constructor(config: IModuleConfig) {
        this.components = config.components;
    }

    public start(): void {
        this.#initComponents();
    }

    #initComponents() {
        this.components.forEach((component) => component.render());
    }
}

export {
    Module
}
