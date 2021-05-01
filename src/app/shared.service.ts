import { HttpClient } from '@angular/common/http';
import { ThisReceiver } from '@angular/compiler';
import { Injectable, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SharedService   {
  private initdata: any = [];
  
  private messageSubject = new BehaviorSubject(Object.create({}));
  currentMessage = this.messageSubject.asObservable();
  constructor(private http: HttpClient) {
    this.http.get("https://thefinessefirmeventsample.herokuapp.com/api/events").subscribe(x => {
      this.initdata = x;
      this.messageSubject.next(x);
    });
   }
  sendMessage(data: any) {
    console.log("im here")
    console.log(data)
    this.messageSubject.next(data);
  }
  
}
