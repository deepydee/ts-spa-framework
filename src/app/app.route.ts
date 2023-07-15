import { IRoute } from "../framework/core/interfaces/IRoute";
import { notFoundComponent } from "./common/not-found/not-found.component";
import { homePageComponent } from "./pages/home-page.component";
import { tabsPageComponent } from "./pages/tabs-page.component";

export const appRoutes: IRoute[] = [
    { path: '', component: homePageComponent },
    { path: 'tabs', component: tabsPageComponent },
    { path: '**', component: notFoundComponent },
];
