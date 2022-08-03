import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './components/pages/login/login.component';
import { PlayerComponent } from './components/pages/player/player.component';
import { FavoritesComponent } from './components/organism/favorites/favorites.component';
import { AppRoutingModule } from '../app-routing.module';
import { SidebarComponent } from './components/organism/sidebar/sidebar.component';
import { HomeComponent } from './components/organism/home/home.component';
import { UserInfoComponent } from './components/molecules/user-info/user-info.component';
import { ListItemComponent } from './components/molecules/list-item/list-item.component';
import { PlaylistItemComponent } from './components/molecules/playlist-item/playlist-item.component';
import { UserstoptracksItemComponent } from './components/molecules/userstoptracks-item/userstoptracks-item.component';
import { UserfavoritetracksItemComponent } from './components/molecules/userfavoritetracks-item/userfavoritetracks-item.component';
import { SearchComponent } from './components/organism/search/search.component';
import { FormsModule } from '@angular/forms';
import { SearchtrackItemComponent } from './components/molecules/searchtrack-item/searchtrack-item.component';



@NgModule({
  declarations: [
    LoginComponent,
    PlayerComponent,
    FavoritesComponent,
    SidebarComponent,
    HomeComponent,
    UserInfoComponent,
    ListItemComponent,
    PlaylistItemComponent,
    UserstoptracksItemComponent,
    UserfavoritetracksItemComponent,
    SearchComponent,
    SearchtrackItemComponent
  ],
  exports: [
    LoginComponent,
    PlayerComponent,
    FavoritesComponent
  ],
  imports: [
    CommonModule,
    AppRoutingModule,
    FormsModule
  ]
})
export class SpotifyModule { }
