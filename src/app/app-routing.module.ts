import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPageComponent } from "./dashboard-page/dashboard-page.component";
import { ComponentsPageComponent } from "./components-page/components-page.component";

const routes: Routes = [
  { path: "dashboard", component: DashboardPageComponent, data: {title: "Dashboard"}},
  { path: "components", component: ComponentsPageComponent, data: {title: "All Components"}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
