// * Angular modules
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common'; 

// * Components:
import { ContentControllerComponent } from '../content-controller/content-controller.component';
import { ContentTasksComponent } from '../content-tasks/content-tasks.component';
import { ContentDashboardComponent } from '../content-dashboard/content-dashboard.component';

// * Services:
import { ModeService } from '../../services/mode.service';

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
  constructor(public modeService: ModeService) {
    console.log('Content: mode service: ' + this.modeService.mode);
  }
}
