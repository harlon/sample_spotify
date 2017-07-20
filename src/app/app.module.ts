import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {  APP_ROUTING } from './app.routes';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { SearchComponent } from './components/search/search.component';
import { NavbarComponent } from './components/share/navbar/navbar.component';
import { HttpModule } from '@angular/http';
import { SpotifyService } from "./services/spotify.service";
import { FormsModule } from "@angular/forms";
import { SinfotoPipe } from './pipes/sinfoto.pipe';
import { ArtistaComponent } from './components/artista/artista.component';
import { DomseguroPipe } from './pipes/domseguro.pipe';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    SearchComponent,
    NavbarComponent,
    SinfotoPipe,
    ArtistaComponent,
    DomseguroPipe
  ],
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    APP_ROUTING
  ],
  providers: [
    SpotifyService],
  bootstrap: [AppComponent]
})
export class AppModule { }
