// * Angular modules:
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatGridListModule } from '@angular/material/grid-list';
import { HttpClientModule } from '@angular/common/http';
import { StoreModule } from '@ngrx/store';

// * Components:
import { AppComponent } from './app.component'; 
import { HeaderComponent } from './header/header.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ContentComponent } from './content/content.component';

// * Reducers:
import { contentReducer } from './app.state';
import { ContentDashboardComponent } from './content-dashboard/content-dashboard.component';

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
    StoreModule.forRoot({ app: contentReducer }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
