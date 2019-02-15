import { Injectable } from '@angular/core';
import { Http, Headers, RequestOptions, XHRBackend } from '@angular/http';
import { resource } from 'selenium-webdriver/http';
import 'rxjs/add/operator/map';
import { HttpClient } from '@angular/common/http';
import * as io from 'socket.io-client';
import { map } from 'rxjs-compat/operator/map';

@Injectable()
export class DataService {

  
    loginService:any;   /* Login  */
    adduserdata:any;    /* add user */
    getalluser:any; /* Get all User */
    findusers:any; /* find users */
    deleteuser:any /* delete user */
    offlineservice:any; /* set offilne */
    onlineservice:any; /* find online service */
    message:any;
    getUsermsg:any;
    getFrommsg:any;
    task:any;
    theme:any;
    sub_task:any;
    getSub_task:any;
    private socket; 
    baseURL='https://courierssystem.herokuapp.com'
    
    // baseURL='http://localhost:3000'

    constructor(public http:Http) {
     }
   /* Login Service */
   login(value){
    return this.http.post(this.baseURL+'/employee/login',value)
    .map(result=>this.loginService=result.json())
  }
   /** End Login */

   /* add user */
   adduserService(value){
     return this.http.post(this.baseURL+'/employee/addEmp',value)
     .map(result=>this.adduserdata=result.json())
   }
   /* end add user */

   
   /* Get All User */
   getUsers(){
  
     return this.http.get(this.baseURL+'/employee/findemp')
     .map(result=>this.getalluser=result.json())
   }
   /* End get all user */

   /* find User */
   finduserservice(value){
  
     return this.http.post(this.baseURL+'/employee/findEmpbyLocation',value)
     .map(result=>this.findusers=result.json())
   }
   /* end find user */
  

   /* delete user */
    deluser(value){
     
       return this.http.post(this.baseURL+'/employee/delemp',value)
       .map(result=>this.deleteuser=result.json())
    }
   /* end delete user */

    /* set offline user */
    findLocation(){
       return this.http.get(this.baseURL+'/location/findLocation')
       .map(result=>this.offlineservice=result.json())
    }
    /* set offline user */

   /* add location  */
   addLocation(value){
     return this.http.post(this.baseURL+'/location/addLocation',value)
     .map(result=>this.onlineservice=result.json())
   }
   /* end find online */

   /* send message */
   delocation(value){
    return this.http.post(this.baseURL+'/location/deleteLocation',value)
    .map(result=>this.message=result.json())
   }
   /* end send message */
  
}