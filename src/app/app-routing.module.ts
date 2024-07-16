import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecentImagesComponent } from './components/recent-images/recent-images.component';
import { PopularMediaComponent } from './components/popular-media/popular-media.component';
import { MediaDetailComponent } from './components/media-detail/media-detail.component';
import { SearchMediaComponent } from './components/search-media/search-media.component';
import { FilterMediaComponent } from './components/filter-media/filter-media.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';

const routes: Routes = [
  { path: '', redirectTo: '/popular-media', pathMatch: 'full' },
  { path: 'recent-images', component: RecentImagesComponent }, 
  { path: 'popular-media', component: PopularMediaComponent },
  { path: 'media-detail', component: MediaDetailComponent },
  { path: 'search-media', component: SearchMediaComponent },
  { path: 'filter-media', component: FilterMediaComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: '**', redirectTo: '/popular-media', pathMatch: 'full' } // Manejo de rutas no encontradas
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
