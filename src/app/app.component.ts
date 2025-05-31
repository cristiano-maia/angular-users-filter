import { Component, OnInit } from '@angular/core';
import { UsersList } from './data/users-list';
import { IUser } from './interfaces/user/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
usersList: IUser[] = [];
userSelected: IUser = {} as IUser;
showUserDetails: boolean  = false;

 ngOnInit()  {
   setTimeout(() => {
     this.usersList = UsersList;
   }, 1000);
  }

  onUserSelected(user: IUser) {
    console.log(user);
    this.userSelected = user;
    this.showUserDetails = true;
  }
}
