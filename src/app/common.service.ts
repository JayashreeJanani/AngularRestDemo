import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';


@Injectable({
  providedIn: 'root'
})
export class CommonService {
 url='http://localhost:3000/restodetails';
 regUrl='http://localhost:3000/users'
  constructor( private http:HttpClient) { }
  getrestodetails(){
    return this.http.get(this.url);
  }
  addhotel(data: any){
    return this.http.post(this.url,data)
  }
  delHotel(id:any){
    return this.http.delete(`${this.url}/${id}`)
  }
  getHotelData(id:any){
    return this.http.get(`${this.url}/${id}`)
  }
  updateHotelData(id:any, data:any){
    return this.http.put(`${this.url}/${id}`,data)
  }
  creatHotelDate(data:any){
    return this.http.post(this.regUrl,data)
  }
}
