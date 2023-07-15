import { IModule } from "./interfaces/IModule";

export function bootstrap(module: IModule) {
    module.start();
}
