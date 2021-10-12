import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentMapComponent } from './student-map/student-map.component';
import { StudentNewComponent } from './student-new/student-new.component';

const routes: Routes = [
  {
    path: '',
    component: StudentListComponent
  }, {
    path: 'new',
    component: StudentNewComponent
  }, {
    path: 'map',
    component: StudentMapComponent
  }, {
    path: ':id',
    component: StudentEditComponent
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class StudentsRoutingModule { }
