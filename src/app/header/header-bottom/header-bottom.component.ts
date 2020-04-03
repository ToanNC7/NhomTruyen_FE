import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'nt-header-bottom',
  templateUrl: './header-bottom.component.html',
  styleUrls: ['./header-bottom.component.scss','../header.component.scss']
})
export class HeaderBottomComponent implements OnInit {

  showDanhmuc:boolean = false;
  showTheloai:boolean = false;
  @Input() showBtnDanhMuc:boolean;
 
  constructor() { }

  ngOnInit(): void {
    
    }
  
  showContainer(container:string):void{
    container == 'danhmuc' ? this.showDanhmuc = true : this.showDanhmuc = false;
    container == 'theloai' ? this.showTheloai = true : this.showTheloai = false;
  }
  hideContainer():void{
    this.showDanhmuc = false;
    this.showTheloai = false;
  }

}
