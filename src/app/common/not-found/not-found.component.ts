import { WFMComponent } from "../../../framework";
import { IComponentConfig } from "../../../framework/core/interfaces/IComponentConfig";
import './styles.css';

class NotFoundComponent extends WFMComponent {
    constructor(config: IComponentConfig) {
        super(config);
    }
}

export const notFoundComponent = new NotFoundComponent({
    selector: 'app-not-found',
    template: `
    <div class="nf-wrapper">
        <div>
            <h2 class="red darken-1">Page Not Found</h2>
            <a href="#">Main Page</a>
        </div>
    </div>
    `
});
