import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentDetailsComponent } from './student-details/student-details.component';
import { StudentTableComponent } from './student-table/student-table.component';

const routes: Routes = [
  {path:'details',component:StudentDetailsComponent},
  {path:'table',component:StudentTableComponent},
  {path:'', redirectTo:'/student/details', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentModuleRoutingModule { }