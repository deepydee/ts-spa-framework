import { Component } from "../component";
import { IRoute } from "./IRoute";

export interface IModuleConfig {
    components: Component[];
    bootstrap: Component;
    routes: IRoute[];
}
