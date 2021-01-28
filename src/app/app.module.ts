import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ConditionsComponent } from './conditions/conditions.component';
import { CNodeComponent } from './c-node/c-node.component';
import {FormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ConditionsComponent,
    CNodeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  entryComponents: [ CNodeComponent ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
