import { Injectable } from '@angular/core';
import {
  HttpClient,
  HttpErrorResponse,
  HttpHeaders,
} from '@angular/common/http';
import { endpoints } from './endpoints';
import {
  catchError,
  Observable,
  throwError as ErrorObservable,
  throwError,
} from 'rxjs';
import { UserInfoInterface } from '../spotify/interfaces/userinfo.interface';
import { AuthService } from './auth.service';
import { NewReleasesInterface } from '../spotify/interfaces/newreleases.interface';
import { FeaturedPlaylistsInterface } from '../spotify/interfaces/featuredplaylists.interface';
import { UsersTopTracksInterface } from '../spotify/interfaces/userstoptracks.interface';
import { UsersFavoriteTracksInterface } from '../spotify/interfaces/usersfavoritetracks.interface';
import { SearchTracksArtistsInterface } from '../spotify/interfaces/searchtracks&artists.interface';

@Injectable({
  providedIn: 'root',
})
export class SpotifyApiService {
  constructor(private http: HttpClient, private authService: AuthService) {}
  endpoints = endpoints;



  private handleError(error: HttpErrorResponse) {
    if (error.status === 0) {
      // A client-side or network error occurred. Handle it accordingly.
      console.log('An error occurred:', error.error);
    } else {
      // The backend returned an unsuccessful response code.
      // The response body may contain clues as to what went wrong.
      console.log(
        `Backend returned code ${error.status}, body was: `,
        error.error
      );
    }
    // Return an observable with a user-facing error message.
    return throwError(() => {
      this.authService.cerrarSesion();
    });
  }

  alertCloseSession(){
    if (
      confirm('No existe token :C por favor, vuelve a iniciar sesión.') ==
      true
    ) {
      this.authService.cerrarSesion();
    } else {
      this.authService.cerrarSesion();
    }
  }

  validateToken(token:string){
    if (token === null) {
      console.log('Favoritosss');
      this.alertCloseSession();
    }
  }

  getUserInfo(): Observable<UserInfoInterface> {
    
    return this.http
      .get<UserInfoInterface>(endpoints.userInfo)
      .pipe(catchError(this.handleError));
  }

  getNewReleases(): Observable<NewReleasesInterface> {
    // let token = JSON.parse(
    //   this.authService.getTokenFromLocalStorage()!
    // );
    // this.validateToken(token);
    // const httpHeaders = new HttpHeaders({
    //   'Content-Type': 'application/json',
    //   Authorization: 'Bearer ' + token?.access_token,
    // });
    // return this.http.get<NewReleasesInterface>(endpoints.newReleases, {
    //   headers: httpHeaders,
    // });
    return this.http.get<NewReleasesInterface>(endpoints.newReleases);
  }
  getFeaturedPlaylists(): Observable<FeaturedPlaylistsInterface> {
    
    return this.http.get<FeaturedPlaylistsInterface>(
      endpoints.featuredPlaylist
    );
  }

  getUsersTopTracks(): Observable<UsersTopTracksInterface> {
    
    return this.http.get<UsersTopTracksInterface>(endpoints.usersTopTracks);
  }

  getFavoriteTracks(): Observable<UsersFavoriteTracksInterface> {
    
    return this.http.get<UsersFavoriteTracksInterface>(
      endpoints.usersFavoriteTracks
    );
  }

  searchTracksAndArtists(
    search: string
  ): Observable<SearchTracksArtistsInterface> {
    let url = `${endpoints.searchTrackArtists}${search}&type=track%2Cartist&market=US&limit=10&offset=5`;
    
    return this.http.get<SearchTracksArtistsInterface>(url);
  }
}
