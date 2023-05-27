import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { AboutUsComponent } from './about-us/about-us.component';
import { ContactComponent } from './contact/contact.component';
import { RouterModule } from '@angular/router';
import { StudentRegisterFormComponent } from '../student/student-register-form/student-register-form.component';



@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    AboutUsComponent,
    ContactComponent
  ],
  imports: [
    CommonModule,RouterModule
  ],
  exports:[
    HeaderComponent,FooterComponent,AboutUsComponent,ContactComponent
  ]

})
export class CoreModule { }
