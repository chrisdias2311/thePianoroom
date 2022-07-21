import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  offline:string= "assets/Images/Student.jpg"
  online:string= "assets/Images/Online.jpg"
  studio:string= "assets/Images/Studio1.jpg"
  exam:string= "assets/Images/About3.jpg"

  images = ['./assets/Home/img0.jpg','../../assets/Home/img1.jpg','../../assets/Home/img2.jpg','../assets/Home/img3.jpg','../assets/Home/img4.jpg']
}
