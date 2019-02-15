import { Component, OnInit,ViewChild} from '@angular/core';
import { DataService } from '../../service/data.service';
import { SPINNER_ANIMATIONS, SPINNER_PLACEMENT, ISpinnerConfig } from '@hardpool/ngx-spinner';
import { AstMemoryEfficientTransformer } from '@angular/compiler';

@Component({
  selector: 'app-addlocation',
  templateUrl: './addlocation.component.html',
  styleUrls: ['./addlocation.component.css']
})
export class AddlocationComponent implements OnInit {
  location:any;
  category:any;
  formData:any;
  showSpinner: boolean;
  spinnerConfig: ISpinnerConfig;
  constructor(private dataservcie:DataService) { }

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
    this.dataservcie.findLocation().subscribe(res=>{
      this.location=res;
      this.showSpinner=false
    })
  }
  addUser(value){
    this.showSpinner =true;
    console.log(value)
    this.dataservcie.addLocation(value).subscribe(res=>
      {
        this.location=res;
        this.showSpinner =false;
      })
  }
  del(value){
    this.showSpinner =true;
   let data = {
     _id:value._id
   }
   this.dataservcie.delocation(data).subscribe(res=>{
     this.location=res;
     this.showSpinner =false;
   })
  }

}
