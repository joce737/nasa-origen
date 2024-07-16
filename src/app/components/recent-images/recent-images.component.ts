import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-recent-images',
  templateUrl: './recent-images.component.html',
  styleUrls: ['./recent-images.component.css']
})
export class RecentImagesComponent implements OnInit {
  @Input() images: any[] = [];

  constructor() {}

  ngOnInit(): void {}
}
