import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-developer',
  templateUrl: './developer.component.html',
  styleUrls: ['./developer.component.css']
})
export class DeveloperComponent implements OnInit {

  name;

  constructor(private route: ActivatedRoute) {
    // this.name = this.route.snapshot.paramMap.get('name'); // 동기
    this.name = route.params.map(p => p.name); // 비동기
  }

  ngOnInit() {
  }

}
