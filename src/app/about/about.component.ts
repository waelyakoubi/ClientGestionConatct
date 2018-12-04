import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {
  infos={sex:"homme",adresse:"12 rue dr Dargelos"}
  constructor() { }

  ngOnInit() {
  }

}
