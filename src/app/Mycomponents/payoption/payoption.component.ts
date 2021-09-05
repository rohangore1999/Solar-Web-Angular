import { Component, OnInit } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MysheetComponent } from '../mysheet/mysheet.component';
import { MatSnackBar } from '@angular/material/snack-bar';
import { AuthService } from 'src/app/Services/auth.service';
import { MatTooltipModule } from '@angular/material/tooltip';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';

const info = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M12 0c-6.627 0-12 5.373-12 12s5.373 12 12 12 12-5.373 12-12-5.373-12-12-12zm-.001 5.75c.69 0 1.251.56 1.251 1.25s-.561 1.25-1.251 1.25-1.249-.56-1.249-1.25.559-1.25 1.249-1.25zm2.001 12.25h-4v-1c.484-.179 1-.201 1-.735v-4.467c0-.534-.516-.618-1-.797v-1h3v6.265c0 .535.517.558 1 .735v.999z"/></svg>`

@Component({
  selector: 'app-payoption',
  templateUrl: './payoption.component.html',
  styleUrls: ['./payoption.component.css']
})
export class PayoptionComponent implements OnInit {
  model: any
  item: any
  localItem: string;
  cartitems = [];
  cartTotal = 0;
  cartTotal_tax = 0;

  constructor(private bottomSheet: MatBottomSheet, private _snackBar: MatSnackBar, private auth: AuthService, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconLiteral('info', sanitizer.bypassSecurityTrustHtml(info));
  }

  ngOnInit(): void {
    this.localItem = localStorage.getItem("cartitem");
    // parsing localstorage data
    this.cartitems = JSON.parse(this.localItem);
    console.log("CART ITEMS: ", this.cartitems)
    // Making CartTotal
    this.cartTotal = 0
    for (let ct in this.cartitems) {
      console.log("CTs:", this.cartitems[ct])
      this.cartTotal = (this.cartitems[ct].price * this.cartitems[ct].qty) + this.cartTotal
      console.log("CARTTOTAL: ", this.cartTotal)
    }

    this.cartTotal_tax = this.cartTotal * 1.02
    console.log("CART TOTAL WITH TAX", this.cartTotal_tax)
    console.log("CART TOTAL WITHOUT TAX", this.cartTotal)

  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }

  onSubmit(data) {
    console.log(this.model)

    if (this.model == 1) {
      this.bottomSheet.open(MysheetComponent)
      this.openSnackBar('Pay through QR code or UPI id', 'OK')
    }

    if (this.model == 2) {
      console.log("open CASHFREE")
      this.auth.currentData1.subscribe(item => {
        console.log("This ITEM BEHAVIORSUBJECT")
        console.log(item)
        this.item = item
      })

      this.auth.otherPayment(this.item).subscribe()
    }
  }
}