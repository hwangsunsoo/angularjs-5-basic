import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'angular';
  names = [
    '이름-A',
    '이름-B',
    '이름-C',
  ];

  custom() {
    console.log('custom');
  }
}
