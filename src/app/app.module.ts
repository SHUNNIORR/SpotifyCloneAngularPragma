import { InterceptorService } from './services/interceptor.service';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { AuthService } from './services/auth.service';
import { SpotifyApiService } from './services/spotify-api.service';
import { SpotifyModule } from './spotify/spotify.module';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
  ],
  imports: [
    SpotifyModule,
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [SpotifyApiService, AuthService,{provide: HTTP_INTERCEPTORS,useClass: InterceptorService,multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
