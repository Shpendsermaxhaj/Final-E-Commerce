import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

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
