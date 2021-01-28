import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { CNodeComponent } from './c-node/c-node.component';

@NgModule({
  declarations: [
    AppComponent,
    ConditionsComponent,
    CNodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  entryComponents: [ CNodeComponent ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
