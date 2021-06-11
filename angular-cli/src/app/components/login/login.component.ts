import { Component, OnInit } from '@angular/core';
import{ HttpClient, HttpHeaders} from '@angular/common/http';
import {Router} from '@angular/router';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  public usert:any={
    username:"",
    password:""
  }
  constructor(public http:HttpClient,public router:Router) { }

  ngOnInit() {
  }
  login(){
    const httpOptions= {headers:new HttpHeaders({'Content-Type':'application/json'})};
    var api='http://127.0.0.1:8889/loginAction';
    this.http.post(api,this.usert,httpOptions).subscribe((response)=>{
    if(response["msg"]=='登录成功'){
         this.router.navigate(['/home']);
    }else{
      alert("账号或密码错误");
    }
    })
}
}