import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent implements OnInit {
  title = 'IoT Panel';
  isLargeScreen = false;

  constructor(private breakpointObserver: BreakpointObserver) {}

  ngOnInit(): void {
    this.breakpointObserver.observe([
      Breakpoints.XLarge,
      Breakpoints.Large,
      '(min-width: 768px)'
    ]).subscribe(result => {
      this.isLargeScreen = result.matches;
    });
  }
}
