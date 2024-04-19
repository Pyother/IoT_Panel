// * Angular modules:
import { Component, ViewChild } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MatListModule } from '@angular/material/list';
import { MatIconModule } from '@angular/material/icon';
import { MatButtonModule } from '@angular/material/button';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatGridListModule } from '@angular/material/grid-list';
import { MapComponent } from '../map/map.component';
import { io } from "socket.io-client";
 
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
    MapComponent,
  ],
  templateUrl: './content-controller.component.html',
  styleUrl: './content-controller.component.css'
})
export class ContentControllerComponent {

  public socket = io("http://localhost:3000");

  constructor(public globalStateService: GlobalStateService) {
    this.socket.on("position_update", (data: any) => {
      const commands = JSON.parse(data);
      console.log("Position update: " + data);
      this.mapComponent.moveObject(commands[0], commands[1], commands[2]);
    });
  }

  @ViewChild(MapComponent) 
  public mapComponent!: MapComponent;
}
