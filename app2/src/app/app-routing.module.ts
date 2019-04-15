import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";
import { SubRoute1Component } from "./sub-route1/sub-route1.component";
import { SubRoute2Component } from "./sub-route2/sub-route2.component";

const routes: Routes = [
  { path: "", redirectTo: "list1", pathMatch: "full" },
  { path: "list", component: SubRoute1Component },
  { path: "list1", component: SubRoute2Component }
];
//const routes: Routes = [];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
