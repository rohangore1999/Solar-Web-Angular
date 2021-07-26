import { Component, OnInit, Input, Output } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { AddtoCartComponent } from '../addto-cart/addto-cart.component';
import { AuthService } from 'src/app/Services/auth.service';

declare const filterSelection: any
declare const show_all: any

export interface data {
  title: string;
  price: string;
  qty: number;
  id:number;
  category: string;
}

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent implements OnInit {
  @Input() Fil: string
  item: any;
  localItem: string;
  cartitems=[];
  cart_len;
  datasub_len:number

  cart_length = 1;

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
    localStorage.setItem("cartitem", JSON.stringify(this.cartitems));
    // getting data from local storage
    this.localItem = localStorage.getItem("cartitem");

    // parsing localstorage data
    this.cartitems = JSON.parse(this.localItem);

    // when refresh it will send the loaded items cartlength to behaviorsubject service
    this.auth.changeDataSub(this.cartitems.length)

    // here it is asking for the length from behaviorsubject service
    // From BEHAVIORSUBJECT getting the Cartlength Because it is giving length at any page
    this.auth.currentData.subscribe(dataSub => {
      console.log("This currentData BEHAVIORSUBJECT")
      console.log(dataSub)
      this.datasub_len = dataSub
    })

    // As Nav bar is loading for all pages. When it is loaded as first time it will ask local storage for exisitng data
    // After refresh click on directly add product it was not updating. So we get items from serive
    this.auth.getMsg().subscribe((item: data) => {
      console.log("item id")
      console.log(item.id)
      
      // it will update the localstorage with the item which service send so that to load without loading the MyCART page
      this.addProductToCart(item)

      // getting data from local storage
      this.localItem = localStorage.getItem("cartitem");
     
      // parsing localstorage data
      this.localItem = JSON.parse(this.localItem);

      // it will send updated  data after remove
      this.auth.changeDataSub(this.localItem.length)
    })
      
  }

  filterSelection1(fil) {
    filterSelection('all');
  }

  openAddToCartSheet() {
    this.bottomSheet.open(AddtoCartComponent)
  }

  addProductToCart(item: data) {

    let productExist = false;

    // getting data from local storage
    this.localItem = localStorage.getItem("cartitem");
     
    // parsing localstorage data
    this.localItem = JSON.parse(this.localItem);

    // if the product already exit; then increase the quantity
    for (let i in this.cartitems) {
      if (this.cartitems[i].productName === item.title) {
        console.log("INCREASE QUANTITY ++")
        this.cartitems[i].qty++

        localStorage.setItem("cartitem", JSON.stringify(this.cartitems));
        productExist = true
        break;
      }
    }

    // if the product not exit then push
    if (!productExist) {

      console.log("PUSH")
      this.cartitems.push({
        id:item.id,
        productName: item.title,
        price: item.price,
        qty: 1,
        category:item.category
      })

      localStorage.setItem("cartitem", JSON.stringify(this.cartitems));
    }
    

  }


}
