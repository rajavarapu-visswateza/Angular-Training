import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { UserComponent } from './user/user.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
  title = 'angular-training';
  userName = 'visswateza';
  email = "email";
}
