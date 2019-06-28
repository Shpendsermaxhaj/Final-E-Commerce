import { Component, OnInit } from '@angular/core';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'footero',
  templateUrl: './footero.component.html',
  styleUrls: ['./footero.component.css']
})
export class FooteroComponent implements OnInit {

 icons = { 
    phone: './assets/phoneIcon2.png',
    mail: './assets/mailIcon2.png', 
    fb: './assets/fb.png', 
    twitter: './assets/twitter.png', 
    instagram: './assets/instagram.png', 
    linkedin: './assets/linkedin.png'
  }


  constructor() { }

  ngOnInit() {
  }

}
