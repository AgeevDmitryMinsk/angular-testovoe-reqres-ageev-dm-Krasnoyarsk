import {Component, OnInit} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../services/data.service";
import {IUserData} from "../interfaces/global";
import {FormControl, FormGroup} from "@angular/forms";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {
  cardDetailsUserID: number
  userDetails: IUserData
  isFormVisible = false
  updatedAt: string
  isUserDeleted: string

  private routeSubscription: Subscription;

  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
  ) {
    this.routeSubscription = route.params.subscribe(params => this.cardDetailsUserID = Number(params['id']));
  }

  checkoutForm = new FormGroup({
    first_name: new FormControl(''),
    last_name: new FormControl(''),
    email: new FormControl(''),
    avatar: new FormControl(''),
  });

  ngOnInit(): void {
    this.dataService.getUserDataDetails(this.cardDetailsUserID).subscribe((value) => {
      this.userDetails = value.data
      this.checkoutForm = new FormGroup({
        first_name: new FormControl({value: this.userDetails.first_name, disabled: false}),
        last_name: new FormControl({value: this.userDetails.last_name, disabled: false}),
        email: new FormControl({value: this.userDetails.email, disabled: false}),
        avatar: new FormControl({value: this.userDetails.avatar, disabled: false}),
      });
    })
  }

  onSubmit() {
    //console.log(this.checkoutForm.value.first_name);
    const body: IUserData = {
      id: this.cardDetailsUserID,
      avatar: this.checkoutForm.value.avatar as string,
      first_name: this.checkoutForm.value.first_name as string,
      last_name: this.checkoutForm.value.last_name as string,
      email: this.checkoutForm.value.email as string
    }
    //console.log(body)
    //console.log(this.cardDetailsUserID)
    this.dataService.changeUserDataDetails(this.cardDetailsUserID, body)
      .subscribe((data) => {
        this.userDetails.first_name = data.first_name
        this.userDetails.last_name = data.last_name
        this.userDetails.email = data.email
        this.userDetails.avatar = data.avatar
        this.updatedAt = data.updatedAt
      })
  }

  deleteUser() {
    this.dataService.deleteUserFromList(this.cardDetailsUserID)
      .subscribe(() => this.isUserDeleted = 'User deleted successfully')

  }
}
