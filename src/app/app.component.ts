import { WFMComponent } from "../framework";
import { IComponentConfig } from "../framework/core/interfaces/IComponentConfig";

class AppComponent extends WFMComponent {
    constructor(config: IComponentConfig) {
        super(config);
    }
}

export const appComponent = new AppComponent({
    selector: '#app',
    template: `
        <app-header></app-header>
        <router-outlet></router-outlet>
    `
});
