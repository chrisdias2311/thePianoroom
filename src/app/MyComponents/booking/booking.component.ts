import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';

@Component({
  selector: 'app-booking',
  templateUrl: './booking.component.html',
  styleUrls: ['./booking.component.css']
})
export class BookingComponent implements OnInit {
  userForm = new FormGroup({
    firstname: new FormControl('',[Validators.required]),
    lastname: new FormControl('',[Validators.required]),
    email: new FormControl('',[Validators.required,Validators.email]),
    subject: new FormControl('',[Validators.required]),
    message: new FormControl('', Validators.required)
  })

  constructor() { }

  ngOnInit(): void {
  }

  userArray:any={};
  submit=false;

  falsesubmit=true;

  userMessage(item:any){
    console.warn(item)
    this.userArray=item
    console.warn(this.userForm)
    this.submit=true;
  }

  get userfincomplete(){
    return this.userForm.get('firstname')
  }
  get userlincomplete(){
    return this.userForm.get('lastname')
  }
  get usereincomplete(){
    return this.userForm.get('email')
  }
  get usersincomplete(){
    return this.userForm.get('email')
  }
  get userquery(){
    return this.userForm.get('message')
  }

  closeAlert(){
    console.warn("Hello")
    this.submit=false;
  }

  whatsIcon:String = "assets/Images/whats.png";

}
