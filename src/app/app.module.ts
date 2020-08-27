import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HttpClientModule} from '@angular/common/http';

import { AppComponent } from './app.component';
import { G1Component } from './g1/g1.component';
import { G2Component } from './g2/g2.component';
import { G3Component } from './g3/g3.component';
import { G4Component } from './g4/g4.component';
import { G5Component } from './g5/g5.component';
import { G6Component } from './g6/g6.component';
import { G7Component } from './g7/g7.component';
import { G8Component } from './g8/g8.component';
import { G9Component } from './g9/g9.component';



@NgModule({
  declarations: [
    AppComponent,
    G1Component,
    G2Component,
    G3Component,
    G4Component,
    G5Component,
    G6Component,
    G7Component,
    G8Component,
    G9Component
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

