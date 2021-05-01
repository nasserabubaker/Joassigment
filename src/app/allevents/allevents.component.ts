import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { SharedService } from '../shared.service';

@Component({
  selector: 'app-allevents',
  templateUrl: './allevents.component.html',
  styleUrls: ['./allevents.component.css']
})
export class AlleventsComponent implements OnInit {
  constructor(private  shared:SharedService) { }
  message: any = [];

  ngOnInit(): void {
    this.shared.currentMessage.subscribe(message => this.message = message);

  }

}
