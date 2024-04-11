// * Angular modules:
import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
 
// * Components:
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

// * Services:
import { ModeService } from '../../services/mode.service';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [MatButtonModule, MatIconModule, CommonModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})

export class NavigationComponent {
  constructor(public modeService: ModeService) {
    this.modeService.mode = 'dashboard';
  }
}
