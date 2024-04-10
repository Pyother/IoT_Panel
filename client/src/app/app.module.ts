// * Angular modules:
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';

// * Components:
import { AppComponent } from './app.component'; 
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { ContentComponent } from './components/content/content.component';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    BrowserModule,
    MatFormFieldModule,
    MatGridListModule,
    HttpClientModule,
    HeaderComponent,
    NavigationComponent,
    ContentComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
