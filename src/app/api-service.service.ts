import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ApiServiceService {

  constructor(private httpClient : HttpClient) { }

  // getApiDetails(word:string){
  //   return this.httpClient.get("https://api.dictionaryapi.dev/api/v2/entries/en/"+word);
  // }

  getApiDetails(){
    return this.httpClient.get("https://fakestoreapi.com/products");
  }
}
