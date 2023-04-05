import {Component, Input} from '@angular/core';
import {IUserData} from "../interfaces/global";

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
@Input() user: IUserData
}
