import { Component, OnInit, Inject , Input} from '@angular/core';
import { AddmovieService } from 'src/app/services/adminservices/movieservices/movie.service';
import { MAT_DIALOG_DATA, MatDialog , MatDialogRef} from '@angular/material/dialog';


@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.css']
})
export class MoviedetailComponent implements OnInit {
  @Input() movieId! : string;
  movie : any = {} ;
  
  movieRatings: any[] = [];

  constructor(private addMovieService : AddmovieService ,public matRef: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any ,
    public dialogRef: MatDialogRef<MoviedetailComponent>// Define the data property
  ) {
    this.movie = data;
    this.movieId = data._id // Assign the data to your component's movie property
  }
  

  ngOnInit(): void {

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

    this.addMovieService.getMovieRatings(this.movieId).subscribe(
      (ratings) => {
        this.movieRatings = ratings;
      },
      (error) => {
        console.error(error);
        // Handle error cases here
      }
    );
  }

  onClose(): void {
    // Close the dialog and optionally pass data back
    this.dialogRef.close('Data to return');
  }
  
  handleReviewPosted(newReview: any) {
    // Add the new review to the array of reviews
    this.movieRatings.push(newReview);
  }
}
