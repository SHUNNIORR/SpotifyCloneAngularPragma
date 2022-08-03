import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';
import { SpotifyApiService } from 'src/app/services/spotify-api.service';
import { SearchTracksArtistsInterface, Tracks, TracksItem} from 'src/app/spotify/interfaces/searchtracks&artists.interface';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.css']
})
export class SearchComponent implements OnInit {

  constructor(private spotifyApi: SpotifyApiService, private authService: AuthService) { }

  searchterm: string=''
  SearchResults:TracksItem[] = [];
  ngOnInit(): void {
  }

  searchATerm() {
    this.spotifyApi.searchTracksAndArtists(this.searchterm).subscribe((resp:SearchTracksArtistsInterface)=>{
      const{tracks} = resp;
      this.SearchResults = tracks.items
    },(error)=>{
      console.log(error)
      if (confirm("Tú token expiró :C por favor, vuelve a iniciar sesión.") == true) {
        this.authService.cerrarSesion()
      } else {
        this.authService.cerrarSesion()
      }
     })
    this.searchterm = ''
  } 

  

}
