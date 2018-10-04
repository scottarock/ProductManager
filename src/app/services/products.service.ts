import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

import { Product } from '../models';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private readonly base: string = 'http://5baee08da65be000146764b4.mockapi.io/product';

  constructor(private http: HttpClient) { }

  addProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.base, product)
  }

  getProductList(): Observable<Product[]> {
    return this.http.get<Product[]>(this.base);
  }

  getProduct(id: string): Observable<Product> {
    return this.http.get<Product>(`${this.base}/${id}`);
  }

  updateProduct(product: Product): Observable<Product> {
    return this.http.put<Product>(`${this.base}/${product.id}`, product);
  }

  removeProduct(id: number): Observable<Product> {
    return this.http.delete<Product>(`${this.base}/${id}`);
  }
}
