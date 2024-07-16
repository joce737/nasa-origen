import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module'; // Asegúrate de que la ruta sea correcta
import { AppComponent } from './app.component'; // Asegúrate de que la ruta sea correcta

@NgModule({
  declarations: [
    AppComponent
    // Agrega aquí otros componentes que tengas declarados en tu AppModule
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
    // Agrega aquí otros módulos que estés importando en tu AppModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
