import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class UserServiceService {

  constructor(private httpClient : HttpClient) { }

  userName!:string;

  getUserDetails():string{
    return this.userName;
  }

  setUserDetails(userName:string):void{
    this.userName = userName;
  }
}
