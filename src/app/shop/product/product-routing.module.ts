import { Routes, RouterModule } from '@angular/router';
import { ProductlistComponent } from './productlist/productlist.component';
import { ProductdetailComponent } from './productdetail/productdetail.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

const productRoots: Routes = [
  { path: 'products', component: ProductlistComponent },
  { path: 'products/:id', component: ProductdetailComponent }
];

@NgModule({
  imports: [ RouterModule.forChild(productRoots)
],
  exports: [RouterModule]
})
export class ProductRoutingModule {}
