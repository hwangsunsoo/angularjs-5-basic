import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit {
  @Input() name;
  @Input() age;

  @Output() next = new EventEmitter();

  constructor() { }

  ngOnInit() {
    setInterval(() => {
      this.next.emit();
    }, 1000);
  }

  click(param1: HTMLInputElement, param2: string, param3: string) {
    console.log(param1);
    console.log(param2);
    console.log(param3);
  }

}
