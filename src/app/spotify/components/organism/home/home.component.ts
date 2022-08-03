import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { SpotifyApiService } from 'src/app/services/spotify-api.service';
import { FeaturedPlaylistsInterface } from 'src/app/spotify/interfaces/featuredplaylists.interface';
import { NewReleasesInterface } from 'src/app/spotify/interfaces/newreleases.interface';
import { UsersTopTracksInterface } from 'src/app/spotify/interfaces/userstoptracks.interface';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private spotifyApi: SpotifyApiService, private authService: AuthService) { }

  newReleases={} as NewReleasesInterface
  featuredPlaylist = {} as FeaturedPlaylistsInterface
  usersTopTracks = {} as UsersTopTracksInterface

  ngOnInit(): void {
    this.spotifyApi.getNewReleases().subscribe((resp:NewReleasesInterface)=>{
      this.newReleases = resp
    },(error)=>{
      console.log(error)
      if (confirm("Tú token expiró :C por favor, vuelve a iniciar sesión.") == true) {
        this.authService.cerrarSesion()
      } else {
        this.authService.cerrarSesion()
      }
     })

    this.spotifyApi.getFeaturedPlaylists().subscribe((resp:FeaturedPlaylistsInterface)=>{
      this.featuredPlaylist = resp
    })

    this.spotifyApi.getUsersTopTracks().subscribe((resp:UsersTopTracksInterface)=>{
      this.usersTopTracks = resp
    })

  }

}
