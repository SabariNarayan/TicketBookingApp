import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AddmovieService } from 'src/app/services/adminservices/movieservices/movie.service';
import { FormGroup, FormBuilder } from '@angular/forms';

@Component({
  selector: 'app-edit-time-rate',
  templateUrl: './edit-time-rate.component.html',
  styleUrls: ['./edit-time-rate.component.css']
})
export class EditTimeRateComponent implements OnInit {
  movieForm: FormGroup;
  movieId!: string;
  movie : any = {};

   constructor(private fb: FormBuilder , private addMovieService: AddmovieService, private route: ActivatedRoute, private router :Router){
    this.movieForm = this.fb.group({
      movieTimings: [''],
      ticketRates: ['']
    });
  }
   

   ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.movieId = params['id'];
      this.addMovieService.getMovieById(this.movieId).subscribe(
        (data) => {
          this.movie = data;
          // If you need to do additional operations on the movie details, do it here
        },
        (error) => {
          console.error(error);
          // Handle error cases here
        }
      );
    });
  }

  submitForm() {
    if (this.movieForm.valid) {
      const newMovieTimings = this.movieForm.get('movieTimings')?.value;
      const ticketRates = this.movieForm.get('ticketRates')?.value;
  
      if (newMovieTimings || ticketRates) {
        // At least one of the fields has a value, proceed with the update
        console.log('Updating movie:', newMovieTimings, ticketRates);
  
        if (newMovieTimings) {
          // Remove existing movie timings that are not in the new timings
          this.movie.movieTimings = this.movie.movieTimings.filter((existingTiming: string) => newMovieTimings.includes(existingTiming));
  
          // Split the new movieTimings into an array
          const newTimingsArray = newMovieTimings.split(',').map((time: string) => time.trim());
  
          // Add new timings that are not already in the movieTimings array
          for (const newTiming of newTimingsArray) {
            if (!this.movie.movieTimings.includes(newTiming)) {
              this.movie.movieTimings.push(newTiming);
            }
          }
  
          // Ensure `seatsAvailable` and `totalSeats` are arrays with the same value
          if (!this.movie.seatsAvailable) {
            this.movie.seatsAvailable = [];
          }
          this.movie.seatsAvailable = this.movie.movieTimings.map(() => this.movie.totalSeats[0]);
  
          if (!this.movie.totalSeats) {
            this.movie.totalSeats = [];
          }
          this.movie.totalSeats = this.movie.movieTimings.map(() => this.movie.totalSeats[0]);
  
          // Initialize the corresponding index in `ticketsSoldPerDay` to 0
          if (!this.movie.ticketsSoldPerDay) {
            this.movie.ticketsSoldPerDay = [];
          }
          this.movie.ticketsSoldPerDay = this.movie.movieTimings.map(() => 0);
        }
  
        if (ticketRates) {
          this.movie.ticketRates = ticketRates;
        }
  
        // Call your service to update the movie with the edited data
        this.addMovieService.updateMovie(this.movieId, this.movie).subscribe(
          (data) => {
            // Handle success cases here
            console.log('Movie updated successfully', data);
            alert('Movie updated successfully');
            this.router.navigate(['/dashboard/editmovie']);
          },
          (error) => {
            console.error('Error updating movie', error);
            alert('Error updating movie');
            // Handle error cases here
          }
        );
      } else {
        // Both fields are empty, show an alert
        alert('Please fill at least one field.');
      }
    } else {
      alert('Please fill in all required fields.');
    }
  }
  
  

}
