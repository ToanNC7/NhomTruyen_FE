import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'nt-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  flatFixedHeader:boolean = false;
  constructor() { }

  ngOnInit(): void {
  }
  recieveMessage(event)
  {
    this.flatFixedHeader = event;
  }
}
