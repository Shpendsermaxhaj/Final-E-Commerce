import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-productlist',
  templateUrl: './productlist.component.html',
  styleUrls: ['./productlist.component.css']
})
export class ProductlistComponent implements OnInit {
errorMessage: string;


// tslint:disable-next-line:variable-name
private _productService;

  public get listFilter(): string {
    return this._listFilter;
  }
  public set listFilter(value: string) {
    this._listFilter = value;
    this.filteredProducts = this.listFilter ? this.performFilter(this.listFilter) : this.products;
  }
  pageTitle = 'Product List';
  // // tslint:disable-next-line:variable-name
  // tslint:disable-next-line:no-inferrable-types
  // tslint:disable-next-line:variable-name
  private _listFilter = '';



// tslint:disable-next-line:member-ordering
filteredProducts: IProduct[];
  products: IProduct[] = [];

performFilter(filterBy: string): IProduct[] {
  filterBy = filterBy.toLocaleLowerCase ();
  return this.products.filter((product: IProduct) =>
  product.productName.toLocaleLowerCase().indexOf(filterBy) !== -1);
}


constructor(private productService: ProductService) {
}

ngOnInit(): void {
  this.productService.getProducts().subscribe({
    next: products => {
      this.products = products;
      this.filteredProducts = this.products;
    },
    error: err => this.errorMessage = err
  });
}
}
