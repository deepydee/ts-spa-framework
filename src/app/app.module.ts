import { IModuleConfig } from "../framework/core/interfaces/IModuleConfig";
import { Module } from "../framework/core/module";
import { appComponent } from "./app.component";

class AppModule extends Module {
    constructor(config: IModuleConfig) {
        super(config);
    }
}

export const appModule = new AppModule({
    components: [
        appComponent,
    ]
});
