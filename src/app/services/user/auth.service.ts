import { Injectable } from '@angular/core';
import { IUserAuthDetail } from 'src/app/interfaces/IUser';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  public usersAuthDetails!: Array<IUserAuthDetail>;
  public loggedInUser!: IUserAuthDetail;

  constructor() {
    this.usersAuthDetails = [];
   }

  addUsersAuthDetails(userDetail: IUserAuthDetail){
    this.usersAuthDetails.push(userDetail);
  }

  getUsersDetails(){
    return this.usersAuthDetails;
  }

  getUserById(id: string){
    this.loggedInUser = this.usersAuthDetails.filter(user => user.id === id)[0];
    return this.loggedInUser;
  }
}
