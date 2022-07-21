import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-services',
  templateUrl: './services.component.html',
  styleUrls: ['./services.component.css']
})
export class ServicesComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  offline:string= "assets/Images/Student.jpg"
  online:string= "assets/Images/Online.jpg"
  studio:string= "assets/Images/Studio1.jpg"
  exam:string= "assets/Images/About3.jpg"
}