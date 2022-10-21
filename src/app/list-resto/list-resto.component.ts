import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
@Component({
  selector: 'app-list-resto',
  templateUrl: './list-resto.component.html',
  styleUrls: ['./list-resto.component.css']
})
export class ListRestoComponent implements OnInit {
public resho:any;
  constructor(private hotels:CommonService) { }

  ngOnInit(): void {
    this.hotels.getrestodetails().subscribe(resto=>this.resho=resto);
 
  }

}
