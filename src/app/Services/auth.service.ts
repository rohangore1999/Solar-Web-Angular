import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';


@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http: HttpClient) { }

  server_address = 'http://localhost:5000/api/';
  server_address_ship = 'http://localhost:5000/api_ship/';

  // server_address = 'https://helper-python.herokuapp.com/api/';

  send_post_request(data){
    console.log(data)
    return this.http.post(this.server_address, JSON.stringify(data))
  }

  send_ship_request(data){
    console.log(data)
    return this.http.post(this.server_address_ship, JSON.stringify(data))
  }
}
