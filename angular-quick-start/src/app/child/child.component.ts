import { Component, OnInit, OnChanges, AfterContentInit, AfterViewInit, AfterContentChecked, AfterViewChecked, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.css']
})
export class ChildComponent implements OnInit, OnChanges, AfterContentInit, AfterViewInit, AfterContentChecked, AfterViewChecked {
  @Input() name;
  @Input() age;

  @Output() next = new EventEmitter();

  constructor() {
    console.log('constructor');
  }

  ngOnChanges() {
    console.error('ngOnChanges');
  }

  ngOnInit() {
    console.log('ngOnInit');
    setInterval(() => {
      this.next.emit();
    }, 1000);
  }

  ngAfterContentInit() {
    console.log('ngAfterContentInit');
  }

  ngAfterViewInit() {
    console.log('ngAfterViewInit');
  }

  ngAfterContentChecked() {
    console.log('ngAfterContentChecked');
  }

  ngAfterViewChecked() {
    console.log('ngAfterViewChecked');
  }

  click(param1: HTMLInputElement, param2: string, param3: string) {
    console.log(param1);
    console.log(param2);
    console.log(param3);
  }

}
