import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';
import { FormControl, Validators } from '@angular/forms';
import { MatSnackBar } from '@angular/material/snack-bar';


@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.css']
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

  emailFormControl = new FormControl('', [Validators.required, Validators.email]);

  constructor(private auth: AuthService, private _snackBar: MatSnackBar) { }

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
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action);
  }




}
