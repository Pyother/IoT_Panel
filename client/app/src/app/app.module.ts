import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatGridListModule} from '@angular/material/grid-list';

import { AppComponent } from './app.component'; 
import { HeaderComponent } from './header/header.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatGridListModule,
    HeaderComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
