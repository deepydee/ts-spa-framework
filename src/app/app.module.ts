import { IModuleConfig } from "../framework/core/interfaces/IModuleConfig";
import { Module } from "../framework/core/module";
import { appComponent } from "./app.component";
import { appRoutes } from "./app.route";
import { appHeader } from "./common/app-header/app.header";

class AppModule extends Module {
    constructor(config: IModuleConfig) {
        super(config);
    }
}

export const appModule = new AppModule({
    components: [
        appHeader,
    ],
    bootstrap: appComponent,
    routes: appRoutes,
});
