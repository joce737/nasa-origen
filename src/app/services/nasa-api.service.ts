import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaApiService {

  private apiUrl = 'https://api.nasa.gov/planetary/apod?api_key=DEMO_KEY&count=5'; // URL de la API de la NASA

  constructor(private http: HttpClient) { }

  getRecentImages(): Observable<any[]> {
    return this.http.get<any[]>(this.apiUrl);
  }
}
