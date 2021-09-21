import { animate, style, transition, trigger } from '@angular/animations';
import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';
import { MatIconRegistry } from '@angular/material/icon';
import { DomSanitizer } from '@angular/platform-browser';
import datas from '../../db.json'
import { FilterSheetComponent } from '../filter-sheet/filter-sheet.component';
import { MatBottomSheet } from '@angular/material/bottom-sheet';

const search = `<svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path d="M23.111 20.058l-4.977-4.977c.965-1.52 1.523-3.322 1.523-5.251 0-5.42-4.409-9.83-9.829-9.83-5.42 0-9.828 4.41-9.828 9.83s4.408 9.83 9.829 9.83c1.834 0 3.552-.505 5.022-1.383l5.021 5.021c2.144 2.141 5.384-1.096 3.239-3.24zm-20.064-10.228c0-3.739 3.043-6.782 6.782-6.782s6.782 3.042 6.782 6.782-3.043 6.782-6.782 6.782-6.782-3.043-6.782-6.782zm2.01-1.764c1.984-4.599 8.664-4.066 9.922.749-2.534-2.974-6.993-3.294-9.922-.749z"/></svg>`

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.css'],
  animations: [
    trigger('fade', [
      transition('void => *', [
        style({ opacity: 0 }),
        animate(2000, style({ opacity: 1 }))
      ])
    ])
  ]
})
export class BannersComponent implements OnInit {

  firstname: string;
  lastname: string;
  email;
  address: string;
  city: string;
  state: string;
  postalcode: number;
  comment: string;
  phone: string;
  searchValue: string;
  datas: [] = datas;


  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  constructor(private auth: AuthService, private _snackBar: MatSnackBar,iconRegistry: MatIconRegistry, sanitizer: DomSanitizer) {
    iconRegistry.addSvgIconLiteral('search', sanitizer.bypassSecurityTrustHtml(search));
   }

  ngOnInit(): void {

  }

  onSubmit() {
    console.log(this.firstname)
    console.log(this.lastname)
    console.log(this.email)
    console.log(this.address)
    console.log(this.city)
    console.log(this.state)
    console.log(this.postalcode)
    console.log(this.comment)
    console.log(this.phone)
    this.auth.send_post_request(
      {
        "firstname": this.firstname,
        "lastname": this.lastname,
        "email": this.email,
        "address": this.address,
        "city": this.city,
        "state": this.state,
        "postalcode": this.postalcode,
        "comment": this.comment,
        "phone": this.phone
      }).subscribe()
    
    this.firstname = ' ';
    this.lastname = ' ';
    this.address = ' ';
    this.city = ' ';
    this.state = ' ';
    this.postalcode = 0
    this.comment = ' ';
    this.phone = ' ';
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }


}
