import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";

import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { APP_BASE_HREF } from "@angular/common";
import { SubRoute1Component } from "./sub-route1/sub-route1.component";
import { SubRoute2Component } from "./sub-route2/sub-route2.component";
import { BrowserAnimationsModule } from "@angular/platform-browser/animations";

@NgModule({
  declarations: [AppComponent, SubRoute1Component, SubRoute2Component],
  imports: [BrowserModule, AppRoutingModule, BrowserAnimationsModule],
  providers: [{ provide: APP_BASE_HREF, useValue: "/app2" }],
  bootstrap: [AppComponent]
})
export class AppModule {}
