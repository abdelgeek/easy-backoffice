import { Component, OnInit, OnDestroy } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  password
  username
  isloginIncorrect=false;
  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
   this.isloginIncorrect=false
  }

  login() {
    
    this.authService.login(this.password, this.username).
    subscribe((resp:any)=>{
      if (resp.success) {
        const token = resp.data.jwt
        localStorage.setItem("token", token);
        this.isloginIncorrect=false
        this.router.navigateByUrl("/");
      }
      
      
       },err=>{this.isloginIncorrect=true});
  }

}
