import "core-js/es7/reflect";
import { enableProdMode, NgZone } from "@angular/core";

import { platformBrowserDynamic } from "@angular/platform-browser-dynamic";
import { Router } from "@angular/router";
import { AppModule } from "./app/app.module";
import { environment } from "./environments/environment";
import singleSpaAngular from "single-spa-angular";
import { ɵAnimationEngine as AnimationEngine } from "@angular/animations/browser";

if (environment.production) {
  enableProdMode();
}

export default singleSpaAngular({
  bootstrapFunction: () => platformBrowserDynamic().bootstrapModule(AppModule),
  template: "<app2-root />",
  Router,
  NgZone: NgZone,
  AnimationEngine
});
