import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,tap, catchError } from 'rxjs';
import { of } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class AddmovieService {
  private baseUrl = 'http://localhost:3000';

  constructor(private http: HttpClient) { }


  addMovie(movieData: any): Observable<any> {
    const url = `${this.baseUrl}/api/movies`; // Replace with your API endpoint
    return this.http.post(url, movieData);
  }

  getMovies(): Observable<any[]> {
    const url = `${this.baseUrl}/api/movies`;
    return this.http.get<any[]>(url).pipe(
      tap((response) => {
        console.log('Movie Data:', response);
      }),
      catchError((error) => {
        console.error('Error fetching movies', error);
        return [];
      })
    );
  }



  getMovieById(movieId: string): Observable<any> {
    return this.http.get<any>(`${this.baseUrl}/api/movies/${movieId}`);
  }

  updateMovie(movieId: string, updatedMovieData: any): Observable<any> {
    const url = `${this.baseUrl}/api/movies/${movieId}`;
    return this.http.put(url, updatedMovieData);
  }
  

  deleteMovie(movieId: string): Observable<void> {
    const url = `${this.baseUrl}/api/movies/${movieId}`; // Update the URL with the correct endpoint
    return this.http.delete<void>(url);
  }
}
