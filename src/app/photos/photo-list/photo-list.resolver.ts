import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { Observable } from "rxjs";

import { Photo } from "../photo/Photo";
import { PhotoService } from "../photo/service.photo";

@Injectable({ providedIn : 'root'} )

export class PhotoListResolver implements Resolve<Observable<Photo[]>>{
    
    
    constructor(private service: PhotoService){}
    
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<Photo[]> | Observable<Observable<Photo[]>> | Promise<Observable<Photo[]>> {
        const userName = route.params.userName;

        return this.service.listFormUser(userName);
    }
}