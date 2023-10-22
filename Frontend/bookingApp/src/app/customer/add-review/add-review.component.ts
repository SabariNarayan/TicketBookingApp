import { Component , OnInit ,Input, Output, EventEmitter } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AddmovieService } from 'src/app/services/adminservices/movieservices/movie.service';


@Component({
  selector: 'app-add-review',
  templateUrl: './add-review.component.html',
  styleUrls: ['./add-review.component.css']
})
export class AddReviewComponent implements OnInit {
  @Input () movieId! : string ;
  @Output() reviewPosted: EventEmitter<any> = new EventEmitter<any>();
  reviewData = {
    rating: '', // You can set a default value or leave it empty
    text: '',
    name: ''
  };
  
  movie : [] = []
  

  constructor( private movieService : AddmovieService, private route : ActivatedRoute){}

  ngOnInit(): void {
  
    this.movieService.getMovieById(this.movieId).subscribe(
      (data) => {
        this.movie = data;
        // If you need to do additional operations on the movie details, do it here
      },
      (error) => {
        console.error(error);
        
        // Handle error cases here
      }
    );
  }
 
  submitReview() {
    // Get the selected rating, review text, and user's name
    const reviewData = {
      movieId: this.movieId, // Use the movieId fetched in ngOnInit
      rating: this.reviewData.rating, // Get the selected rating from the radio buttons
      text: this.reviewData.text, // Get the review text from the textarea
      name: this.reviewData.name // Get the user's name from the input field
    };
  
    // Post the review using your movieService
    this.movieService.postReview(reviewData).subscribe(
      (response) => {
        console.log('Review posted successfully', response);
        this.reviewData.rating = ''; // Reset the rating
        this.reviewData.text = '';   // Reset the text
        this.reviewData.name = '';
        this.reviewPosted.emit(reviewData);
        // Handle success, e.g., clear the form or show a success message
      },
      (error) => {
        console.error('Error posting review', error);
        console.log('movieId', this.movieId)
        // Handle error, e.g., show an error message to the user
      }
    );
  }
  
}
  


