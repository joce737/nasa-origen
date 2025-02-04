import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http'; // Importa HttpClientModule

import { AppComponent } from './app.component';
import { RecentImagesComponent } from './components/recent-images/recent-images.component';
import { PopularMediaComponent } from './components/popular-media/popular-media.component';
import { MediaDetailComponent } from './components/media-detail/media-detail.component';
import { SearchMediaComponent } from './components/search-media/search-media.component';
import { FilterMediaComponent } from './components/filter-media/filter-media.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { NasaApiService } from './services/nasa-api.service'; // Importa NasaApiService

@NgModule({
  declarations: [
    AppComponent,
    RecentImagesComponent,
    PopularMediaComponent,
    MediaDetailComponent,
    SearchMediaComponent,
    FilterMediaComponent,
    LoginComponent,
    ProfileComponent,
    WishlistComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule // Añade HttpClientModule a los imports
  ],
  providers: [NasaApiService], // Añade NasaApiService a los providers
  bootstrap: [AppComponent]
})
export class AppModule { }
