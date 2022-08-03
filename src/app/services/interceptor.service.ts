import { SpotifyApiService } from 'src/app/services/spotify-api.service';
import { AuthService } from 'src/app/services/auth.service';
import { Injectable } from '@angular/core';
import { HttpErrorResponse, HttpEvent, HttpHandler, HttpHeaders, HttpInterceptor, HttpRequest } from '@angular/common/http';
import { Observable, catchError, throwError } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class InterceptorService implements HttpInterceptor {

  constructor(private authService: AuthService, private spotifyApi: SpotifyApiService ) { }

  intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
    
    let token = JSON.parse(
      this.authService.getTokenFromLocalStorage()!
    );
    this.spotifyApi.validateToken(token);
    const headers = new HttpHeaders({
      'Content-Type': 'application/json',
      Authorization: 'Bearer ' + token?.access_token,
    });
    const reqClone = req.clone({
      headers
    });

    return next.handle(reqClone).pipe(
      catchError(this.manejarError)
    )
  }

  manejarError(error:HttpErrorResponse){
    console.log('Sucedió un error');
    console.log('ERROR',error)
    return throwError('Error Prueba');
  }

}
