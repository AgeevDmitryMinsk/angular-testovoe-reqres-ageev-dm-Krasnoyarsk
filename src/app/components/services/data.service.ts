import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IUsers} from "../interfaces/global";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) {
  }

  getUsersData():Observable<IUsers>{
    return this.http.get<IUsers>('https://reqres.in/api/users')
  }


}