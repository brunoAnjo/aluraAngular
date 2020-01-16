import { Component, OnInit, Input } from '@angular/core';
import { Photo } from '../../photo/Photo';

@Component({
  selector: 'ap-photos',
  templateUrl: './photos.component.html',
  styleUrls: ['./photos.component.css']
})
export class PhotosComponent implements OnInit {

  @Input() photos: Photo[] = [];
  rows: any[] = [];

  constructor() { }

  ngOnInit() {
    this.rows = this.goupColumns(this.photos);
  }

  goupColumns(photos: Photo[]){
    const newRows = [];

    for(let index = 0; index < photos.length; index+=3){
        newRows.push(photos.slice(index, index +3));
    }

    return newRows;
  }

}
