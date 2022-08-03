import { Component, Input, OnInit } from '@angular/core';
import { Tracks, TracksItem } from 'src/app/spotify/interfaces/searchtracks&artists.interface';

@Component({
  selector: 'app-searchtrack-item',
  templateUrl: './searchtrack-item.component.html',
  styleUrls: ['./searchtrack-item.component.css']
})
export class SearchtrackItemComponent implements OnInit {

  @Input() tracks= {} as TracksItem

  

  constructor() { }

  ngOnInit(): void {
  }

}
