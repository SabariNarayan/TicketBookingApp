import { Component } from '@angular/core';
import { AddmovieService } from 'src/app/services/adminservices/movieservices/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addmovie',
  templateUrl: './addmovie.component.html',
  styleUrls: ['./addmovie.component.css']
})
export class AddmovieComponent {
  movieData: any = {
    // Initialize with default values or empty strings
    movieName: '',
    image: '',
    category: 'UA',
    languages: [],
    cast: [],
    description: '',
    ticketRates: 0,
    seatsAvailable: 0,
    totalSeats: 0,
    averageRating: 0,
    ticketsSoldPerDay: 0,
    movieTimings: [],
  };

  constructor(private addmovieService: AddmovieService , private router :Router) {}

  onSubmit() {
    // Get the number of seats entered in the form
    const numberOfSeats = this.movieData.seatsAvailable;
  
    // Set both seatsAvailable and totalSeats to the entered number of seats
    this.movieData.seatsAvailable = numberOfSeats;
    this.movieData.totalSeats = numberOfSeats;
  
    // Call your movie service to post the movie data to the backend
    this.addmovieService.addMovie(this.movieData).subscribe(
      (response) => {
        // Handle successful movie creation
        console.log('Movie added successfully:', response);
        alert('Movie added successfully');
        this.router.navigate(['../']);
        window.location.reload();
        // Optionally, you can reset the form or navigate to a different page
      },
      (error) => {
        // Handle error cases
        console.error('Error adding movie:', error);
        alert('Error adding Movie / please fill all the fields');
      }
    );
  }
  
}

