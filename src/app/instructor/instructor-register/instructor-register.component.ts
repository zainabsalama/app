import { Component } from '@angular/core';
import { Instructor } from 'src/app/_models/instructor';

@Component({
  selector: 'app-instructor-register',
  templateUrl: './instructor-register.component.html',
  styleUrls: ['./instructor-register.component.css']
})
export class InstructorRegisterComponent {
  nationalities = ['Egypt', 'India',
  'Morocoo', 'Niger'];
  gender=["Male","Female"]

  languages = ['Arabic', 'English',
  'Germany', 'Spanish'];
  
  degrees = ['Associate', 'Bachelor',
  'Master', 'Doctorate'];
  from: Date = new Date();
  to: Date = new Date();
  public showCalendar: boolean = false;

  public dateValue: Date = new Date(2023, 4, 20);
  public minDate: Date = new Date(2022, 4, 10);
  public maxDate: Date = new Date(2022, 4, 25);

model=new Instructor("sami","salama",12344,"111","Egypt","male","sami@yahoo","image","degree","English","certificate","des",new Date("2022-03-25"));

submitted = false;

onSubmit() { this.submitted = true; }
newStudent() {
  this.model = new Instructor("","",0,"","","","","","","","","",new Date(""),);
}

}


