import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { StudentModule } from './student/student.module';
import { CoreModule } from './core/core.module';
import { InstructorModule } from './instructor/instructor.module';
import { CalendarModule, DatePickerModule, TimePickerModule, DateRangePickerModule, DateTimePickerModule } from '@syncfusion/ej2-angular-calendars';





@NgModule({
  declarations: [
    AppComponent,
   
  
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    StudentModule,
    CoreModule,
    InstructorModule,
    CalendarModule, DatePickerModule, TimePickerModule, DateRangePickerModule, DateTimePickerModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
