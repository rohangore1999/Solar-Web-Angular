import { Component, OnInit, Input } from '@angular/core';
import { AuthService } from 'src/app/Services/auth.service';

@Component({
  selector: 'app-banners',
  templateUrl: './banners.component.html',
  styleUrls: ['./banners.component.css']
})
export class BannersComponent implements OnInit {

  text: string;

  constructor(private auth: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(){
    this.auth.send_post_request(this.text).subscribe()
  }

}
