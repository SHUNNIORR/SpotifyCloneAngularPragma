import { Component, Input, OnInit } from '@angular/core';
import { Item, UsersFavoriteTracksInterface } from 'src/app/spotify/interfaces/usersfavoritetracks.interface';

@Component({
  selector: 'app-userfavoritetracks-item',
  templateUrl: './userfavoritetracks-item.component.html',
  styleUrls: ['./userfavoritetracks-item.component.css']
})
export class UserfavoritetracksItemComponent implements OnInit {

  constructor() { }
 @Input() item = { } as Item
 images:string=this.item.track?.album.images?.[0].url||'' ;
  ngOnInit(): void {
  }

}
