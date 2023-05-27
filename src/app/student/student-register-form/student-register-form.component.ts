import { Component } from '@angular/core';
import { Student } from 'src/app/_models/student';

@Component({
  selector: 'app-student-register-form',
  templateUrl: './student-register-form.component.html',
  styleUrls: ['./student-register-form.component.css']
})
export class StudentRegisterFormComponent {
  nationalities = ['Egypt', 'India',
  'Morocoo', 'Niger'];
  gender=["Male","Female"]

model=new Student(1,"zainab","salama",24,"zainabsalama55@gmail.com","123","123","","")

submitted = false;

onSubmit() { this.submitted = true; }
newStudent() {
  this.model = new Student(42, '', '',45,"","","","","");
}

}


