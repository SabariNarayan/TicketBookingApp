import { Component, OnInit } from '@angular/core';
import { AddmovieService } from 'src/app/services/adminservices/movieservices/movie.service';
@Component({
  selector: 'app-deletemovies',
  templateUrl: './deletemovies.component.html',
  styleUrls: ['./deletemovies.component.css']
})
export class DeletemoviesComponent implements OnInit {
  movies: any[] = []; // Initialize as an empty array to store multiple movies

  constructor(private addMovieService: AddmovieService) {}

  ngOnInit() {
    // Fetch movies from the backend when the component is initialized
    this.fetchMovies();
  }
   
  fetchMovies(): void {
    this.addMovieService.getMovies().subscribe(
      (data) => {
        this.movies = data;
      },
      (error) => {
        console.error(error);
      }
    );
  }


  deleteMovie(movieId: string): void {
    this.addMovieService.deleteMovie(movieId).subscribe(
      () => {
        this.fetchMovies();
        alert('Movie Deleted');
        window.location.reload();
        // Handle successful deletion, e.g., remove the movie from the UI
      },
      (error) => {
        // Handle error
        console.error('Error deleting movie', error);
      }
    );
    
  }
  
  
}



