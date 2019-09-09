import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { FormsModule } from '@angular/forms';
import { ProductRoutingModule } from './product-routing.module';
import { RouterModule } from '@angular/router';



@NgModule({
  declarations: [ProductlistComponent, ProductdetailComponent],
  imports: [
    CommonModule,
    FormsModule,
ProductRoutingModule
  ]
})
export class ProductModule { }
