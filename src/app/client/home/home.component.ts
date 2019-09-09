import { Component, OnInit } from '@angular/core';
import {formatDate } from '@angular/common';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent   {
  // tslint:disable-next-line:new-parens
  today = new Date;
  jstoday = '';
  constructor() {
    this.jstoday = formatDate(this.today, 'dd-MM-yyyy hh:mm:ss a', 'en-US' );
  }
}
