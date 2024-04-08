// *Angular modules:
import { Component } from '@angular/core';
import { Store, select } from '@ngrx/store';
import { AppState } from '../app.state';
import { switchContent } from '../app.state';
import { Observable } from 'rxjs';

// * Components:
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

@Component({
  selector: 'app-navigation',
  standalone: true,
  imports: [MatButtonModule, MatIconModule],
  templateUrl: './navigation.component.html',
  styleUrl: './navigation.component.css'
})

export class NavigationComponent {
  mode: Observable<string>;

  constructor(private store: Store<AppState>) {
    this.mode = store.select('currentContent');
    console.log("Navigation mode: " + this.mode);
  }

  switchContent(currentContent: string) {
    this.store.dispatch(switchContent(currentContent));
    console.log('Switched content to: ' + currentContent);
  }
}
