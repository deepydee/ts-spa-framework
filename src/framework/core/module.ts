import { Component } from "./component";
import { IModule } from "./interfaces/IModule";
import { IModuleConfig } from "./interfaces/IModuleConfig";

abstract class Module implements IModule {
    public components: Component[];
    public bootstrap: Component;

    constructor(config: IModuleConfig) {
        this.components = config.components;
        this.bootstrap = config.bootstrap;
    }

    public start(): void {
        this.#initComponents();
    }

    #initComponents() {
        this.bootstrap.render();
        this.components.forEach((component) => component.render());
    }
}

export {
    Module
}
