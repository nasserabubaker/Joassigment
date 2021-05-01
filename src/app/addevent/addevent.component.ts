import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-addevent',
  templateUrl: './addevent.component.html',
  styleUrls: ['./addevent.component.css']
})
export class AddeventComponent implements OnInit {

  constructor(private  shared:SharedService,private http:HttpClient) { }
  message: any = [];

  ngOnInit(): void {
    this.shared.currentMessage.subscribe(message => { this.message = message});
  }
  change() {
    let obj = {
      name: "finall",
      location:"palestine"
    }
    this.http.post("https://thefinessefirmeventsample.herokuapp.com/api/events", obj).subscribe();
    this.message.data.push(obj);
    this.shared.sendMessage(this.message);
  }



  

}
