import { Component, OnInit } from '@angular/core';
import { SharedService } from './shared.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  events: any = [];
  constructor(private shared: SharedService) {
    
  }
  ngOnInit() {  
    this.shared.currentMessage.subscribe(m => this.events = m);
  }
  title = 'shered';
}
