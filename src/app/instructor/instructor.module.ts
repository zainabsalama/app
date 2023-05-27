import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { InstructorRegisterComponent } from './instructor-register/instructor-register.component';

import { FormsModule } from '@angular/forms';
import { CalendarModule } from '@syncfusion/ej2-angular-calendars';



@NgModule({
  declarations: [
    InstructorRegisterComponent
  ],
  imports: [
    CommonModule,FormsModule,CalendarModule
  ],
  exports:[
    InstructorRegisterComponent
  ]
})
export class InstructorModule { }
