import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ILoginUser } from 'src/app/interfaces/IUser';
import { AuthService } from 'src/app/services/user/auth.service';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {

  constructor(public userAuthService: AuthService, private router: Router) {

   }

  ngOnInit(): void {
  }

  userLogIn(loginDetail: NgForm){
    if(loginDetail.valid){
      const loginUser: ILoginUser = loginDetail.value;
      const isLoggedInUser = this.userAuthService.getUsersDetails().some(user => {
        return (user.userName === loginUser.userName && user.password === loginUser.password);
      });
      if(isLoggedInUser){
        this.router.navigate(['/home']);
      }
    }
  }
}
