import { Component } from "../../framework/core/component";
import { IComponentConfig } from "../../framework/core/interfaces/IComponentConfig";

class HomePageComponent extends Component {
    constructor(config: IComponentConfig) {
        super(config);
    }
}

export const homePageComponent = new HomePageComponent({
    selector: 'app-home-page',
    template: `<h1>Home Page</h1>
    <div class="row">
    <div class="col s12 m6">
      <div class="card blue-grey darken-1">
        <div class="card-content white-text">
          <span class="card-title">Card Title</span>
          <p>I am a very simple card. I am good at containing small bits of information.
          I am convenient because I require little markup to use effectively.</p>
        </div>
        <div class="card-action">
          <a href="#">Next</a>
        </div>
        </div>
         </div>
     </div>
    `,
});
