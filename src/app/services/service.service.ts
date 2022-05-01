import { Injectable, OnInit } from '@angular/core';
import { UserDetails } from '../model/user-details';

@Injectable({
  providedIn: 'root'
})
export class ServiceService{

 /*userList !:any
/addUser(user1:any) :void
{
  this.userList.push(this.userdetails=new UserDetails("ini","in",987676,"ini@","triplic","summa","suma","s") )
  
}
*/









  constructor(public userdetails:UserDetails) { }
  
  
}
