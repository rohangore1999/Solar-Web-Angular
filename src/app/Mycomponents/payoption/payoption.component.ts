import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MysheetComponent } from '../mysheet/mysheet.component';
import { MatSnackBar } from '@angular/material/snack-bar';

@Component({
  selector: 'app-payoption',
  templateUrl: './payoption.component.html',
  styleUrls: ['./payoption.component.css']
})
export class PayoptionComponent implements OnInit {
  model:any
  constructor(private bottomSheet: MatBottomSheet, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  onSubmit(data) {
    console.log(this.model)

    if(this.model == 1){
      this.bottomSheet.open(MysheetComponent)
      this.openSnackBar('Pay through QR code or UPI id', 'OK')
    }

    if(this.model == 2){
      console.log("open CASHFREE")
    }
    
  }

  

}
