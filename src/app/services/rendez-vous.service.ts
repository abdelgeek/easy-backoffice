import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RendezVousService {

  apiUrl = environment.api;
   
  constructor(private http: HttpClient) { }
 

  FindAllService(){
    
       const url =this.apiUrl + "booking/all"
        return this.http.get(url);
      }

  getToken(){
    const url=this.apiUrl + "agent/login_agent";
    let user:any={}
    user.username="abdel"
    user.password="abde"
    return this.http.post(url,user);
  }
}
