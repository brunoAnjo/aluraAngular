import { Component } from '@angular/core';
import { PhotoService } from './photos/photo/service.photo';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  photos : any[] = [];

  constructor(photoService: PhotoService){
    photoService.listFormUser('flavio')
    .subscribe(photo => {photo[0].description; this.photos = photo})
  }
 
}
