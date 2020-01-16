import { Component, OnInit } from '@angular/core';
import { PhotoService } from '../photo/service.photo';

@Component({
  selector: 'app-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})
export class PhotoListComponent implements OnInit{

  photos : any[] = [];

  constructor(private photoService: PhotoService){}
  
  ngOnInit(): void{
    this.photoService.listFormUser('flavio')
    .subscribe(photo => {photo[0].description; this.photos = photo})
  }

}
