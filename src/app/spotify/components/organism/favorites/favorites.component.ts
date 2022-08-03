import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { SpotifyApiService } from 'src/app/services/spotify-api.service';
import { UsersFavoriteTracksInterface } from 'src/app/spotify/interfaces/usersfavoritetracks.interface';

@Component({
  selector: 'app-favorites',
  templateUrl: './favorites.component.html',
  styleUrls: ['./favorites.component.css']
})
export class FavoritesComponent implements OnInit {

  constructor(private spotifyApi: SpotifyApiService, private authService: AuthService) { }

  userFavoriteTracks = {} as UsersFavoriteTracksInterface;

  ngOnInit(): void {
    this.spotifyApi.getFavoriteTracks().subscribe({
      next:(resp:UsersFavoriteTracksInterface)=>{
      this.userFavoriteTracks = resp
    },error:(error)=>{
      console.log('Favoritosss',error)
      this.spotifyApi.alertCloseSession();
     }})
  }

}
