import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-sample2',
  templateUrl: './sample2.component.html',
  styleUrls: ['./sample2.component.css']
})
export class Sample2Component implements OnInit {
  name = 'sunsoo';

  constructor() { }

  ngOnInit() {

    setTimeout(() => {
      this.name = 'steve';
    }, 2000);

  }

  click() {
    this.name = 'hwangsunsoo';
  }

}
