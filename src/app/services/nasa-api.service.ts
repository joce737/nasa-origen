import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaApiService {
  private API_URL = 'https://images-api.nasa.gov';

  constructor(private http: HttpClient) {}

  getRecentImages(): Observable<any> {
    return this.http.get(`${this.API_URL}/search?q=recent&media_type=image`);
  }
}
