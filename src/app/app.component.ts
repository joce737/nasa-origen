import { Component, OnInit } from '@angular/core';
import { NasaApiService } from './services/nasa-api.service'; // Ajusta la ruta si es necesario

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./components/recent-images/recent-images.component.css'] // Ajusta la ruta si es necesario
})
export class AppComponent implements OnInit {
  images: any[] = [];

  constructor(private nasaApiService: NasaApiService) {}

  ngOnInit(): void {
    this.nasaApiService.getRecentImages().subscribe((data: any[]) => {
      this.images = data;
    });
  }
}
