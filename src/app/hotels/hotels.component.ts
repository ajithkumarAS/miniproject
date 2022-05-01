import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  searchTerm:string="";

  filteredArray:any=[];

  constructor(public routes:Router) { }
  clicked()
  {
    this.routes.navigateByUrl('app-addhotel')
  }
  cards:any=[
    {title:'ajith',content:'Vijaya park, New main road, Ch-82'},
    {title:'iniyan',content:'Vijaya park, New main road, Ch-82'},
    {title:'ajith',content:'Vijaya park, New main road, Ch-82'},
    {title:'iniyan',content:'Vijaya park, New main road, Ch-82'},
    {title:'ajith',content:'Vijaya park, New main road, Ch-82'},
    {title:'iniyan',content:'Vijaya park, New main road, Ch-82'}
    
  ]


  ngOnInit(): void {
      
  }


}
