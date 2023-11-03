import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FacultyTableComponent } from './faculty-table/faculty-table.component';
import { FacultyDetailsComponent } from './faculty-details/faculty-details.component';


const routes: Routes = [
  {path:'details',component:FacultyDetailsComponent},
  {path:'table',component:FacultyTableComponent},
  {path:'', redirectTo:'/faculty/details', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class FacultyModuleRoutingModule { }