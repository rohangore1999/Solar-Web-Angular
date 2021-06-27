import { Component, Input, OnInit } from '@angular/core';

declare const filterSelection: any

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  @Input() Fil: string
  btnshow:boolean = true

  

  activeButton
  
  constructor() { }

  ngOnInit(): void {
    console.log(this.btnshow)
  }

  tabIndex = 0;
  onTabClick(index){
      this.tabIndex = index;
  }

  filterSelection1(fil) {
    filterSelection(fil)
  }

  setActive (buttonName) {
    this.activeButton = buttonName;
  }
  isActive (buttonName) {
    return this.activeButton === buttonName;
  }

}
