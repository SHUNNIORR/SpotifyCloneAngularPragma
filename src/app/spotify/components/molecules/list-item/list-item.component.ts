import { Component, Input, OnInit } from '@angular/core';
import { Item } from 'src/app/spotify/interfaces/newreleases.interface';

@Component({
  selector: 'app-list-item',
  templateUrl: './list-item.component.html',
  styleUrls: ['./list-item.component.css']
})
export class ListItemComponent implements OnInit {

  @Input() item = {} as Item;

  constructor() { }

  ngOnInit(): void {
  }

}
