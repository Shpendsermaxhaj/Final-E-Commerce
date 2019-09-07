import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, RouterModule } from '@angular/router';
import { ProductlistComponent } from './productlist/productlist.component';

@NgModule({
  declarations: [ProductlistComponent],
  imports: [
    CommonModule,
  RouterModule.forRoot([
    { path: 'products', component: ProductlistComponent },

  ])
  ]
})
export class ProductModule { }
