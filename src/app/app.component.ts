import {Component, OnInit} from '@angular/core';
import {map, Observable} from "rxjs";
import {IUserData, IUsers} from "./components/interfaces/global";
import {DataService} from "./components/services/data.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{
  title = 'AngularTestovoeReqresAgeevDM';
  users$: Observable<IUsers>
  usersData$: Observable<IUserData[]>

  constructor(
    private dataService: DataService
  ) {
  }

  ngOnInit(): void {
    this.users$ = this.dataService.getUsersData()
    this.usersData$ = this.dataService.getUsersData().pipe(
      map((value: IUsers)=>{
        return value.data
      })
    )
  }
}
