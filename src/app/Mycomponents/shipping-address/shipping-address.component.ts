import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AuthService } from 'src/app/Services/auth.service';
import { MysheetComponent } from '../mysheet/mysheet.component';

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
  zip: string;

  constructor(private bottomSheet: MatBottomSheet, private auth: AuthService) { }

  ngOnInit(): void {
  }

  openBottomSheet(){
    this.bottomSheet.open(MysheetComponent)
  }

  onSubmit() {
    console.log(this.firstname)
    console.log(this.lastname)
    console.log(this.address)
    console.log(this.email)
    console.log(this.state)
    console.log(this.zip)

    this.auth.send_ship_request(
      {
        "firstname": this.firstname,
        "lastname": this.lastname,
        "email": this.email,
        "address": this.address,
        "state": this.state,
        "zip": this.zip
      }).subscribe()
  }

  

}
