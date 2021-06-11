import { Component, OnInit } from '@angular/core';
import{ HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-regist',
  templateUrl: './regist.component.html',
  styleUrls: ['./regist.component.css']
})
export class RegistComponent implements OnInit {
  public usert:any={
    username:"",
    password:""
  }
  public usertdetile:any={
    name:"",
    telephone:"",
    address:""
  }
  constructor(public http:HttpClient,public router:Router) { }

  ngOnInit() {
  }
  regist(){
    const httpOptions= {headers:new HttpHeaders({'Content-Type':'application/json'})};
    var api='http://127.0.0.1:8889/registAction';
    this.http.post(api,{"usert":this.usert,"usertdetile":this.usertdetile},httpOptions).subscribe((response)=>{
      if(response["msg"]=='该用户名被占用'){
         alert(response["msg"]);
      }else{
        alert(response["msg"]);
        this.router.navigate(['/login']);
      }
      })
  }
}
