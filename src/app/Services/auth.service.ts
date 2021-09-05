import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable, Subject } from 'rxjs';

export interface Item {
  title: string;
  price: string;
  qty: number;
}

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  // generic subject
  subject = new Subject();
  subject_l = new Subject();
  
  // BehaviorSubject
  // point of declaring data:object = {} because BehaviorSubject is expecting one arg.
  data:object = {};
  data1:object = {};

  dataSub = new BehaviorSubject<any>(this.data)
  dataSub1 = new BehaviorSubject<any>(this.data1)

  currentData = this.dataSub.asObservable(); //constantly observing dataSub
  currentData1 = this.dataSub1.asObservable(); //constantly observing dataSub

  localItem: string
  cartitems;

  constructor(private http: HttpClient) { }

  server_address = 'http://localhost:5000/api/';
  server_address_ship = 'http://localhost:5000/api_ship/';
  server_address_op = 'http://localhost:5000/api_op/';

  // server_address = 'https://helper-python.herokuapp.com/api/';
  // server_address_ship = 'https://helper-python.herokuapp.com/api_ship/';
  // server_address_op = 'https://helper-python.herokuapp.com/api_op/';

  /************SENDING SHIPPING DATA TO PYTHON**********************/ 

  send_post_request(data) {
    console.log(data)
    return this.http.post(this.server_address, JSON.stringify(data))
  }

  send_ship_request(data) {
    console.log(data)
    return this.http.post(this.server_address_ship, JSON.stringify(data))
  }

  // Send other Payment Request through Python

  otherPayment(data){
    console.log(data)
    return this.http.post(this.server_address_op, JSON.stringify(data))
  }

  /************END SENDING SHIPPING DATA TO PYTHON**********************/



  /************SENDING CLICKED ITEM TO MYCART**********************/

  sendMsg(item: Item) {
    console.log(item)
    this.subject.next(item) //triggering an event
  }

  getMsg() {
    return this.subject.asObservable()
  }

  /************END SENDING CLICKED ITEM TO MYCART**********************/



/************SENDING CARTLENGTH TO NAVBAR**********************/

  sendlen(len) {
    console.log(len)
    this.subject_l.next(len) //triggering an event
  }

  getlen() {
    console.log("getlen data")
    console.log(this.subject_l)
    return this.subject_l.asObservable()
  }

  /************SENDING CARTLENGTH TO NAVBAR**********************/

  /* ref_link ~ https://stackoverflow.com/questions/39494058/behaviorsubject-vs-observable#:~:text=BehaviorSubject%20is%20a%20type%20of,t%20received%20a%20next() */

  /*Problem solved using BehaviorSubject was: I was able to get data anywhere; but using general Subject it only send when I visit that page */

  /* Helper BehaviorSubject code ~ https://medium.com/@tholaday777/angular-view-updating-using-observables-behavior-subject-and-event-emitters-acaf37500143 */

  changeDataSub(newDat: any){
    console.log("NEW DATA")
    console.log(newDat)

    this.dataSub.next(newDat); //send data to line 21 using next()
  }

  changeDataSub1(newDat1: any){
    console.log("NEW DATA1")
    console.log(newDat1)

    this.dataSub1.next(newDat1); //send data to line 21 using next()
  }

}
