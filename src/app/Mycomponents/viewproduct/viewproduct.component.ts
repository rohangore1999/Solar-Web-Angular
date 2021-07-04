import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { ActivatedRoute } from '@angular/router';
import datas from '../../db.json'
import { MysheetComponent } from '../mysheet/mysheet.component';

@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {
  productID = 0
  datas:[] = datas

  constructor( private activatedRoute: ActivatedRoute, private bottomSheet: MatBottomSheet) { }
  
  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.productID = data.id;
      console.log(data.id);

      console.log(this.datas)
    })
  }

  openBottomSheet(){
    this.bottomSheet.open(MysheetComponent)
  }

}
