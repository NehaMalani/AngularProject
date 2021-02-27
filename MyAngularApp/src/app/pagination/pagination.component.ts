import { Component, Input, OnInit } from '@angular/core';
import { DemoService } from '../services/demo.service';
import { NgxPaginationModule } from 'ngx-pagination';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.css']
})
export class PaginationComponent implements OnInit {
  @Input('data') data:any=[];
  p: number = 1;
   resData:any;
  constructor(private demoService:DemoService) { }
  ngOnInit(): void {
  
  }
  ngOnChange()
  {
    console.log(this.data);
  }

}
