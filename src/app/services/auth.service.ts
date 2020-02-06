import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  apiUrl = environment.api;
   
  constructor(private http: HttpClient) { }

  login(password,username){
   
    const url=this.apiUrl + "agent/login_agent";
    let user:any={}
    user.username=username
    user.password=password
    console.log("user credential" + JSON.stringify(user))
    return this.http.post(url,user);
  }
}