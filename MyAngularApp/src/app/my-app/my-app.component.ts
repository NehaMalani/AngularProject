import { Component, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';

@Component({
  selector: 'app-my-app',
  templateUrl: './my-app.component.html',
  styleUrls: ['./my-app.component.css']
})
export class MyAppComponent implements OnInit {
 data:any;
 file:any;
 jsonData:any=[];
  constructor(private demoService:DemoService) { }

  ngOnInit(): void {
    this.demoService.fetchJson().subscribe(
      (response)=>{this.jsonData = response},
      (error)=>{ console.log(error)}
      );
  }

  sendMail()
  {
     this.demoService.sendMail().subscribe(
       (response)=>
       {
         this.data=response
         //alert(this.data);
         alert(this.data);
       },      
       (error=>{
        console.log("Error sending mail");
        alert(error.error);
       })
     )
    }

uploadFile(e:any)
{
  this.file = e.target.files[0];
  this.demoService.uploadFile();
}


}

