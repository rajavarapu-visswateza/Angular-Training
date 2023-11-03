import { Component } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-service',
  templateUrl: './service.component.html',
  styleUrls: ['./service.component.css']
})
export class ServiceComponent {
  constructor(public userService : UserServiceService){

  }

  inputValue = "input";
  value!:string;

  setValue():void{
    this.userService.setUserDetails(this.inputValue);
  }

  getValue():void{
    this.value = this.userService.getUserDetails();
    console.log(this.value)
  }
}
