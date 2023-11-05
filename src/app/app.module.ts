import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormsModule } from '@angular/forms';
import { UserComponent } from './user/user.component';
import { NewUserComponent } from './new-user/new-user.component';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './form/form.component';
import { ReactiveFormsModule } from '@angular/forms';
import { LifeCycleComponent } from './life-cycle/life-cycle.component';
import { ServiceComponent } from './service/service.component';
import { ApiComponent } from './api/api.component';
import { FacultyDetailsComponent } from './faculty-module/faculty-details/faculty-details.component';
import { FacultyTableComponent } from './faculty-module/faculty-table/faculty-table.component';
import { StudentDetailsComponent } from './student-module/student-details/student-details.component';
import { StudentTableComponent } from './student-module/student-table/student-table.component';
import { StateManagementComponent } from './state-management/state-management.component';
import { StoreModule } from '@ngrx/store';
import { addReducer } from './state-management/math.reducer';
// import { EffectsModule } from '@ngrx/effects';

@NgModule({
  declarations: [
    AppComponent,
    UserComponent,
    NewUserComponent,
    FormComponent,
    LifeCycleComponent,
    ServiceComponent,
    ApiComponent,
    FacultyDetailsComponent,
    FacultyTableComponent,
    StudentDetailsComponent,
    StudentTableComponent,
    StateManagementComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    AppRoutingModule,
    StoreModule.forRoot({'resultValue':addReducer}),
    // EffectsModule.forRoot([ProductsEffects])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
