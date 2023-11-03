import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path:'faculty', loadChildren:()=>import('./faculty-module/faculty-module.module').then(m=>m.FacultyModuleModule)},
  {path:'student', loadChildren:()=>import('./student-module/student-module.module').then(m=>m.StudentModuleModule)},
  {path:'', redirectTo:'faculty', pathMatch:'full'}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
