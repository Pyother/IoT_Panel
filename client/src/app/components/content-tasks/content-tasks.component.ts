// * Angular modules:
import { Component } from '@angular/core';
import {MatListModule} from '@angular/material/list';
import {MatCardModule} from '@angular/material/card';

@Component({
  selector: 'app-content-tasks',
  standalone: true,
  imports: [MatListModule, MatCardModule],
  templateUrl: './content-tasks.component.html',
  styleUrl: './content-tasks.component.css'
})
export class ContentTasksComponent {

}
