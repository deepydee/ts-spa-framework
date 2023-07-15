import { router } from "..";
import { Component } from "./component";
import { IModule } from "./interfaces/IModule";
import { IModuleConfig } from "./interfaces/IModuleConfig";
import { IRoute } from "./interfaces/IRoute";
import getElement from "./utils/getEment";

abstract class Module implements IModule {
    public components: Component[];
    public bootstrap: Component;
    public routes: IRoute[];

    constructor(config: IModuleConfig) {
        this.components = config.components;
        this.bootstrap = config.bootstrap;
        this.routes = config.routes;
    }

    public start(): void {
        this.#initComponents();

        if (this.routes) {
            this.#initRoutes();
        }
    }

    #initComponents(): void {
        this.bootstrap.render();
        this.components.forEach(this.#renderComponent.bind(this));
    }

    #initRoutes(): void {
        window.addEventListener('hashchange', this.#renderRoute.bind(this));
        this.#renderRoute();
    }

    #renderRoute(): void {
        const url = router.getUrl();
        let route = this.routes.find((route) => route.path === url);

        if (!route) {
            route = this.routes.find((route) => route.path === '**');
        }

        if (route) {
            const routerOutlet = getElement<HTMLUnknownElement>(document, 'router-outlet');
            // routerOutlet.innerHTML = `<${route.component.selector}></${route.component.selector}>`;
            const routeComponent = document.createElement(route.component.selector);
            routerOutlet.innerHTML = '';
            routerOutlet.append(routeComponent);
            this.#renderComponent(route.component);
        }
    }

    #renderComponent(component: Component) {
        component.render();
    }
}

export {
    Module
}
