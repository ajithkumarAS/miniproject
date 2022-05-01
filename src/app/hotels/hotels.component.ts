import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  searchTerm:string="";
  
  constructor(public routes:Router) { }
  clicked()
  {
    this.routes.navigateByUrl('app-addhotel')
  }
  cards:any=[
    {title:'Best Western',content:'Vijaya park, New main road, Ch-82'},
    {title:'Western park',content:'Vijaya park, New main road, Ch-82'},
    {title:'Hotel Park',content:'Vijaya park, New main road, Ch-82'},
    {title:'Hotel thalapakatti',content:'Vijaya park, New main road, Ch-82'},
    {title:'Arabian',content:'Vijaya park, New main road, Ch-82'},
    {title:'SS Hyderabad',content:'Vijaya park, New main road, Ch-82'}
    
  ]


  ngOnInit(): void {
      
  }


}
