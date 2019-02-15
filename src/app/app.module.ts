import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';
import {HttpModule} from '@angular/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { DataService } from './service/data.service';
import { ShareService } from './service/share.service';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { AdminlandingComponent } from './admin/adminlanding/adminlanding.component';
import { HomeComponent } from './admin/home/home.component';
import { EmployeeComponent } from './admin/employee/employee.component';
import { AddlocationComponent } from './admin/addlocation/addlocation.component';
import { CourierComponent } from './admin/courier/courier.component';


import { NgxSpinnerModule } from '@hardpool/ngx-spinner';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AdminlandingComponent,
    HomeComponent,
    EmployeeComponent,
    AddlocationComponent,
    CourierComponent
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    HttpModule,
    NgxSpinnerModule,
    FormsModule, ReactiveFormsModule,
    BrowserModule,
    RouterModule.forRoot([
      { path:'login',component:LoginComponent },
      { path:'',pathMatch:'full',redirectTo:'login'},
      { path:'admin',component:AdminlandingComponent,
      children:[
      { path:'home',component:HomeComponent },
      { path:'',pathMatch:'full',redirectTo:'home'},
      { path:'employee',component:EmployeeComponent },
      { path:'location',component:AddlocationComponent },
      { path:'courier',component:CourierComponent }
      ]},
     
    ])
  ],
  providers: [DataService,ShareService],
  bootstrap: [AppComponent]
})
export class AppModule { }
