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
import { AutofocusDirective } from './autofocus.directive';
import { DataGridComponent } from './data-grid/data-grid.component';
import { LongPage1Component } from './long-page1/long-page1.component';
import { LongPage2Component } from './long-page2/long-page2.component';
import { FooterComponent } from './footer/footer.component';
import { ToastComponent } from './toast/toast.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DashboardPageComponent,
    ComponentsPageComponent,
    ModalComponent,
    ModalButtonComponent,
    FocusOnPageChangeDirective,
    AutofocusDirective,
    DataGridComponent,
    LongPage1Component,
    LongPage2Component,
    FooterComponent,
    ToastComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
