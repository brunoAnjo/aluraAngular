import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

import { Photo } from '../photo/Photo';
import { PhotoService } from '../photo/service.photo';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})

export class PhotoListComponent implements OnInit{
  
  photos : Photo[] = [];
  filter : string = '';
  hasMore : boolean = true;
  currentPage : number = 1;
  userName : string = '';

  constructor(
    private activatedRoutes: ActivatedRoute,
    private photoService : PhotoService
  ){}
  
  ngOnInit(): void{
    this.userName = this.activatedRoutes.snapshot.params.userName;
    this.photos = this.activatedRoutes.snapshot.data['photos'];
    
  }

  load(){
    this.photoService
      .listFormUserPaginated(this.userName, ++this.currentPage)
      .subscribe(photos => {
        this.photos = this.photos.concat(photos);
        if(!photos.length){
          this.hasMore = false;
        }
      });
  }

}