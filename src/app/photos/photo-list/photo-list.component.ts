import { Component, OnInit, OnDestroy } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Subject } from 'rxjs';
import { debounceTime } from 'rxjs/operators';

import { Photo } from '../photo/Photo';
import { PhotoService } from '../photo/service.photo';

@Component({
  selector: 'ap-photo-list',
  templateUrl: './photo-list.component.html',
  styleUrls: ['./photo-list.component.css']
})

export class PhotoListComponent implements OnInit, OnDestroy{
  
  photos : Photo[] = [];
  filter : string = '';
  debounce : Subject<string> = new Subject<string>();
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
    this.debounce
        .pipe(debounceTime(300))
        .subscribe(filter => this.filter = filter);
  }

  ngOnDestroy(): void {
    this.debounce.unsubscribe();
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