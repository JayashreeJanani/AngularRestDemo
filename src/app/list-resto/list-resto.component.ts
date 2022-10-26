import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { ActivatedRoute } from '@angular/router';
@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {
public resho:any=[];
  constructor(private hotels:CommonService, private routerResta:ActivatedRoute) { }

  ngOnInit(): void {
    this.hotels.getrestodetails().subscribe(resto=>this.resho=resto);
 
  }

  deleteHotel(resto:any){
    this.resho.splice(resto,1);
    this.hotels.delHotel(resto).subscribe((result:any)=>{
      console.log(result,"Deleted");
      this.ngOnInit();
    
    });
  }
}
