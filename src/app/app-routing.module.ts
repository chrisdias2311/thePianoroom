import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './MyComponents/home/home.component';
import { AboutComponent } from './MyComponents/about/about.component';
import { ServicesComponent } from './MyComponents/services/services.component';
import { FounderComponent } from './MyComponents/founder/founder.component';
import { AppComponent } from './app.component';
import { BookingComponent } from './MyComponents/booking/booking.component';

const routes: Routes = [
  {
    path:'',
    component: HomeComponent
  },
  {
    path:'about',
    component: AboutComponent
  },
  {
    path:'services',
    component:ServicesComponent
  },
  {
    path:'founder',
    component:FounderComponent
  }, 
  {
    path:'book-now',
    component:BookingComponent
  }
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
