import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import { CommonService } from '../common.service';

@Component({
  selector: 'app-register-resto',
  templateUrl: './register-resto.component.html',
  styleUrls: ['./register-resto.component.css']
})
export class RegisterRestoComponent implements OnInit {

  alert : boolean= false;
  creatRestorant= new FormGroup({
    name:new FormControl(''),
    password:new FormControl(''),
    
    emailId:new FormControl('')
  })

  constructor(private resta:CommonService) { }
  creatresto(){
    this.resta.creatHotelDate(this.creatRestorant.value).subscribe((result)=>{
      console.log(result,"added");

    })
  }
  ngOnInit(): void {
  }

}
