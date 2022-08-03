import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/spotify/interfaces/featuredplaylists.interface';

@Component({
  selector: 'app-playlist-item',
  templateUrl: './playlist-item.component.html',
  styleUrls: ['./playlist-item.component.css']
})
export class PlaylistItemComponent implements OnInit {

  constructor() { }

  @Input() item = {} as Item
  ngOnInit(): void {
  }

}
