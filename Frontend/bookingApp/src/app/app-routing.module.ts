import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NavbarComponent } from './mainPage/navbar/navbar.component';
import { LoginComponent } from './mainPage/login/login.component';
import { SignupComponent } from './mainPage/signup/signup.component';
import { DashboardComponent } from './customer/dashboard/dashboard.component';
import { AddmovieComponent } from './admin/addmovie/addmovie.component';
import { EditmoviesComponent } from './admin/editmovies/editmovies.component';
import { DeletemoviesComponent } from './admin/deletemovies/deletemovies.component';
import { MoviedetailComponent } from './customer/moviedetail/moviedetail.component';
import { EditTimeRateComponent } from './admin/edit-time-rate/edit-time-rate.component';
import { BookticketComponent } from './customer/bookticket/bookticket.component';
import { AddReviewComponent } from './customer/add-review/add-review.component';
import { ViewTicketComponent } from './customer/view-ticket/view-ticket.component';
import { RoleGaurd } from './my-auth.guard';

const routes: Routes = [{path:"",component:NavbarComponent},
{ path: 'login', component: LoginComponent },
{ path:'signup',component:SignupComponent},
{ path:'dashboard', component : DashboardComponent, canActivate: [RoleGaurd], data:{roles: ['admin', 'user']}, children:[{path:'addmovie',component:AddmovieComponent, canActivate: [RoleGaurd], data:{roles: 'admin'}},
                                                              {path:'editmovie',component:EditmoviesComponent , canActivate: [RoleGaurd], data:{roles: 'admin'} , children: [{path:'edittimerate/:id', component : EditTimeRateComponent ,  canActivate: [RoleGaurd], data:{roles: 'admin'}}] },
                                                              {path: 'deletemovie', component:DeletemoviesComponent,  canActivate: [RoleGaurd], data:{roles: 'admin'}},
                                                              {path: 'movie/:id' , component: MoviedetailComponent,  canActivate: [RoleGaurd], data:{roles: ['admin', 'user']}},
                                                              {path: 'add-review', component: AddReviewComponent,  canActivate: [RoleGaurd], data:{roles: ['admin', 'user']}},
                                                              {path: 'view-ticket', component: ViewTicketComponent ,  canActivate: [RoleGaurd], data:{roles: ['admin', 'user']}}]},
{ path : 'ticket/:id' , component : BookticketComponent,  canActivate: [RoleGaurd], data:{roles: ['admin','user']}},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
