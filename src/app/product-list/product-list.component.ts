import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../services';
import { Product } from '../models';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {

  products: Product[] = [];

  constructor(private productService: ProductsService) { }

  ngOnInit() {
    this.productService.getProductList()
      .subscribe( productList => {
        this.products = productList;
    });
  }

}
