// app.module.ts
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { RecentImagesComponent } from './components/recent-images/recent-images.component'; // Importa el componente

@NgModule({
  declarations: [
    AppComponent,
    RecentImagesComponent // Declara el componente aquí
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
