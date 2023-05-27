import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StudentRegisterFormComponent } from './student-register-form/student-register-form.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [
    StudentRegisterFormComponent
  ],
  imports: [
    CommonModule,FormsModule
  ],
  exports:[
    StudentRegisterFormComponent
  ]
})
export class StudentModule { }
