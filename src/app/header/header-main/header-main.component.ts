import { Component, OnInit, ViewEncapsulation, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'nt-header-main',
  templateUrl: './header-main.component.html',
  styleUrls: ['./header-main.component.scss','../header.component.scss'],
})
export class HeaderMainComponent implements OnInit {

  heightLogo:number = 60;
  showSearchBar:boolean = false;

  fixedHeaderMain = false;

  @Output() messageEventChild:EventEmitter<boolean> = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit(): void {
    window.onscroll = () =>{
      if(window.innerWidth > 550)
      {
        if (document.body.scrollTop > 107 || document.documentElement.scrollTop > 107) {
          this.fixedHeaderMain = true;
          this.heightLogo = 50;
          
        } else {
          this.fixedHeaderMain = false;
          this.heightLogo = 60;
        }
        this.sendMesage();
      }
     
    }
  }
  toggleSearchBar():void{
    this.showSearchBar = !this.showSearchBar;
  }
  exitSearchBar():void{
    this.showSearchBar = false;
  }
  sendMesage():void{
    this.messageEventChild.emit(this.fixedHeaderMain);
  }
}
