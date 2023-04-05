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
  pages$: Observable<number>
  page: number = 1

  constructor(
    private dataService: DataService
  ) {
  }

  ngOnInit(): void {
    this.initializatePage()
  }

  changePage(number: number) {
    this.page = number
    this.initializatePage()
  }

  initializatePage(){
    this.users$ = this.dataService.getUsersData(this.page)
    this.usersData$ = this.dataService.getUsersData(this.page).pipe(
      map((value: IUsers)=>{
        return value.data
      })
    )

    this.pages$ = this.dataService.getUsersData(this.page).pipe(
      map((val: IUsers)=>{
        console.log(val.total_pages)
        return val.total_pages
      })
    )
  }

}
