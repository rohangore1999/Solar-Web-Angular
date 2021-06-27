import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  name: string;
  name2: string;
  constructor() { }

  ngOnInit(): void {
    this.name2 = this.name
  }
  

}
