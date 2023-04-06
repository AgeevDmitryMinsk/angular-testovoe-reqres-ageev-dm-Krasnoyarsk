import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {IColorData, IUserData, CommonResponseType} from "../interfaces/global";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(
    private http: HttpClient
  ) {
  }

  getUsersData(page:number):Observable<CommonResponseType<IUserData[]>>{
    return this.http.get<CommonResponseType<IUserData[]>>(`https://reqres.in/api/users?delay=3&page=${page}`)
  }

  getColorData(page:number):Observable<CommonResponseType<IColorData[]>>{
    return this.http.get<CommonResponseType<IColorData[]>>(`https://reqres.in/api/unknown?delay=1&page=${page}`)
  }


}
