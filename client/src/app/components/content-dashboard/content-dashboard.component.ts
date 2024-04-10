import { Component } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-content-dashboard',
  standalone: true,
  imports: [MatListModule, MatCardModule],
  templateUrl: './content-dashboard.component.html',
  styleUrl: './content-dashboard.component.css'
})
export class ContentDashboardComponent {

}
