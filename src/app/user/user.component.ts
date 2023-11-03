import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { UserServiceService } from '../user-service.service';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent{
  currentItem = "Television";

  items = ['item1']
  addItem(newItem : string){
    this.items.push(newItem);
    console.log(this.items);
  }
}
