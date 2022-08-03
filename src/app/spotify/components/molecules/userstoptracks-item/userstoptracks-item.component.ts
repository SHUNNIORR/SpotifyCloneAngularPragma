import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/spotify/interfaces/userstoptracks.interface';

@Component({
  selector: 'app-userstoptracks-item',
  templateUrl: './userstoptracks-item.component.html',
  styleUrls: ['./userstoptracks-item.component.css']
})
export class UserstoptracksItemComponent implements OnInit {

  constructor() { }

  @Input() item = {} as Item
  images:string=this.item.album?.images?.[0].url||''
  ngOnInit(): void {
  }

}
