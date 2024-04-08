// * Angular modules
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 
import { Store, select } from '@ngrx/store';
import { AppState } from '../app.state';
import { Observable } from 'rxjs';

// * Components:
import { ContentControllerComponent } from '../content-controller/content-controller.component';
import { ContentTasksComponent } from '../content-tasks/content-tasks.component';
import { ContentDashboardComponent } from '../content-dashboard/content-dashboard.component';

@Component({
  selector: 'app-content',
  standalone: true,
  imports: 
  [ 
    ContentControllerComponent, 
    ContentTasksComponent, 
    ContentDashboardComponent,
    CommonModule
  ],
  templateUrl: './content.component.html',
  styleUrl: './content.component.css'
})

export class ContentComponent {
  mode: string = '';

  constructor(private store: Store<AppState>) {
    this.store.pipe(select(state => state.currentContent)).subscribe(mode => {
      this.mode = mode;
      console.log("Initial state: " + this.mode);
    });
  }
}
