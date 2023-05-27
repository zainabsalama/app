import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { StudentRegisterFormComponent } from '../student/student-register-form/student-register-form.component';
import { InstructorRegisterComponent } from '../instructor/instructor-register/instructor-register.component';




const routes:Routes=[

    {path:"aboutUs",component:AboutUsComponent},
    {path:"contact",component:ContactComponent},
    {path:"studentRegister",component:StudentRegisterFormComponent},
    {path:"instructorRegister",component:InstructorRegisterComponent},

]
@NgModule({
  declarations: [],
  imports: [
    CommonModule,RouterModule.forChild(routes)

  ],
  exports:[RouterModule]

})
export class CoreRoutingModule { }
