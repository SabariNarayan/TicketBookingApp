import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './mainPage/login/login.component';
import { SignupComponent } from './mainPage/signup/signup.component';
import { NavbarComponent } from './mainPage/navbar/navbar.component';
import { FormsModule , ReactiveFormsModule} from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { LoginFormVisibilityService } from './services/loginformvisiblity.service';
import { LoginService } from './services/login.service';
import { DashboardComponent } from './customer/dashboard/dashboard.component';
import { AddmovieComponent } from './admin/addmovie/addmovie.component';
import { DeletemoviesComponent } from './admin/deletemovies/deletemovies.component';
import { EditmoviesComponent } from './admin/editmovies/editmovies.component';
import { FooterComponent } from './mainPage/footer/footer.component';
import { MoviedetailComponent } from './customer/moviedetail/moviedetail.component';
import { MatCardModule } from '@angular/material/card';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatDialogModule } from '@angular/material/dialog';
import { EditTimeRateComponent } from './admin/edit-time-rate/edit-time-rate.component';
import { BookticketComponent } from './customer/bookticket/bookticket.component';
import { BookingTicketService } from './services/booking service/booking-ticket.service';
import { AddReviewComponent } from './customer/add-review/add-review.component';
import { ViewTicketComponent } from './customer/view-ticket/view-ticket.component';
import { MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import { LinkService } from './services/link.service';
import { RoleGaurd } from './my-auth.guard';

@NgModule({
  declarations: [
    AppComponent,
    SignupComponent,
    LoginComponent,
    NavbarComponent,
    DashboardComponent,
    AddmovieComponent,
    DeletemoviesComponent,
    EditmoviesComponent,
    FooterComponent,
    MoviedetailComponent,
    EditTimeRateComponent,
    BookticketComponent,
    AddReviewComponent,
    ViewTicketComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    BrowserAnimationsModule,
    MatCardModule,
    MatDialogModule,
    MatFormFieldModule,
    MatSelectModule
  ],
  providers: [LoginFormVisibilityService, LoginService , BookingTicketService , LinkService , RoleGaurd],
  bootstrap: [AppComponent]
})
export class AppModule { }
