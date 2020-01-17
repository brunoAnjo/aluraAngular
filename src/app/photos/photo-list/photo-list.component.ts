import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../photo/Photo';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit{

  photos : Photo[] = [];
  filter : string = '';
  constructor(private activatedRoutes: ActivatedRoute){}
  
  ngOnInit(): void{
    this.photos = this.activatedRoutes.snapshot.data['photos'];
  }

}
