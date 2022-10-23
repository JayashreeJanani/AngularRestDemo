import { Component, OnInit } from '@angular/core';
import { CommonService } from '../common.service';
import { FormControl, FormGroup } from '@angular/forms'

@Component({
  selector: 'app-add-resto',
  templateUrl: './add-resto.component.html',
  styleUrls: ['./add-resto.component.css']
})
export class AddRestoComponent implements OnInit {
  alert : boolean= false;
  addRestorant= new FormGroup({
    name:new FormControl(''),
    address:new FormControl(''),
    phoneNumber:new FormControl(''),
    emailId:new FormControl('')
  })

  constructor(private resta:CommonService) { }

  ngOnInit(): void {
  }
  addresto(){
    console.log(this.addRestorant.value);
    this.resta.addhotel(this.addRestorant.value).subscribe((result)=>{
      this.alert=true;
      this.addRestorant.reset({});
      console.log("Added",this.resta);
    });
  } 
  closeAlert(){
    this.alert=false;
  }
}
