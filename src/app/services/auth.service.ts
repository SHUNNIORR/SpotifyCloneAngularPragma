import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AuthService {

  authEndpoint = 'https://accounts.spotify.com/authorize';
  redirectUri = 'http://localhost:4200/';
  clientId = '441b51002fc44af09af9aef38fab0931';
  clientSecret = '8642bf7f77b64324a9895c3d9db51eda';
  scopes = [
    'user-library-read',
    'user-read-private',
    'user-read-email',
    'user-read-currently-playing',
    'user-read-recently-played',
    'user-read-playback-state',
    'user-top-read',
    'user-modify-playback-state',
  ];

  loginUrl = `${this.authEndpoint}?client_id=${this.clientId}&redirect_uri=${this.redirectUri}&scope=${this.scopes.join(
    '%20'
  )}&response_type=token&show_dialog=true`;


  constructor(private http: HttpClient) {}

  getTokenFromUrl = () => {
    return window.location.hash
      .substring(1)
      .split('&')
      .reduce((initial: any, item) => {
        let parts = item.split('=');
        initial[parts[0]] = decodeURIComponent(parts[1]);
        return initial;
      }, {});
  };

  guardarToken = () => {
    const url = this.getTokenFromUrl();
    //sí existe un access token lo guarda en el localstorage si no no hace nada
    if (url.access_token){
      window.location.hash="";
      localStorage.setItem('token', JSON.stringify(url));
    }
  }

  cerrarSesion = () =>{
    localStorage.removeItem('token');
    window.location.hash="";
    window.location.reload();
  }

  getTokenFromLocalStorage = () => {
    return localStorage.getItem('token');
  }

  existToken = () => {
    const token = localStorage.getItem('token');
    return token != null? true: false;
  }

}
