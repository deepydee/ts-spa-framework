import { WFMComponent } from "../../../framework";
import { IComponentConfig } from "../../../framework/core/interfaces/IComponentConfig";
import './styles.css';

class AppHeader extends WFMComponent {
    constructor(config: IComponentConfig) {
        super(config);
    }
}

export const appHeader = new AppHeader({
    selector: 'app-header',
    template: `
    <nav class="navigation">
        <div class="nav-wrapper">
        <a href="#" class="brand-logo">Native Framework</a>
        <ul class="right hide-on-med-and-down">
            <li><a href="#">Main</a></li>
            <li><a href="#tabs">Tabs</a></li>
        </ul>
        </div>
    </nav>
    `
});
