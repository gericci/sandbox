import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { ComponentsPageComponent } from './components-page/components-page.component';
import { LongPage1Component } from './long-page1/long-page1.component';
import { LongPage2Component } from './long-page2/long-page2.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardPageComponent, data: {title: 'Dashboard'}},
  { path: 'components', component: ComponentsPageComponent, data: {title: 'All Components'}},
  { path: 'long-page-1', component: LongPage1Component, data: {title: 'Long Page 1'}},
  { path: 'long-page-2', component: LongPage2Component, data: {title: 'Long Page 2'}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {
    useHash: false,
    anchorScrolling: 'enabled'
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
