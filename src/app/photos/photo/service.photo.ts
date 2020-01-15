import { HttpClient } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { Photo } from "./Photo";

const API =  "http://localhost:3000";

@Injectable({ providedIn: 'root' })
export class PhotoService{

    constructor(private http: HttpClient){}

    listFormUser(userName: string){
       
        return this.http
        .get<Photo[]>(API + `/${userName}/photos`);
    }
}