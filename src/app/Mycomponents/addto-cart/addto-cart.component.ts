import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AuthService } from 'src/app/Services/auth.service';
import { MysheetComponent } from '../mysheet/mysheet.component';
import { ShippingAddressComponent } from '../shipping-address/shipping-address.component';

export interface data {
  title: string;
  price: string;
  qty: number;
}

@Component({
  selector: 'app-addto-cart',
  templateUrl: './addto-cart.component.html',
  styleUrls: ['./addto-cart.component.css']
})
export class AddtoCartComponent implements OnInit {
  cartitems = [];
  localItem: string;
  len: number;
  cart_length
  qty = 0;

  constructor(private auth: AuthService, private bottomSheet: MatBottomSheet) {
    this.localItem = localStorage.getItem("cartitem");
    if (this.localItem == null) {
      this.cartitems = [];

    }
    else {
      this.cartitems = JSON.parse(this.localItem);
    }
  }

  ngOnInit(): void {
    this.auth.getMsg().subscribe((item: data) => {
      console.log(item)
      this.addProductToCart(item)
    })
  }

  addProductToCart(item: data) {

    let productExist = false;

    this.localItem = localStorage.getItem("cartitem");
    this.localItem = JSON.parse(this.localItem);

    for (let i in this.cartitems) {
      if (this.cartitems[i].productName === item.title) {
        console.log("INCREASE QUANTITY")
        this.cartitems[i].qty++

        localStorage.setItem("cartitem", JSON.stringify(this.cartitems));
        productExist = true
        break;
      }
    }

    if (!productExist) {

      console.log("PUSH")
      this.cartitems.push({
        productName: item.title,
        price: item.price,
        qty: 1,
      })

      localStorage.setItem("cartitem", JSON.stringify(this.cartitems));
    }


  }

  deleteitem() {
    if (this.cartitems[0].qty < 2) {
      console.log("quantity equal to 1!!")
      this.cartitems.splice(0, 1);

      // updating local storage
      localStorage.setItem("cartitem", JSON.stringify(this.cartitems));
      // getting data from local storage
      this.localItem = localStorage.getItem("cartitem");

      // parsing localstorage data
      this.localItem = JSON.parse(this.localItem)

      this.cart_length = this.localItem.length
      this.auth.changeDataSub(this.cart_length)
    }


    if (this.cartitems[0].qty > 1) {
      console.log("quantity greater!!")
      this.cartitems[0].qty--

      // updating local storage
      localStorage.setItem("cartitem", JSON.stringify(this.cartitems));
      // getting data from local storage
      this.localItem = localStorage.getItem("cartitem");

      // parsing localstorage data
      this.localItem = JSON.parse(this.localItem)

      this.cart_length = this.localItem.length
      this.auth.changeDataSub(this.cart_length)
    }

    // updating local storage
    localStorage.setItem("cartitem", JSON.stringify(this.cartitems));
    // getting data from local storage
    this.localItem = localStorage.getItem("cartitem");

    // parsing localstorage data
    this.localItem = JSON.parse(this.localItem)

    this.cart_length = this.localItem.length
    this.auth.changeDataSub(this.cart_length)
  }

  openBottomSheet() {
    this.bottomSheet.open(ShippingAddressComponent)
  }


}
