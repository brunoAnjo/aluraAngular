import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo/service.photo';
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

  constructor(
        private photoService: PhotoService,
        private activatedRoutes: ActivatedRoute
    ){}
  
  ngOnInit(): void{

    const username = this.activatedRoutes.snapshot.params.userName;

    this.photoService.listFormUser(username)
    .subscribe(photo => {photo[0].description; this.photos = photo})
  }

}
