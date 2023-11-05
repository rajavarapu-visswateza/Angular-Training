import { Component } from '@angular/core';
import { ApiServiceService } from '../api-service.service';
import { FactoryTarget } from '@angular/compiler';

@Component({
  selector: 'app-api',
  templateUrl: './api.component.html',
  styleUrls: ['./api.component.css']
})
export class ApiComponent {
    constructor(public apiService : ApiServiceService){

    }

    word!:string;
    apiData!:any;
    isSuccess=false;

    fetch():void{
      this.isSuccess = false;
      this.apiService.getApiDetails().subscribe(
        {
          next: (response) => {
            this.apiData = response;
            this.isSuccess = true;
          },
          error: (error) => {
            this.apiData = {"data":"No data found"};
            this.isSuccess = true;
          }
        }
      )
    }
}
