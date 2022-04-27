import { Component, OnInit } from '@angular/core';
import { ServiceService } from '../services/service.service';


@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.css']
})
export class UserComponent implements OnInit {

  userData=this._service.userList;

  constructor( public _service:ServiceService) { }

  ngOnInit(): void {
    
    
    
  }

}
