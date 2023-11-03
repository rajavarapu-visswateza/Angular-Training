import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UserServiceService } from '../user-service.service';
import { NgFor } from '@angular/common';

@Component({
  selector: 'app-new-user',
  templateUrl: './new-user.component.html',
  styleUrls: ['./new-user.component.css']
})
export class NewUserComponent {
  @Input() item = '';

  @Output() newItemEvent = new EventEmitter<string>();

  addNewItem(value : string){
    this.newItemEvent.emit(value);
  }
}
