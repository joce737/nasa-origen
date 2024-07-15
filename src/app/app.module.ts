import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { RecentImagesComponent } from './components/recent-images/recent-images.component';
import { NasaApiService } from './services/nasa-api.service';

@NgModule({
  declarations: [
    AppComponent,
    RecentImagesComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule
  ],
  providers: [NasaApiService],
  bootstrap: [AppComponent]
})
export class AppModule { }
