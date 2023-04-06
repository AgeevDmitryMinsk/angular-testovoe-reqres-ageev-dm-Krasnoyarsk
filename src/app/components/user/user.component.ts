import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {Subscription} from "rxjs";
import {ActivatedRoute} from "@angular/router";
import {DataService} from "../services/data.service";
import {IUserData} from "../interfaces/global";
import {FormBuilder, FormControl, FormGroup} from "@angular/forms";
import {data} from "autoprefixer";
import {logMessages} from "@angular-devkit/build-angular/src/builders/browser-esbuild/esbuild";

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit{
  cardDetailsUserID: number
  private routeSubscription: Subscription;
  userDetails: IUserData
  @Output() firstNameChange = new EventEmitter<any>();



  constructor(
    private route: ActivatedRoute,
    private dataService: DataService,
    private formBuilder: FormBuilder,
  ) {
    this.routeSubscription = route.params.subscribe(params => this.cardDetailsUserID = Number(params['id']));
  }

  checkoutForm = new FormGroup({
    first_name: new FormControl(''),
  });

  ngOnInit(): void {
    // const body:IUserData  = {
    //   id: 5,
    //   avatar: "https://mobimg.b-cdn.net/v3/fetch/b7/b77ae3f6f1afd7a4ed41fa4be58015a6.jpeg",
    //   first_name: "AVA",
    //   last_name: "last_name",
    //   email: "AVA@AVA.com"
    // }
    this.dataService.getUserDataDetails(this.cardDetailsUserID).subscribe((value)=>{
      this.userDetails = value.data
    })
  }

  changeUserName(name: string){
    const body:IUserData  = {
      id: 5,
      avatar: "https://mobimg.b-cdn.net/v3/fetch/b7/b77ae3f6f1afd7a4ed41fa4be58015a6.jpeg",
      first_name: name,
      last_name: "last_name",
      email: "AVA@AVA.com"
    }
    this.dataService.changeUserDataDetails(this.cardDetailsUserID, body )
  }

  onSubmit() {
    console.log(this.checkoutForm.value.first_name);
    const body:IUserData  = {
      id: 1,
      avatar: "https://mobimg.b-cdn.net/v3/fetch/b7/b77ae3f6f1afd7a4ed41fa4be58015a6.jpeg",
      first_name: this.checkoutForm.value.first_name as string,
      last_name: "last_name",
      email: "AVA@AVA.com"
    }
    console.log(body)
    console.log(this.cardDetailsUserID)
    this.dataService.changeUserDataDetails(this.cardDetailsUserID, body )
      .subscribe(data =>{
        console.log(data)
         // this.userDetails = data.data
      })
  }
}
