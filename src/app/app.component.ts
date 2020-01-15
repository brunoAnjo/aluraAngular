import { Component, OnInit } from '@angular/core';
import { PhotoService } from './photos/photo/service.photo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit{

  photos : any[] = [];

  constructor(private photoService: PhotoService){}
  
  ngOnInit(): void{
    this.photoService.listFormUser('flavio')
    .subscribe(photo => {photo[0].description; this.photos = photo})
  }
 
}
