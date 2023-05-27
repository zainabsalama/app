import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './core/about-us/about-us.component';
import { ContactComponent } from './core/contact/contact.component';
import { CoreRoutingModule } from './core/core-routing.modul';

const routes: Routes = [
  {path:"aboutUs",component:AboutUsComponent},
  {path:"contact",component:ContactComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes),CoreRoutingModule],
  exports: [RouterModule]
})
export class AppRoutingModule { }
