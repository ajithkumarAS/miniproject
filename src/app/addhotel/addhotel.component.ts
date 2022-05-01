import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-addhotel',
  templateUrl: './addhotel.component.html',
  styleUrls: ['./addhotel.component.css']
})
export class AddhotelComponent implements OnInit {

form=new FormGroup({

})
   name=new FormControl('',[Validators.required,Validators.minLength(5),Validators.maxLength(20)]);
   city=new FormControl('',Validators.required)
Gotohotel()
{
  this.routes.navigateByUrl('app-hotels')
}
click()
{
  this.routes.navigateByUrl('app-hotels')
}
 
  constructor( public routes:Router) { 

  }

  ngOnInit(): void {
  }

}
