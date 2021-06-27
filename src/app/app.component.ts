import { Component, Input, Output, OnInit , EventEmitter } from '@angular/core';

declare const filterSelection:any
declare const show_all:any

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @Input() Fil: string
  @Output() SETACTIVE: EventEmitter<any> = new EventEmitter();
  @Output() ISACTIVE: EventEmitter<any> = new EventEmitter();

  title = 'solar-app';

  filterSelection1(fil){
    filterSelection('all');
  }

  Active(active){
    this.SETACTIVE.emit(active)
  }


}
