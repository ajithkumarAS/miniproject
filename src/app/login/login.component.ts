import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor() { }
  GetFormData(data:any)
  {
    console.log(data)
    
  }
  submit()
{
  alert("form submitted successfully")
}
  ngOnInit(): void {
  }
  

}
