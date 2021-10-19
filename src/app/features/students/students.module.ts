import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';

import { StudentsRoutingModule } from './students-routing.module';
import { StudentListComponent } from './student-list/student-list.component';
import { StudentNewComponent } from './student-new/student-new.component';
import { StudentEditComponent } from './student-edit/student-edit.component';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { GoogleMapsModule } from '@angular/google-maps';

@NgModule({
  declarations: [
    StudentListComponent,
    StudentNewComponent,
    StudentEditComponent
  ],
  imports: [
    CommonModule,
    FormsModule,
    SharedModule,
    GoogleMapsModule,
    StudentsRoutingModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class StudentsModule { }
