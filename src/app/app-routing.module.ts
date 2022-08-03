import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FavoritesComponent } from './spotify/components/organism/favorites/favorites.component';
import { HomeComponent } from './spotify/components/organism/home/home.component';
import { SearchComponent } from './spotify/components/organism/search/search.component';

const routes: Routes =[
  {
      path: '',
      component: HomeComponent,
      pathMatch:'full'
  },
  {
    path: 'home',
    component: HomeComponent,
  },
  {
    path: 'search',
    component: SearchComponent,
  },
  {
    path: 'favorites',
    component: FavoritesComponent,
  },
  {
      path:'**',
      redirectTo: ''
  }
]

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
