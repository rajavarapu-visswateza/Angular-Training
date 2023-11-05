import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Observable } from 'rxjs';
import { Store } from '@ngrx/store';
import { add } from './math.action';
import { selectResult, selectResultValue } from './math.selector';
import { ValueState } from './math.reducer';
import { AppState } from '../app.state';
import { CalcModel } from '../calc-model';

@Component({
  selector: 'app-state-management',
  templateUrl: './state-management.component.html',
  styleUrls: ['./state-management.component.css']
})
export class StateManagementComponent implements OnInit{

  result!:number;
  first!:number;
  second!:number;
  formValues!:CalcModel;

  public resultValue$ = this.store.select(selectResultValue);

  // public products$ = this.store.select(selectAllProducts)
  products!:any[];

  constructor(private store : Store<AppState>){

  }

  calculatorForm = new FormGroup({
    firstValue: new FormControl(0, [Validators.required, Validators.nullValidator]),
    lastValue: new FormControl(0, [Validators.required, Validators.nullValidator]),
  });

  ngOnInit(): void {
      // this.store.dispatch(loadProducts())
      // this.products$.subscribe(data=>{
      //   this.products = data;
      // })
  }

  onSubmit(){
    // const {firstValue, lastValue} = this.calculatorForm.value;
    this.formValues = this.calculatorForm.value
    this.store.dispatch(add({firstValue:0, lastValue:0}));
    this.resultValue$.subscribe((data) =>{
      this.result = data;
    })
  }
}

