import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DashboardPageComponent } from './dashboard-page/dashboard-page.component';
import { ComponentsPageComponent } from './components-page/components-page.component';
import { ModalComponent } from './modal/modal.component';
import { ModalButtonComponent } from './modal/modal-button/modal-button.component';
import { FocusOnPageChangeDirective } from './focus-on-page-change.directive';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardPageComponent,
    ComponentsPageComponent,
    ModalComponent,
    ModalButtonComponent,
    FocusOnPageChangeDirective,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
