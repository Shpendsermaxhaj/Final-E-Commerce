import { Component, OnInit } from '@angular/core';
import {Pizza} from './pizza';
import {PIZZAS} from './mock-pizzas';



@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

pizzas = PIZZAS;
selectedPizza: Pizza;



  constructor() { }

  ngOnInit() {
  }


  onSelect(pizza: Pizza): void {
    this.selectedPizza = pizza;
  }
}
