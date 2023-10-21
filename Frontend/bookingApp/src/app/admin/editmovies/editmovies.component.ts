import { Component,OnInit} from '@angular/core';
import { AddmovieService } from 'src/app/services/adminservices/movieservices/movie.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-editmovies',
  templateUrl: './editmovies.component.html',
  styleUrls: ['./editmovies.component.css']
})
export class EditmoviesComponent implements OnInit {
  movies: any= [];


constructor(private addMovieService: AddmovieService, private router:Router ){ }

ngOnInit(): void {
  // Fetch the list of all movies
  this.addMovieService.getMovies().subscribe(
    (data) => {
      this.movies = data; // Assign the fetched array of movies to 'movies'
    },
    (error) => {
      console.error('Error fetching movies', error);
      // Handle error cases here
    }
  );
}

reloadTable() {
  this.addMovieService.getMovies().subscribe(
    (data) => {
      this.movies = data;
    },
    (error) => {
      console.error('Error reloading table data', error);
      // Handle error cases here
    }
  );
}
}

    
  
