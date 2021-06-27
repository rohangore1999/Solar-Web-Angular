import { Component, OnInit, Input } from '@angular/core';

declare const filterSelection:any
declare const show_all:any

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() Fil: string

  constructor() { }

  ngOnInit(): void {
  }

  filterSelection1(fil){
    filterSelection('all');
  }

}
