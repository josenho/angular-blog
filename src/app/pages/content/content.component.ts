import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-content',
  templateUrl: './content.component.html',
  styleUrls: ['./content.component.css']
})
export class ContentComponent implements OnInit {
  photoCover:string = "https://img.mensxp.com/media/content/2020/Jul/Marvel-Studios-Showed-Attention-To-Detail-With-Iron-Mans-Helmet-HUD-1400x653_5f196c4299319.jpeg"
  contentTitle:string = "Ok Google"
  contentDescription:string = "Hello World"

  constructor() { }

  ngOnInit(): void {
  }

}
