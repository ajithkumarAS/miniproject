import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-hotels',
  templateUrl: './hotels.component.html',
  styleUrls: ['./hotels.component.css']
})
export class HotelsComponent implements OnInit {

  constructor(public routes:Router) { }
  clicked()
  {
    this.routes.navigateByUrl('app-addhotel')
  }
  cards=[
    {title:'ajith',content:'kumar'}
  ]

  ngOnInit(): void {
      
  }


}
