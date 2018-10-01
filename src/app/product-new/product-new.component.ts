import { Component, OnInit } from '@angular/core';

import { ProductsService } from '../services';
import { Product } from '../models';

@Component({
  selector: 'app-product-new',
  templateUrl: './product-new.component.html',
  styleUrls: ['./product-new.component.css']
})
export class ProductNewComponent implements OnInit {

  product: Product = new Product;

  constructor(private productService: ProductsService) { }

  ngOnInit() {
  }

  onSubmit() {
    this.productService.addProduct(this.product)
      .subscribe( _result => {});
    this.product = new Product;
  }

}
