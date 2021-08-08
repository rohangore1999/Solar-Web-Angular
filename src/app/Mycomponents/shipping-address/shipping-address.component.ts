import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AuthService } from 'src/app/Services/auth.service';
import { MysheetComponent } from '../mysheet/mysheet.component';
import { AddtoCartComponent } from '../addto-cart/addto-cart.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { FormControl, Validators } from '@angular/forms';

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

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  formName: any;

  constructor(private bottomSheet: MatBottomSheet, private auth: AuthService, private _snackBar: MatSnackBar) { }

  ngOnInit(): void {
  }

  openBottomSheet(){
    this.bottomSheet.open(MysheetComponent)
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
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  

}
