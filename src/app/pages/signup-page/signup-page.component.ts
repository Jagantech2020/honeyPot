import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { IUserAuthDetail } from 'src/app/interfaces/IUser';
import { AuthService } from 'src/app/services/user/auth.service';

@Component({
  selector: 'app-signup-page',
  templateUrl: './signup-page.component.html',
  styleUrls: ['./signup-page.component.css']
})
export class SignupPageComponent implements OnInit {

  constructor(private userAuthService: AuthService, private router: Router) { }

  ngOnInit(): void {
  }

  addUserDetails(signupDetail: NgForm){
    console.log(signupDetail);
    if(signupDetail.valid){
      const usersAuthDetails: IUserAuthDetail =  signupDetail.value;
      usersAuthDetails['id'] = new Date().toString() + Math.random();
      if(usersAuthDetails.password === usersAuthDetails.confirmPassword){
        this.userAuthService.addUsersAuthDetails(signupDetail.value);
        this.router.navigate(['/login']);
      } else {
        alert('please enter required details')
      }
     
    } else {
      alert('please enter required details')
    }
  }

}
