import { Component, OnInit , Input } from '@angular/core';
import { AddmovieService } from 'src/app/services/adminservices/movieservices/movie.service';
import { ActivatedRoute , Router } from '@angular/router';
import { BookingTicketService } from 'src/app/services/booking service/booking-ticket.service';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-bookticket',
  templateUrl: './bookticket.component.html',
  styleUrls: ['./bookticket.component.css']
})
export class BookticketComponent implements OnInit {
  movieId!: string;
  movie : any = {};
  selectedMovie: any = {}; // Initialize with an empty object
  movieTimingsArray: string[] = [];
  bookingData = {
    userId: '',
    name: '',
    email: '',
    numOfTickets: '1', // Default value
    showtime: '',
    movieName: '', // To be set based on user selection
  };
  
  constructor (private addMovieService : AddmovieService ,
     private route : ActivatedRoute ,
     private bookingTicketService : BookingTicketService,
     private loginService : LoginService,
     private router : Router){
            
  }
  
  ngOnInit(): void {
    
    this.movieId = this.route.snapshot.params['id']; // Initialize movieId
    this.addMovieService.getMovieById(this.movieId).subscribe(
      (data) => {
        this.movie = data;
        this.movieTimingsArray = this.movie.movieTimings.map((timeSlot: string) => timeSlot.trim());
        if (this.movieTimingsArray.length > 0) {
          this.bookingData.showtime = this.movieTimingsArray[0];
          this.bookingData.movieName = this.movie.movieName;
        }
         },
      (error) => {
        console.error(error);
        // Handle error cases here
      }
    );
  }

  
  // Simulate selecting a movie
  selectMovie(movie: any) {
    this.selectedMovie = movie;
  }
  
  
  // Split the timings string into an array
 
  onSubmit() {
    const userId = this.loginService.getUserId(); // Get the user_id
    if (userId) {
      // If userId is available, include it in the bookingData
      this.bookingData.userId = userId; // Make sure your bookingData model includes userId
      
      // Now, you can send the booking request with the user_id
      this.bookingTicketService.bookTicket(this.movieId, this.bookingData).subscribe(
        (response) => {
          // Handle successful booking
          console.log('Ticket booked successfully:', response);
          alert('Ticket booked successfully');

          // Optionally, you can reset the form or navigate to a different page
        },
        (error) => {
          // Handle error cases
          console.error('Error booking ticket:', error);
          alert('Error booking ticket');
          console.log('User ID:', userId);
        }
      );
    } else {
      // Handle the case where userId is not available (e.g., user is not logged in)
      alert('User not authenticated. Please log in to book a ticket.');
    }
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['']);
  }
}



