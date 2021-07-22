import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

export interface data {
  title: string;
  price: string;
}

@Component({
  selector: 'app-addto-cart',
  templateUrl: './addto-cart.component.html',
  styleUrls: ['./addto-cart.component.css']
})
export class AddtoCartComponent implements OnInit {
  abc = [{'name':'abc'}]
  cartitems = [];
  localItem: string;

  constructor(private auth: AuthService) { 
    this.localItem = localStorage.getItem("cartitem");
    if (this.localItem == null){
      this.cartitems=[];
    }
    else{
      this.cartitems = JSON.parse(this.localItem);
    }
  }

  ngOnInit() : void{
    this.auth.getMsg().subscribe((item:data) => {
      console.log(item)

      this.cartitems.push({
        productName: item.title,
        price: item.price
      })

      console.log(this.cartitems);
      localStorage.setItem("cartitem", JSON.stringify(this.cartitems));
      
      
    })
    console.log(this.cartitems);
  }

  deleteitem(){
    this.cartitems.splice(0, 1);
    localStorage.setItem("cartitem", JSON.stringify(this.cartitems));
  }


}
