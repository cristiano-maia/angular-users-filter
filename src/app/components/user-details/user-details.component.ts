import { Component, Input } from '@angular/core';
import { IUser } from 'src/app/interfaces/user/user.interface';

@Component({
  selector: 'app-user-details',
  templateUrl: './user-details.component.html',
  styleUrls: ['./user-details.component.scss']
})
export class UserDetailsComponent {
  @Input({ required: true }) user: IUser = [] as unknown as IUser;

}
