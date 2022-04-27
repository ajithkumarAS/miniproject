import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { FormGroup,Validators } from '@angular/forms';
import { ServiceService } from '../services/service.service';
import { UserDetails } from '../model/user-details';

@Component({
  selector: 'app-userlist',
  templateUrl: './userlist.component.html',
  styleUrls: ['./userlist.component.css']
})
export class UserlistComponent implements OnInit {
 
  submit=new FormGroup({
    name:new FormControl("",Validators.required),
    surname:new FormControl("",Validators.minLength(4)),
    phone:new FormControl("",Validators.required),
    address:new FormControl("",Validators.required),
    email:new FormControl("",Validators.email),
    education:new FormControl("",Validators.required),
    country:new FormControl("",Validators.required),
    state:new FormControl("",Validators.required)
  })
  
  getData()
  {
   this._ser.addUser( this.submit.value)
     
  }
 get vname()
 {
   return this.submit.get("name")
 }
 get vsur()
 {
   return this.submit.get("surname")
 }
 get vpho()
 {
   return this.submit.get("phone")
 }
 get vadd()
 {
   return this.submit.get("address")
 }
 get vem()
 {
   return this.submit.get("email")
 }
 get vedu()
 {
   return this.submit.get("education")
 }
 get vcou()
 {
   return this.submit.get("country")
 }
 get vsta()
 {
   return this.submit.get("state")
 }
    

  constructor( public _ser :ServiceService) {
 
 //  _service.addUser( new UserDetails)
// console.log( _service.getUser(new UserDetails))
   }

  ngOnInit(): void {
    
    
  }

}
