import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductlistComponent } from './productlist.component';
import { ProductdetailComponent } from '../productdetail/productdetail.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [ProductlistComponent, ProductdetailComponent],
  imports: [
    CommonModule,
    FormsModule,
  ]
})
export class ProductModule { }
