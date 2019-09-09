import { Component, OnInit } from '@angular/core';
import { IProduct } from '../productlist/product.model';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../productlist/product.service';

@Component({
  selector: 'app-productdetail',
  templateUrl: './productdetail.component.html',
  styleUrls: ['./productdetail.component.css']
})
export class ProductdetailComponent implements OnInit {


  ngOnInit(): void {
    throw new Error('Method not implemented.');
  }


}
