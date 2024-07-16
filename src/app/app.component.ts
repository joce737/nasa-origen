import { Component, OnInit } from '@angular/core';
import { NasaApiService } from './services/nasa-api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  images: any[] = [];

  constructor(private nasaApiService: NasaApiService) {}

  ngOnInit(): void {
    this.getRecentImages();
  }

  getRecentImages(): void {
    this.nasaApiService.getRecentImages().subscribe(
      (data: any[]) => {
        this.images = data;
      },
      (error) => {
        console.error('Error fetching recent images:', error);
      }
    );
  }
}
