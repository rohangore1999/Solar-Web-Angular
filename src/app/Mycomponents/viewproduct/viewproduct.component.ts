import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { MatBottomSheet } from '@angular/material/bottom-sheet';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import datas from '../../db.json'
import { ShippingAddressComponent } from '../shipping-address/shipping-address.component';
import { AuthService } from 'src/app/Services/auth.service';
import { AddtoCartComponent } from '../addto-cart/addto-cart.component';



const low_light = `
<svg width="24" height="24" xmlns="http://www.w3.org/2000/svg" fill-rule="evenodd" clip-rule="evenodd"><path d="M12.447 24h-.894c-.235 0-.461-.079-.616-.218l-1.187-.782h4.5l-1.188.782c-.154.139-.38.218-.615.218zm1.845-2h-4.558c-.276 0-.5-.223-.5-.5 0-.276.224-.5.5-.5h4.558c.276 0 .5.224.5.5 0 .277-.224.5-.5.5zm.494-2h-5.572c0-3.949-3.214-5.659-3.214-9.228 0-3.723 2.998-5.772 5.997-5.772 3.001 0 6.003 2.052 6.003 5.772 0 3.569-3.214 5.224-3.214 9.228zm-2.789-9l.75-3h-2l-1.26 5h2.505l-.75 3h2l1.245-5h-2.49zm7.742 1.771l2.699 1.224-.827 1.822-2.596-1.177c.301-.6.55-1.215.724-1.869zm-15.477 0c.173.664.415 1.261.719 1.87l-2.592 1.176-.827-1.822 2.7-1.224zm18.738-1.771h-3.003c.021-.67-.04-1.345-.185-2h3.188v2zm-18.997 0h-3.003v-2h3.187c-.143.654-.203 1.326-.184 1.995v.005zm14.04-5.428l2.485-1.763 1.158 1.631-2.505 1.777c-.292-.582-.67-1.132-1.138-1.645zm-12.087-.001c-.46.503-.837 1.05-1.138 1.645l-2.503-1.776 1.157-1.631 2.484 1.762zm8.869-2.092l1.327-2.69 1.793.885-1.327 2.69c-.557-.367-1.161-.664-1.793-.885zm-5.651-.002c-.631.22-1.236.516-1.794.884l-1.326-2.687 1.794-.885 1.326 2.688zm3.826-.416c-.668-.078-1.309-.082-2-.003v-3.058h2v3.061z"/></svg>
`;

const power_tolerace = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M0 19h21v-14h-21v14zm9.298-7.21v-3.79l8.535 6.248-5.878-1.728v3.48l-8.789-5.984 6.132 1.774zm14.702-2.54v4.5c0 .69-.56 1.25-1.25 1.25h-.75v-7h.75c.69 0 1.25.56 1.25 1.25z"/></svg>
`
const extreme_weater = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M2.396 9h-2.396v-2h2.396v2zm7.604-6.458v-2.542h-2v2.542h2zm-4.793.876l-1.859-1.859-1.414 1.414 1.859 1.859 1.414-1.414zm9.222-2.156l-1.875 1.875 1.414 1.414 1.875-1.875-1.414-1.414zm-11.46 10.667l-2.053 1.773 1.303 1.517 2.053-1.773-1.303-1.517zm21.031 2.793c0 2.362-1.949 4.278-4.354 4.278h-10.292c-2.405 0-4.354-1.916-4.354-4.278 0-.77.211-1.49.574-2.113-.965-.907-1.574-2.18-1.574-3.609 0-2.762 2.238-5 5-5 1.328 0 2.523.528 3.414 1.376.648-.24 1.35-.376 2.086-.376 3.172 0 5.753 2.443 5.922 5.516 2.033.359 3.578 2.105 3.578 4.206zm-18-5.722c0 .86.37 1.628.955 2.172.484-.316 1.029-.551 1.623-.656.089-1.61.844-3.042 1.994-4.046-.459-.288-.99-.47-1.572-.47-1.654 0-3 1.346-3 3zm.42 15l-1.41-1.41 2.59-2.59 1.41 1.41-2.59 2.59zm7.543-2.59l-1.41-1.41-2.59 2.59 1.41 1.41 2.59-2.59zm4.875 0l-1.41-1.41-2.59 2.59 1.41 1.41 2.59-2.59z"/></svg>
`
const pid = `
<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M24 13c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 2.583.816 5.042 2.205 7h4.358c.93 1.647 3.015 3 5.438 3s4.508-1.353 5.438-3h4.357c1.388-1.958 2.204-4.417 2.204-7zm-4.492-6.436l-2.203 2.203c-.316-.396-.676-.755-1.071-1.071l2.203-2.203c.382.328.742.688 1.071 1.071zm-4.431-2.964c.479.156.948.352 1.399.581l-1.193 2.878c-.443-.245-.913-.44-1.399-.58l1.193-2.879zm-3.835-.46c.256-.02.51-.029.758-.029s.502.01.758.029v3.115c-.252-.027-.506-.042-.758-.042s-.506.014-.758.042v-3.115zm-.371 10.441l1.129-5.294 1.129 5.293c.721.398 1.207 1.165 1.207 2.045 0 1.29-1.045 2.336-2.336 2.336-1.29 0-2.336-1.046-2.336-2.336 0-.88.486-1.646 1.207-2.044zm-1.986-9.969l1.205 2.875c-.486.141-.954.338-1.397.585l-1.205-2.874c.45-.231.919-.427 1.397-.586zm-3.322 1.881l2.203 2.203c-.395.316-.754.675-1.071 1.071l-2.202-2.203c.328-.383.688-.743 1.07-1.071zm-2.964 4.432c.156-.479.351-.948.58-1.399l2.879 1.192c-.246.443-.44.913-.58 1.399l-2.879-1.192zm15.893 1.091c-.147-.483-.35-.95-.603-1.39l2.86-1.238c.235.445.438.912.602 1.39l-2.859 1.238z"/></svg>
`

export interface Item {
  title: string;
  price: string;
  qty: number;
}


@Component({
  selector: 'app-viewproduct',
  templateUrl: './viewproduct.component.html',
  styleUrls: ['./viewproduct.component.css']
})
export class ViewproductComponent implements OnInit {
  showFiller = false;
  productID = 0
  datas: [] = datas
  localItem: string;
  cart_length;

  private isButtonVisible = true;

  constructor(private activatedRoute: ActivatedRoute, private bottomSheet: MatBottomSheet, iconRegistry: MatIconRegistry, sanitizer: DomSanitizer, private auth: AuthService) {
    iconRegistry.addSvgIconLiteral('low_light', sanitizer.bypassSecurityTrustHtml(low_light));
    iconRegistry.addSvgIconLiteral('power_tolerace', sanitizer.bypassSecurityTrustHtml(power_tolerace));
    iconRegistry.addSvgIconLiteral('extreme_weater', sanitizer.bypassSecurityTrustHtml(extreme_weater));
    iconRegistry.addSvgIconLiteral('pid', sanitizer.bypassSecurityTrustHtml(pid));
  }

  ngOnInit(): void {
    this.activatedRoute.params.subscribe(data => {
      this.productID = data.id;
      // console.log(data.id);

      // console.log(this.datas)
    })
  }

  openBottomSheet() {
    this.bottomSheet.open(ShippingAddressComponent)
  }

  openAddToCartSheet(){
    this.bottomSheet.open(AddtoCartComponent)
  }

  addtocart(item: Item){
    // sennding clicked item to auth service
    this.auth.sendMsg(item)
    
    // getting data from local storage
    this.localItem = localStorage.getItem("cartitem");

    // parsing localstorage data
    this.localItem = JSON.parse(this.localItem)

    this.cart_length = this.localItem.length

    // sending cartlength to service [generic subject]
    this.auth.sendlen(this.cart_length)

    // send cartlength to service [behaviorsubject]
    this.auth.changeDataSub(this.cart_length)
  }

}
