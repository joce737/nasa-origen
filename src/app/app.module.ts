import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PopularMediaComponent } from './components/popular-media/popular-media.component';
import { MediaDetailComponent } from './components/media-detail/media-detail.component';
import { SearchMediaComponent } from './components/search-media/search-media.component';
import { FilterMediaComponent } from './components/filter-media/filter-media.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';
import { RecentImagesComponent } from './components/recent-images/recent-images.component';

@NgModule({
  declarations: [
    AppComponent,
    PopularMediaComponent,
    MediaDetailComponent,
    SearchMediaComponent,
    FilterMediaComponent,
    LoginComponent,
    ProfileComponent,
    WishlistComponent,
    RecentImagesComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
