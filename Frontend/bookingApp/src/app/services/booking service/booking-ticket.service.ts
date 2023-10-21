import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class BookingTicketService {
  private apiUrl = 'http://localhost:3000'; // Replace with your API endpoint

  constructor(private http: HttpClient) {}

  bookTicket(movieId: string, bookingData: any): Observable<any> {
    return this.http.post(`${this.apiUrl}/api/movies/book-ticket/${movieId}`, bookingData);
  }

  getTicketsByUserId(userId: string): Observable<any[]> {
    const url = `${this.apiUrl}/api/tickets/user/${userId}`;
    return this.http.get<any[]>(url);
  }

 cancelTicket(ticketId: string, userId: string): Observable<any> {
  const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
  const cancelData = { userId }; // Include userId in the request body

  return this.http.post(`${this.apiUrl}/api/movies/cancel-ticket/${ticketId}`, cancelData, { headers });
}
}
