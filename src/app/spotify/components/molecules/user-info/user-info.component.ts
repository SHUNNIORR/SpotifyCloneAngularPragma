import { SpotifyApiService } from './../../../../services/spotify-api.service';
import { AuthService } from './../../../../services/auth.service';
import { Component, OnInit } from '@angular/core';
import { UserInfoInterface } from 'src/app/spotify/interfaces/userinfo.interface';


@Component({
  selector: 'app-user-info',
  templateUrl: './user-info.component.html',
  styleUrls: ['./user-info.component.css']
})
export class UserInfoComponent implements OnInit {

  constructor(private spotifyApi: SpotifyApiService, private authService: AuthService) { }
  thereInfo: boolean = false;
  infoUser={} as UserInfoInterface;
  ngOnInit(): void {
    console.log(this.infoUser);
    this.spotifyApi.getUserInfo().subscribe({
      next:(resp)=>{
        this.infoUser = resp
        this.thereInfo = true;
      },error:(error:any)=>{
        console.log(error);
        this.spotifyApi.alertCloseSession();
      }
   })
  }

}
