import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AuthService } from 'src/app/Services/auth.service';
import { MysheetComponent } from '../mysheet/mysheet.component';
import { ShippingAddressComponent } from '../shipping-address/shipping-address.component';

export interface data {
  id: number;
  title: string;
  price: number;
  qty: number;
  category: string;
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
  cartTotal = 0;

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
      this.addProductToCart(item)
    })

    this.cartitems.forEach(item => {
      this.cartTotal += (item.qty * item.price)
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
        id: item.id,
        productName: item.title,
        price: item.price,
        qty: 1,
        category: item.category
      })

      localStorage.setItem("cartitem", JSON.stringify(this.cartitems));
    }


  }

  openBottomSheet() {
    this.bottomSheet.open(ShippingAddressComponent)
  }

  dec_qty(i: number) {
    // reseting cartTotal 
    // this.cartTotal = 0;
    console.log("decr qty of")
    console.log(i)
    console.log("cart total before dec: ", this.cartTotal)

    // getting data from local storage
    this.localItem = localStorage.getItem("cartitem");

    // parsing localstorage data
    this.cartitems = JSON.parse(this.localItem);

    for (let ci in this.cartitems) {

      if (this.cartitems[ci].id == i) {

        if (this.cartitems[ci].qty-- <= 1) {
          console.log("less than 0")
          // this.cartitems[ci].qty = 0
          this.remove_itm(this.cartitems[ci])

          localStorage.setItem("cartitem", JSON.stringify(this.cartitems));

          // getting data from local storage
          this.localItem = localStorage.getItem("cartitem");

          // parsing localstorage data
          this.cartitems = JSON.parse(this.localItem);

          // Making CartTotal
          for (let ct in this.cartitems) {
            console.log("CTs quant less than 1:", this.cartitems[ct])
            this.cartTotal = (this.cartitems[ct].price * this.cartitems[ct].qty) + this.cartTotal
          }
        }
        // updating local storage
        localStorage.setItem("cartitem", JSON.stringify(this.cartitems));
      }

    }

    // getting data from local storage
    this.localItem = localStorage.getItem("cartitem");

    // parsing localstorage data
    this.cartitems = JSON.parse(this.localItem);

    console.log("CART ITEMS: ", this.cartitems)
    // Making CartTotal
    this.cartTotal = 0
    for (let ct in this.cartitems) {
      console.log("CTs:", this.cartitems[ct])
      this.cartTotal = (this.cartitems[ct].price * this.cartitems[ct].qty) + this.cartTotal
      console.log("CARTTOTAL: ",this.cartTotal)
    }
     
    // getting data from local storage
    this.localItem = localStorage.getItem("cartitem");

    // // Making CartTotal
    // this.cartitems.forEach(items => {
    //   this.cartTotal = (items.qty * items.price) - this.cartTotal
    // })
    // console.log("cart total after dec: ", this.cartTotal)
  }

  inc_qty(i: number) {
    // reseting cartTotal 
    this.cartTotal = 0;

    console.log("incr qty of: ")
    console.log(i)
    for (let ci in this.cartitems) {
      if (this.cartitems[ci].id == i) {
        this.cartitems[ci].qty++
        // updating local storage
        localStorage.setItem("cartitem", JSON.stringify(this.cartitems));
      }

    }

    // Making CartTotal
    this.cartitems.forEach(items => {
      this.cartTotal += (items.qty * items.price)
    })
  }

  remove_itm(i: number) {
    // reseting cartTotal 
    this.cartTotal = 0;

    for (let ci in this.cartitems) {
      var idx = this.cartitems.indexOf(i)
      if (idx > -1) {
        this.cartitems.splice(idx, 1);
        localStorage.setItem("cartitem", JSON.stringify(this.cartitems));

        // getting the data
        this.localItem = localStorage.getItem("cartitem");

        // parsing localstorage data
        this.localItem = JSON.parse(this.localItem)

        this.cart_length = this.localItem.length
        this.auth.changeDataSub(this.cart_length)
      }

      // Making CartTotal
      this.cartitems.forEach(items => {
        this.cartTotal -= (items.qty * items.price)
      })

    }
  }
}
