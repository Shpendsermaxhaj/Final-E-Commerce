import { Injectable } from '@angular/core';
import { Observable, throwError } from 'rxjs';
import { IProduct } from './product';
import { HttpErrorResponse, HttpClient } from '@angular/common/http';
import { catchError, tap, map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  // private productUrl = 'api/products/products.json';

  // constructor(private http: HttpClient) {}

  // getProducts(): Observable<IProduct[]> {
  //   return this.http.get<IProduct[]>(this.productUrl).pipe(
  //     tap(data => console.log('All JSON ' + JSON.stringify(data))),
  //     catchError(this.handleError)
  //   );
  // }

  // private handleError(err: HttpErrorResponse) {
  //   let errorMessage = '';

  //   if (err.error instanceof ErrorEvent) {
  //     errorMessage = `An error occured:  ${err.error.message}`;
  //   }
  //   console.error(errorMessage);
  //   return throwError(errorMessage);
  // }

     getProducts(): IProduct[] {
     return [
   {
         productId: 1,
         productName: 'Neopolitan PizzaMr',
         productCode: 'GDN-0011',
         releaseDate: 'March 19, 2019',
         description: 'Neopolitan PizzaMr ingredients.',
         price: 9.95,
         starRating: 3.2,
         imageUrl: 'assets/images/Neo.png'
       },
       {
         productId: 2,
       productName: 'Chicago Pizza',
         productCode: 'GDN-0023',
         releaseDate: 'March 18, 2019',
       description: 'Ingredients for Chicago Pizza',
         price: 5.99,
         starRating: 4.2,
       imageUrl: 'assets/images/Chic.png'
       },
       {
         productId: 5,
         productName: 'New York-Style Pizza',
         productCode: 'TBX-0048',
       releaseDate: 'May 21, 2019',
         description: 'New York-Style Pizza ingredients',
        price: 3.9,
         starRating: 4.8,
         imageUrl: 'assets/images/Neo.png'
     },
       {
         productId: 8,
         productName: 'Sicilian Pizza',
         productCode: 'TBX-0022',
        releaseDate: 'May 15, 2019',
      description: 'Sicilian Pizza ingredients',
        price: 6.55,
         starRating: 3.7,
         imageUrl: 'assets/images/Sicilian.png'
      },
       {
  productId: 10,
        productName: 'Greek Pizza',
     productCode: 'GMG-0042',
  releaseDate: 'October 15, 2018',
         description: 'Ingredients for Greek Pizza',
        price: 5.95,
        starRating: 4.6,
        imageUrl: 'assets/images/Greek.png'
     }
     ];
   }
}
