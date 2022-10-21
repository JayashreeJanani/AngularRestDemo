import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CommonService {
 url='http://localhost:3000/restodetails';
  constructor( private http:HttpClient) { }
  getrestodetails(){
    return this.http.get(this.url);
  }
}
