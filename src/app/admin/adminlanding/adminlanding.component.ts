import { Component, OnInit } from '@angular/core';
import { ShareService } from '../../service/share.service';
import { DataService } from '../../service/data.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-adminlanding',
  templateUrl: './adminlanding.component.html',
  styleUrls: ['./adminlanding.component.css']
})
export class AdminlandingComponent implements OnInit {
  user_details:any=[];
  offlineSet:any;
  getUser:any;
  session={
    name:'',
    email:'',
    role:''
  };

  constructor(private shareservice:ShareService,private router : Router,private dataservice:DataService) { }

  ngOnInit() {
    
    var name = JSON.parse(localStorage.getItem("userdetails"));
    this.session.name = name.user.name;
    this.session.role = name.user.role;
    this.session.email = name.user.email;
    console.log(this.session.name) ;
   
  
   
  }
   logout(){
    
    localStorage.removeItem('currentUser');
    localStorage.removeItem('userdetails');
    this.router.navigate(['/login'])
    }
  
}
