import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { __makeTemplateObject } from 'tslib';

@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrls: ['./form.component.css']
})
export class FormComponent {

  // name = new FormControl();
  // updateName() {
  //   this.name.setValue("Rajavarpu");
  // }

  profileForm = new FormGroup({
    firstName: new FormControl('', Validators.required),
    lastName: new FormControl('', [Validators.required, Validators.minLength(4)]),
  });

  onSubmit(){
    console.log(this.profileForm.value);
  }
}
