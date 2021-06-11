import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public imgurl:string="https://www.baidu.com/img/flexible/logo/pc/result.png";
  constructor() { }

  ngOnInit() {
  }

}
