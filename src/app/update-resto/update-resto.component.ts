import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms'
import { CommonService } from '../common.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-update-resto',
  templateUrl: './update-resto.component.html',
  styleUrls: ['./update-resto.component.css']
})
export class UpdateRestoComponent implements OnInit {
  public alertedit: boolean= false;
  editRestorant=new FormGroup({
    name:new FormControl(''),
    address:new FormControl(''),
    phoneNumber:new FormControl(''),
    emailId:new FormControl('')
  })

  constructor(private resta:CommonService,private routerResta:ActivatedRoute) { }
 editresto(){
  this.resta.updateHotelData(this.routerResta.snapshot.params['id'],this.editRestorant.value).subscribe((result=>{
    console.log(result,"Suceessful update");
    this.alertedit=true;
    this.editRestorant.reset({});
  }))
 }
  
  closeAlertEdit(){
    this.alertedit=false;
  }
  ngOnInit(): void {
    //console.log(this.routerResta.snapshot.params['id'])
    this.resta.getHotelData(this.routerResta.snapshot.params['id']).subscribe((result:any)=>{
      console.log(result);
      this.editRestorant=new FormGroup({
        name:new FormControl(result['name']),
        address:new FormControl(result['address']),
        phoneNumber:new FormControl(result['phoneNumber']),
        emailId:new FormControl(result['emailId'])
      })
    })
  }

}


