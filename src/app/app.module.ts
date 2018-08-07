import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { MyformsComponent } from './myforms/myforms.component';


import {
  FormsModule,
  ReactiveFormsModule,
} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    MyformsComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
