import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecentImagesComponent } from './components/recent-images/recent-images.component';
import { PopularMediaComponent } from './components/popular-media/popular-media.component';
import { MediaDetailComponent } from './components/media-detail/media-detail.component';
import { LoginComponent } from './components/login/login.component';
import { ProfileComponent } from './components/profile/profile.component';
import { WishlistComponent } from './components/wishlist/wishlist.component';

const routes: Routes = [
  { path: 'recent-images', component: RecentImagesComponent },
  { path: 'popular-media', component: PopularMediaComponent },
  { path: 'media-detail', component: MediaDetailComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'wishlist', component: WishlistComponent },
  { path: '', redirectTo: '/recent-images', pathMatch: 'full' },
  // Puedes agregar más rutas según tus necesidades
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
