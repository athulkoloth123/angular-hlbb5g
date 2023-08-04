import { Component, OnInit } from '@angular/core';
@Component({
  selector: 'app-exercise1',
  templateUrl: './exercise1.component.html',
  styleUrls: ['./exercise1.component.css']
})

export class Exercise1Component {
  pattern= '^(?=.*?[A-Za-z])(?=.*?[0-9])(?=.*?[!@#$%^&*()]).*$';
  email: String="";
  submit(){
    console.log("Form Submitted")
  }
}  
