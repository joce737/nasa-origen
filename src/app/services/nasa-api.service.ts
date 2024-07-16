import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class NasaApiService {

  private apiUrl = 'https://api.nasa.gov/your_endpoint'; // Reemplaza con tu URL de la API de la NASA
  private apiKey = 'your_api_key'; // Reemplaza con tu API Key de la NASA

  constructor(private http: HttpClient) { }

  getRecentImages(): Observable<any[]> {
    const url = `${this.apiUrl}/endpoint?api_key=${this.apiKey}&params`; // Reemplaza con tu endpoint y parámetros
    return this.http.get<any[]>(url);
  }
}
