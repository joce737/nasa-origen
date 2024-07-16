import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaApiService {
  private apiUrl = 'https://images-api.nasa.gov/search?q=apollo%2011&media_type=image';

  constructor(private http: HttpClient) {}

  getRecentImages(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
