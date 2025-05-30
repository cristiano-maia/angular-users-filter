import { Component } from '@angular/core';
import { UsersList } from './data/users-list';
import { IUser } from './interfaces/user/user.interface';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
userSelected: IUser = {} as IUser;
showUserDetails: boolean  = false;

  onUserSelected(user: IUser) {
    console.log(user);
    this.userSelected = user;
    this.showUserDetails = true;
  }
}
