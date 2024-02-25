import { Component, OnInit } from '@angular/core';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { DataService } from './data.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
})

export class AppComponent implements OnInit {
  title = 'IoT Panel';
  isLargeScreen = false;

  constructor(private breakpointObserver: BreakpointObserver, private dataService: DataService) {}

  ngOnInit(): void {

    this.breakpointObserver.observe([
      Breakpoints.XLarge,
      Breakpoints.Large,
      '(min-width: 768px)'
    ]).subscribe(result => {
      this.isLargeScreen = result.matches;
    });

    this.dataService.getInfo().subscribe(data => {
      console.log(data); 
    });
    
  }
}
