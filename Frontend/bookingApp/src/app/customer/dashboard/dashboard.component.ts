import { Component, OnInit, Inject } from '@angular/core';
import { AddmovieService } from 'src/app/services/adminservices/movieservices/movie.service';
import { MatDialog } from '@angular/material/dialog';
import { MoviedetailComponent } from '../moviedetail/moviedetail.component';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  movies: any[] = []; // Initialize as an empty array to store multiple movies

  constructor(
    private addMovieService: AddmovieService,
    public matRef: MatDialog,
    private router: Router,
    private loginService: LoginService
  ) {}

  ngOnInit() {
    // Fetch movies from the backend when the component is initialized
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

  isAdminRole(): boolean {
    // Replace this logic with your actual logic to check the user's role
    // For example, you can use data from your authentication service.
    // Return true if the user has an 'admin' role, otherwise return false.
    const userRole = this.loginService.getUserRole(); // Replace with the actual way you get the user's role.
    return userRole === 'admin';
  }

  openDialog(movie: any) {
    const dialogRef = this.matRef.open(MoviedetailComponent, {
      data: movie,
      backdropClass: 'custom-backdrop-class', // Pass the specific movie to the dialog
    });

    dialogRef.afterClosed().subscribe((result) => {
      console.log('The dialog was closed', result);
    });
  }

  logout() {
    localStorage.clear();
    this.router.navigate(['']);
  }
}
