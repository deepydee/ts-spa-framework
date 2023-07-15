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
        <div>
            <h4>App component works!</h4>
        </div>
    `
});
