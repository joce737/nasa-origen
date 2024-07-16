import { Component, OnInit } from '@angular/core';
import { NasaApiService } from '../../services/nasa-api.service';

@Component({
  selector: 'app-recent-images',
  templateUrl: './recent-images.component.html',
  styleUrls: ['./recent-images.component.css'] // Ajusta la ruta si es necesario
})
export class RecentImagesComponent implements OnInit {
  images: any[] = [];

  constructor(private nasaApiService: NasaApiService) {}

  ngOnInit(): void {
    this.nasaApiService.getRecentImages().subscribe((data: any[]) => {
      this.images = data;
    });
  }
}
