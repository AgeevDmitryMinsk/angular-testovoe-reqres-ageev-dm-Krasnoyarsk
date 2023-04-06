import {Component, OnInit} from '@angular/core';
import {IColorData, IUserData} from "./components/interfaces/global";
import {DataService} from "./components/services/data.service";


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {


  usersData: IUserData[]
  userPages: number
  colorsData: IColorData[]
  colorPages: number
  currentUserPage: number = 1
  currentColorPage: number = 1
  activeUserPage: string = '#800080'
  notActiveUserPage: string = 'white'

  activeColorPage: string = '#800080'
  notActiveColorPage: string = 'white'


  isUserPageDisabled: boolean
  isColorPageDisabled: boolean

  constructor(
    private dataService: DataService
  ) {
  }

  ngOnInit(): void {
    this.initializeUserPage()
    this.initializeColorPage()
  }

  changeUsersPage(number: number) {
    if(this.currentUserPage !==number) {
      this.currentUserPage = number
      this.initializeUserPage()
      console.log("changeUsersPage changed")
    }
  }

  changeColorPage(number: number) {
    if(this.currentColorPage !==number){
      this.currentColorPage = number
      this.initializeColorPage()
      console.log("changeColorPage changed")
    }
  }

  initializeUserPage() {
    this.isUserPageDisabled = true

    this.dataService.getUsersData(this.currentUserPage).subscribe((value) => {
      this.usersData = value.data
      this.userPages = value.total_pages
      this.isUserPageDisabled = false
    })
  }

  initializeColorPage() {
    this.isColorPageDisabled = true
    this.dataService.getColorData(this.currentColorPage).subscribe((value) => {
      this.colorsData = value.data
      this.colorPages = value.total_pages
      this.isColorPageDisabled = false
    })
  }

}
