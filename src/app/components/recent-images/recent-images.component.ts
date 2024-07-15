import { Component, OnInit } from '@angular/core';
import { NasaApiService } from '../../services/nasa-api.service';

@Component({
  selector: 'app-module-recent-images', // Cambia 'app-recent-images' a 'app-module-recent-images'
  templateUrl: './recent-images.component.html',
  styleUrls: ['./recent-images.component.css']
})
export class RecentImagesComponent implements OnInit {
  recentImages: any[] = [];

  constructor(private nasaApiService: NasaApiService) {}

  ngOnInit(): void {
    this.nasaApiService.getRecentImages().subscribe(
      (data: any) => {
        this.recentImages = data.collection.items;
      },
      (error) => {
        console.error('Error fetching recent images', error);
      }
    );
  }
}
