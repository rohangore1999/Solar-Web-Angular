import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AuthService } from 'src/app/Services/auth.service';
import { MysheetComponent } from '../mysheet/mysheet.component';
import { AddtoCartComponent } from '../addto-cart/addto-cart.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, Validators } from '@angular/forms';
import { PayoptionComponent } from '../payoption/payoption.component';

@Component({
  selector: 'app-shipping-address',
  templateUrl: './shipping-address.component.html',
  styleUrls: ['./shipping-address.component.css']
})
export class ShippingAddressComponent implements OnInit {
  firstname: string;
  lastname: string;
  address: string;
  email: string;
  state: string;
  zip: number;
  phone: string;
  localItem: string;
  link: any
  item:any

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  formName: any;

  constructor(private bottomSheet: MatBottomSheet, private auth: AuthService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  openBottomSheet(){
    this.bottomSheet.open(PayoptionComponent)
  }

  onSubmit() {
    // loading local storage data
    // getting data from local storage
    this.localItem = localStorage.getItem("cartitem");

    // parsing localstorage data
    this.localItem = JSON.parse(this.localItem)
    console.log("local storage data")
    console.log(this.localItem)

    console.log(this.firstname)
    console.log(this.lastname)
    console.log(this.address)
    console.log(this.email)
    console.log(this.state)
    console.log(this.zip)
    console.log(this.phone)

    this.auth.send_ship_request(
      {
        "firstname": this.firstname,
        "lastname": this.lastname,
        "email": this.email,
        "address": this.address,
        "state": this.state,
        "zip": this.zip,
        "phone":this.phone,
        "localstorage":this.localItem
      }).subscribe()

      this.auth.changeDataSub1({
        "firstname": this.firstname,
        "lastname": this.lastname,
        "email": this.email,
        "address": this.address,
        "state": this.state,
        "zip": this.zip,
        "phone":this.phone,
        "localstorage":this.localItem
      })

      this.auth.currentData1.subscribe(item => {
        console.log("This ITEM BEHAVIORSUBJECT")
        console.log(item)
        this.item = item
      })

      this.auth.otherPayment(this.item).subscribe(link => {
         this.link = link['data']
         console.log("Payment Link", this.link)
         this.auth.changeDataSub2({
           "paymentlink":this.link
         })
      })
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  

}
