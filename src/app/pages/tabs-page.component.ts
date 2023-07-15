import { Component } from "../../framework/core/component";
import { IComponentConfig } from "../../framework/core/interfaces/IComponentConfig";

class TabsPageComponent extends Component {
    constructor(config: IComponentConfig) {
        super(config);
    }
}

export const tabsPageComponent = new TabsPageComponent({
    selector: 'app-tabs-page',
    template: `<h1>Tabs Page</hq>`,
});
