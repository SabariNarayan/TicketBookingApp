import { Component, OnInit, Inject} from '@angular/core';
import { AddmovieService } from 'src/app/services/adminservices/movieservices/movie.service';
import { MAT_DIALOG_DATA, MatDialog , MatDialogRef} from '@angular/material/dialog';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-moviedetail',
  templateUrl: './moviedetail.component.html',
  styleUrls: ['./moviedetail.component.css']
})
export class MoviedetailComponent implements OnInit {
  movie : any = {} ;
  movieId! : string;

  constructor(private addMovieService : AddmovieService , private route : ActivatedRoute ,public matRef: MatDialog,
    @Inject(MAT_DIALOG_DATA) public data: any ,
    public dialogRef: MatDialogRef<MoviedetailComponent>// Define the data property
  ) {
    this.movie = data; // Assign the data to your component's movie property
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

  onClose(): void {
    // Close the dialog and optionally pass data back
    this.dialogRef.close('Data to return');
  }
  
}
