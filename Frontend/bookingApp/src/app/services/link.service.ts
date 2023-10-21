import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class LinkService {
  private baseUrl = 'http://localhost:3000'; 
  user: any;

  constructor(private http: HttpClient) { }

  registerUser(data: any): Observable<any> {
    const url = `${this.baseUrl}/register`;
    return this.http.post(url, data);
  }
}
