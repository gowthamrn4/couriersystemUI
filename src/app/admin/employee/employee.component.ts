import { Component, OnInit } from '@angular/core';
import { DataService } from '../../service/data.service';
import { SPINNER_ANIMATIONS, SPINNER_PLACEMENT, ISpinnerConfig } from '@hardpool/ngx-spinner';
@Component({
  selector: 'app-employee',
  templateUrl: './employee.component.html',
  styleUrls: ['./employee.component.css']
})
export class EmployeeComponent implements OnInit {
  employee:any;
  showSpinner: boolean;
  spinnerConfig: ISpinnerConfig;
  location:any;
  constructor(private dataservice:DataService) { }

  ngOnInit() {
    /* spinner */
    this.spinnerConfig = {
      placement: SPINNER_PLACEMENT.block_window,
      animation: SPINNER_ANIMATIONS.spin_3,
      size: "5rem",
      color: "#1574b3"
  };
    /* end spinner */
    this.showSpinner =true;
    this.dataservice.getUsers().subscribe(res=>{
      this.employee=res;
      this.showSpinner =false;
    })
    this.dataservice.findLocation().subscribe(res=>{
      this.location=res;
  })
  }
  addUser(value){
    this.showSpinner = true;
    let data = {
      name:value.name,
      email:value.email,
      phone:value.phone,
      role:'employee',
      officeLocation:value.officeLocation,
      dateOfBirth:value.dateOfBirth,
      password:value.password,
      address:value.address
    }
    this.dataservice.adduserService(data).subscribe(res=>{
     this.employee=res;
     this.showSpinner =false
    })
  }
  findUser(value){
    this.showSpinner = true;
    let data  = {
      officeLocation:value
    }
  this.dataservice.finduserservice(data).subscribe(res=>{
  this.employee=res;
  this.showSpinner = false
})
  }
 del(value){
   this.showSpinner = true;
  let data = {
    _id:value._id,
    officeLocation:value.officeLocation
  }
  console.log(data)
  this.dataservice.deluser(data).subscribe(res=>{
    this.employee=res;
    this.showSpinner =false;
  })
 }
 
}
