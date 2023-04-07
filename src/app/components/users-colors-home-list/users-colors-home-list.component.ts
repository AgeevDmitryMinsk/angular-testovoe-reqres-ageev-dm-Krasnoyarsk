import {Component, OnInit} from '@angular/core';
import {IColorData, IUserData} from "../interfaces/global";
import {DataService} from "../services/data.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-users-colors-home-list',
  templateUrl: './users-colors-home-list.component.html',
  styleUrls: ['./users-colors-home-list.component.css']
})
export class UsersColorsHomeListComponent implements OnInit{

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
    private dataService: DataService,
    public router: Router
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
      //console.log("changeUsersPage changed")
    }
  }

  changeColorPage(number: number) {
    if(this.currentColorPage !==number){
      this.currentColorPage = number
      this.initializeColorPage()
      //console.log("changeColorPage changed")
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

  getDetailedUserCard(id: number) {
    console.log("getDetailedUserCard id = ", id)
    this.router.navigate(
      ["user", id]
    ).then(result => console.log(`have you been redirected to: user/${id}`, result))
  }
}
