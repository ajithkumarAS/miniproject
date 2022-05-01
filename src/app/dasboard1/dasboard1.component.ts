import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-dasboard1',
  templateUrl: './dasboard1.component.html',
  styleUrls: ['./dasboard1.component.css']
})
export class Dasboard1Component implements OnInit {

  

  
  constructor(public routes:Router) { }
  gotoHome():void
  {
    this.routes.navigateByUrl('app-home')
  }
  gotoHotel():void
  {
    this.routes.navigateByUrl('app-hotels')
  }
  
  ngOnInit(): void {
  }

}
