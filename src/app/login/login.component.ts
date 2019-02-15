import { Component, OnInit,ViewChild} from '@angular/core';
import { Router } from '@angular/router';
import {DataService} from '../service/data.service';
import {ShareService} from '../service/share.service';
import { SPINNER_ANIMATIONS, SPINNER_PLACEMENT, ISpinnerConfig } from '@hardpool/ngx-spinner';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  resMessage:any;
  resUser:any;
  showSpinner: boolean;
  spinnerConfig: ISpinnerConfig;
  constructor(private router : Router,private dataservice:DataService,private shareService:ShareService) { }

  ngOnInit() {
        /* spinner */
        this.spinnerConfig = {
          placement: SPINNER_PLACEMENT.block_window,
          animation: SPINNER_ANIMATIONS.spin_3,
          size: "5rem",
          color: "#1574b3"
      };
        /* end spinner */
       
    if(localStorage.getItem('currentUser')){
      var name = JSON.parse(localStorage.getItem("userdetails"));
      if(name.user.role==="employee"){
        this.router.navigate(['/admin']);
      }

    }
  }
  Emplogin(value){
    this.showSpinner = true;
    console.log(value)
     let data = {
        email:value.email,
        password:value.password
      }   // http call start
     //  if(localStorage.getItem('currentUser',JSON.stringify({token:res.token}))){
 
     //  }
     
      this.dataservice.login(data).subscribe(res=>{
       this.resUser=res;
       if(res.message==="Authentication failed. User not found."){
        // this.resMessage = "User Not Found !";
         alert('User Not Found !');
         this.showSpinner = false;
      }else if(res.message==="Authentication failed. Wrong password."){
        // this.resMessage = "Wrong Password !";
         alert('Password Is Inncorect !');
         this.showSpinner = false
      }else{
        if(res.user.role == 'employee'){
          this.router.navigate(['/admin']);
          localStorage.setItem('currentUser',JSON.stringify({token:res.token}));
          localStorage.setItem('userdetails',JSON.stringify({user:res.user}));
          this.shareService.setCurrentProfile(res.user);
          this.showSpinner = false;
         }
      }
    
   })
  
 
 }

}
