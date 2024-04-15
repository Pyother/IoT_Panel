// * Angular modules:
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatGridListModule } from '@angular/material/grid-list';

// * Services:
import { GlobalStateService } from '../../services/globalState.service';

@Component({
  selector: 'app-content-controller',
  standalone: true,
  imports: [
    MatListModule, 
    MatIconModule,
    CommonModule,
    MatButtonModule,
    MatTooltipModule,
    MatGridListModule,
  ],
  templateUrl: './content-controller.component.html',
  styleUrl: './content-controller.component.css'
})
export class ContentControllerComponent {
  constructor(public globalStateService: GlobalStateService) {
    
  }
}
